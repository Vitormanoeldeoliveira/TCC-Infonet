import { Inject, Injectable } from '@nestjs/common';
import { EmailValidateEntity } from './Entities/email-validate.entity';
import { Repository } from 'typeorm';
import { UserValidateEmailInput } from './dtos/email-validate.input';

import * as nodemailer from 'nodemailer'
import { v4 as uuidv4 } from 'uuid';
import { EmailValidateCreateInput } from './dtos/email-validate.create.input';

import { addSeconds } from 'date-fns';
import * as schedule from 'node-schedule';
import { EmailValidateUpdateInput } from './dtos/email-validate.update';

@Injectable()
export class EmailvalidateService {
  constructor(
    @Inject('EMAILVALIDATE_REPOSITORY')
    private emailValidate: Repository<EmailValidateEntity>
  ) {}

  async getAll() : Promise<EmailValidateEntity[]> {
    const emailValidate = await this.emailValidate.find()
    return emailValidate;
  }

  async getOneByCode(
    filters: EmailValidateCreateInput
  ) {
    const { codigo, valido }: any = filters

    try {
      const getByCode = await this.emailValidate.findOne({
        where: { 
          codigo,
          valido
        }
      })
  
      return getByCode
    } catch {
      return console.log("deu errado");
    }
  }

  async create(
    data: UserValidateEmailInput
  ) {
    const { email } = data

    const uuidPart = parseInt(uuidv4().split('-')[0], 16);
    const min = 1000;
    const max = 9999;
    const RandomNumber = min + (uuidPart % (max - min + 1))

    const smtpTransport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, //SSL/TLS 
      auth: {
        user: 'vitormanoeldeoliveira32@gmail.com',
        pass: 'wmedmwcfblnzspxe'
      }
    })
  
    const mail = {
      from: "Criador",
      to: email,
      subject: `eu te enviou uma mensagem`,
      text: `Seu código de verificação é ${RandomNumber}`,
      //html: "<b>Opcionalmente, pode enviar como HTML</b>"
    }

    smtpTransport.sendMail(mail)
      .then(response => {
          smtpTransport.close();
          return console.log("Sucesso")
      })
      .catch(error => {
          smtpTransport.close();
          console.log(error, " oi")
          return null
      });
    
    const datas = {
      codigo: `${RandomNumber}`,
      valido: true
    }

    const newRecord = await this.emailValidate.save(datas);
    
    const deletionDate = new Date();
    deletionDate.setHours(deletionDate.getHours() + 1);

    const job = schedule.scheduleJob(deletionDate, async () => {
      await this.delete(newRecord.id);
    });

    return newRecord;
  };

  async update(
    id: number,
    data: EmailValidateUpdateInput
  ) {
    const emailValidate: any = {
      ...data
    }
    return await this.emailValidate
    .createQueryBuilder()
    .update(emailValidate)
    .where('id = :id', { id })
    .returning('*')
    .updateEntity(true)
    .execute()
    .then((res) => res.raw[0])
  }

  async delete(id: number) {
    await this.emailValidate.delete(id)
  }
}

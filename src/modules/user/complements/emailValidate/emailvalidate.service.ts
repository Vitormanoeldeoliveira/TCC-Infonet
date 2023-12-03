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
  ) { }

  async getAll(): Promise<EmailValidateEntity[]> {
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
        user: 'estufadev@gmail.com',
        pass: 'pxzf msyj cpqd wtne'
      }
    })

    const mail = {
      from: "Criador",
      to: email,
      subject: `Estufa - verificação de email`,
      text: `Seu código de verificação é ${RandomNumber}`,
      html: `
        <div style="display: flex; margin: 0; background-color: #75a79c;">
          <img style="height: 5em; margin-left: auto; margin-right: -1em; padding: 0.5em;" src="https://i.postimg.cc/jqkJXJrP/casinha.png" >
          <img style="height: 5em; margin-left: auto; margin-right: 0.5em; padding: 0;" src="https://i.postimg.cc/MT9fgnfk/vasos.png" >
        </div>
        <div style="    position: relative;">
          <div style="margin-left: 3em; margin-top: 2em; font-size: 40px;">
            <strong>Bem-vindo ao<span style="color: #45776c;">&nbsp;estufa</span>,</strong>
          </div>
          <div style="position: absolute; top: 2em; left: 3em;">&nbsp;</div>
        </div>
        <div>
          <div style="margin-left: 5em; margin-top: 1em; font-size: 25px;">
            Seu código de verificação é:
          </div>
        </div>
        <dix style="width: 100%; align-items: center;">
          <div style="
            background-color: #75a79c; 
            text-align: center; width: 65%; 
            margin-left: auto; 
            margin-right: auto;
            padding: 1em; margin-top: 0.5em;
            font-size: 35px; border-radius: 18px;
          ">
            <strong>${RandomNumber}</strong>
          </div>
        </dix>
        <div>
          <div style="margin-left: 5em; margin-top: 1em; font-size: 25px;">
            Insira o código para logar no sistema.
          </div>
          <div style="margin-left: 5em; margin-top: 1em; font-size: 25px;">
            Caso não tenha requisitado esse código, <br> apenas ignore.
          </div>
        </div>
        <div style="margin-top: 3em; font-size: 20px; margin-left: 6.5em;">
          Todos direitos reservados ao estufa <br>
          <span style="color: gray;">ⓒ 2023 estufa</span>
        </div>
      `,
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

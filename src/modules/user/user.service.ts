import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from './Entities/user.entity';
import { ILike, Repository } from 'typeorm';
import { UserCreateInput } from './dtos/user-create.input';
import { UserUpdateInput } from './dtos/user-update.input';
import { UserFilterInput } from './dtos/user-filter.input';

import * as nodemailer from 'nodemailer'

import * as bcrypt from 'bcrypt';

import { v4 as uuidv4 } from 'uuid';
import { UserValidateEmailInput } from './complements/emailValidate/dtos/email-validate.input';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private users: Repository<UserEntity>,
  ) {}

  async getAll() : Promise<UserEntity[]> {
    const users = await this.users.find();
    return users
  }

  async getOne(id: number) {
    const user = await this.users.findOne({ where: {id,} });
    
    return user;
  }

  async create(data: UserCreateInput) : Promise<UserEntity> {
    const user: any = {
      ...data,
    }

    const email = user.email

    const validateUser = await this.users.findOne({
      where: {
        email
      }
    })

    if(validateUser) {
      return null
    }

    const senha = user.senha;
    
    const hashPassword = await bcrypt.hashSync(senha, 10)

    const filteredValue = {
      nome: user.nome,
      email: user.email,
      senha: hashPassword,
      avatar: user.avatar,
    }

    return await this.users.save(filteredValue);
  }

  async update(
    id: number,
    data: UserUpdateInput
  ) : Promise<UserEntity> {
    
    const user: any = {
      ...data
    }

    if (user.email) {
      const email = user.email
      const validateUser = await this.users.findOne({
        where: {
          email
        }
      })
  
      if(validateUser) {
        return null
      }
    }

    if(data.senha) {
      const senha = user.senha;
      
      const hashPassword = await bcrypt.hashSync(senha, 10)
  
      const filteredValue = {
        nome: user.nome,
        email: user.email,
        senha: hashPassword,
        avatar: user.avatar,
        excluido: false
      };

      data = filteredValue
    }
    
    return await this.users
    .createQueryBuilder()
    .update(data.senha ? data : user)
    .where('id = :id', { id })
    .returning('*')
    .updateEntity(true)
    .execute()
    .then((res) => res.raw[0])
  }

  async delete (
    id: number,
  ) {
    const data: any = {
      excluido: true
    }

    return await this.users
    .createQueryBuilder()
    .update(data)
    .where('id = :id', { id })
    .returning('*')
    .updateEntity(true)
    .execute()
    .then((res) => res.raw[0])
  }

  async login(
    filters: UserFilterInput
  ) : Promise<UserEntity> {

    const users = await this.users.findOne({
      where: {
        ...(filters.email && { email: filters.email }),
        excluido: false
      }
    });
    
    if(users && bcrypt.compareSync(filters.senha, users.senha)) {
      return users
    } 
    
    return null;
  }
}

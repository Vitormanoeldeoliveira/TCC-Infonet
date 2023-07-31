import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IEmailValidate } from "../Interface/email-validate.interface";

@Entity('codigo_usuario')
export class EmailValidateEntity implements IEmailValidate {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  codigo: string;
  @Column({ nullable: true })
  valido: boolean;
}
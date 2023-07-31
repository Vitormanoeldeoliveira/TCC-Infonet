import { Field, ObjectType } from '@nestjs/graphql';
import { IEmailValidate } from '../Interface/email-validate.interface';

@ObjectType({ implements: IEmailValidate })
export class Emailvalidate extends IEmailValidate {}
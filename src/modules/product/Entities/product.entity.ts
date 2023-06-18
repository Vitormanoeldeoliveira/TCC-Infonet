import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IProduct } from "../Interface/product.interface";

@Entity('produto')
export class ProductEntity implements IProduct {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  espaco: number;
  @Column()
  qtd_agua: number;
  @Column()
  adubo: boolean;
  @Column({ nullable:true })
  qtd_adubo: number;
  @Column()
  calcario: boolean;
  @Column({ nullable:true })
  qtd_calcario: number;
  @Column()
  insumos: boolean;
  @Column({ nullable:true })
  qtd_insumos: number;
  @Column()
  qtd_sementes: number;
}
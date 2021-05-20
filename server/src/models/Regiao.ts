import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Unidade } from "./Unidade";

@Index("idRegiao_UNIQUE", ["idRegiao"], { unique: true })
@Entity("regiao", { schema: "nutribemrefeic02" })
export class Regiao {
  @PrimaryGeneratedColumn({ type: "int", name: "idRegiao", unsigned: true })
  idRegiao: number;

  @Column("varchar", { name: "Nome", length: 70 })
  nome: string;

  @Column("int", { name: "Codigo" })
  codigo: number;

  @OneToMany(() => Unidade, (unidade) => unidade.regiaoIdRegiao2)
  unidades: Unidade[];
}

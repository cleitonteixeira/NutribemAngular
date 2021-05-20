import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contratante } from "./Contratante";
import { Empresa } from "./Empresa";
import { Unidadefaturamento } from "./Unidadefaturamento";

@Index("idcadastros_UNIQUE", ["idCadastro"], { unique: true })
@Index("CNPJ_UNIQUE", ["cnpj"], { unique: true })
@Entity("cadastro", { schema: "nutribemrefeic02" })
export class Cadastro {
  @PrimaryGeneratedColumn({ type: "int", name: "idCadastro", unsigned: true })
  idCadastro: number;

  @Column("varchar", { name: "Nome", length: 90 })
  nome: string;

  @Column("bigint", { name: "CPF", nullable: true })
  cpf: string | null;

  @Column("bigint", { name: "CNPJ", nullable: true, unique: true })
  cnpj: string | null;

  @OneToMany(
    () => Contratante,
    (contratante) => contratante.cadastroIdCadastro2
  )
  contratantes: Contratante[];

  @OneToMany(() => Empresa, (empresa) => empresa.cadastroIdCadastro2)
  empresas: Empresa[];

  @OneToMany(
    () => Unidadefaturamento,
    (unidadefaturamento) => unidadefaturamento.cadastroIdCadastro2
  )
  unidadefaturamentos: Unidadefaturamento[];
}

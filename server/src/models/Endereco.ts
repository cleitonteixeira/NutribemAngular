import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contratante } from "./Contratante";
import { Empresa } from "./Empresa";

@Index("idEndereco_UNIQUE", ["idEndereco"], { unique: true })
@Entity("endereco", { schema: "nutribemrefeic02" })
export class Endereco {
  @PrimaryGeneratedColumn({ type: "int", name: "idEndereco", unsigned: true })
  idEndereco: number;

  @Column("varchar", { name: "Endereco", length: 40 })
  endereco: string;

  @Column("varchar", { name: "Bairro", length: 25 })
  bairro: string;

  @Column("bigint", { name: "CEP" })
  cep: string;

  @Column("varchar", { name: "Cidade", length: 75 })
  cidade: string;

  @Column("varchar", {
    name: "Numero",
    nullable: true,
    length: 15,
    default: () => "'S/N'",
  })
  numero: string | null;

  @Column("varchar", { name: "UF", length: 2 })
  uf: string;

  @OneToMany(
    () => Contratante,
    (contratante) => contratante.enderecoIdEndereco2
  )
  contratantes: Contratante[];

  @OneToMany(() => Empresa, (empresa) => empresa.enderecoIdEndereco2)
  empresas: Empresa[];
}

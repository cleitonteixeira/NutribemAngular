import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contratante } from "./Contratante";

@Index("idCobranca_UNIQUE", ["idECobranca"], { unique: true })
@Entity("ecobranca", { schema: "nutribemrefeic02" })
export class Ecobranca {
  @PrimaryGeneratedColumn({ type: "int", name: "idECobranca", unsigned: true })
  idECobranca: number;

  @Column("varchar", { name: "Endereco", length: 150 })
  endereco: string;

  @Column("varchar", { name: "Bairro", length: 25 })
  bairro: string;

  @Column("bigint", { name: "CEP" })
  cep: string;

  @Column("varchar", { name: "Cidade", length: 75 })
  cidade: string;

  @Column("varchar", { name: "Numero", nullable: true, length: 15 })
  numero: string | null;

  @Column("varchar", { name: "UF", length: 2 })
  uf: string;

  @OneToMany(
    () => Contratante,
    (contratante) => contratante.cobrancaIdCobranca2
  )
  contratantes: Contratante[];
}

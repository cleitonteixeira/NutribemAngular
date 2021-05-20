import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Endereco } from "./Endereco";
import { Cadastro } from "./Cadastro";
import { Ecobranca } from "./Ecobranca";
import { Contrato } from "./Contrato";
import { Historial } from "./Historial";
import { Proposta } from "./Proposta";

@Index("idContratante_UNIQUE", ["idContratante"], { unique: true })
@Index("Cadastro_Contratante_idx", ["cadastroIdCadastro"], {})
@Index("Endereco_Contratante_idx", ["enderecoIdEndereco"], {})
@Index("Cobranca_Contratante_idx", ["cobrancaIdCobranca"], {})
@Entity("contratante", { schema: "nutribemrefeic02" })
export class Contratante {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "idContratante",
    unsigned: true,
  })
  idContratante: number;

  @Column("int", { name: "Cadastro_idCadastro", unsigned: true })
  cadastroIdCadastro: number;

  @Column("int", { name: "Endereco_idEndereco", unsigned: true })
  enderecoIdEndereco: number;

  @Column("int", { name: "Cobranca_idCobranca", unsigned: true })
  cobrancaIdCobranca: number;

  @Column("bigint", { name: "IE", nullable: true })
  ie: string | null;

  @ManyToOne(() => Endereco, (endereco) => endereco.contratantes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Endereco_idEndereco", referencedColumnName: "idEndereco" },
  ])
  enderecoIdEndereco2: Endereco;

  @ManyToOne(() => Cadastro, (cadastro) => cadastro.contratantes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Cadastro_idCadastro", referencedColumnName: "idCadastro" },
  ])
  cadastroIdCadastro2: Cadastro;

  @ManyToOne(() => Ecobranca, (ecobranca) => ecobranca.contratantes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Cobranca_idCobranca", referencedColumnName: "idECobranca" },
  ])
  cobrancaIdCobranca2: Ecobranca;

  @OneToMany(() => Contrato, (contrato) => contrato.contratanteIdContratante2)
  contratoes: Contrato[];

  @OneToMany(
    () => Historial,
    (historial) => historial.contratanteIdContratante2
  )
  historials: Historial[];

  @OneToMany(() => Proposta, (proposta) => proposta.contratanteIdContratante2)
  propostas: Proposta[];
}

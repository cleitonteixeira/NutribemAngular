import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contrato } from "./Contrato";
import { Lancamento } from "./Lancamento";
import { Cadastro } from "./Cadastro";
import { Unidadefornecimento } from "./Unidadefornecimento";
import { Unidadefuser } from "./Unidadefuser";

@Index("idUnidade_UNIQUE", ["idUnidadeFaturamento"], { unique: true })
@Index("Unidade_Cadastro_idx", ["cadastroIdCadastro"], {})
@Index("Unidade_Fornecimento0_idx", ["fornecimentoIdFornecimento"], {})
@Entity("unidadefaturamento", { schema: "nutribemrefeic02" })
export class Unidadefaturamento {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "idUnidadeFaturamento",
    unsigned: true,
  })
  idUnidadeFaturamento: number;

  @Column("int", { name: "Cadastro_idCadastro", unsigned: true })
  cadastroIdCadastro: number;

  @Column("int", {
    name: "Fornecimento_idFornecimento",
    unsigned: true,
    default: () => "'1'",
  })
  fornecimentoIdFornecimento: number;

  @Column("varchar", { name: "Ativa", length: 1, default: () => "'S'" })
  ativa: string;

  @OneToMany(() => Contrato, (contrato) => contrato.unidadeIdUnidade2)
  contratoes: Contrato[];

  @OneToMany(() => Lancamento, (lancamento) => lancamento.unidadeIdUnidade2)
  lancamentos: Lancamento[];

  @ManyToOne(() => Cadastro, (cadastro) => cadastro.unidadefaturamentos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Cadastro_idCadastro", referencedColumnName: "idCadastro" },
  ])
  cadastroIdCadastro2: Cadastro;

  @ManyToOne(
    () => Unidadefornecimento,
    (unidadefornecimento) => unidadefornecimento.unidadefaturamentos,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    {
      name: "Fornecimento_idFornecimento",
      referencedColumnName: "idUnidadeFornecimento",
    },
  ])
  fornecimentoIdFornecimento2: Unidadefornecimento;

  @OneToMany(
    () => Unidadefuser,
    (unidadefuser) => unidadefuser.unidadeIdUnidade2
  )
  unidadefusers: Unidadefuser[];
}

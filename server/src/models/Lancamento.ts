import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Historicolancamento } from "./Historicolancamento";
import { Contrato } from "./Contrato";
import { Unidadefaturamento } from "./Unidadefaturamento";
import { Usuarios } from "./Usuarios";

@Index("idLancamento_UNIQUE", ["idLancamento"], { unique: true })
@Index("LancamentoUnidade_idx", ["unidadeIdUnidade"], {})
@Index("LancamentoUsuario_idx", ["usuarioIdUsuario"], {})
@Index("LancamentoContrato_idx", ["contratoIdContrato"], {})
@Entity("lancamento", { schema: "nutribemrefeic02" })
export class Lancamento {
  @PrimaryGeneratedColumn({ type: "int", name: "idLancamento", unsigned: true })
  idLancamento: number;

  @Column("int", { name: "Unidade_idUnidade", unsigned: true })
  unidadeIdUnidade: number;

  @Column("int", { name: "Usuario_idUsuario", unsigned: true })
  usuarioIdUsuario: number;

  @Column("int", { name: "Contrato_idContrato", unsigned: true })
  contratoIdContrato: number;

  @Column("varchar", { name: "Servico", length: 80 })
  servico: string;

  @Column("int", { name: "Quantidade" })
  quantidade: number;

  @Column("double", { name: "ValorUni", precision: 22 })
  valorUni: number;

  @Column("date", { name: "dLancamento" })
  dLancamento: string;

  @Column("date", { name: "dCadastro" })
  dCadastro: string;

  @OneToMany(
    () => Historicolancamento,
    (historicolancamento) => historicolancamento.lancamentoIdLancamento2
  )
  historicolancamentos: Historicolancamento[];

  @ManyToOne(() => Contrato, (contrato) => contrato.lancamentos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Contrato_idContrato", referencedColumnName: "idContrato" },
  ])
  contratoIdContrato2: Contrato;

  @ManyToOne(
    () => Unidadefaturamento,
    (unidadefaturamento) => unidadefaturamento.lancamentos,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "Unidade_idUnidade", referencedColumnName: "idUnidadeFaturamento" },
  ])
  unidadeIdUnidade2: Unidadefaturamento;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.lancamentos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Usuario_idUsuario", referencedColumnName: "idusuarios" },
  ])
  usuarioIdUsuario2: Usuarios;
}

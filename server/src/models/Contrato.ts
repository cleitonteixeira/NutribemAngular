import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contratante } from "./Contratante";
import { Empresa } from "./Empresa";
import { Proposta } from "./Proposta";
import { Unidadefaturamento } from "./Unidadefaturamento";
import { Historicolancamento } from "./Historicolancamento";
import { Lancamento } from "./Lancamento";
import { Medicao } from "./Medicao";

@Index("idContrato_UNIQUE", ["idContrato"], { unique: true })
@Index("Nome_Contrato", ["nContrato"], { unique: true })
@Index("Contrato_Contratante_idx", ["contratanteIdContratante"], {})
@Index("Contrato_Empresa_idx", ["empresaIdEmpresa"], {})
@Index("Contrato_Proposta_idx", ["propostaIdProposta"], {})
@Index("Contratu_Unidade_idx", ["unidadeIdUnidade"], {})
@Entity("contrato", { schema: "nutribemrefeic02" })
export class Contrato {
  @PrimaryGeneratedColumn({ type: "int", name: "idContrato", unsigned: true })
  idContrato: number;

  @Column("int", { name: "Contratante_idContratante", unsigned: true })
  contratanteIdContratante: number;

  @Column("int", { name: "Empresa_idEmpresa", unsigned: true })
  empresaIdEmpresa: number;

  @Column("int", { name: "Unidade_idUnidade", unsigned: true })
  unidadeIdUnidade: number;

  @Column("int", { name: "Proposta_idProposta", unsigned: true })
  propostaIdProposta: number;

  @Column("date", { name: "DataReajuste" })
  dataReajuste: string;

  @Column("varchar", { name: "UF", length: 2 })
  uf: string;

  @Column("date", { name: "VigenciaIni" })
  vigenciaIni: string;

  @Column("date", { name: "VigenciaFim" })
  vigenciaFim: string;

  @Column("date", { name: "DCad" })
  dCad: string;

  @Column("varchar", { name: "nContrato", unique: true, length: 18 })
  nContrato: string;

  @Column("varchar", { name: "Finalizado", length: 1, default: () => "'N'" })
  finalizado: string;

  @Column("varchar", { name: "cCusto", length: 150 })
  cCusto: string;

  @Column("varchar", { name: "Obs", length: 450 })
  obs: string;

  @Column("varchar", { name: "pCompra", nullable: true, length: 45 })
  pCompra: string | null;

  @Column("int", { name: "Fechamento", unsigned: true, default: () => "'11'" })
  fechamento: number;

  @Column("varchar", { name: "fPagamento", length: 70 })
  fPagamento: string;

  @Column("varchar", { name: "Condicao", length: 70 })
  condicao: string;

  @Column("int", {
    name: "ConsumacaoMinima",
    unsigned: true,
    default: () => "'0'",
  })
  consumacaoMinima: number;

  @ManyToOne(() => Contratante, (contratante) => contratante.contratoes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    {
      name: "Contratante_idContratante",
      referencedColumnName: "idContratante",
    },
  ])
  contratanteIdContratante2: Contratante;

  @ManyToOne(() => Empresa, (empresa) => empresa.contratoes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Empresa_idEmpresa", referencedColumnName: "idEmpresa" },
  ])
  empresaIdEmpresa2: Empresa;

  @ManyToOne(() => Proposta, (proposta) => proposta.contratoes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Proposta_idProposta", referencedColumnName: "idProposta" },
  ])
  propostaIdProposta2: Proposta;

  @ManyToOne(
    () => Unidadefaturamento,
    (unidadefaturamento) => unidadefaturamento.contratoes,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "Unidade_idUnidade", referencedColumnName: "idUnidadeFaturamento" },
  ])
  unidadeIdUnidade2: Unidadefaturamento;

  @OneToMany(
    () => Historicolancamento,
    (historicolancamento) => historicolancamento.contratoIdContrato2
  )
  historicolancamentos: Historicolancamento[];

  @OneToMany(() => Lancamento, (lancamento) => lancamento.contratoIdContrato2)
  lancamentos: Lancamento[];

  @OneToMany(() => Medicao, (medicao) => medicao.contratoIdContrato2)
  medicaos: Medicao[];
}

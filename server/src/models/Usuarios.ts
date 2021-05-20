import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PrazoLancamento } from "./PrazoLancamento";
import { Historial } from "./Historial";
import { Historicolancamento } from "./Historicolancamento";
import { Lancamento } from "./Lancamento";
import { Medicao } from "./Medicao";
import { Solicitacao } from "./Solicitacao";
import { Unidade } from "./Unidade";
import { Unidadefuser } from "./Unidadefuser";
import { Unidadeiuser } from "./Unidadeiuser";

@Index("idusuarios_UNIQUE", ["idusuarios"], { unique: true })
@Entity("usuarios", { schema: "nutribemrefeic02" })
export class Usuarios {
  @PrimaryGeneratedColumn({ type: "int", name: "idusuarios", unsigned: true })
  idusuarios: number;

  @Column("varchar", { name: "Nome", length: 60 })
  nome: string;

  @Column("varchar", { name: "Login", length: 45 })
  login: string;

  @Column("varchar", { name: "Senha", length: 140 })
  senha: string;

  @Column("int", { name: "Ativo", default: () => "'0'" })
  ativo: number;

  @Column("int", { name: "Acesso", default: () => "'2'" })
  acesso: number;

  @Column("varchar", { name: "Email", length: 100 })
  email: string;

  @Column("varchar", { name: "Chefia", length: 1, default: () => "'N'" })
  chefia: string;

  @Column("varchar", { name: "FirstAccess", length: 1, default: () => "'S'" })
  firstAccess: string;

  @OneToMany(
    () => PrazoLancamento,
    (prazoLancamento) => prazoLancamento.usuarioIdUsuario2
  )
  prazoLancamentos: PrazoLancamento[];

  @OneToMany(() => Historial, (historial) => historial.usuarioIdUsuario2)
  historials: Historial[];

  @OneToMany(
    () => Historicolancamento,
    (historicolancamento) => historicolancamento.usuarioIdUsuario2
  )
  historicolancamentos: Historicolancamento[];

  @OneToMany(() => Lancamento, (lancamento) => lancamento.usuarioIdUsuario2)
  lancamentos: Lancamento[];

  @OneToMany(() => Medicao, (medicao) => medicao.usuarioIdUsuario2)
  medicaos: Medicao[];

  @OneToMany(
    () => Solicitacao,
    (solicitacao) => solicitacao.responsavelCancelamento2
  )
  solicitacaos: Solicitacao[];

  @OneToMany(() => Solicitacao, (solicitacao) => solicitacao.estoqueIdEstoque2)
  solicitacaos2: Solicitacao[];

  @OneToMany(() => Solicitacao, (solicitacao) => solicitacao.usuarioIdUsuario2)
  solicitacaos3: Solicitacao[];

  @OneToMany(() => Unidade, (unidade) => unidade.usuarioIdUsuario2)
  unidades: Unidade[];

  @OneToMany(
    () => Unidadefuser,
    (unidadefuser) => unidadefuser.usuarioIdUsuario2
  )
  unidadefusers: Unidadefuser[];

  @OneToMany(
    () => Unidadeiuser,
    (unidadeiuser) => unidadeiuser.usuarioIdUsuario2
  )
  unidadeiusers: Unidadeiuser[];
}

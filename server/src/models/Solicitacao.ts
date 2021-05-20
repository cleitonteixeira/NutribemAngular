import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Itemsolicitacao } from "./Itemsolicitacao";
import { Usuarios } from "./Usuarios";
import { Unidade } from "./Unidade";

@Index("idSolicitacao_UNIQUE", ["idSolicitacao"], { unique: true })
@Index("Solicitacao_Usuario_idx", ["usuarioIdUsuario"], {})
@Index("Solicitacao_Estoque_idx", ["estoqueIdEstoque"], {})
@Index("Solicitacao_Unidade_idx", ["unidadeIdUnidade"], {})
@Index("Solicitacao_Cancelametno_idx", ["responsavelCancelamento"], {})
@Entity("solicitacao", { schema: "nutribemrefeic02" })
export class Solicitacao {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "idSolicitacao",
    unsigned: true,
  })
  idSolicitacao: number;

  @Column("int", { name: "Usuario_idUsuario", unsigned: true })
  usuarioIdUsuario: number;

  @Column("int", { name: "Estoque_idEstoque", nullable: true, unsigned: true })
  estoqueIdEstoque: number | null;

  @Column("int", { name: "Unidade_idUnidade", unsigned: true })
  unidadeIdUnidade: number;

  @Column("int", {
    name: "Responsavel_Cancelamento",
    nullable: true,
    unsigned: true,
  })
  responsavelCancelamento: number | null;

  @Column("date", { name: "dSolicitacao" })
  dSolicitacao: string;

  @Column("varchar", { name: "Tipo", length: 70 })
  tipo: string;

  @Column("date", { name: "dEnvio", nullable: true })
  dEnvio: string | null;

  @Column("date", { name: "dConclusao", nullable: true })
  dConclusao: string | null;

  @Column("varchar", { name: "Status", length: 15, default: () => "'Nova'" })
  status: string;

  @Column("date", { name: "dAceite", nullable: true })
  dAceite: string | null;

  @Column("varchar", { name: "CodSolicitacao", length: 14 })
  codSolicitacao: string;

  @Column("datetime", { name: "dCancelamento", nullable: true })
  dCancelamento: Date | null;

  @OneToMany(
    () => Itemsolicitacao,
    (itemsolicitacao) => itemsolicitacao.solicitacaoIdSolicitacao2
  )
  itemsolicitacaos: Itemsolicitacao[];

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.solicitacaos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Responsavel_Cancelamento", referencedColumnName: "idusuarios" },
  ])
  responsavelCancelamento2: Usuarios;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.solicitacaos2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Estoque_idEstoque", referencedColumnName: "idusuarios" },
  ])
  estoqueIdEstoque2: Usuarios;

  @ManyToOne(() => Unidade, (unidade) => unidade.solicitacaos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Unidade_idUnidade", referencedColumnName: "idUnidade" },
  ])
  unidadeIdUnidade2: Unidade;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.solicitacaos3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Usuario_idUsuario", referencedColumnName: "idusuarios" },
  ])
  usuarioIdUsuario2: Usuarios;
}

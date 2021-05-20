import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contrato } from "./Contrato";
import { Lancamento } from "./Lancamento";
import { Usuarios } from "./Usuarios";

@Index("idHistoricoLancamento_UNIQUE", ["idHistoricoLancamento"], {
  unique: true,
})
@Index("Alter_Usuario_idx", ["usuarioIdUsuario"], {})
@Index("Alter_Contrato_idx", ["contratoIdContrato"], {})
@Index("Alter_Lancamento_idx", ["lancamentoIdLancamento"], {})
@Entity("historicolancamento", { schema: "nutribemrefeic02" })
export class Historicolancamento {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "idHistoricoLancamento",
    unsigned: true,
  })
  idHistoricoLancamento: number;

  @Column("int", { name: "Usuario_idUsuario", unsigned: true })
  usuarioIdUsuario: number;

  @Column("int", { name: "Contrato_idContrato", unsigned: true })
  contratoIdContrato: number;

  @Column("int", { name: "Lancamento_idLancamento", unsigned: true })
  lancamentoIdLancamento: number;

  @Column("date", { name: "dLancamento" })
  dLancamento: string;

  @Column("datetime", { name: "dAlteracao" })
  dAlteracao: Date;

  @Column("varchar", { name: "Descricao", length: 150 })
  descricao: string;

  @Column("text", { name: "Justificativa" })
  justificativa: string;

  @ManyToOne(() => Contrato, (contrato) => contrato.historicolancamentos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Contrato_idContrato", referencedColumnName: "idContrato" },
  ])
  contratoIdContrato2: Contrato;

  @ManyToOne(
    () => Lancamento,
    (lancamento) => lancamento.historicolancamentos,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "Lancamento_idLancamento", referencedColumnName: "idLancamento" },
  ])
  lancamentoIdLancamento2: Lancamento;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.historicolancamentos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Usuario_idUsuario", referencedColumnName: "idusuarios" },
  ])
  usuarioIdUsuario2: Usuarios;
}

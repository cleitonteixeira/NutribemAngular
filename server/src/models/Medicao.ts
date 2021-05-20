import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contrato } from "./Contrato";
import { Usuarios } from "./Usuarios";

@Index("idMedicao_UNIQUE", ["idMedicao"], { unique: true })
@Index("Medicao_Usuario_idx", ["usuarioIdUsuario"], {})
@Index("Medicao_Contratante_idx", ["contratoIdContrato"], {})
@Entity("medicao", { schema: "nutribemrefeic02" })
export class Medicao {
  @PrimaryGeneratedColumn({ type: "int", name: "idMedicao", unsigned: true })
  idMedicao: number;

  @Column("int", { name: "Contrato_idContrato", unsigned: true })
  contratoIdContrato: number;

  @Column("int", { name: "Usuario_idUsuario", unsigned: true })
  usuarioIdUsuario: number;

  @Column("varchar", { name: "Medicao", length: 45 })
  medicao: string;

  @Column("date", { name: "dInicio" })
  dInicio: string;

  @Column("date", { name: "dFinal" })
  dFinal: string;

  @Column("date", { name: "dMedicao" })
  dMedicao: string;

  @Column("varchar", {
    name: "Situacao",
    length: 150,
    default: () => "'Aguardando Resposta'",
  })
  situacao: string;

  @Column("int", { name: "idFaturamento", nullable: true, unsigned: true })
  idFaturamento: number | null;

  @Column("datetime", { name: "tFaturamento", nullable: true })
  tFaturamento: Date | null;

  @Column("varchar", { name: "Documento", nullable: true, length: 90 })
  documento: string | null;

  @Column("varchar", { name: "Finalizada", length: 5, default: () => "'N'" })
  finalizada: string;

  @Column("varchar", { name: "FinalizadaPor", nullable: true, length: 120 })
  finalizadaPor: string | null;

  @Column("datetime", { name: "dFinalizada", nullable: true })
  dFinalizada: Date | null;

  @Column("double", { name: "Desconto", precision: 22, default: () => "'0'" })
  desconto: number;

  @ManyToOne(() => Contrato, (contrato) => contrato.medicaos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Contrato_idContrato", referencedColumnName: "idContrato" },
  ])
  contratoIdContrato2: Contrato;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.medicaos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Usuario_idUsuario", referencedColumnName: "idusuarios" },
  ])
  usuarioIdUsuario2: Usuarios;
}

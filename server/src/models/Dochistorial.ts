import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Historial } from "./Historial";

@Index("idDocHistorial_UNIQUE", ["idDocHistorial"], { unique: true })
@Index("Doc_Historial_idx", ["historialIdHistorial"], {})
@Entity("dochistorial", { schema: "nutribemrefeic02" })
export class Dochistorial {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "idDocHistorial",
    unsigned: true,
  })
  idDocHistorial: number;

  @Column("int", { name: "Historial_idHistorial", unsigned: true })
  historialIdHistorial: number;

  @Column("varchar", { name: "Documento", length: 80 })
  documento: string;

  @ManyToOne(() => Historial, (historial) => historial.dochistorials, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Historial_idHistorial", referencedColumnName: "idHistorial" },
  ])
  historialIdHistorial2: Historial;
}

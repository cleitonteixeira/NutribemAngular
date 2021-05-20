import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Dochistorial } from "./Dochistorial";
import { Contratante } from "./Contratante";
import { Usuarios } from "./Usuarios";

@Index("idHistorial_UNIQUE", ["idHistorial"], { unique: true })
@Index("Contratante_Historico_idx", ["contratanteIdContratante"], {})
@Index("Usuario_Historico_idx", ["usuarioIdUsuario"], {})
@Entity("historial", { schema: "nutribemrefeic02" })
export class Historial {
  @PrimaryGeneratedColumn({ type: "int", name: "idHistorial", unsigned: true })
  idHistorial: number;

  @Column("int", { name: "Contratante_idContratante", unsigned: true })
  contratanteIdContratante: number;

  @Column("int", { name: "Usuario_idUsuario", unsigned: true })
  usuarioIdUsuario: number;

  @Column("varchar", { name: "Tipo", length: 45 })
  tipo: string;

  @Column("date", { name: "DataVis" })
  dataVis: string;

  @Column("text", { name: "Descricao" })
  descricao: string;

  @Column("date", { name: "DataCad" })
  dataCad: string;

  @OneToMany(
    () => Dochistorial,
    (dochistorial) => dochistorial.historialIdHistorial2
  )
  dochistorials: Dochistorial[];

  @ManyToOne(() => Contratante, (contratante) => contratante.historials, {
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

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.historials, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Usuario_idUsuario", referencedColumnName: "idusuarios" },
  ])
  usuarioIdUsuario2: Usuarios;
}

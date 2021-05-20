import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuarios } from "./Usuarios";

@Index("idPrazoLancamento_UNIQUE", ["idPrazoLancamento"], { unique: true })
@Index("Prazo_Usuario_idx", ["usuarioIdUsuario"], {})
@Entity("PrazoLancamento", { schema: "nutribemrefeic02" })
export class PrazoLancamento {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "idPrazoLancamento",
    unsigned: true,
  })
  idPrazoLancamento: number;

  @Column("int", { name: "Usuario_idUsuario", unsigned: true })
  usuarioIdUsuario: number;

  @Column("int", { name: "Prazo", unsigned: true, default: () => "'3'" })
  prazo: number;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.prazoLancamentos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Usuario_idUsuario", referencedColumnName: "idusuarios" },
  ])
  usuarioIdUsuario2: Usuarios;
}

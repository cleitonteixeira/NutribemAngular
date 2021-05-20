import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuarios } from "./Usuarios";
import { Unidade } from "./Unidade";

@Index("idUnidadeIUser_UNIQUE", ["idUnidadeIUser"], { unique: true })
@Index("Unidade_User_idx", ["usuarioIdUsuario"], {})
@Index("User_Unidade_idx", ["unidadeIdUnidade"], {})
@Entity("unidadeiuser", { schema: "nutribemrefeic02" })
export class Unidadeiuser {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "idUnidadeIUser",
    unsigned: true,
  })
  idUnidadeIUser: number;

  @Column("int", { name: "Unidade_idUnidade", unsigned: true })
  unidadeIdUnidade: number;

  @Column("int", { name: "Usuario_idUsuario", unsigned: true })
  usuarioIdUsuario: number;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.unidadeiusers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Usuario_idUsuario", referencedColumnName: "idusuarios" },
  ])
  usuarioIdUsuario2: Usuarios;

  @ManyToOne(() => Unidade, (unidade) => unidade.unidadeiusers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Unidade_idUnidade", referencedColumnName: "idUnidade" },
  ])
  unidadeIdUnidade2: Unidade;
}

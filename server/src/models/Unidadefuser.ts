import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Unidadefaturamento } from "./Unidadefaturamento";
import { Usuarios } from "./Usuarios";

@Index("idunidadeUser_UNIQUE", ["idUnidadeUser"], { unique: true })
@Index("Usuario_Unidade_idx", ["usuarioIdUsuario"], {})
@Index("Unidade_Usuario0_idx", ["unidadeIdUnidade"], {})
@Entity("unidadefuser", { schema: "nutribemrefeic02" })
export class Unidadefuser {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "idUnidadeUser",
    unsigned: true,
  })
  idUnidadeUser: number;

  @Column("int", { name: "Usuario_idUsuario", unsigned: true })
  usuarioIdUsuario: number;

  @Column("int", { name: "Unidade_idUnidade", unsigned: true })
  unidadeIdUnidade: number;

  @ManyToOne(
    () => Unidadefaturamento,
    (unidadefaturamento) => unidadefaturamento.unidadefusers,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "Unidade_idUnidade", referencedColumnName: "idUnidadeFaturamento" },
  ])
  unidadeIdUnidade2: Unidadefaturamento;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.unidadefusers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Usuario_idUsuario", referencedColumnName: "idusuarios" },
  ])
  usuarioIdUsuario2: Usuarios;
}

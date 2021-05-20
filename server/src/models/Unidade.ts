import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Solicitacao } from "./Solicitacao";
import { Regiao } from "./Regiao";
import { Usuarios } from "./Usuarios";
import { Unidadeiuser } from "./Unidadeiuser";

@Index("idUnidade_UNIQUE", ["idUnidade"], { unique: true })
@Index("Unidade_Usuario_idx", ["usuarioIdUsuario"], {})
@Index("Unidade_Regiao_idx", ["regiaoIdRegiao"], {})
@Entity("unidade", { schema: "nutribemrefeic02" })
export class Unidade {
  @PrimaryGeneratedColumn({ type: "int", name: "idUnidade", unsigned: true })
  idUnidade: number;

  @Column("int", { name: "Usuario_idUsuario", unsigned: true })
  usuarioIdUsuario: number;

  @Column("int", { name: "Regiao_idRegiao", unsigned: true })
  regiaoIdRegiao: number;

  @Column("varchar", { name: "Nome", length: 120 })
  nome: string;

  @Column("int", { name: "Codigo", unsigned: true })
  codigo: number;

  @OneToMany(() => Solicitacao, (solicitacao) => solicitacao.unidadeIdUnidade2)
  solicitacaos: Solicitacao[];

  @ManyToOne(() => Regiao, (regiao) => regiao.unidades, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "Regiao_idRegiao", referencedColumnName: "idRegiao" }])
  regiaoIdRegiao2: Regiao;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.unidades, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Usuario_idUsuario", referencedColumnName: "idusuarios" },
  ])
  usuarioIdUsuario2: Usuarios;

  @OneToMany(
    () => Unidadeiuser,
    (unidadeiuser) => unidadeiuser.unidadeIdUnidade2
  )
  unidadeiusers: Unidadeiuser[];
}

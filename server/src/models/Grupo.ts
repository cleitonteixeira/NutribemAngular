import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Unidadefornecimento } from "./Unidadefornecimento";

@Index("idGrupo_UNIQUE", ["idGrupo"], { unique: true })
@Entity("grupo", { schema: "nutribemrefeic02" })
export class Grupo {
  @PrimaryGeneratedColumn({ type: "int", name: "idGrupo", unsigned: true })
  idGrupo: number;

  @Column("varchar", { name: "Nome", length: 120 })
  nome: string;

  @Column("text", { name: "Descricao" })
  descricao: string;

  @OneToMany(
    () => Unidadefornecimento,
    (unidadefornecimento) => unidadefornecimento.grupoIdGrupo2
  )
  unidadefornecimentos: Unidadefornecimento[];
}

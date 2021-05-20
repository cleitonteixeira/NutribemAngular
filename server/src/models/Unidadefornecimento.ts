import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Unidadefaturamento } from "./Unidadefaturamento";
import { Grupo } from "./Grupo";

@Index("idUnidadeFornecimento_UNIQUE", ["idUnidadeFornecimento"], {
  unique: true,
})
@Index("UnidadeF_Grupo_idx", ["grupoIdGrupo"], {})
@Entity("unidadefornecimento", { schema: "nutribemrefeic02" })
export class Unidadefornecimento {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "idUnidadeFornecimento",
    unsigned: true,
  })
  idUnidadeFornecimento: number;

  @Column("int", { name: "Grupo_idGrupo", unsigned: true })
  grupoIdGrupo: number;

  @Column("varchar", { name: "Nome", length: 120 })
  nome: string;

  @OneToMany(
    () => Unidadefaturamento,
    (unidadefaturamento) => unidadefaturamento.fornecimentoIdFornecimento2
  )
  unidadefaturamentos: Unidadefaturamento[];

  @ManyToOne(() => Grupo, (grupo) => grupo.unidadefornecimentos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "Grupo_idGrupo", referencedColumnName: "idGrupo" }])
  grupoIdGrupo2: Grupo;
}

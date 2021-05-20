import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contrato } from "./Contrato";
import { Itensproposta } from "./Itensproposta";
import { Contratante } from "./Contratante";

@Index("idProposta_UNIQUE", ["idProposta"], { unique: true })
@Index("Contratante_Proposta_idx", ["contratanteIdContratante"], {})
@Entity("proposta", { schema: "nutribemrefeic02" })
export class Proposta {
  @PrimaryGeneratedColumn({ type: "int", name: "idProposta", unsigned: true })
  idProposta: number;

  @Column("int", { name: "Contratante_idContratante", unsigned: true })
  contratanteIdContratante: number;

  @Column("date", { name: "dProposta" })
  dProposta: string;

  @Column("varchar", { name: "nProposta", length: 15 })
  nProposta: string;

  @Column("varchar", { name: "tReajuste", length: 150 })
  tReajuste: string;

  @Column("int", { name: "pVigencia" })
  pVigencia: number;

  @Column("varchar", { name: "Consolidada", length: 1, default: () => "'N'" })
  consolidada: string;

  @OneToMany(() => Contrato, (contrato) => contrato.propostaIdProposta2)
  contratoes: Contrato[];

  @OneToMany(
    () => Itensproposta,
    (itensproposta) => itensproposta.propostaIdProposta2
  )
  itenspropostas: Itensproposta[];

  @ManyToOne(() => Contratante, (contratante) => contratante.propostas, {
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
}

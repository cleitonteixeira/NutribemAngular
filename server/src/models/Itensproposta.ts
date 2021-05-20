import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Proposta } from "./Proposta";

@Index("idItensProposta_UNIQUE", ["idItensProposta"], { unique: true })
@Index("Itens_Proposta_idx", ["propostaIdProposta"], {})
@Entity("itensproposta", { schema: "nutribemrefeic02" })
export class Itensproposta {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "idItensProposta",
    unsigned: true,
  })
  idItensProposta: number;

  @Column("int", { name: "Proposta_idProposta", unsigned: true })
  propostaIdProposta: number;

  @Column("varchar", { name: "Servico", length: 145 })
  servico: string;

  @Column("double", { name: "ValorUni", precision: 22 })
  valorUni: number;

  @Column("varchar", { name: "Subgrupo", length: 80 })
  subgrupo: string;

  @ManyToOne(() => Proposta, (proposta) => proposta.itenspropostas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Proposta_idProposta", referencedColumnName: "idProposta" },
  ])
  propostaIdProposta2: Proposta;
}

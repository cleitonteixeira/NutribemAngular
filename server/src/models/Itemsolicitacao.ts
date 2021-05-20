import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Equipamento } from "./Equipamento";
import { Solicitacao } from "./Solicitacao";

@Index("idItemSolicitacao_UNIQUE", ["idItemSolicitacao"], { unique: true })
@Index("Equipamento_Solicita_idx", ["equipamentoIdEquipamento"], {})
@Index("Solicitacao_Item_idx", ["solicitacaoIdSolicitacao"], {})
@Entity("itemsolicitacao", { schema: "nutribemrefeic02" })
export class Itemsolicitacao {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "idItemSolicitacao",
    unsigned: true,
  })
  idItemSolicitacao: number;

  @Column("int", { name: "Equipamento_idEquipamento", unsigned: true })
  equipamentoIdEquipamento: number;

  @Column("int", { name: "Solicitacao_idSolicitacao", unsigned: true })
  solicitacaoIdSolicitacao: number;

  @ManyToOne(() => Equipamento, (equipamento) => equipamento.itemsolicitacaos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    {
      name: "Equipamento_idEquipamento",
      referencedColumnName: "idEquipamento",
    },
  ])
  equipamentoIdEquipamento2: Equipamento;

  @ManyToOne(() => Solicitacao, (solicitacao) => solicitacao.itemsolicitacaos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    {
      name: "Solicitacao_idSolicitacao",
      referencedColumnName: "idSolicitacao",
    },
  ])
  solicitacaoIdSolicitacao2: Solicitacao;
}

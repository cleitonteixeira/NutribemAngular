import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idCContratante_UNIQUE", ["idCContratante"], { unique: true })
@Index("Contato_Contratante_idx", ["contratanteIdContratante"], {})
@Entity("ccontratante", { schema: "nutribemrefeic02" })
export class Ccontratante {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "idCContratante",
    unsigned: true,
  })
  idCContratante: number;

  @Column("int", { name: "Contratante_idContratante", unsigned: true })
  contratanteIdContratante: number;

  @Column("varchar", { name: "Responsavel", length: 150 })
  responsavel: string;

  @Column("varchar", { name: "Email", length: 150 })
  email: string;

  @Column("bigint", { name: "Telefone" })
  telefone: string;

  @Column("varchar", { name: "Tipo", length: 45 })
  tipo: string;
}

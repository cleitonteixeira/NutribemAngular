import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fechamento", { schema: "nutribemrefeic02" })
export class Fechamento {
  @PrimaryGeneratedColumn({ type: "int", name: "idFechamento", unsigned: true })
  idFechamento: number;

  @Column("varchar", { name: "Descricao", length: 45 })
  descricao: string;
}

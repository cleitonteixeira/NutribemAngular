import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idContato_UNIQUE", ["idContato"], { unique: true })
@Entity("contato", { schema: "nutribemrefeic02" })
export class Contato {
  @PrimaryGeneratedColumn({ type: "int", name: "idContato", unsigned: true })
  idContato: number;

  @Column("bigint", { name: "Telefone", nullable: true })
  telefone: string | null;

  @Column("bigint", { name: "Celular", nullable: true })
  celular: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 80 })
  email: string | null;
}

import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idCategoria_UNIQUE", ["idCategoria"], { unique: true })
@Index("Nome_UNIQUE", ["nome"], { unique: true })
@Entity("categoria", { schema: "nutribemrefeic02" })
export class Categoria {
  @PrimaryGeneratedColumn({ type: "int", name: "idCategoria", unsigned: true })
  idCategoria: number;

  @Column("varchar", { name: "Nome", unique: true, length: 70 })
  nome: string;

  @Column("text", { name: "Descricao" })
  descricao: string;
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Itemsolicitacao } from "./Itemsolicitacao";

@Entity("equipamento", { schema: "nutribemrefeic02" })
export class Equipamento {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "idEquipamento",
    unsigned: true,
  })
  idEquipamento: number;

  @Column("int", { name: "Unidade_idUnidade" })
  unidadeIdUnidade: number;

  @Column("int", { name: "Categoria_idCategoria" })
  categoriaIdCategoria: number;

  @Column("varchar", { name: "Nome", length: 255 })
  nome: string;

  @Column("varchar", { name: "Descricao", length: 255 })
  descricao: string;

  @Column("int", { name: "Sequencial" })
  sequencial: number;

  @Column("int", { name: "Ativo" })
  ativo: number;

  @Column("varchar", { name: "Situacao", length: 255 })
  situacao: string;

  @OneToMany(
    () => Itemsolicitacao,
    (itemsolicitacao) => itemsolicitacao.equipamentoIdEquipamento2
  )
  itemsolicitacaos: Itemsolicitacao[];
}

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
import { Cadastro } from "./Cadastro";
import { Endereco } from "./Endereco";

@Index("Empresa_Cadastro_idx", ["cadastroIdCadastro"], {})
@Index("Empresa_Endereco_idx", ["enderecoIdEndereco"], {})
@Entity("empresa", { schema: "nutribemrefeic02" })
export class Empresa {
  @PrimaryGeneratedColumn({ type: "int", name: "idEmpresa", unsigned: true })
  idEmpresa: number;

  @Column("int", { name: "Cadastro_idCadastro", unsigned: true })
  cadastroIdCadastro: number;

  @Column("int", { name: "Endereco_idEndereco", unsigned: true })
  enderecoIdEndereco: number;

  @OneToMany(() => Contrato, (contrato) => contrato.empresaIdEmpresa2)
  contratoes: Contrato[];

  @ManyToOne(() => Cadastro, (cadastro) => cadastro.empresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Cadastro_idCadastro", referencedColumnName: "idCadastro" },
  ])
  cadastroIdCadastro2: Cadastro;

  @ManyToOne(() => Endereco, (endereco) => endereco.empresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Endereco_idEndereco", referencedColumnName: "idEndereco" },
  ])
  enderecoIdEndereco2: Endereco;
}

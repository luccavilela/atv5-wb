import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import { setNomeClienteEditar, setNomeSocialClienteEditar, setTelefoneClienteEditar, setEmailClienteEditar } from './globals';

interface Cliente {
    id: number;
    nome: string;
    nome_social: string;
    telefone: string;
    cpf: string;
    email: string;
    quantidade_consumo: number;
    valor_gasto: number;
}

interface ListaMasculinosProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
    }

export default function ListaMasculinos(props: ListaMasculinosProps) {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    const fetchClientes = async () => {
        try {
            const response = await fetch('http://localhost:3001/listarClientesMasculinos');
            if (response.ok) {
                const data = await response.json();
                setClientes(data.clientes);
            } else {
                console.error('Erro ao obter a lista de clientes masculinos');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };

    useEffect(() => {
        fetchClientes();
    }, []);

    const handleExcluir = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3001/excluirCliente/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Cliente excluído com sucesso');
                fetchClientes();
            } else {
                console.error('Erro ao excluir cliente');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };
    

    return (
        <div className="collection">
            <h2> Lista de todos os clientes masculinos </h2>

            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Cadastrar Cliente", e)}
            >
                Cadastrar um cliente
            </button>

            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Listar 10 clientes que mais consumiram", e)}
            >
                Listar 10 clientes que mais consumiram
            </button>

            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Listar 10 clientes que menos consumiram", e)}
            >
                Listar 10 clientes que menos consumiram
            </button>

            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Listar 5 clientes que mais gastaram", e)}
            >
                Listar 5 clientes que mais gastaram
            </button>

            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Listar clientes masculinos", e)}
            >
                Listar clientes masculinos
            </button>
            
            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Listar clientes femininas", e)}
            >
                Listar clientes femininas
            </button>
            
            {clientes.map((cliente, index) => (
                <div key={index} className="collection-item">
                    Nome: {cliente.nome} <br />
                    Nome Social: {cliente.nome_social} <br />
                    CPF: {cliente.cpf} <br />
                    Telefone: {cliente.telefone} <br />
                    Email: {cliente.email} <br />
                    Quantidade de Serviços e Produtos comprados: {cliente.quantidade_consumo} <br />
                    Valor gasto: R$ {cliente.valor_gasto} 
                    <div className="botoes">
                        <button
                            className="waves-effect waves-light editar"
                            onClick={(e) => { 
                                setNomeClienteEditar(cliente.nome);
                                setNomeSocialClienteEditar(cliente.nome_social);
                                setTelefoneClienteEditar(cliente.telefone);
                                setEmailClienteEditar(cliente.email);
                                props.seletorView("Editar Cliente", e)
                            }}
                        >
                            Editar
                        </button>
                        <button className="excluir" onClick={() => handleExcluir(cliente.id)}>Excluir</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

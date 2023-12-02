import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';

interface Cliente {
    nome: string;
    cpf: string;
    email: string;
}

interface ListaClienteProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ListaCliente(props: ListaClienteProps) {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await fetch('http://localhost:3001/listarClientes');
                if (response.ok) {
                    const data = await response.json();
                    setClientes(data.clientes);
                } else {
                    console.error('Erro ao obter a lista de clientes');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };

        fetchClientes();
    }, []);

    return (
        <div className="collection">
            <h2> Lista de todos os clientes </h2>
            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Cadastrar Cliente", e)}
            >
                Cadastrar um cliente
            </button>

            {clientes.map((cliente, index) => (
                <div key={index} className="collection-item">
                    Nome: {cliente.nome} <br />
                    CPF: {cliente.cpf} <br />
                    Email: {cliente.email} <br />
                    Produtos Consumidos: <br />
                    Serviços Consumidos:
                    <div className="botoes">
                        <button
                            className="waves-effect waves-light editar"
                            onClick={(e) => props.seletorView("Editar Cliente", e)}
                        >
                            Editar
                        </button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

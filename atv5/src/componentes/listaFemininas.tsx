import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';

interface Cliente {
    id: number;
    nome: string;
    cpf: string;
    email: string;
}

interface ListaFemininasProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
    }

export default function ListaFemininas(props: ListaFemininasProps) {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    const fetchClientes = async () => {
        try {
            const response = await fetch('http://localhost:3001/listarClientesFemininas');
            if (response.ok) {
                const data = await response.json();
                setClientes(data.clientes);
            } else {
                console.error('Erro ao obter a lista de clientes femininas');
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
            <h2> Lista de todas as clientes femininas </h2>

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
                        <button className="excluir" onClick={() => handleExcluir(cliente.id)}>Excluir</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

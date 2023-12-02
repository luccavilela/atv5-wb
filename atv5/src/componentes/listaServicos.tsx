import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';

interface Servico {
    id: number;
    nome: string;
    valor: number;
    quantidade_vendas: number;
}

interface ListaServicosProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ListaServicos(props: ListaServicosProps) {
    const [servicos, setServicos] = useState<Servico[]>([]);

    const fetchServicos = async () => {
        try {
            const response = await fetch('http://localhost:3001/listarServicos');
            if (response.ok) {
                const data = await response.json();
                setServicos(data.servicos);
            } else {
                console.error('Erro ao obter a lista de serviços');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };

    useEffect(() => {
        fetchServicos();
    }, []);

    const handleExcluir = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3001/excluirServico/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Serviço excluído com sucesso');
                fetchServicos();
            } else {
                console.error('Erro ao excluir serviço');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };

    return (
        <div className="collection">
            <h2> Lista de todos os serviços </h2>
            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Cadastrar Serviço", e)}
            >
                Cadastrar um serviço
            </button>

            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Listar serviços mais consumidos", e)}
            >
                Listar os Serviços mais consumidos
            </button>
            
            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Listar serviços mais consumidos por homens", e)}
            >
                Listar os Serviços mais consumidos por homens
            </button>

            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Listar serviços mais consumidos por mulheres", e)}
            >
                Listar os Serviços mais consumidos por mulheres
            </button>

            {servicos.map((servico, index) => (
                <div key={index} className="collection-item">
                    Nome: {servico.nome} <br />
                    Valor: R$ {servico.valor} <br />
                    Quantidade vendida: {servico.quantidade_vendas} 
                    <div className="botoes">
                        <button
                            className="waves-effect waves-light editar"
                            onClick={(e) => props.seletorView("Editar Serviço", e)}
                        >
                            Editar
                        </button>
                        <button className="excluir" onClick={() => handleExcluir(servico.id)}>Excluir</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

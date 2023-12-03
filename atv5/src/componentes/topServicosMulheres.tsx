import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import { setNomeServicoEditar, setValorServicoEditar } from './globals';

interface Servico {
    id: number;
    nome: string;
    valor: number;
    quantidade_vendas: number;
    quantidade_vendas_masculino: number;
    quantidade_vendas_feminino: number;
}

interface TopServicosMulheresProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function TopServicosMulheres(props: TopServicosMulheresProps) {
    const [servicos, setServicos] = useState<Servico[]>([]);

    const fetchServicos = async () => {
        try {
            const response = await fetch('http://localhost:3001/listarServicosMaisConsumidosMulheres');
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
            <h2> Lista dos serviços mais consumidos por mulheres </h2>
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
                    Quantidade comprada por mulheres: {servico.quantidade_vendas_feminino} <br />
                    Quantidade vendida: {servico.quantidade_vendas} <br />
                    Quantidade comprada por homens: {servico.quantidade_vendas_masculino}
                    <div className="botoes">
                        <button
                            className="waves-effect waves-light editar"
                            onClick={(e) => {
                                setNomeServicoEditar(servico.nome);
                                setValorServicoEditar(servico.valor); 
                                props.seletorView("Editar Serviço", e)
                            }}
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

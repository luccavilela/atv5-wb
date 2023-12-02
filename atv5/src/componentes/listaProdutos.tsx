import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';

interface Produto {
    nome: string;
    valor: number;
    quantidade_vendas: number;
}

interface ListaProdutosProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ListaProdutos(props: ListaProdutosProps) {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost:3001/listarProdutos');
                if (response.ok) {
                    const data = await response.json();
                    setProdutos(data.produtos);
                } else {
                    console.error('Erro ao obter a lista de produtos');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div className="collection">
            <h2> Lista de todos os produtos </h2>
            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Cadastrar Produto", e)}
            >
                Cadastrar um produto
            </button>

            {produtos.map((produto, index) => (
                <div key={index} className="collection-item">
                    Nome: {produto.nome} <br />
                    Valor: R$ {produto.valor} <br />
                    Quantidade vendida: {produto.quantidade_vendas} 
                    <div className="botoes">
                        <button
                            className="waves-effect waves-light editar"
                            onClick={(e) => props.seletorView("Editar Produto", e)}
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

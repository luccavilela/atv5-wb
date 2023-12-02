import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';

interface Produto {
    id: number;
    nome: string;
    valor: number;
    quantidade_vendas: number;
}

interface ListaProdutosProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ListaProdutos(props: ListaProdutosProps) {
    const [produtos, setProdutos] = useState<Produto[]>([]);


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
    
    useEffect(() => {
        fetchProdutos();
    }, []);

    const handleExcluir = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3001/excluirProduto/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Produto excluído com sucesso');
                fetchProdutos();
            } else {
                console.error('Erro ao excluir produto');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };

    return (
        <div className="collection">
            <h2> Lista de todos os produtos </h2>
            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Cadastrar Produto", e)}
            >
                Cadastrar um produto
            </button>

            <button
                    className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                    onClick={(e) => props.seletorView("Listar produtos mais consumidos", e)}
            >
                Listar os produtos mais consumidos
            </button>
            
            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Listar produtos mais consumidos por homens", e)}
            >
                Listar os produtos mais consumidos por homens
            </button>

            <button
                className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                onClick={(e) => props.seletorView("Listar produtos mais consumidos por mulheres", e)}
            >
                Listar os produtos mais consumidos por mulheres
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
                        <button className="excluir" onClick={() => handleExcluir(produto.id)}>Excluir</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
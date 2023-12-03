import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';


import { NomeProdutoEditar, ValorProdutoEditar } from './globals';

interface EditarProdutoProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function EditarProduto(props: EditarProdutoProps) {

    const [nomeProduto, setNomeProduto] = useState(NomeProdutoEditar);
    const [valorProduto, setValorProduto] = useState(ValorProdutoEditar);


    useEffect(() => {
        setNomeProduto(NomeProdutoEditar);
        setValorProduto(ValorProdutoEditar);
    }, [NomeProdutoEditar, ValorProdutoEditar]);

    const handleAtualizarDados = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {

            const response = await fetch('http://localhost:3001/editarProduto', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome: NomeProdutoEditar, novoNome: nomeProduto, novoValor: valorProduto }),
            });

            if (response.ok) {
                console.log('Produto editado com sucesso');

            } else {
                console.error('Erro ao editar o produto');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }


        props.seletorView("Produtos", e);
    };

    return (
        <div className="row">
            <h2> Editar Produto </h2>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="nome_produto"
                            type="text"
                            className="validate"
                            placeholder="Nome do Produto"
                            value={nomeProduto}
                            onChange={(e) => setNomeProduto(e.target.value)}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="preco_produto"
                            type="number"
                            className="validate"
                            placeholder="Preço do produto"
                            value={valorProduto}
                            onChange={(e) => setValorProduto(parseFloat(e.target.value))}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button
                            className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                            type="submit"
                            name="action"
                            onClick={handleAtualizarDados}
                        >
                            Atualizar dados
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

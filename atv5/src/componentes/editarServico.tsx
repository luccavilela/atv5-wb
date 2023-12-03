import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';


import { NomeServicoEditar, ValorServicoEditar } from './globals';

interface EditarServicoProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function EditarServico(props: EditarServicoProps) {

    const [nomeServico, setNomeServico] = useState(NomeServicoEditar);
    const [valorServico, setValorServico] = useState(ValorServicoEditar);


    useEffect(() => {
        setNomeServico(NomeServicoEditar);
        setValorServico(ValorServicoEditar);
    }, [NomeServicoEditar, ValorServicoEditar]);

    const handleAtualizarDados = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {

            const response = await fetch('http://localhost:3001/editarServico', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome: NomeServicoEditar, novoNome: nomeServico, novoValor: valorServico }),
            });

            if (response.ok) {
                console.log('Servico editado com sucesso');

            } else {
                console.error('Erro ao editar o serviço');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }


        props.seletorView("Serviços", e);
    };

    return (
        <div className="row">
            <h2> Editar Servico </h2>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="nome_servico"
                            type="text"
                            className="validate"
                            placeholder="Nome do Servico"
                            value={nomeServico}
                            onChange={(e) => setNomeServico(e.target.value)}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="preco_servico"
                            type="number"
                            className="validate"
                            placeholder="Preço do serviço"
                            value={valorServico}
                            onChange={(e) => setValorServico(parseFloat(e.target.value))}
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

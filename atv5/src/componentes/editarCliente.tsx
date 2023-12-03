import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';


import { NomeClienteEditar, NomeSocialClienteEditar, TelefoneClienteEditar, EmailClienteEditar } from './globals';

interface EditarClienteProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function EditarCliente(props: EditarClienteProps) {

    const [nomeCliente, setNomeCliente] = useState(NomeClienteEditar);
    const [nomeSocialCliente, setnomeSocialCliente] = useState(NomeSocialClienteEditar);
    const [telefoneCliente, setTelefoneCliente] = useState(TelefoneClienteEditar);
    const [emailCliente, setEmailCliente] = useState(EmailClienteEditar);


    useEffect(() => {
        setNomeCliente(NomeClienteEditar);
        setnomeSocialCliente(NomeSocialClienteEditar);
        setTelefoneCliente(TelefoneClienteEditar);
        setEmailCliente(EmailClienteEditar);
    }, [NomeClienteEditar, NomeSocialClienteEditar, TelefoneClienteEditar, EmailClienteEditar]);

    const handleAtualizarDados = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {

            const response = await fetch('http://localhost:3001/editarCliente', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome: NomeClienteEditar, novoNome: nomeCliente, novoNomeSocial: nomeSocialCliente, novoTelefone: telefoneCliente, novoEmail: emailCliente }),
            });

            if (response.ok) {
                console.log('Cliente editado com sucesso');

            } else {
                console.error('Erro ao editar o cliente');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }


        props.seletorView("Clientes", e);
    };

    const isUpdateDisabled =
        nomeCliente.trim() === '' ||
        nomeSocialCliente.trim() === '' ||
        telefoneCliente.trim() === '' ||
        emailCliente.trim() === '';

    return (
        <div className="row">
            <h2> Editar Cliente </h2>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="nome_cliente"
                            type="text"
                            className="validate"
                            placeholder="Nome do Cliente"
                            value={nomeCliente}
                            onChange={(e) => setNomeCliente(e.target.value)}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="nome_social_cliente"
                            type="text"
                            className="validate"
                            placeholder="Nome social do Cliente"
                            value={nomeSocialCliente}
                            onChange={(e) => setnomeSocialCliente(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="telefone_cliente"
                            type="text"
                            className="validate"
                            placeholder="Telefone do Cliente"
                            value={telefoneCliente}
                            onChange={(e) => setTelefoneCliente(e.target.value)}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="email_cliente"
                            type="text"
                            className="validate"
                            placeholder="Email do Cliente"
                            value={emailCliente}
                            onChange={(e) => setEmailCliente(e.target.value)}
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
                            disabled={isUpdateDisabled}
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

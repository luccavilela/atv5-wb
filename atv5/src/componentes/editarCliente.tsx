import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface EditarClienteProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}


export default function EditarCliente(props: EditarClienteProps){
        return (
            <div className="row">
                <h2> Editar Cliente </h2>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome" type="text" className="validate" placeholder="Nome do cliente" />
                        </div>
                        <div className="input-field col s6">
                            <input id="nome_social" type="text" className="validate" placeholder="Nome social do cliente" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="telefone" type="text" className="validate" placeholder="Telefone do cliente" />
                        </div>
                        <div className="input-field col s6">
                            <input id="cpf" type="text" className="validate" placeholder="Cpf do cliente" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="rg" type="text" className="validate" placeholder="RG do cliente" />
                        </div>
                        <div className="input-field col s6">
                            <p>
                                <label>
                                    <input name="genero" type="radio" value="masculino" />
                                    <span>Gênero Masculino</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="genero" type="radio" value="feminino" />
                                    <span>Gênero Feminino</span>
                                </label>
                            </p>
                        </div>                                                    
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="waves-effect waves-light btn cadastrar-botao botao-customizado" type="submit" name="action" onClick={(e) => props.seletorView("Clientes", e)}>Atualizar dados
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        )
    }


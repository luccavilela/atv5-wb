import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface EditarServicoProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function EditarServico(props: EditarServicoProps){
        return (
            <div className="row">
                <h2> Editar Serviço </h2>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome_servico" type="text" className="validate" placeholder="Nome do Serviço" />
                        </div>
                        <div className="input-field col s6">
                            <input id="preco_servico" type="number" className="validate" placeholder="Preço do Serviço" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="waves-effect waves-light btn cadastrar-botao botao-customizado" type="submit" name="action" onClick={(e) => props.seletorView("Serviços", e)}>Atualizar dados
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        )
    }


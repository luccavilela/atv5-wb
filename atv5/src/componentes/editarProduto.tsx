import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface EditarProdutoProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function EditarProduto(props: EditarProdutoProps){
        return (
            <div className="row">
                <h2> Editar Produto </h2>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome_produto" type="text" className="validate" placeholder="Nome do Produto" />
                        </div>
                        <div className="input-field col s6">
                            <input id="preco_produto" type="number" className="validate" placeholder="Preço do produto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="waves-effect waves-light btn cadastrar-botao botao-customizado" type="submit" name="action" onClick={(e) => props.seletorView("Produtos", e)}>Atualizar dados
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        )
    }


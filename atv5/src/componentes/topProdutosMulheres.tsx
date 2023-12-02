import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface TopProdutosMulheresProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
    }

export default function TopProdutosMulheres(props: TopProdutosMulheresProps) {
        return (
            <div className="collection">
                <h2> Produtos mais comprados por mulheres: </h2>
                <div className="collection-item">
                    Produto 1 <br/>
                    Preço: <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Produto", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Produto 2 <br/>
                    Preço: <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Produto", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Produto 3 <br/>
                    Preço: <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Produto", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Produto 4 <br/>
                    Preço: <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Produto", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Produto 5 <br/>
                    Preço: <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Produto", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
            </div>
        )
    }

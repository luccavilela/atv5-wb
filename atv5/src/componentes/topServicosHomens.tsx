import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface TopServicosHomensProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
    }

export default function TopServicosHomens(props: TopServicosHomensProps) {
        return (
            <div className="collection">
                <h2> Serviços mais comprados por homens: </h2>
                <div className="collection-item">
                    Serviço 1 <br/>
                    Preço: <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Serviço 2 <br/>
                    Preço: <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Serviço 3 <br/>
                    Preço: <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Serviço 4 <br/>
                    Preço: <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Serviço 5 <br/>
                    Preço: <br/>
                    Quantidade vendida: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Serviço", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
            </div>
        )
    }

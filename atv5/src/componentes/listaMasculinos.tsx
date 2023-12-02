import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface ListaMasculinosProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
    }

export default function ListaMasculinos(props: ListaMasculinosProps) {
        return (
            <div className="collection">
                <h2> Todos os clientes masculinos: </h2>
                <div className="collection-item">
                    Cliente 1 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos:
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 2 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 3 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 4 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 5 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
            </div>
        )
    }

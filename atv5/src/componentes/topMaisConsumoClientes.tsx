import React from "react";

interface TopMaiorConsumoClientesProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
    }

export default function TopMaiorConsumoClientes(props: TopMaiorConsumoClientesProps) {
        return (
            <div className="collection">
                <h2> Clientes que mais consumiram: </h2>
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
                <div className="collection-item">
                    Cliente 6 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 7 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 8 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 9 <br/>
                    Produtos Consumidos: <br/>
                    Serviços Consumidos: 
                    <div className="botoes">
                        <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
                <div className="collection-item">
                    Cliente 10 <br/>
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

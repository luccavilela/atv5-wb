import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';

interface Venda {
    id: number;
    nome_cliente: string;
    cpf_cliente: string;
    nome_servico_ou_produto: string;
    quantidade_venda: number;
    valor_venda: number;
    data_venda: string;
}

interface ListaVendasProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ListaVendas(props: ListaVendasProps) {
    const [vendas, setVendas] = useState<Venda[]>([]);

    const fetchVendas = async () => {
        try {
            const response = await fetch('http://localhost:3001/listarVendas');
            if (response.ok) {
                const data = await response.json();
                setVendas(data.vendas);
            } else {
                console.error('Erro ao obter a lista de vendas');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };
    
    useEffect(() => {
        fetchVendas();
    }, []);

    return (
        <div className="collection">
            <h2> Histórico de vendas </h2>

            {vendas.map((venda, index) => (
                <div key={index} className="collection-item">
                    Cliente: {venda.nome_cliente} <br />
                    CPF: {venda.cpf_cliente} <br />
                    Serviço/Produto comprado: {venda.nome_servico_ou_produto} <br />
                    Valor da compra: R$ {venda.valor_venda} <br />
                    Quantidade comprada: {venda.quantidade_venda} <br />
                    Data da compra: {venda.data_venda}
                </div>
            ))}
        </div>
    );
}

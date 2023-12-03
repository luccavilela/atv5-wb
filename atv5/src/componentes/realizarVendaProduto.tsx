import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface Produto {
  id: number;
  nome: string;
  valor: number;
  quantidade_vendas: number;
  quantidade_vendas_masculino: number;
  quantidade_vendas_feminino: number;
}

interface RealizarVendaProdutoProps {
  seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function RealizarVendaProduto(props: RealizarVendaProdutoProps) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [selectedProduto, setSelectedProduto] = useState<string>('');
  const [selectedProdutoValor, setSelectedProdutoValor] = useState<number>(0);
  const [quantidadeCompra, setQuantidadeCompra] = useState<number>(0);
  const [cpfCliente, setCpfCliente] = useState<string>('');

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:3001/listarProdutos');
        if (response.ok) {
          const data = await response.json();
          setProdutos(data.produtos);
        } else {
          console.error('Erro ao obter a lista de produtos');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchProdutos();
  }, []);

  const handleRealizarVenda = async () => {
    try {
      const response = await fetch('http://localhost:3001/realizarVendaProduto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nomeProduto: selectedProduto,
          valorProduto: selectedProdutoValor,
          quantidadeCompra,
          cpfCliente,
        }),
      });
  
      if (response.ok) {
        console.log('Venda realizada com sucesso');
      } else {
        console.error('Erro ao realizar venda');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  
  const isProdutoNotSelected = selectedProduto === '';
  const isCpfEmpty = cpfCliente.trim() === '';
  const isVendaDisabled = quantidadeCompra <= 0 || isCpfEmpty || isProdutoNotSelected;

  return (
    <div className="row">
      <h2> Realizar Venda de Produto</h2>
      <form className="col s12">
        <div className="row">
            {produtos.map((produto) => (
            <div key={produto.id} className="input-field col s6">
              <label>
                <input
                  name="produto"
                  type="radio"
                  value={produto.nome}
                  checked={selectedProduto === produto.nome}
                  onChange={() => {
                    setSelectedProduto(produto.nome);
                    setSelectedProdutoValor(produto.valor);
                  }}
                  
                />
                <span>{produto.nome}</span>
              </label>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="quantidade_venda"
              type="number"
              className="validate"
              placeholder="Quantidade comprada"
              value={quantidadeCompra}
              onChange={(e) => setQuantidadeCompra(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="cpf_cliente"
              type="text"
              className="validate"
              placeholder="CPF do cliente"
              value={cpfCliente}
              onChange={(e) => setCpfCliente(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button
              className="waves-effect waves-light btn cadastrar-botao botao-customizado"
              type="submit"
              name="action"
              onClick={handleRealizarVenda}
              disabled={isVendaDisabled}
            >
              Realizar Venda
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

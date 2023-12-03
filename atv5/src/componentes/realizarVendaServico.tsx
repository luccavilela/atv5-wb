import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface Servico {
  id: number;
  nome: string;
  valor: number;
  quantidade_vendas: number;
  quantidade_vendas_masculino: number;
  quantidade_vendas_feminino: number;
}

interface RealizarVendaServicoProps {
  seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function RealizarVendaServico(props: RealizarVendaServicoProps) {
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [selectedServico, setSelectedServico] = useState<string>('');
  const [selectedServicoValor, setSelectedServicoValor] = useState<number>(0);
  const [cpfCliente, setCpfCliente] = useState<string>('');

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const response = await fetch('http://localhost:3001/listarServicos');
        if (response.ok) {
          const data = await response.json();
          setServicos(data.servicos);
        } else {
          console.error('Erro ao obter a lista de serviços');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchServicos();
  }, []);

  const handleRealizarVenda = async () => {
    
    try {
      const response = await fetch('http://localhost:3001/realizarVendaServico', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nomeServico: selectedServico,
          valorServico: selectedServicoValor,
          quantidadeCompra: 1,
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
  const isProdutoNotSelected = selectedServico === '';
  const isCpfEmpty = cpfCliente.trim() === '';
  const isVendaDisabled = isCpfEmpty || isProdutoNotSelected;


  return (
    <div className="row">
      <h2> Realizar Venda de Serviço</h2>
      <form className="col s12">
        <div className="row">
            {servicos.map((servico) => (
            <div key={servico.id} className="input-field col s6">
              <label>
                <input
                  name="servico"
                  type="radio"
                  value={servico.nome}
                  checked={selectedServico === servico.nome}
                  onChange={() => {
                    setSelectedServico(servico.nome);
                    setSelectedServicoValor(servico.valor);
                  }}
                  
                />
                <span>{servico.nome}</span>
              </label>
            </div>
          ))}
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

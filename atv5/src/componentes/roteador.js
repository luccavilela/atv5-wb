import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import "../styles.css"
import ListaCliente from "./listaCliente"
import Home from "./home"
import EditarCliente from "./editarCliente"
import TopMaiorConsumoClientes from "./topMaisConsumoClientes";
import TopMenorConsumoClientes from "./topMenorConsumoClientes";
import TopMaiorGastoClientes from "./topMaiorGastoClientes";
import ListaMasculinos from "./listaMasculinos";
import ListaFemininas from "./listaFemininas";
import ListaProdutos from "./listaProdutos";
import EditarProduto from "./editarProduto";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import TopProdutosMaisConsumidos from "./topProdutosMaisConsumidos";
import TopProdutosHomens from "./topProdutosHomens";
import TopProdutosMulheres from "./topProdutosMulheres";
import ListaServicos from "./listaServicos";
import FormularioCadastroServico from "./formularioCadastroServico"
import EditarServico from "./editarServico";
import TopServicosMaisConsumidos from "./topServicosMaisConsumidos";
import TopServicosHomens from "./topServicosHomens";
import TopServicosMulheres from "./topServicosMulheres";
import RealizarVendaProduto from "./realizarVendaProduto"
import RealizarVendaServico from "./realizarVendaServico"
import ListaVendas from "./listaVendas"

export default function Roteador() {
    const [tela, setTela] = useState('Home')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {

        switch (tela) {
            case 'Home':
              return(
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <Home seletorView={seletorView} tema="purple lighten-4" />
                </>
              )
            case 'Clientes':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <ListaCliente seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Cadastrar Cliente':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <FormularioCadastroCliente seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Editar Cliente':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <EditarCliente seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar 10 clientes que mais consumiram':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <TopMaiorConsumoClientes seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar 10 clientes que menos consumiram':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <TopMenorConsumoClientes seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar 5 clientes que mais gastaram':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <TopMaiorGastoClientes seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar clientes masculinos':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <ListaMasculinos seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar clientes femininas':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <ListaFemininas seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Produtos':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <ListaProdutos seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Cadastrar Produto':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <FormularioCadastroProduto seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Editar Produto':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <EditarProduto seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar produtos mais consumidos':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <TopProdutosMaisConsumidos seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar produtos mais consumidos por homens':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <TopProdutosHomens seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar produtos mais consumidos por mulheres':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <TopProdutosMulheres seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Serviços':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <ListaServicos seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Cadastrar Serviço':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <FormularioCadastroServico seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Editar Serviço':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <EditarServico seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar serviços mais consumidos':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <TopServicosMaisConsumidos seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar serviços mais consumidos por homens':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <TopServicosHomens seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar serviços mais consumidos por mulheres':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <TopServicosMulheres seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Venda de Produtos':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <RealizarVendaProduto seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Venda de Serviços':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <RealizarVendaServico seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Histórico de Vendas':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Venda de Produtos', 'Venda de Serviços', 'Histórico de Vendas']} />
                  <ListaVendas seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
                  
        }
    }

    return (
        construirView()
    )
}
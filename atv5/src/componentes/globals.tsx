let NomeProdutoEditar = "";
let ValorProdutoEditar = 0;
let NomeServicoEditar = "";
let ValorServicoEditar = 0;

export const setNomeProdutoEditar = (nome: string) => {
    NomeProdutoEditar = nome;
}

export const setValorProdutoEditar = (valor: number) => {
    ValorProdutoEditar = valor;
}

export const setNomeServicoEditar = (nome: string) => {
    NomeServicoEditar = nome;
}

export const setValorServicoEditar = (valor: number) => {
    ValorServicoEditar = valor;
}

export { NomeProdutoEditar, ValorProdutoEditar, NomeServicoEditar, ValorServicoEditar };
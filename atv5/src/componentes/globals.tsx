let NomeProdutoEditar = "";
let ValorProdutoEditar = 0;
let NomeServicoEditar = "";
let ValorServicoEditar = 0;
let NomeClienteEditar = "";
let NomeSocialClienteEditar = "";
let TelefoneClienteEditar = "";
let EmailClienteEditar = "";

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

export const setNomeClienteEditar = (nome: string) => {
    NomeClienteEditar = nome;
}

export const setNomeSocialClienteEditar = (nome_social: string) => {
    NomeSocialClienteEditar = nome_social;
}

export const setTelefoneClienteEditar = (telefone: string) => {
    TelefoneClienteEditar = telefone;
}

export const setEmailClienteEditar = (email: string) => {
    EmailClienteEditar = email;
}

export { NomeProdutoEditar, ValorProdutoEditar, NomeServicoEditar, ValorServicoEditar, NomeClienteEditar, NomeSocialClienteEditar, TelefoneClienteEditar, EmailClienteEditar };
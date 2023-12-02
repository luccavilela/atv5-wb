import React, { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';

interface FormularioCadastroProdutoProps {
    seletorView: (valor: string, e: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormularioCadastroProduto(props: FormularioCadastroProdutoProps) {
    const [formData, setFormData] = useState({
        nome: '',
        valor: 0
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/cadastrarProduto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                
                console.log('Produto cadastrado com sucesso');
                props.seletorView("Produtos", e);
                
            } else {
                console.error('Erro ao cadastrar produto');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };

    return (
        <div className="row">
            <h2> Cadastro de Produto </h2>
            <form className="col s12" onSubmit={handleSubmit}>
     
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="nome"
                            type="text"
                            className="validate"
                            placeholder="Nome do Produto"
                            value={formData.nome}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="valor"
                            type="number"
                            className="validate"
                            placeholder="Valor do produto"
                            value={formData.valor}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button
                            className="waves-effect waves-light btn cadastrar-botao botao-customizado"
                            type="submit"
                            name="action"
                        >
                            Cadastrar
                            <i className="material-icons right ">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
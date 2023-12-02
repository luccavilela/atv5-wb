import React, { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';

interface FormularioCadastroClienteProps {
    seletorView: (valor: string, e: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormularioCadastroCliente(props: FormularioCadastroClienteProps) {
    const [formData, setFormData] = useState({
        nome: '',
        nome_social: '',
        telefone: '',
        cpf: '',
        email: '',
        genero: 'masculino',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleGeneroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, genero: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/cadastrarCliente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                
                console.log('Cliente cadastrado com sucesso');
                props.seletorView("Clientes", e);
                
            } else {
                console.error('Erro ao cadastrar cliente');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };

    return (
        <div className="row">
            <h2> Cadastro de Cliente </h2>
            <form className="col s12" onSubmit={handleSubmit}>
     
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="nome"
                            type="text"
                            className="validate"
                            placeholder="Nome do Cliente"
                            value={formData.nome}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="nome_social"
                            type="text"
                            className="validate"
                            placeholder="Nome Social do Cliente"
                            value={formData.nome_social}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="telefone"
                            type="text"
                            className="validate"
                            placeholder="Telefone do cliente"
                            value={formData.telefone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="cpf"
                            type="text"
                            className="validate"
                            placeholder="cpf do cliente"
                            value={formData.cpf}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="email"
                            type="email"
                            className="validate"
                            placeholder="Email do Cliente"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <p>
                            <label>
                                <input
                                    name="genero"
                                    type="radio"
                                    value="masculino"
                                    checked={formData.genero === 'masculino'}
                                    onChange={handleGeneroChange}
                                />
                                <span>Gênero Masculino</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    name="genero"
                                    type="radio"
                                    value="feminino"
                                    checked={formData.genero === 'feminino'}
                                    onChange={handleGeneroChange}
                                />
                                <span>Gênero Feminino</span>
                            </label>
                        </p>
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
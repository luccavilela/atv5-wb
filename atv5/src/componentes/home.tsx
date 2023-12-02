import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface HomeProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Home(props: HomeProps) {
    return (
        <div className="collection">
            <h2> Bem vindo à aplicação web da World Beauty ! </h2>
            <h3> Aqui você poderá gerenciar os clientes, produtos e serviços ! </h3>
            <h3> Utilize a navbar para navegação. </h3>
        </div>
    )
}
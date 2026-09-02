import React from 'react'
import {MoveRight} from 'lucide-react'

const Button = ({ acao, estilizacao, nome, icone: Icon = MoveRight }) => {
    Button.defaultProps = {
        acao: () => console.log("Função padrão executada!")
    };

    //colocar estilização padrao

    return (
        <button className={`flex flex-row items-center gap-2 whitespace-nowrap ${estilizacao} p-2 px-3`} onClick={acao}>
            <Icon size={18} />
            {nome}
        </button>
    )
}

export default Button

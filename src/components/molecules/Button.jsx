import React from 'react'

const Button = ({ acao, estilizacao, nome }) => {
    Button.defaultProps = {
        acao: () => console.log("Função padrão executada!")
    };

    //colocar estilização padrao

    return (
        <button className={estilizacao} onClick={acao}>
            {nome}
        </button>
    )
}

export default Button

import React from "react";

export default (props) => {
    return (
        <div className="GerarNumero">
            <button onClick={props.verificaAcerto}>Tentar!</button>
            <button onClick={props.sorteiaNumero}>Sortear Novo Número</button>
        </div>
    );
};

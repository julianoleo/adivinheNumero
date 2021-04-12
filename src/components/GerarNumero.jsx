import React, { useState } from "react";

import "./GerarNumero.css";
import Botao from "./botao"

export default () => {

    const [numero, setNumero] = useState(0)
    const [tentativas, setTentativas] = useState(0);
    const [palpite, setPalpite] = useState('');
    const [num, setNum] = useState(0);

    function sorteiaNumero() {
        setNumero(parseInt(Math.random() * (100 - 1)) + 1);
    }

    function quandoMudar(e) {
        setPalpite(e.target.value)
    }

    function statusGeracao(valor) {
        setNum(valor);
    }

    function verificaAcerto() {
        if (palpite == 0) {
            alert("Favor dar um palpite!")
        } else {
            if (num == 0) {
                sorteiaNumero();
                statusGeracao(1);
            }
            setTentativas(tentativas + 1);
            if (palpite == numero) {
                alert("Vc Acertou !!! em: " + tentativas + " tentativas");
            } else {
                alert("Você ERROU!  Palpite dado: " + palpite);
                alert("Tente Novamente");
                setPalpite('');
            }
        }
    }

    return (
        <div className="GerarNumero">
            <label>Palpite:</label>
            <input type="number" value={palpite} onChange={quandoMudar} />
            <Botao verificaAcerto={verificaAcerto} sorteiaNumero={sorteiaNumero} />
        </div>
    )
}
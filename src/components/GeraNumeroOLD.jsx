import "./GerarNumero.css"

import React, { Component } from "react";
import Botao from './botao'

class GerarNumero extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {pitaco: this.props.pitaco || 0 }
    }

    state = {
        qtdeTentativas: this.props.qtdeTentativas || 0,
        pitaco: this.props.pitaco || 1
    }

    checaPitaco(e) {
        this.setState({
            value: e.target.value
        });
    }

    verificaAcerto = () => {
        const numero = parseInt(Math.random() * (100 - 1)) + 1;
        this.setState({
            qtdeTentativas: this.state.qtdeTentativas + 1
        });
        // console.log(`${this.state.pitaco}`)
        //console.log(numero);
    }

    render() {

        return (
            <div className="GerarNumero">
            <input type="number" id="pitaco" value={this.state.pitaco} onChange={this.checaPitaco}></input>
                <Botao verificaAcerto={this.verificaAcerto}/>
                <span>Quantidade de tentativas: {this.state.qtdeTentativas}</span>
            </div>
        )
    }
}

export default GerarNumero;
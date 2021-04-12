import React from "react";
import '../src/layout/app.css'

import Card from './layout/Card'
import GerarNumero from './components/GerarNumero'

export default () => (
    <div classname="App">
        <div classname="Cards"></div>
        <Card titulo="Adivinhe o Número" color="#1499D3">
            <GerarNumero />
        </Card>
    </div>
)
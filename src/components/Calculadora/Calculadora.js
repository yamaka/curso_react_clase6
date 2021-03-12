import React, { Component } from 'react'
import Boton from '../Boton/Boton';
import Input from '../Input/Input';

import './Calculadora.css'

export default class Calculadora extends Component {
    constructor(props){
        super(props)
        this.state={
            input1:0,
            input2:0,
            resultado:0
        }
        this.mipropiredad = 0;
    }

    onChange1 = (valor) =>{
        console.log("onChange1");
        this.setState({
            input1:valor
        });
    }

    onChange2 = (valor) =>{
        console.log("onChange2");
        this.setState({
            input2:valor
        });
    }

    suma = () =>{
        const {input1, input2} = this.state;
        this.setState({
            resultado: input1 + input2
        })
    }

    resta = () =>{
        const {input1, input2} = this.state;
        this.setState({
            resultado: input1 - input2
        })
    }

    producto = () =>{
        const {input1, input2} = this.state;
        this.setState({
            resultado: input1 * input2
        })
    }

    division = () =>{
        const {input1, input2} = this.state;
        this.setState({
            resultado: input1 / input2
        })
    }


    render() {
        const {input1, input2, resultado} = this.state;
        return (
            <div className="app">
                <h1>Calculadora</h1>
                <div className="contenedor">
                    <Input title="Input 1" value={input1} onChange={this.onChange1}/>
                    &nbsp;
                    <Input title="Input 2" value={input2} onChange={this.onChange2}/>
                    <div className="igual">=</div>
                    <Input title="Resultado" value={resultado}/>
                </div>
                <div className="btns-container">
                    <div className="btns-izquierdo">
                        <Boton title="+" onClick={this.suma}/>
                        <Boton title="-" onClick={this.resta}/>
                        <Boton title="*" onClick={this.producto}/>
                        <Boton title="/" onClick={this.division}/>
                    </div>
                    <div>
                        <Boton title="=" onClick={this.procesar}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

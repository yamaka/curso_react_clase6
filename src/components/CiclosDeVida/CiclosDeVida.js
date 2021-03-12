import React, { Component } from 'react'
import Interfaz1 from '../Interfaz1/Interfaz1'
import Interfaz2 from '../Interfaz2/Interfaz2'

export default class CiclosDeVida extends Component {

    constructor(props){
        super(props)
        this.state={
            titulo:null,
            interfaz1: true,
            interfaz2: false,
            isLoading: null
        }
    };
    
    componentWillMount(){       
        console.log('componentWillMount')
    }

    componentDidMount(){
        // aca se deben hacer las llamadas rest
        this.setState({
            isLoading:true
        }) 

        //await = miservicio();

     
        console.log('componentDidMount')
        this.setState({
            titulo: 'Ciclos de vida react'
        })

        setTimeout(()=>{
            this.setState({
                isLoading: false
            })
        }, 3000)
    }

    componentWillUnmount(){
        console.log('componentWillUnMount')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }


    swap=()=>{
        this.setState({
            interfaz1: !this.state.interfaz1,
            interfaz2: !this.state.interfaz2
        })

    } 


    render() {
        const {titulo, interfaz1, interfaz2, isLoading} = this.state;
        return (
            <>
                {isLoading? (<div>cargando...</div>): <div>
                    <h1>{titulo}</h1>
                    <button onClick={()=> this.swap()}>switch</button>
                    {
                        interfaz1?<Interfaz1/>:interfaz2?<Interfaz2/>:null
                    }
                    
                </div>}
            </>
            
        )
    }
}

import React, { Component } from 'react'

export default class Interfaz2 extends Component {
     componentWillMount(){        
        console.log('componentWillMount Interfaz2')
        
    }
    componentDidMount(){
        // aca se deben hacer las llamadas rest
        console.log('componentDidMount Interfaz2')
       
    }
    componentWillUnmount(){
        console.log('componentWillUnMount Interfaz2')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate Interfaz2')
    }
    render() {
        return (
            <div>
                <h2>Interfaz2</h2>
            </div>
        )
    }
}

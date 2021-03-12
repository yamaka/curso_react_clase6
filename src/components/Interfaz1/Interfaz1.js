import React, { Component } from 'react'

export default class Interfaz1 extends Component {
    componentWillMount(){        
        console.log('componentWillMount Interfaz1')
        
    }
    componentDidMount(){
        // aca se deben hacer las llamadas rest
        console.log('componentDidMount Interfaz1')
        
    }

    componentWillUnmount(){
        console.log('componentWillUnMount Interfaz1')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate Interfaz1')
    }
    render() {
        return (
            <div>
                <h2>Interfaz1</h2>
            </div>
        )
    }
}

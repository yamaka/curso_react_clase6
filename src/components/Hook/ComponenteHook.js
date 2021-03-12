import React, {useState, useEffect} from 'react'

 const  ComponenteHook = (props) => {

    const [titulo, setTitulo] = useState('componente hook2');
    const [subtitulo, setSubtitulo] = useState('subtitulo hook2');
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        // aqui llamar a su API
        console.log('didMount useEffect');
        setTimeout(()=>{
            setIsLoading(false)
        }, 3000)
    },[])

    useEffect(()=>{
        // aqui llamar a su API
        console.log('didMount useEffect');
    },[])

    if(isLoading){
        return <div><p>cargando hook...</p></div>
    }

    return (
        <div>
            <h1>{titulo}</h1>  
            <h2>{subtitulo}</h2>      
        </div>
    )
}

export default ComponenteHook

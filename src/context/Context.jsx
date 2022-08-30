
import React, { children, createContext, useContext, useState } from 'react'
import  { useEffect } from 'react'
import {collection, getDocs , getFirestore } from "firebase/firestore" 
import { useParams } from 'react-router-dom';

export const Context = createContext([])

function MoviesProvider({children}){

    const [movies ,setMovies] = useState([])
  const {id} = useParams()

  useEffect(() =>{
     
   

    const db = getFirestore()
    
    const refcollectionProductos = collection(db , "movies" ) //referencia al documento
    
    getDocs(refcollectionProductos).then((res) => {
    
    let limpios = res.docs
    
    limpios = limpios.map((peliculas)=>{
     
    return ({id: peliculas.id, ...peliculas.data() })   
    })
 
    let completos = limpios.filter((pelicula)=>{
        return pelicula})
   
    limpios = limpios.filter((pelicula)=>{
        return pelicula.id === id
    } )

    if (id){
        setMovies(limpios)

    }else{
        setMovies(completos)
  
    }
 
    })
   
    
},[id])

    return (

        <Context.Provider value={{
            movies
           }}>
    
          {children}
    
        </Context.Provider>
       )
    


}    
    export default MoviesProvider
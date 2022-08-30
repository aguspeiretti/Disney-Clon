import React, { useContext, useEffect, useState } from 'react'
import "./Detail.css"
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

function Detail() {
    const [movie , setMovie] = useState([])
    const { id } = useParams() 

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
            setMovie(limpios)
    
        }else{
            setMovie(completos)
      
        }
     
        })
       
        
    },[id])
    console.log (movie)
    
  return (
    
    <div className='DetailContainer'>
        
        {
            movie.map((mov)=>{
                return(
                    <>
                    <div className='background'>
                       <img src={mov.backgroundImg} alt="" /> 
                    </div>
                    <div className='tituloPeli'>
                        <img src={mov.titleImg} alt="" />
                    </div>
                    <div className='Botones'>
                        <div className='play'>
                            <img src="/images/play-icon-black.png" alt="" />
                            <span>PLAY</span>
                        </div>
                        <div className='trailer'>
                            <img src="/images/play-icon-white.png" alt="" />
                            <span>TRAILER</span>
                        </div>
                        <div className='add'>
                            <span>+</span>
                        </div>
                        <div className='grupo'>
                            <img src="/images/group-icon.png" alt="" />
                        </div>
                    </div>
                    <div className='subtitulo'>
                        {mov.subTitle}
                    </div>
                    <div className='descripcion'>
                        {mov.description}
                    </div>
                    </>
                )

            })
        }

    </div>
  )
}

export default Detail
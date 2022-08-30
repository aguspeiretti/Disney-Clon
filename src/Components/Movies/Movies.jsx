import React, { useContext } from 'react'
import "./Movies.css"
import { Context } from '../../context/Context'
import { Link } from'react-router-dom'


function Movies() {

  const context = useContext(Context)
  const{movies} = context
console.log(movies)
  let filtradoRecommend = movies.filter(movies=> movies.type ==="recommend")
  let filtradoNew = movies.filter(movies=> movies.type ==="new")
  let filtradoOriginal = movies.filter(movies=> movies.type ==="original")
  let filtradoTendencia = movies.filter(movies=> movies.type ==="trending")

  return (
    <div className='moviesContainer'>
      <h4>Recomendadas para ti</h4>      
      <div className='peliculasContainer'>
        {
          filtradoRecommend.map((movie)=>{
            return(
              
              <div key={movie.id}>
                <Link to={`/Detail/${movie.id}`}><img src={movie.cardImg} alt="" /></Link>                
              </div>
            )
          })
        }
      </div>
      <h4>Peliculas Nuevas</h4>      
      <div className='peliculasContainer'>
        {
          filtradoNew.map((movie)=>{
            return(
              
              <div key={movie.id}>
                <Link to={`/Detail/${movie.id}`}><img src={movie.cardImg} alt="" /></Link>                
              </div>
            )
          })
        }
      </div>
      <h4>Pelicula Original</h4>      
      <div className='peliculasContainer'>
        {
          filtradoOriginal.map((movie)=>{
            return(
              
              <div key={movie.id}>
                <Link to={`/Detail/${movie.id}`}><img src={movie.cardImg} alt="" /></Link>                
              </div>
            )
          })
        }
      </div>
      <h4>Tendencias</h4>      
      <div className='peliculasContainer'>
        {
          filtradoTendencia.map((movie)=>{
            return(
              
              <div key={movie.id}>
                <Link to={`/Detail/${movie.id}`}><img src={movie.cardImg} alt="" /></Link>                
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Movies
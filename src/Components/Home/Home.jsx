import React from 'react'
import MiniViews from '../Miniviews/MiniViews'
import Movies from '../Movies/Movies'
import SliderImg from '../Slider/SliderImg'
import Slider from '../Slider/SliderImg'
import "./Home.css"
import  { useEffect, useState } from 'react'
import {collection, getDocs , getFirestore } from "firebase/firestore" 
import { useParams } from 'react-router-dom';

function Home() {
  

  return (

    <div className='HomeContainer'>
        <SliderImg />
        <MiniViews />
        <Movies  />
    </div>
  )

  }
export default Home
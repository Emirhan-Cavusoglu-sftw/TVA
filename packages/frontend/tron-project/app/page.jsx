"use client"
import React from "react";
import { useState } from "react";

  const images = [
   'https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1570051008600-b34baa49e751?q=80&w=1185&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
export default function Home() {

const [index, setIndex] = useState(0);

  
    function nextStep(){
      if (index === images.length - 1) {
        setIndex(0)
        return
      }
      setIndex(index + 1)
    }

    function prevStep(){
      if(index === 0){
        setIndex(images.length - 1)
        return
      }
      setIndex(index - 1)
    }
  

  return (
    <div className="bg-gradient-to-r flex items-center justify-center from-purple-950 to-violet-600 min-h-screen">
      
      <div className="container">
        <div className="slideshow">
          <img src={images[index]} alt="slides" className="slides" />
          <button className="prevButton" onClick={prevStep}>◀</button>
          <button className="nextButton" onClick={nextStep}>▶</button>
        </div>
      </div>

    </div>
  );
}

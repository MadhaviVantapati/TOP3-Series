import React from "react";
import ReactDOM from "react-dom";
import Image from "./Image";




function Card(props){
    //console.log(props);
    return(
        <>
        
  <div className="cards">
    <div className="card">
      <Image imgsrc={props.imgsrc} />
      <div className="card-info">
        <span className="card_category">{props.title}</span>
       
        <h3 className="card_heading">{props.sname}</h3>
        <a href={props.link }target="_blank">
        <button>watch now</button>
        </a>
      </div>


    </div>
    </div>
    </>
    );
};
    

    
    
    












    
export default Card;
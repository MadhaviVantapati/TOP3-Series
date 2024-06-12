/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitagetElementById('root'));
root.render(ls';

const root = ReactDOM.createRoot(document.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css"




ReactDOM.render(
  <>
  
  <h1 className="heading">TOP 3 NETFLIX SERIES</h1>
  {Sdata.map((value)=>{
    return (
    <Card 
    key={value.id}
    imgsrc={value.imgsrc} 
  title={value.title}
   sname={value.sname}
  link={value.link}/>


  );
  
}
)};
  
  {/*<Card imgsrc={Sdata[0].imgsrc} 
  title={Sdata[0].title}
   sname={Sdata[0].sname}
  link={Sdata[1].link}/>

  <Card  imgsrc={Sdata[2].imgsrc}
  title={Sdata[2].title}
  sname={Sdata[2].sname}
   link={Sdata[0].link}/>
 
  <Card imgsrc={Sdata[1].imgsrc}
  title={Sdata[1].title}
  link={Sdata[2].link}/>
  </>,*/}
  </>,
  
  document.getElementById("root")


)


import React from "react";

import skill from './skill.webp'


const Skills = () => {
  return (
    <> 
     <h3 className="titulo">Skills</h3>
    <div className="card-barras">
       
      <div className="container-img">
        <img
          src={skill}
         
          width="120"
          alt=""
        />
      </div>
       
      <div className="container">
      
        <div className="skills html   ">
          <span>HTML  ➡  80% </span> 
        </div>
      </div>
      
      <div className="container">
        <div className="skills css   ">
          <span>CSS ➡ 60%</span>
        </div>
      </div>
   
      <div className="container    ">
        <div className="skills javascript  ">
          <span>JAVASCRIPT➡ 55%</span>
        </div>
      </div>
      
      <div className="container    ">
        <div className="skills react  ">
          <span>REACT➡ 35%</span>
        </div>
      </div>
      
      <div className="container    ">
        <div className="skills plc  ">
          <span>Programacion Automatas.(software: TIA Portal )➡ 70%</span>
        </div>
      </div>
    </div>
</>

  );
};

export default Skills;

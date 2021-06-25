import React from "react";
import htmlIcon from "../src/assets/ui icons/html-5.svg";
import cssIcon from "../src/assets/ui icons/css-3.svg";
import bootstrapIcon from "../src/assets/ui icons/bootstrap.svg";
import jsIcon from "../src/assets/ui icons/javascript.svg";
import materialuiIcon from "./assets/ui icons/material-ui.svg";
import nodejsIcon from "./assets/ui icons/nodejs-icon.svg";
import reactIcon from "./assets/ui icons/react.svg";
import expressjsIcon from "./assets/ui icons/express.svg";
import semanticIcon from "./assets/ui icons/semanticui.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className=" ml-3 mr-1">
        <div className="row">
          <div className="col">
            <h1 className="h1_font mt-5">My Skill Sets-</h1>
           <ul>
               <li><h2 className="h2_font">2 years of hands on experiance in developing the React application.</h2></li>
               <li><h2 className="h2_font">Good knowledge on react design material like Material ui, Semantic ui etc. </h2></li>
               <li><h2 className="h2_font">Good hands on experiance in css like css 3, Bootstrap 5 etc.</h2></li>
               <li><h2 className="h2_font">Strong grip on javascript scripting language.</h2></li>
               <li><h2 className="h2_font">Good knowledge in express js to build restful API.</h2></li>
               <li><h2 className="h2_font">Good hands on experiance in integrating the restful API into react application.</h2></li>
               <li><h2 className="h2_font">Knowledge of CI/CD(github).</h2></li>
           </ul>
          </div>
          <div className="col-lg-3 mt-5 pt-5 pt-lg-0 order-1 order-lg-2">
            <div className="col">
              <img src={htmlIcon} className="ui_icon my-3" alt="" />

              <img src={cssIcon} className="ui_icon my-3" alt="" />

              <img src={bootstrapIcon} className="ui_icon my-3" alt="" />
            </div>

            <div className="col">
              <img src={materialuiIcon} className="ui_icon my-3" alt="" />

              <img src={jsIcon} className="ui_icon my-3" alt="" />

              <img src={nodejsIcon} className="ui_icon my-3" alt="" />
            </div>
            <div className="col">
              <img src={reactIcon} className="ui_icon my-3" alt="" />

              <img src={expressjsIcon} className="ui_icon my-3" alt="" />
              <img src={semanticIcon} className="ui_icon my-3" alt="" />
            </div>
          </div>
        </div>
        <div className="row" style={{ display:'flex',alignContent:'center',justifyContent:'center'}}>
        <h2 className="h2_font mt-4">Not satisfied<strong className="brand-name">?</strong>want to know more..</h2>
        <Link to="/Prateek_Resume.pdf" target="_blank" download className="h2_font">Download Resume</Link>
        </div>
      </div>
    </>
  );
};
export default About;

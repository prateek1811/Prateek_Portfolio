import React from "react";
import { NavLink } from "react-router-dom";
import myPic from "../src/assets/mypic.jpg";

const Home = () => {
  return (
    <>
      <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row ml-3 mr-1">
            <div className="çol-10 max-auto">
              <div  style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }} className="row">
                <div className="col-md-6 mt-5 pt-5 pt-lg-0 order-1 order-lg-2">
                  <h1 className="h1_font">
                    Welcome to my Portfolio
                   
                  </h1>
                  <h1 className="h1_font">
                    Hi,I am{" "}
                    <strong className="brand-name">Prateek Raj</strong>
                  </h1>
                  <h2 className="my-3 h2_font">
                    A unique and talented web developer for making a website in
                    react library A unique and talented web developer for making
                    a website in react library A unique and talented web
                    developer for making a website in react library
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/About" className=" want_to_know_more">
                      Know more..
                    </NavLink>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                  className="col-lg-6 order-1 order-lg-2 header-img "
                >
                  
                  <img
                    src={myPic}
                    style={{
                        borderStyle: 'double',
                      width: "50%",
                      height: "50%",
                     
                    }}
                    className="img-fluid animated rounded-circle mt-5 border-secondary"
                    alt=""
                  />
                         
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;

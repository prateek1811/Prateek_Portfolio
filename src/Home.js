import React from "react";
import { NavLink } from "react-router-dom";
import myPic from '../src/assets/mypic.jpg'

const Home = () => {
  return (
    <>
      <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="çol-10 max-auto">
                <div className="row">
              <div className="col-md-6 mt-5 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1 className="h1_font">
                  Welcome to my{" "}<strong className="brand-name">Portfolio</strong>
                </h1>
                <h2 className="my-3 h2_font" >
                  A unique and talented web developer for making a website in
                  react library
                </h2>
                <div className="mt-3">
                  <NavLink to="/About" className=" want_to_know_more">
                    Know more..
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={myPic} className="img-fluid animated" />
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

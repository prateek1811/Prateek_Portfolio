import React from "react";

const Contact = () => {
  return (
    <>
      <section id="header">
        <div className="container-fluid nav_bg">
          <div className="row ml-3 mr-1">
            <div className="çol-10 max-auto">
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
                className="row"
              >
                <div className="col-md-6 mt-5 pt-5 pt-lg-0">
                  <h1 className="h1_font">Want to connect with me ?</h1>
                </div>
              </div>

              <div className="row">
                <div
                  className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2"
                  style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ background: "black", width: "75%" }}>
                    <div
                      style={{
                        background: "black",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    >
                      <h1
                        className="mt-5"
                        style={{ color: "white", marginLeft: "10%" }}
                      >
                        You can connect me through...
                      </h1>
                    </div>
                    <h3
                      className="mt-5"
                      style={{ color: "white", marginLeft: "15%" }}
                    >
                      Located at
                    </h3>
                    <div>
                      <h3
                        className="h3_font"
                        style={{ color: "white", marginLeft: "15%" }}
                      >
                        1st Cross, Raika Road
                        <br />
                        K.Narayanapura, Kothnur
                        <br />
                        Bangalore-560077
                      </h3>
                    </div>
                    <h3
                      className="mt-5"
                      style={{ color: "white", marginLeft: "15%" }}
                    >
                      Message me
                    </h3>
                    <div>
                      <h3
                        className="h3_font"
                        style={{ color: "white", marginLeft: "15%" }}
                      >
                        <a
                          className="h3_font"
                          target="_top"
                          href="mailto:prtkraj03@gmail.com"
                        >
                          prtkraj03@gmail.com
                        </a>
                      </h3>
                    </div>
                    <div>
                      <h3
                        className="h3_font"
                        style={{ color: "white", marginLeft: "15%" }}
                      >
                        <a
                          className="h3_font"
                          target="_top"
                          href="tel:(+91)8409095004"
                        >
                          (+91)8409095004
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-5 pt-5 pt-lg-0 order-1 order-lg-2 my-5 border">
                  <h3 className="mx-5">Send me a message</h3>
                  <div className="mb-3 mx-5">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                    />
                  </div>
                  <div className="mb-3 mx-5">
                    <label
                      for="exampleFormControlInput2"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3 mx-5">
                    <label
                      for="exampleFormControlInput3"
                      className="form-label"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput3"
                    />
                  </div>
                  <div className="mb-3 mx-5">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Your message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Write your message here.."
                    ></textarea>
                  </div>
                  <div className="d-row gap-2 mb-3 mx-5">
                    <button type="button" className="btn btn-outline-primary ">
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;

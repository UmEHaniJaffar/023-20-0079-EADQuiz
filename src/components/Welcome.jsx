import React from "react";
import img1 from "../assets/images/img1.png";

function Welcome() {
  return (
    <div
      className="row"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="col-8 text-white d-flex justify-content-center  align-items-center flex-column ">
        <p className="fs-1 fw-bold w-50 text-light">
          Discover, collect, and charity in extraordinary NFT marketplace
        </p>
        <p className="fs-5 w-50 text-light">
          In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus
          vestibulum nibh mi venenatis
        </p>
        <div className="d-flex justify-content-start align-items-center col-6">
          <button type="button" class="btn btn-light col-3" style={{backgroundColor:"#9B51E0"}}>
            Explore
          </button>
          <div className="col-1"></div>
          <button type="button" class="btn btn-dark col-3 outline-light" > 
            Create
          </button>
        </div>
      </div>
      <div className="col-4 d-flex justify-content-center align-items-center ">
        <img height={400} width="auto" src={img1} alt="Welcome Card" />
      </div>
    </div>
  );
}

export default Welcome;

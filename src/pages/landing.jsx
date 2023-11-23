import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Landing() {
  return (
    <>
      <Header />

      {/* Hero section of the page */}
      <div>
        <h1 className="text-3xl font-bold underline">hell0.world!</h1>
        <p>
          We are a technology-driven student-led innovation at Thdc-Ihet <br />
          Our aim is to foster developement and other holistic skills among
          students..
        </p>
        <h2>INTRODUCTION</h2>
        {/* Video card */}
        <div className="w-20 h-10 border">card</div>
      </div>

      <hr />

      {/* Working areas */}
      <div>
        <h2>OUR FOCUS</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto a
          iure tenetur aut! Quo odio explicabo voluptas error voluptate optio!
          Fuga dolores saepe pariatur earum.
        </p>
        {/* card sections */}
        <div>
          <div className="card1">
            <div className="w-20 h-10 border">card</div>
          </div>
          <div className="card2">
            <div className="w-20 h-10 border">card</div>
          </div>
          <div className="card3">
            <div className="w-20 h-10 border">card</div>
          </div>
        </div>
      </div>

      {/* Update section */}
      <div className="mt-8">
        <h2>UPDATES</h2>
        <p className="ml-[47%] w-20 h-10 border">card</p>
        <p>hello</p>
      </div>

      {/* Footer section */}
      <Footer />
    </>
  );
}

export default Landing;

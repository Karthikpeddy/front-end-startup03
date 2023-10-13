import React from "react";
import { MiddleDarkOutline } from "../../components/MiddleDarkOutline";
import { MiddleFill } from "../../components/MiddleFill";
import { White } from "../../components/White";
import { On } from "../../icons/On";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="div">
        <div className="sign-up-form">
          <div className="overlap-group">
            <div className="text-wrapper-2">Sign In</div>
            <p className="do-you-have-an-accou">Do you have an Account?</p>
            <MiddleFill className="middle-fill-instance" signUpClassName="middle-fill-2" text="Login via Twitter" />
            <MiddleFill className="middle-fill-3" signUpClassName="middle-fill-4" text="Sign In" />
            <div className="divider-or">
              <img className="divider" alt="Divider" src="https://c.animaapp.com/lI95sPWm/img/divider.svg" />
              <div className="text-wrapper-3">or</div>
              <img className="img" alt="Divider" src="https://c.animaapp.com/lI95sPWm/img/divider-1.svg" />
            </div>
            <div className="checkbox-checked">
              <p className="checked">I agree to the Terms of Service.</p>
              <On className="on-1" />
            </div>
            <MiddleDarkOutline className="middle-dark-outline-instance" text="Your password" />
            <MiddleDarkOutline className="middle-dark-outline-2" text="Your email" />
            <div className="sign-up-2">Sign Up Now</div>
          </div>
        </div>
        <div className="text">
          <p className="the-most-important-p">
            The most important part of the Startup is the samples. The samples form a set of 25 usable pages you can use
            as is or you can add new blocks.
          </p>
          <MiddleFill className="middle-fill-5" signUpClassName="middle-fill-6" text="Learn More" />
          <div className="twenty-five-awesome">Generate Awesome Web Pages</div>
        </div>
        <div className="header-menu">
          <div className="navbar">
            <MiddleFill className="middle-fill-7" signUpClassName="middle-fill-8" text="Purchase" />
            <div className="text-wrapper-4">Feedback</div>
            <div className="text-wrapper-5">Blog</div>
            <div className="text-wrapper-6">Prices</div>
            <div className="about">Overview</div>
          </div>
          <White className="white-instance" />
        </div>
      </div>
    </div>
  );
};

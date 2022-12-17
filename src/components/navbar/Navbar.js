import React,{Fragment, useState} from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../../assets/logo.svg";

const Menu=()=>{
    return(
      <Fragment>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#gpt3">What is GPT3?</a>
    </p>
    <p>
      <a href="#ai">Open AI</a>
    </p>
    <p>
      <a href="#caseStudies">Case Studies</a>
    </p>
    <p>
      <a href="#library">Library</a>
    </p>
  
  </Fragment>
    )
}
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
        <Menu></Menu>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
      {toggle
        ? <RiCloseLine color="#fff" size={27} onClick={() => settoggle(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => settoggle(true)} />}
      {toggle && (
      <div className="gpt3__navbar-menu_container scale-up-center">
        <div className="gpt3__navbar-menu_container-links">
         <Menu></Menu>
        </div>
        <div className="gpt3__navbar-menu_container-links-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
      </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;

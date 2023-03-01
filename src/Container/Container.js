import React from "react";
import "./Container.css";
import twitter from "./../Assets/Images/Vector (1).png";
import linkedin from "./../Assets/Images/Vector.png";
import be from "./../Assets/Images/Vector (3).png";
import ball from "./../Assets/Images/Vector (4).png";
import menu from "./../Assets/Images/menu-icon.png";
import audrey from "./../Assets/Images/audrey.png";

const Container = () => {
  return (
    <div className="main-container">
      <div className="logo-ctn">
        <a href="/" className="menu-ctn">
          <img src={menu} alt="menu" />
        </a>
        <a href="/" className="logo">
          AUDREY OJI
        </a>
      </div>
      <ul className="social-icons">
        <li className="social-icon-item">
          <a href="/" className="social-icon-link">
            <img src={linkedin} alt="linkedIn" className="social-img" />
          </a>
        </li>
        <li className="social-icon-item">
          <a href="/" className="social-icon-link">
            <img src={twitter} alt="twitter" className="social-img" />
          </a>
        </li>
        <li className="social-icon-item">
          <a href="/" className="social-icon-link">
            <i className="fab fa-instagram social-icon"></i>
          </a>
        </li>
        <li className="social-icon-item">
          <a href="/" className="social-icon-link">
            <img src={be} alt="be" className="social-img" />
          </a>
        </li>
        <li className="social-icon-item">
          <a href="/" className="social-icon-link">
            <img src={ball} alt="ball" className="social-img" />
          </a>
        </li>
      </ul>
      <nav class="first-nav">
        <ul class="first-nav-list">
          <li class="first-nav-item first-nav-ctn">
            <a href="/" class="first-nav-lin">
              Home
            </a>
          </li>
          <li class="first-nav-item second-nav-ctn">
            <a href="#products-ctn" class="first-nav-lin">
              Products
            </a>
          </li>
          <li class="first-nav-item third-nav-ctn">
            <a href="#about-me-ctn" class="first-nav-lin">
              About Me
            </a>
          </li>
          <li class="first-nav-item fourth-nav-ctn">
            <a href="#contact-me-ctn" class="first-nav-lin">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
      <div className="ring-ctn">
        <div className="ring-one"></div>
        <div className="ring-two"></div>
        <div className="ring-three"></div>
      </div>
      <div className="main-ctn">
        <div className="header-ctn">
          <div className="header-ring-ctn">
            <div className="ring-one"></div>
            <div className="ring-two"></div>
            <div className="ring-three"></div>
          </div>
          <div className="header-name">
            <h2>Audrey Oji</h2>
            <div className="profile-img-ctn">
              <img src={audrey} alt="profile" />
            </div>
          </div>
          <div className="header-title">
            <h2>Product Designer </h2>
          </div>
        </div>
        <div className="header-paragraph">
          <p>
            Hello there! <span className="unique">I’m Audrey</span> an ardent
            and talented <span className="unique">Product designer</span> with
            years of experience in creating functional and visually pleasing
            designs & digital products. I’m all about{" "}
            <span className="unique">turning broad problems simple</span> &
            improving user experience through{" "}
            <span className="unique">innovation</span>.
          </p>
        </div>
      </div>
      <div className="ring-ctn-two">
        <div className="ring-one"></div>
        <div className="ring-two"></div>
        <div className="ring-three"></div>
      </div>
      <div className="project-header-ctn">
        <p className="project-title-one">Showcased</p>
        <p className="project-title-two">Projects</p>
      </div>
    </div>
  );
};

export default Container;

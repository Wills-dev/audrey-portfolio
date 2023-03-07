import React from "react";
import "./Container.css";
import twitter from "./../Assets/Images/Vector (1).png";
import linkedin from "./../Assets/Images/Vector.png";
import be from "./../Assets/Images/Vector (3).png";
import ball from "./../Assets/Images/Vector (4).png";
import menu from "./../Assets/Images/menu-icon.png";
import audrey from "./../Assets/Images/audrey.png";
import ProjectOne from "./../Assets/Images/project-one.png";
import ProjectTwo from "./../Assets/Images/project-two.png";
import ProjectThree from "./../Assets/Images/project-three.png";
import ProjectFour from "./../Assets/Images/project-four.png";
import ProjectFive from "./../Assets/Images/project-five.png";
import ProjectSix from "./../Assets/Images/project-six.png";
import audreytwo from "./../Assets/Images/profile-two-removebg-preview.png";
import style from "./../Assets/Images/Vector22.png";

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
      <nav className="first-nav">
        <ul className="first-nav-list">
          <li className="first-nav-item first-nav-ctn">
            <a href="/" className="first-nav-lin">
              Home
            </a>
          </li>
          <li className="first-nav-item second-nav-ctn">
            <a href="#products-ctn" className="first-nav-lin">
              Products
            </a>
          </li>
          <li className="first-nav-item third-nav-ctn">
            <a href="#about-me-ctn" className="first-nav-lin">
              About Me
            </a>
          </li>
          <li className="first-nav-item fourth-nav-ctn">
            <a href="#contact-me-ctn" className="first-nav-lin">
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
      <div className="project-header-ctn" id="products-ctn">
        <p className="project-title-one">Showcased</p>
        <p className="project-title-two">Projects</p>
      </div>
      <div className="ring-ctn-three">
        <div className="ring-one"></div>
        <div className="ring-two"></div>
        <div className="ring-three"></div>
      </div>
      <div className="project-ctn">
        <div className="projects project-one">
          <img src={ProjectOne} alt="Exam Africa project" />
          <h4>Exam Africa Project</h4>
          <p>Website And Web app design</p>
        </div>
        <div className="projects project-two">
          <img src={ProjectTwo} alt="Sovereign Trust Insurance Project" />
          <h4>Sovereign Trust Insurance Project</h4>
          <p>Web App design</p>
        </div>
        <div className="projects project-three">
          <img src={ProjectThree} alt="Exams Africa" />
          <h4>Exams Africa</h4>
          <p>Mobile design</p>
        </div>
        <div className="projects project-four">
          <img src={ProjectFour} alt="Exam Africa project" />
          <h4>Traders Of Africa Project</h4>
          <p>Website design</p>
        </div>
        <div className="projects project-five">
          <img src={ProjectFive} alt="Exam Africa project" />
          <h4>Sovereign Trust Insurance Project</h4>
          <p>Mobile app design</p>
        </div>
        <div className="projects project-six">
          <img src={ProjectSix} alt="Exam Africa project" />
          <h4>Oasis</h4>
          <p>Mental health therapy casestudy</p>
        </div>
      </div>
      <div className="about-me-ctn" id="about-me-ctn">
        <div className="about-me-title-ctn">
          <div className="title-one">
            <h4>About</h4>
          </div>
          <div className="title-two">
            <h4> Me</h4>
          </div>
        </div>
        <div className="blue-line-ctn">
          <div className="blue-line">
            <div className="star">
              <img src={style} alt="stars" />
            </div>

            <img src={audreytwo} alt="profile" />
          </div>
        </div>
        <div className="about-me-content-ctn">
          <div className="about-me-content-wrapper">
            <span className="quote">“</span>
            <p>
              I’m audrey oluchi oji. A product designer from Nigeria, I started
              out as a curious soul in Tech learning about User interface &
              experience design, my background in research really helped out (I
              studied & attained a B.Sc clinical pharmacology decree). After
              some time I ended up diving deeper than UI/UX into the vast world
              of Product design. A huge part of my story as a designer comes
              from learning and relearning every single day and always taking a
              leap to do something innovative.
            </p>
            <span className="quote-two">“</span>
          </div>
          <div className="about-me-content-button">
            <a href="/">
              <button>
                Download my resume <i className="fas fa-chevron-down"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;

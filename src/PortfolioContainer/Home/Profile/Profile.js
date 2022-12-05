import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100007597307697">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.instagram.com/mrmasukmia/">
                <i className="fa fa-instagram" />
              </a>
              <a href="#">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://twitter.com/mrmasukmia">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Masuk Mia </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full stack Developer",
                    500,
                    "software engineer ",
                    500,
                    "Mern stack Developer",
                    500,
                    "Cross Platform Developer",
                    500,
                    "UI/UX Designer",
                    500,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              A software engineer with a passion for building beautiful design and development.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn btn-info"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="mm.pdf" download="mm.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

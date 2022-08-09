import React from "react";
import myResume from "../../assets/files/Lindsey_Martin_Resume_2022.pdf";
import { BsCloudDownload } from "react-icons/bs";
// import { Col, Row } from "react-bootstrap";

function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={myResume} className="download-logo" download>
                <BsCloudDownload />
              </a>
              <p>
                Please take a minute to review my list of developer
                proficiencies
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* // This is the resume language */}
      <section id="home-page-body" className="resume-body">
        <div className="article column1">
          {/* <p><img src="./assets/images/streamline-icon-food-delivery-service-ordering@48x48.PNG"></p> */}
          <p className="column-title">Delivery</p>
          <p className="column-text">
            You have two options when ordering online. You can order directly
            from <a href="menu.html">our online menu </a>and pick up your order
            or you can use Postmates to have your order delivered (Postmates
            delivery fee extra).
          </p>
        </div>

        <div className="article column2">
          {/* <p><img src="./assets/images/streamline-icon-ai-robot-waiter@48x48.PNG"></p> */}

          <p className="column-title">Catering</p>
          <p className="column-text">
            We cater for big and small events and everything in between. You
            have the option of picking up your order, having it delivered or we
            can provide full service catering for your special occasion.
          </p>
        </div>
        <div className="article column3">
          {/* <p><img src="./assets/images/streamline-icon-soft-drinks-glass-ice@48x48.PNG"></p> */}
          <p className="column-title">Sunday Brunch</p>
          <p className="column-text">
            Don't miss a game this season by joining us for our NFL Sunday
            Brunch! Game Day Brunch Calendar with food and drink specials will
            be available during the entire NFL football season!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Resume;

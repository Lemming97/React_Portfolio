import React from "react";
import homeBrewImage from "../../assets/small/HomeBrew.png";
import summerPunchImage from "../../assets/small/Summer_Punch.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://lemming97.github.io/02-Challenge-Horiseon/">
                <img
                  src="../Advanced-CSS-Challenge-1/Assets/images/Horiseon.png"
                  alt="image of Horiseon's hero image"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Horiseon</h4>
              <p>
                A codebase that follows accessibility standards in order for the
                site to be optimized for search engines.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://lemming97.github.io/Run_Buddy/">
                <img
                  src="../Advanced-CSS-Challenge-1/Assets/images/Run_Buddy.png"
                  alt="image of Run Buddy's hero image"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Run Buddy</h4>
              <p>A website that offers fitness training services.</p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://lemming97.github.io/Project_1/">
                {" "}
                <img
                  src={summerPunchImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="SummerPunch"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Summer Punch</h4>
              <p>
                A website which offers users to input a drink name to have the
                ingredients, measurements, and images display. The user can also
                have a cocktail generated. If the user is too young, the user
                will be redirected to another page.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://floating-island-17357.herokuapp.com/">
                {" "}
                <img
                  src={homeBrewImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="HomeBrew"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>HomeBrew</h4>
              <p>
                A plant blog that allows the user to view seasonal gallery of
                plants after the user logs into their account. The user can also
                add comments to the blog once they are logged in as well as
                deleting their comments.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;

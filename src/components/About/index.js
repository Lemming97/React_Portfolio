import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, my name is Lindsey Martin. I am currently 31 living in Los
            Angeles. I have a B.A. in Psychology with a concentration in
            Neuroscience from the University of San Francisco, and graduated in
            2016. I moved up to San Francisco for college and ended up staying
            in the city after college. I was living in the city really until
            COVID, but when the city shut down I started going back and forth
            between Los Angeles and San Francisco. My family is in Southern
            California, so it was nice to be able to spend time with them. When
            I'm not working, I like to spend my time being active. I like going
            for long walks with my dogs as well as small hikes with friends. I
            love to exercise and try to do some form of exercise daily that can
            range from pilates, weight training, yoga, or a hot HIIT class.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

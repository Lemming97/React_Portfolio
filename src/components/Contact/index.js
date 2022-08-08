import React from "react";

function Contact() {
  //need to include validateEmail from helpers function

  //rerender the page
  return (
    <div>
      <section id="contact-me" className="reach-out">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Contact Me</h2>
        </div>
        <div className="contact-info">
          <div>
            <h3>Feel free to contact me via the following pathways:</h3>
            <p>
              Any questions or concerns with your order?
              <br />
              Let us know and we'll be happy to talk to you!
            </p>
            <address>
              <ul id="contact-list">
                <p>
                  <li>
                    <a href="https://github.com/Lemming97">Github</a>
                  </li>
                  <li>
                    <a href="https://open.spotify.com/playlist/0A1mKAUFXo0A8h4aRKpGwV?si=9fc3f59a67854c69">
                      Spotify
                    </a>
                  </li>
                  <li>
                    {" "}
                    Phone: <a href="tel:555.786.2839">(555.786.2839)</a>
                  </li>
                  <li>
                    {" "}
                    Email:{" "}
                    <a href="mailto://martinlindsey87@yahoo.com">
                      Martinlindsey87@yahoo.com
                    </a>
                  </li>
                </p>
              </ul>
            </address>
          </div>
        </div>

        <div className="contact-form">
          <h3>Contact Us</h3>
          <form>
            <label for="contact-name">Your Name</label>
            <input type="text" id="contact-name" placeholder="Your Name" />

            <label for="contact-message">Message</label>
            <textarea id="contact-message" placeholder="Message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;

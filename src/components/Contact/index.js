import React from "react";

function Contact() {
  return (
    <div>
      <section id="contact-me" className="reach-out">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Contact Me</h2>
        </div>
        <div className="contact-info">
          <div>
            <h3>Feel free to contact me via the following pathways:</h3>
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
      </section>
    </div>
  );
}

export default Contact;

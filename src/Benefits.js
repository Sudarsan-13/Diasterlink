import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="benefits-section">
      <div className="container">
        <div className="benefits-header">
          <h3 className="benefits-title">Benefits of Our App</h3>
          <h2 className="explore-heading">explore our benefits</h2>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="cards-container">
              {Array(4)
                .fill()
                .map((_, index) => (
                  <div key={index} className="card">
                    <div className="card-header">
                      <div className="card-image">
                        <img src="/Assets/playstore.png" alt="icon" />
                      </div>
                      <h4 className="card-title">Card Title {index + 1}</h4>
                    </div>
                    <p className="card-description">
                      Stay updated with immediate notifications for ongoing
                      disasters. Get information instantly when a natural
                      disaster occurs near you.
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

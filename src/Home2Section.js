import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal"; // Import ScrollReveal
import "./Home2Section.css";

const Home2Section = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px", // Distance to move
      duration: 800, // Duration of the animation
      delay: 200, // Delay between animations
      reset: true, // Reset animation when scrolling back
    });

    // Reveal settings for each section
    sr.reveal(".left-images", { origin: "left" });
    sr.reveal(".large-image, .section-heading", { origin: "right" });
    sr.reveal(".text-section", { origin: "top" });
    sr.reveal(".feature-item", { origin: "top", interval: 200 }); // Delay for each feature item
  }, []);

  return (
    <div className="home2-section container py-5">
      <div className="image-section d-flex flex-wrap justify-content-center">
        {/* First column with three images */}
        <div className="left-images d-flex flex-column">
          <img
            src="/Assets/Image1.png"
            alt="Feature 1"
            className="image-style mb-3"
          />
          <img
            src="/Assets/Image2.png"
            alt="Feature 2"
            className="image-style mb-3"
          />
          <img
            src="/Assets/Image3.png"
            alt="Feature 3"
            className="image-style mb-3"
          />
        </div>
        {/* Second column with the large image */}
        <div className="large-image">
          <img
            src="/Assets/Image4.png"
            alt="Large Feature"
            className="image-style large-image-style mb-3"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-section mt-lg-5 mt-sm-0">
        <p>Key Features</p>
        <h3 className="font-weight-bold section-heading">
          Key Features of Our Application:
        </h3>

        {/* Feature descriptions */}
        <div className="feature-item">
          <h4 className="feature-heading">1. Real-Time Alerts</h4>
          <p className="feature-description">
            Stay informed with instant alerts on natural disasters in your area.
          </p>
        </div>
        <div className="feature-item">
          <h4 className="feature-heading">2. Interactive Maps</h4>
          <p className="feature-description">
            Navigate disaster zones with precision, track affected areas, and
            plan your response effectively.
          </p>
        </div>
        <div className="feature-item">
          <h4 className="feature-heading">3. Data Insights & Analytics</h4>
          <p className="feature-description">
            Analyze trends and predict potential disasters with AI-driven
            insights.
          </p>
        </div>
        <div className="feature-item">
          <h4 className="feature-heading">4. Custom Notifications</h4>
          <p className="feature-description">
            Receive only the alerts you need. Customize notifications based on
            disaster type and location.
          </p>
        </div>
        <div className="feature-item">
          <h4 className="feature-heading">5. Community Support</h4>
          <p className="feature-description">
            Connect with emergency services and neighbors to coordinate relief
            efforts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home2Section;

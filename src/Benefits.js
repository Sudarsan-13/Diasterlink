import React, { useEffect, useRef } from "react";
import "./Benefits.css";

const Benefits = () => {
  const cardData = [
    {
      title: "Instant Real-Time Alerts for easy execution",
      description:
        "Stay updated with immediate notifications for ongoing disasters. Get information instantly when a natural disaster occurs near you. Always be prepared and aware.",
      icon: "/Assets/alert-icon.png",
    },
    {
      title: "Accurate Predictive Analytics",
      description:
        "Stay updated with immediate notifications for ongoing disasters. Get information instantly when a natural disaster occurs near you. Always be prepared and aware.",
      icon: "/Assets/predictive-icon.png",
    },
    {
      title: "Interactive Maps for Easy Navigation",
      description:
        "Stay updated with immediate notifications for ongoing disasters. Get information instantly when a natural disaster occurs near you. Always be prepared and aware.",
      icon: "/Assets/maps-icon.png",
    },
    {
      title: "Customizable Alerts and Preferences",
      description:
        "Stay updated with immediate notifications for ongoing disasters. Get information instantly when a natural disaster occurs near you. Always be prepared and aware.",
      icon: "/Assets/preferences-icon.png",
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      const cloneCards = () => {
        // Clone the cards to create an infinite loop effect
        const cards = Array.from(container.children);
        cards.forEach((card) => {
          const clone = card.cloneNode(true);
          container.appendChild(clone);
        });
      };
      cloneCards();
    }
  }, []);

  return (
    <div className="benefits-section">
      <div className="container">
        <div className="benefits-header">
          <h3 className="benefits-title">Benefits of Our App</h3>
          <h2 className="explore-heading">Explore our benefits</h2>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="cards-wrapper">
              <div className="cards-container" ref={containerRef}>
                {cardData.map((card, index) => (
                  <div key={index} className="card">
                    <div className="card-header">
                      <h4 className="card-title">{card.title}</h4>
                      <div className="card-image">
                        <img src={card.icon} alt="icon" />
                      </div>
                    </div>
                    <p className="card-description">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

import React, { useEffect, useRef } from "react";
import "./Benefits.css";

const Benefits = () => {
  const cardData = [
    {
      title: "Instant Real-Time Alerts",
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
  const animationFrameId = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollPosition = 0;
    const speed = 1; // Adjust the speed for scrolling

    const isMobile = window.innerWidth <= 768; // Mobile detection

    // Scroll animation for larger screens only
    if (!isMobile) {
      const scrollCards = () => {
        scrollPosition += speed;
        if (scrollPosition >= container.scrollWidth - container.clientWidth) {
          scrollPosition = 0; // Reset scroll position
        }
        container.scrollLeft = scrollPosition;
        animationFrameId.current = requestAnimationFrame(scrollCards);
      };

      animationFrameId.current = requestAnimationFrame(scrollCards);
    }

    return () => cancelAnimationFrame(animationFrameId.current); // Cleanup
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

                {/* Clone the cards for infinite scroll */}
                {cardData.map((card, index) => (
                  <div key={index + cardData.length} className="card">
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

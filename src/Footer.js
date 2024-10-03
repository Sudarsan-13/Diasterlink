import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Left Section */}
        <div style={styles.footerLeft}>
          <h2 style={styles.title}>Let’s start now</h2>
          <p style={styles.description}>
            At Disaster Guardian, our mission is to equip communities with the
            tools they need to stay informed, prepared, and protected. We’re
            driven by the belief that knowledge saves lives.
          </p>
          <div style={styles.appButtons}>
            <a href="#hi" style={styles.appButton}>
              <img
                src="/Assets/playstore.png"
                alt="Google Play"
                style={styles.appIcon}
              />
              <span style={styles.appText}>Google Play</span>
            </a>
            <a href="#" style={styles.appButton}>
              <img
                src="/Assets/appstore.png"
                alt="App Store"
                style={styles.appIcon}
              />
              <span style={styles.appText}>App Store</span>
            </a>
          </div>
        </div>

        {/* Vertical Line */}
        <div style={styles.verticalLine}></div>

        {/* Right Section */}
        <div style={styles.footerRight}>
          <h3 style={styles.linksTitle}>Useful Links</h3>
          <ul style={styles.linksList}>
            <li>
              <a href="#" style={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="#" style={styles.link}>
                Features
              </a>
            </li>
            <li>
              <a href="#" style={styles.link}>
                How it works
              </a>
            </li>
            <li>
              <a href="#" style={styles.link}>
                About us
              </a>
            </li>
            <li>
              <a href="#" style={styles.link}>
                Benefits
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

// Inline Styles
const styles = {
  footer: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Ensure no overflow
  },
  footerContainer: {
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
    overflow: "hidden", // Hide overflow within the container
  },
  footerLeft: {
    maxWidth: "600px",
    flex: "1 1 300px",
    margin: "20px",
  },
  title: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "50px",
    fontWeight: "700",
    lineHeight: "75px",
    color: "#4CAF50",
  },
  description: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "28px",
    width: "100%",
    color: "#FFFFFFBF",
  },
  appButtons: {
    display: "flex",
    gap: "10px",
  },
  appButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    backgroundColor: "black",
    padding: "10px",
    textDecoration: "none",
    flex: "1 1 200px",
  },
  appIcon: {
    width: "29px",
    height: "33px",
    marginRight: "10px",
  },
  appText: {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: "500",
    color: "#fff",
  },
  verticalLine: {
    width: "3px",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: "10px 0 0 0",
    opacity: 1,
    margin: "20px",
  },
  footerRight: {
    maxWidth: "400px",
    flex: "1 1 300px",
    margin: "20px",
  },
  linksTitle: {
    fontFamily: "Poppins",
    fontSize: "30px",
    fontWeight: "700",
    textAlign: "left",
    lineHeight: "55px",
  },
  linksList: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "400",
    padding: 0,
    listStyleType: "none",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    marginBottom: "10px",
    display: "block",
  },
};

// Responsive Styles with Media Queries
const mediaQueries = {
  "@media (max-width: 900px)": {
    footerContainer: {
      flexDirection: "column", // Stack sections vertically
      alignItems: "center",
      overflow: "hidden", // Hide overflow
    },
    appButtons: {
      display: "flex",
      justifyContent: "center", // Keep buttons parallel
      gap: "5px", // Adjust gap for smaller screens
    },
    title: {
      fontSize: "25px", // Further reduce title size below 500px
    },
    description: {
      fontSize: "12px", // Reduce description font size for smaller screens
    },
    appButton: {
      width: "100px", // Adjust width for smaller buttons
      height: "40px", // Adjust height for smaller buttons
      padding: "5px", // Adjust padding for smaller buttons
    },
    appText: {
      fontSize: "14px", // Decrease app text size
    },
    link: {
      fontSize: "14px", // Decrease link size for smaller screens
      marginBottom: "5px", // Adjust space below links
    },
    verticalLine: {
      display: "none", // Hide vertical line on small screens
    },
  },
};

export default Footer;

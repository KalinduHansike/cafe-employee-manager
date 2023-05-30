import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

export default function home(props) {
  const styles = {
    container: {
      backgroundColor: "#f2f2f2",
      padding: "20px",
    },
    heading: {
      color: "#333",
    },
    paragraph: {
      color: "#666",
    },
    buttonStyles: {
      fontSize: "18px",
      padding: "12px 24px",
      backgroundColor: "#4684e8",
      color: "white",
      borderRadius: "4px",
    },
    buttonGroup: {
      flexDirection: "row",
      display: "flex",
      marginLeft: 200,
      justifyContent: "space-between",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Home Page</h1>
      <p style={styles.paragraph}>This is the content of the home page.</p>

      <div className={styles.buttonGroup}>
        <Link to="/cafes">
          <Button
            variant="contained"
            color="primary"
            style={styles.buttonStyles}
          >
            Cafes
          </Button>
        </Link>
        <Link to="/employees">
          <Button
            variant="contained"
            color="primary"
            style={styles.buttonStyles}
          >
            Employees
          </Button>
        </Link>
      </div>
      {/* <button style={styles.buttonStyles} onClick={handleButtonClick}>
        Click Me
      </button> */}
    </div>
  );
}

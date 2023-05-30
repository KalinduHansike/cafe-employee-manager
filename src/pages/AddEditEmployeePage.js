import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormLabel,
  Stack,
} from "@mui/material";
import axios from "axios";
import { getCafesForDropdown } from "../services/api";

const AddEditEmployeePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [value, setValue] = useState("female");

  const [cafe, setCafe] = useState(null);
  const styles = {
    root: {
      display: "flex",
    },
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
      fontSize: "24px",
      padding: "12px 24px",
      backgroundColor: "blue",
      color: "white",
      borderRadius: "4px",
    },
  };

  const handleClick = (event) => {
    if (event.target.value === value) {
      setValue("");
    } else {
      setValue(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5614/api/Employee/CreateEmployee", {
        Id: id,
        Name: name,
        EmailAddress: email,
        PhoneNumber: phoneNumber,
        Gender: value,
      })
      .then((response) => {
        console.log(response);
        navigate("/employees");
      })
      // .then(({ data }) => alert("Yay! it worked"))
      .catch((err) => console.log(err));
  };

  const handleCancel = () => {
    navigate("/employees");
  };

  useEffect(() => {
    fetchCafes();
  }, []);

  const fetchCafes = async () => {
    try {
      const response = await getCafesForDropdown();
      setCafe(response);
    } catch (error) {
      console.log("Error fetching cafes:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        {id ? "Edit Employee" : "Add New Employee"}
      </h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          required
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 4 }}
        />
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            label="Email Address"
            type="email"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Phone Number"
            required
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Stack>
        <FormControl component="fieldset" className={styles.formControl}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            className={styles.group}
            value={value}
          >
            <FormControlLabel
              value="female"
              control={<Radio onClick={handleClick} />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<Radio onClick={handleClick} />}
              label="Male"
            />
          </RadioGroup>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 4 }}>
          <InputLabel>Assigned Café</InputLabel>
          <Select
            value={cafe}
            onChange={(ev) => setCafe(ev.target.value)}
          ></Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="contained" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default AddEditEmployeePage;

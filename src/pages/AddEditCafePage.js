import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { TextField, Button, Container, Stack } from "@mui/material";
import axios from "axios";
import { makeStyles } from "@mui/styles";

const AddEditCafePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [logo, setLogo] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [image, setImage] = useState(null);

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
      fontSize: "24px",
      padding: "12px 24px",
      backgroundColor: "blue",
      color: "white",
      borderRadius: "4px",
    },
    image: {
      height: "100px",
      width: " 100px",
    },
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);

    const MAX_FILE_SIZE = 2048; // 2MB

    if (!selectedFile) {
      alert("Please choose a file");
      setIsSuccess(false);

      event.target.value = null;
      return;
    } else {
      const fileSizeKiloBytes = selectedFile.size / 1024;

      if (fileSizeKiloBytes > MAX_FILE_SIZE) {
        alert("File size is greater than maximum limit");
        setIsSuccess(false);
        event.target.value = null;

        return;
      } else {
        if (event.target.files && event.target.files[0]) {
          setImage(URL.createObjectURL(event.target.files[0]));
        }
        setLogo(event.target.files[0].name);

        setErrorMsg("");
        setIsSuccess(true);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("http://localhost:5614/api/cafes/CreateCafe", {
        Id: id,
        Name: name,
        Description: description,
        Location: location,
        Logo: logo,
        //file: formData,
      })
      .then((response) => {
        console.log(response);

        if (selectedFile) {
          const formData = new FormData();
          formData.append("file", selectedFile);

          fetch("http://localhost:5614/api/cafes/upload", {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => {
              alert(data);
              // Handle the API response as needed
            })
            .catch((error) => {
              // Handle any errors
            });
        }
        navigate("/cafes");
      })
      // .then(({ data }) => alert("Yay! it worked"))
      .catch((err) => console.log(err));
    //
  };

  const handleCancel = () => {
    navigate("/cafes");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{id ? "Edit Cafe" : "Add New Cafe"}</h2>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />
        <TextField
          label="Logo"
          type="file"
          fullWidth
          InputLabelProps={{ shrink: true }}
          onChange={handleFileChange}
          accept="image/png, image/jpeg"
        />
        {/* <input type="file" onChange={onImageChange} className="filetype" /> */}
        <img alt="preview image" src={image} styles={styles.image} />
      </Stack>
      <TextField
        label="Description"
        multiline
        rows={4}
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 4 }}
      />

      <TextField
        label="Location"
        fullWidth
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        sx={{ mb: 4 }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <Button variant="contained" color="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  );
};

export default AddEditCafePage;

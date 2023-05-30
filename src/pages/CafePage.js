import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Stack } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { getCafes } from "../services/api";
import { filterCafesbyLocation } from "../services/api";
import ImageCellRenderer from "./ImageCellRenderer";

const useStyles = makeStyles({
  searchInput: {
    marginBottom: "10px",
  },
  editButton: {
    marginRight: "8px",
  },
  container: {
    backgroundColor: "#f2f2f2",
    padding: "20px",
  },
  heading: {
    color: "#333",
  },
});

const CafePage = () => {
  const classes = useStyles();
  const [cafes, setCafes] = useState([]);
  const [filter, setFilter] = useState("");
  const [rowData, setRowData] = useState();

  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");

  const styles = {
    container: {
      backgroundColor: "#f2f2f2",
      padding: "10px",
    },
    heading: {
      color: "#333",
    },
  };

  useEffect(() => {
    fetchCafes();
    //fetchData();
  }, []);

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
    fetchData(event.target.value);
  };

  const fetchData = async (term) => {
    try {
      const response = await axios.get(
        "http://localhost:5614/api/Cafes/GetCafesbyFilter",
        {
          params: { keyword: term },
        }
      );
      setCafes(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const fetchCafes = async () => {
    try {
      const response = await getCafes();
      setCafes(response);
    } catch (error) {
      console.log("Error fetching cafes:", error);
    }
  };

  const filteredCafes = cafes.filter((cafe) =>
    cafe.location.toLowerCase().includes(keyword.toLowerCase())
  );

  const frameworkComponents = {
    imageCellRenderer: ImageCellRenderer,
  };

  const [columnDefs] = useState([
    { headerName: "Image", field: "logo", cellRenderer: "imageCellRenderer" },
    { headerName: "Name", field: "name", editable: true },
    { headerName: "Description", field: "description", editable: true },
    { headerName: "Employees", field: "employees" },
    { headerName: "Location", field: "location", editable: true },
    { field: "actions" },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Cafe Details</h1>
      <div style={{ height: 500 }}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <Button
            component={Link}
            to="/cafes/add"
            variant="contained"
            color="primary"
            className={classes.addButton}
            style={{ width: 200 }}
          >
            Add New Café
          </Button>
          <TextField
            label="Filter by Location"
            className={classes.searchInput}
            value={keyword}
            onChange={handleKeywordChange}
            variant="outlined"
            fullWidth
          />
        </Stack>
        <AgGridReact
          className="ag-theme-alpine"
          rowData={cafes}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          frameworkComponents={frameworkComponents}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default CafePage;

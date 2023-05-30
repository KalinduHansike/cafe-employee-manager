import React, {
  useEffect,
  useState,
  memo,
  useImperativeHandle,
  useMemo,
} from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getEmployees } from "../services/api";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const useStyles = makeStyles({
  editButton: {
    marginRight: "8px",
  },
  table: {
    width: 400,
    margin: "auto",
  },
});

const EmployeePage = () => {
  const classes = useStyles();
  const [employees, setEmployees] = useState([]);
  //const [rowData, setRowData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5614/api/cafes?GetEmployees")
  //     .then((resp) => resp.data)
  //     .then((data) => setRowData(data));
  // }, []);

  // const defaultColDef = useMemo(
  //   () => ({
  //     resizable: true,
  //     editable: true,
  //     sortable: true,
  //     flex: 1,
  //   }),
  //   []
  // );
  const styles = {
    container: {
      backgroundColor: "#f2f2f2",
      padding: "20px",
    },
    heading: {
      color: "#333",
    },
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      //setRowData(response);
      setEmployees(response);
    } catch (error) {
      console.log("Error fetching employees:", error);
    }
  };

  const [columnDefs] = useState([
    { field: "id" },
    { field: "name" },
    { field: "emailAddress" },
    { field: "phoneNumber" },
    { field: "daysWorked" },
    { field: "cafe" },
    { field: "Actions" },
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Employee Details</h1>
      <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/employees/add"
          className={classes.addButton}
        >
          Add New Employee
        </Button>
      </Stack>
      <div style={{ height: 500 }}>
        <AgGridReact
          className="ag-theme-alpine"
          rowData={employees}
          columnDefs={columnDefs}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default EmployeePage;

import axios from "axios";

const API_BASE_URL = "http://localhost:5614/api"; // Replace with your actual API base URL

// Get all cafes
export const getCafes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Cafes/GetCafes`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch cafes");
  }
};

export const filterCafesbyLocation = async (term) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/Cafes/GetCafesbyFilter/${term}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to update cafe");
  }
};

export const getCafesForDropdown = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/Cafes/GetCafesForDropdown`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch cafes");
  }
};

// Get all employees
export const getEmployees = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Employee/GetEmployees`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch employees");
  }
};

// // Add a new cafe
// export const addCafe = async (cafeData) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/Cafes/cafes`, cafeData);
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to add cafe");
//   }
// };

// Update a cafe
export const updateCafe = async (cafeId, cafeData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/Cafes/cafes/${cafeId}`,
      cafeData
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to update cafe");
  }
};

// Delete a cafe
export const deleteCafe = async (cafeId) => {
  try {
    await axios.delete(`${API_BASE_URL}/Cafes/cafes/${cafeId}`);
  } catch (error) {
    throw new Error("Failed to delete cafe");
  }
};

// // Add a new employee
// export const addEmployee = async (employeeData) => {
//   try {
//     const response = await axios.post(
//       `${API_BASE_URL}/Employee/employees`,
//       employeeData
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to add employee");
//   }
// };

// Update an employee
export const updateEmployee = async (employeeId, employeeData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/Employee/employees/${employeeId}`,
      employeeData
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to update employee");
  }
};

// Delete an employee
export const deleteEmployee = async (employeeId) => {
  try {
    await axios.delete(`${API_BASE_URL}/Employee/employees/${employeeId}`);
  } catch (error) {
    throw new Error("Failed to delete employee");
  }
};

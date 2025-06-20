import React, { createContext, useState, useEffect } from "react";

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employee, setEmployee] = useState([]);
  const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    

  useEffect(() => {    
    async function getEmp() {
      const url = `${apiUrl}/employee/employee`;

      let response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      response = await response.json();

      if (response.status === "success") {
        setEmployee(response.data);
      }
    }

    getEmp();
  }, []);

  return (
    <EmployeeContext.Provider value={employee}>
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };

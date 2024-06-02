import React, { useEffect, useState } from "react";
import axios from "axios";

function ServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <>
      <h2>Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            Name: {service.name} - Price: {service.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ServiceList;

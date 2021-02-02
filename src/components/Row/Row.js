import React, { useEffect } from "react";
import axios from "../../axios";

const Row = ({ title, fetchUrl }) => {
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Row;

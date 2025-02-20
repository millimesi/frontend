import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

function Spinner({ loading }) {
  return (
    <ClipLoader
      color="blue"
      loading="loading"
      cssOverride={override}
      size={80}
    />
  );
}

export default Spinner;

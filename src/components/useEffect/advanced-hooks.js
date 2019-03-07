import React, { useEffect } from "react";

export const WithUseEffect = ({ value1, value2 }) => {
  useEffect(() => {
    alert(`Value 1 ${value1}`);
  }, [value1]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Value1:</span>
      <span>{value1}</span>
      <span>Value2:</span>
      <span>{value2}</span>
    </div>
  );
};

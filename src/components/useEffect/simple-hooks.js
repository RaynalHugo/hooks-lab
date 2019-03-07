import React, { useEffect } from "react";

export const WithUseEffect = ({ value }) => {
  useEffect(() => {
    alert(`Value ${value}`);
  });

  return (
    <div>
      <span>Value:</span>
      <span>{value}</span>
    </div>
  );
};

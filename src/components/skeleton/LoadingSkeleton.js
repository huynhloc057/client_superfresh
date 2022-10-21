import React from "react";

const LoadingSkeleton = (props) => {
  return (
    <div
      className="skeleton"
      style={{
        width: props.width || "100%",
        paddingTop: props.paddingTop,
        height: props.height,
        radius: props.radius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;

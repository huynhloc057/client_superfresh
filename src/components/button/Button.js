import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type = "button",
  children,
  className,
  isLoading = false,
  onClick,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      type={type}
      className={`flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]
         ${!!isLoading ? "opacity-50 pointer-events-none" : ""}
        ${className} text-white`}
      onClick={onClick}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};
export default Button;

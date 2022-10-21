import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../common/ErrorComponent";

const InputShipping = (props) => {
  const {
    id,
    control,
    name,
    type,
    error = "",
    placeholder = "",
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <React.Fragment>
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border rounded-xl 
         placeholder:text-text4 bg-transparent dark:placeholder:text-text2 dark:text-white ${
           error.length > 0
             ? "border-error text-error"
             : "border-black dark:border-darkStroke text-text1"
         } ${children ? "pr-16" : ""}`}
        placeholder={error.length <= 0 ? placeholder : ""}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
          {children}
        </span>
      )}
    </React.Fragment>
  );
};

InputShipping.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default withErrorBoundary(InputShipping, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});

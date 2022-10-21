import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";

const LayoutAnthentication = (props) => {
  const { children, heading } = props;
  return (
    <div className="relative w-full min-h-screen px-10 pt-4 pb-10 dark:bg-darkbg isolate">
      <img
        src="/1.png"
        alt="bg"
        className="w-[550px] hidden lg:block absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]"
      />
      <Link to={"/"} className="flex items-center justify-center mb-2 lg:mb-2">
        <img className="mt-1" srcSet="/logo.png 3x" alt="crowfunding-app" />
      </Link>
      <div className="w-full max-w-[556px] bg-white  dark:bg-darkSecondary border-[4px] border-solid border-[#008641] rounded-xl px-5 py-8 lg:px-12 lg:py-8  mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
      <img
        src="/2.png"
        alt="bg"
        className="w-[550px] hidden lg:block absolute top-0 right-0 pointer-events-none z-[-1]"
      />
    </div>
  );
};

LayoutAnthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAnthentication, {
  FallbackComponent: ErrorComponent,
});

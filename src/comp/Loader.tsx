import React from "react";
import Loader from "react-loader-spinner";
import { APP_THEME } from "../const/theme";

const LoaderPlaceHolder = () => {
  return (
    <Loader
      type="Hearts"
      color={APP_THEME.colors.primary}
      height={160}
      width={160}
    />
  );
};

export default LoaderPlaceHolder;

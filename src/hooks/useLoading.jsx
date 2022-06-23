import React from "react";
import { useState } from "react";
import { ReactComponent as LoadingIcon } from "../assets/loading.svg";
import { ReactComponent as RollLoading } from "../assets/RollLoading.svg";

const useLoading = () => {
  const [loading, setLoading] = useState(false);
  const loadingIcon = <LoadingIcon />;
  const rollLoading = <RollLoading style={{ width: "17px", height: "17px" }} />;

  function closeLoadingByTimer() {
    let timer = setTimeout(() => {
      setLoading(false);
      clearTimeout(timer);
    }, 300);
  }
  return { loadingIcon, loading, setLoading, closeLoadingByTimer, rollLoading };
};

export default useLoading;

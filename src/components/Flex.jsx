import React from "react";
import { Box } from "@mui/material";

const Flex = (props) => {
  const { sx, children, ...restProps } = props;
  return (
    <Box {...restProps} sx={{ display: "flex", ...sx }}>
      {children}
    </Box>
  );
};

export default Flex;

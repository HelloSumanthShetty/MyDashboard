import { Box, styled , BoxProps  } from "@mui/material";


const FlexBetween = (props : any) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      {...props}
    />
  );
};

 export default FlexBetween;
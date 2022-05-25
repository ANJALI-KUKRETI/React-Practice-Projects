import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

export const MuiSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };
  console.log(country);

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

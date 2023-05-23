import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";


export default function Header() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Browse our Categories
      </Typography>
      <Link href="#" underline="none">
        {'Cat Food'}
      </Link>
      <Link href="#" underline="none">
        {'Litter'}
      </Link>
      <Link href="#" underline="none">
        {'Accesories'}
      </Link>
    </Box>
  );
}

import {Box, Link, Typography} from "@mui/material";

export default function Footer() {
  return (
      <Box
          component="footer"
          sx={{
              borderTop: "1px solid #000",
              mt: "auto",
              p: 3,
          }}
      >
          <Typography>
              Copyright &copy; {new Date().getFullYear()} by <Link href="https://mirmousavi.com/" target="_blank">Mostafa
              Mirmousavi</Link>
          </Typography>
      </Box>
  )
}

import {Box, Link} from "@mui/material";

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
          Copyright &copy; {new Date().getFullYear()} by <Link href="https://mirmousavi.com/" target="_blank">Mostafa
          Mirmousavi</Link>
      </Box>
  )
}

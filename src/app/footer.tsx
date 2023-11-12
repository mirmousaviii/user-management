import {Box, Link} from "@mui/material";

export default function Footer() {
  return (
      <Box
          component="footer"
          sx={{
              py: 3,
              px: 3,
              mt: 'auto',
          }}
      >
          Copyright &copy; {new Date().getFullYear()} by <Link href="https://mirmousavi.com/" target="_blank">Mostafa
          Mirmousavi</Link>
      </Box>
  )
}

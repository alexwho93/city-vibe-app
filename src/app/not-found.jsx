import Link from "next/link";
import { Box, Typography, Button, Container } from "@mui/material";
import { Height } from "@mui/icons-material";

const containerStyle = {
  minHeight: "calc(100vh - 80px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const boxStyle = {
  borderRadius: 1,
  padding: 4,
};

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={containerStyle}>
      <Box sx={boxStyle}>
        <Typography variant="h3" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>
        <Button
          component={Link}
          href="/"
          variant="contained"
          color="primary"
          size="large"
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
}

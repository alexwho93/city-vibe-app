import { Box, Card, Divider, Typography } from "@mui/material";

async function DescriptionCard({ description }) {
  return (
    <Card>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6">Description </Typography>
        <Divider sx={{ margin: "5px 0" }} />
        <Typography variant="body1">
          {description || "Unable to load description."}
        </Typography>
      </Box>
    </Card>
  );
}

export default DescriptionCard;

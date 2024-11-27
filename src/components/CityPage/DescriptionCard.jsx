import { Box, Card, Divider, Typography } from "@mui/material";
import { getCityDescription } from "@/services/actions";

async function DescriptionCard({ cityName }) {
  const data = await getCityDescription(cityName);
  const aiResponse = data?.choices?.[0]?.message?.content;

  return (
    <Card>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6">Description </Typography>
        <Divider sx={{ margin: "5px 0" }} />
        <Typography variant="body1">
          {aiResponse || "Unable to load description."}
        </Typography>
      </Box>
    </Card>
  );
}

export default DescriptionCard;

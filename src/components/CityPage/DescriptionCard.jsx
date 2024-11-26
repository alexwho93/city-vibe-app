import { Card, Divider, Typography } from "@mui/material";
import { getCityDescription } from "@/services/actions";

async function DescriptionCard({ cityName }) {
  const data = await getCityDescription(cityName);
  const aiResponse = data?.choices?.[0]?.message?.content;

  console.log("Ai response is: " + aiResponse);

  return (
    <Card sx={{ padding: 2 }}>
      <Typography variant="h6">Description </Typography>
      <Divider sx={{ margin: "5px 0", background: "rgba(255,255,255,0.2)" }} />
      <Typography variant="body1">
        {aiResponse || "Unable to load description."}
      </Typography>
    </Card>
  );
}

export default DescriptionCard;

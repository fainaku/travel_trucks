import CamperDetailsComponent from "@/components/CamperDetails/CamperDetails";
import { getSingleCamper } from "@/lib/api/api";
import { Container } from "@mui/material";

type Props = {
  params: Promise<{ id: string }>;
};

const CamperDetails = async ({ params }: Props) => {
  const { id } = await params;
  const camper = await getSingleCamper(id);
  console.log(camper);

  return (
    <Container>
      <CamperDetailsComponent key={camper.id} item={camper} />
    </Container>
  );
};

export default CamperDetails;

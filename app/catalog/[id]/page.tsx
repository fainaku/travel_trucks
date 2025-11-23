import CamperDetailsComponent, {
  TabValue,
} from "@/components/CamperDetails/CamperDetails";
import { getSingleCamper } from "@/lib/api/api";
import { Container } from "@mui/material";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ tab: TabValue }>;
};

const CamperDetails = async ({ params, searchParams }: Props) => {
  const { id } = await params;
  const { tab } = await searchParams;
  const camper = await getSingleCamper(id);

  if (!camper) {
    notFound();
  }

  return (
    <Container>
      <CamperDetailsComponent key={camper.id} item={camper} openTab={tab} />
    </Container>
  );
};

export default CamperDetails;

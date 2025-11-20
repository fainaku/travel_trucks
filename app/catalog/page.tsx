import { getCampers } from "@/lib/api/api";
import CamperList from "@/components/CamperList/CamperList";

export const Catalog = async () => {
  const response = await getCampers();
  console.log("campers", response);
  return (
    <>{response.items.length > 0 && <CamperList campers={response.items} />}</>
  );
};

export default Catalog;

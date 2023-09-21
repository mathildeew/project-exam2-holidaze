import useApi from "../../hooks/useApi";
import { MainButton } from "../../styles/Buttons";
import { DeleteVenueContainer } from "./DeleteVenue.style";

export default function DeleteVenue() {
  const { isLoading, fetchApi } = useApi();

  const onDelete = async (id) => {
    const response = await fetchApi(
      `https://api.noroff.dev/api/v1/holidaze/venues/${id}`,
      "DELETE"
    );
    console.log(id);
  };
  return (
    <DeleteVenueContainer>
      <p>Are you sure you want to delete this venue?</p>
      <MainButton onClick={onDelete}> Delete</MainButton>
    </DeleteVenueContainer>
  );
}

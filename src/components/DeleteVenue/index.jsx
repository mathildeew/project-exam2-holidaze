import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import apiEndpoints from "../../constants/endpoints";
import { MainButton } from "../../styles/Buttons";
import { DeleteVenueContainer } from "./DeleteVenue.style";
import { ErrorMsg } from "../../styles/Forms";

/**
 * DeleteVenue Component - Represents a component for deleting a venue.
 * @component
 * @param {string} venueId - The ID of the venue to be deleted.
 */
export default function DeleteVenue({ venueId }) {
  const navigate = useNavigate();

  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useApi();
  const onDelete = async () => {
    const response = await fetchApi(
      apiEndpoints(venueId).singleVenue,
      "DELETE"
    );

    if (response.status === 204) {
      setTimeout(() => {
        navigate("/profile/manager");
      }, 800);
    }
  };

  return (
    <DeleteVenueContainer>
      <p>Are you sure you want to delete this venue?</p>
      {isError && <ErrorMsg>{errorMsg}</ErrorMsg>}
      <MainButton onClick={onDelete}>
        {isLoading ? "Deleting..." : isSuccess ? "Deleted" : "Delete venue"}
      </MainButton>
    </DeleteVenueContainer>
  );
}

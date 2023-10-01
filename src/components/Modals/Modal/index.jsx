import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ModalContainer } from "./Modal.style";
import VenuesForm from "../../Forms/VenuesForm";
import UpdateAvatar from "../UpdateAvatar";
import CancelReservation from "../BookingCancel";
import RegisterManager from "../ManagerReg";
import DeleteVenue from "../../DeleteVenue";

export default function Modal({
  showModal,
  setShowModal,
  bookingId: id,
  venue,
}) {
  const newVenueModal = showModal === "newVenue";
  const updateAvatarModal = showModal === "updateAvatar";
  const cancelBookingModal = showModal === "cancelBooking";
  const registerAsManagerModal = showModal === "registerAsManager";
  const editVenueModal = showModal === "editVenue";
  const deleteVenueModal = showModal === "deleteVenue";

  return (
    <ModalContainer
      className={
        updateAvatarModal
          ? "active updateAvatar"
          : registerAsManagerModal
          ? "active registerManager"
          : cancelBookingModal
          ? "active cancelBooking"
          : newVenueModal
          ? "active venueModal"
          : editVenueModal
          ? "active venueModal"
          : deleteVenueModal
          ? "active deleteModal"
          : "inactive"
      }
    >
      <FontAwesomeIcon
        icon={faXmark}
        className="close"
        aria-label="Close register new venu"
        onClick={() => setShowModal(false)}
      />
      {updateAvatarModal && <UpdateAvatar />}
      {registerAsManagerModal && <RegisterManager />}
      {cancelBookingModal && <CancelReservation data={id} />}
      {newVenueModal && <VenuesForm venue={{}} state={"new"} />}
      {editVenueModal && <VenuesForm venue={venue} state={"edit"} />}
      {deleteVenueModal && <DeleteVenue venueId={venue.id} />}
    </ModalContainer>
  );
}

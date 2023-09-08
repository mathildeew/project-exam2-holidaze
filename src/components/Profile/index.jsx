import { MainButton } from "../../styles/Buttons";
import { ProfileContainer } from "./Profile.styles";
import { BoldText } from "../../styles/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Overlay, Popup } from "../../styles/Popup";
import { useLoggedIn } from "../../context/Context";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import UseAPI from "../../hooks/useApi";
import apiEndpoints from "../../../endpoints.js/endpoints";
import { useEffect } from "react";

function UpdateAvatarAPI({ data }) {
  const isLoggedIn = useIsLoggedIn();
  const { avatar, email, manager, name, token } = isLoggedIn[0];

  const {
    content: response,
    isLoading,
    isError,
    isSuccess,
  } = UseAPI("https://api.noroff.dev/api/v1/holidaze/profiles/onkel/media", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  useEffect(() => {
    if (isSuccess) {
    }
  }, [isSuccess]);
}

const schema = yup.object({
  avatar: yup.string().url("Must be a valid URL").required(),
});

export default function Profile() {
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState(null);
  const [authState, setAuthState] = useLoggedIn();
  const { avatar, email, manager, name, token } = LoggedIn;
  console.log(avatar);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setData(data);
    console.log("submit");
    // setBtnText("Logging in");
  };

  return (
    <>
      <Overlay className={showPopup ? "overlay active" : "overlay inactive"} />
      <Popup className={showPopup ? "popup active" : "popup inactive"}>
        <FontAwesomeIcon
          icon={faXmark}
          className="close"
          onClick={() => setShowPopup(false)}
        />
        <div className="formContainer">
          <h2>Update profile picture</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="url"
              name="update"
              placeholder="Must be URL"
              {...register("avatar", { required: true, type: "url" })}
            />
            <MainButton type="submit">Update</MainButton>
            {data && <UpdateAvatarAPI data={data} />}
          </form>
        </div>
      </Popup>

      <ProfileContainer>
        <section className="registerCard">
          <span className="heading">Register as venue manager</span>
          <span className="content">
            Rent out your property through us. Easy peasy money in your pocket!
          </span>
        </section>

        <section className="registerCard">
          <span className="heading">Add new venue</span>
          <span className="content">Add a new venue here!</span>
        </section>

        <section id="profile">
          <h1>Profile</h1>
          <div className="profileContent displayRow">
            <div
              className="profileImgContainer"
              onClick={() => setShowPopup(!showPopup)}
            >
              {avatar ? (
                <img className="profileImg" src={avatar} alt={name} />
              ) : (
                <img src="" />
              )}
              <FontAwesomeIcon icon={faCamera} />
            </div>

            <div className="profileInfo">
              <BoldText>{name}</BoldText>
              <p>{email}</p>
              {manager && (
                <div className="flexLine">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <BoldText>Venue manager</BoldText>
                </div>
              )}
              <MainButton
                isSmall={true}
                isWhite={true}
                onClick={() => setLoggedIn(null)}
              >
                Log out
              </MainButton>
            </div>
          </div>
        </section>
        <hr />

        <section id="bookings">
          <h3>Your bookings</h3>
          <div className="bookingContent displayRow">
            <img
              className="venueImg"
              src="../../../src/assets/placeholders/aldeen-li-jH2vyek3t8Q-unsplash.jpg"
              alt="Location name"
            />
            <div className="bookingInfo">
              <BoldText>Name of venue</BoldText>
              <div className="flexLine">
                <BoldText>Location:</BoldText> <p>Oslo</p>
              </div>
              <div className="flexLine">
                <BoldText>Price pr. night:</BoldText> <p>1235</p>
              </div>
              <div className="flexLine">
                <BoldText>Guests:</BoldText> <p>2</p>
              </div>
              <MainButton isSmall={true}>Cancel booking</MainButton>
            </div>
          </div>

          <hr />
        </section>
      </ProfileContainer>
    </>
  );
}

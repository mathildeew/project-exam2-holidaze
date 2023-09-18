import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { get, set } from "../../../js/storage/localStorage";
import { useEffect } from "react";
import axios from "axios";
import useApi from "../../../hooks/useApi";
import { MainButton } from "../../../styles/Buttons";
import { UpdateAvatarContainer } from "../../../styles/Popup";
import { useLoggedIn } from "../../../context/Context";

export default function UpdateAvatar() {
  const { avatar, setAvatar } = useLoggedIn();
  const [btnText, setBtnText] = useState("Update avatar");
  const [errorMsg, setErrorMsg] = useState("");

  const name = get("name");

  const schema = yup.object({
    avatar: yup.string().url("Avatar must ba a valid URL"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { fetchApi, isError } = useApi();

  const onSubmit = async (formData) => {
    setBtnText("Updating...");
    setAvatar(formData.avatar);
    console.log(formData.avatar);

    const response = await fetchApi(
      `https://api.noroff.dev/api/v1/holidaze/profiles/${name}/media`,
      "PUT",
      { avatar }
    );

    console.log(response);

    if (response.status === 200) {
      set("avatar", JSON.stringify(formData.avatar));

      setTimeout(() => {
        setBtnText("Updated!");
      }, 1000);

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else if (response.status !== 200) {
      setErrorMsg("An error occured, please try again later");
    }
  };

  return (
    <UpdateAvatarContainer>
      <h2>Update profile picture</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="url"
          name="avatar"
          placeholder="Must be URL"
          {...register("avatar")}
        />
        <p className="errorMsg">{errors.avatar?.message}</p>
        <p className="errorMsg">{errorMsg}</p>

        <MainButton type="submit">{btnText}</MainButton>
      </form>
    </UpdateAvatarContainer>
  );
}

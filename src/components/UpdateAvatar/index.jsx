import { useState } from "react";
import { useForm } from "react-hook-form";
import { MainButton } from "../../styles/Buttons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateAvatarContainer } from "../../styles/Popup";
import { get, set } from "../../js/storage/localStorage";
import { useEffect } from "react";
import axios from "axios";
import useApi from "../../hooks/useApi";

export default function UpdateAvatarPopup() {
  const [avatar, setNewAvatar] = useState("");
  const [btnText, setBtnText] = useState("Update avatar");

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

  const { fetchApi, isError, isLoading, isSuccess } = useApi();

  const onSubmit = async (formData) => {
    setBtnText("Updating...");
    setNewAvatar(formData.avatar);
    console.log(formData.avatar);

    await fetchApi(
      `https://api.noroff.dev/api/v1/holidaze/profiles/${name}/media`,
      "PUT",
      { avatar }
    );

    set("avatar", JSON.stringify(formData.avatar));

    setTimeout(() => {
      setBtnText("Updated!");
    }, 1000);

    setTimeout(() => {
      window.location.reload();
    }, 1500);
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
        {/* {data && <UpdateAvatarAPI data={data} />} */}

        <MainButton type="submit">{btnText}</MainButton>
      </form>
    </UpdateAvatarContainer>
  );
}

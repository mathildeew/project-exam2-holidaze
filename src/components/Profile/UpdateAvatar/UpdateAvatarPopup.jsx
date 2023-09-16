import { useState } from "react";
import { useForm } from "react-hook-form";
import { MainButton } from "../../../styles/Buttons";
import UpdateAvatarAPI from "../UpdateAvatarAPI";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UpdateAvatarContainer } from "../../../styles/Popup";

export default function UpdateAvatarPopup() {
  const schema = yup.object({
    avatar: yup.string().url("Must be a valid URL").required(),
  });

  const [data, setData] = useState(null);
  const [btnText, setBtnText] = useState("Update");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setBtnText("Updating...");
    setData(data);

    setTimeout(() => {
      setBtnText("Updated!");
    }, 1000);
  };

  return (
    <UpdateAvatarContainer>
      <h2>Update profile picture</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="url"
          name="update"
          placeholder="Must be URL"
          {...register("avatar", { required: true, type: "url" })}
        />
        <MainButton type="submit">{btnText}</MainButton>
        {data && <UpdateAvatarAPI data={data} />}
      </form>
    </UpdateAvatarContainer>
  );
}

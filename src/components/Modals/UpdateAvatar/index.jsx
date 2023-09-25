import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoggedIn } from "../../../context/Context";
import { set } from "../../../js/storage/localStorage";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../constants/endpoints";
import { MainButton } from "../../../styles/Buttons";
import { UpdateAvatarContainer } from "../../../styles/Popup";
import { Form, InputContainer, Inputs } from "../../../styles/Forms";

export default function UpdateAvatar() {
  const { name, setAvatar } = useLoggedIn();
  const [errorMsg, setErrorMsg] = useState("");

  const schema = yup.object({
    avatar: yup.string().url("Avatar must ba a valid URL"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { fetchApi, isLoading, isSuccess } = useApi();

  const onSubmit = async (formData) => {
    setAvatar(formData.avatar);

    const response = await fetchApi(
      apiEndpoints(null, name).updateAvatar,
      "PUT",
      { formData }
    );

    if (response.status === 200) {
      set("avatar", JSON.stringify(formData.avatar));

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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Inputs>
            <label htmlFor="avatar">Your new profile picture</label>
            <input
              type="url"
              name="avatar"
              placeholder="Must be URL"
              {...register("avatar")}
            />
          </Inputs>
          <p className="errorMsg">{errors.avatar?.message}</p>
          <p className="errorMsg">{errorMsg}</p>
        </InputContainer>

        <MainButton type="submit">
          {isLoading ? "Updating..." : isSuccess ? "Updated" : "Update avatar"}
        </MainButton>
      </Form>
    </UpdateAvatarContainer>
  );
}

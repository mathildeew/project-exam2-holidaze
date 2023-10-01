import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoggedIn } from "../../../context/Context";
import useApi from "../../../hooks/useApi";
import apiEndpoints from "../../../constants/endpoints";
import { MainButton } from "../../../styles/Buttons";
import { ErrorMsg, Form, InputContainer, Inputs } from "../../../styles/Forms";
import { UpdateAvatarContainer } from "./UpdateAvatar.style";

export default function UpdateAvatar() {
  const { name, setAvatar } = useLoggedIn();

  const schema = yup.object({
    avatar: yup
      .string()
      .url("Avatar must ba a valid URL")
      .required("Avatar must be a valid URL"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useApi();

  const onSubmit = async (formData) => {
    const response = await fetchApi(
      apiEndpoints(null, name).updateAvatar,
      "PUT",
      formData
    );

    if (response.status === 200) {
      setAvatar(formData.avatar);

      setTimeout(() => {
        window.location.reload();
      }, 1500);
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
          <ErrorMsg>{errors.avatar?.message}</ErrorMsg>
          {isError && <ErrorMsg>{errorMsg}</ErrorMsg>}
        </InputContainer>
        <MainButton type="submit">
          {isLoading ? "Updating..." : isSuccess ? "Updated" : "Update avatar"}
        </MainButton>
      </Form>
    </UpdateAvatarContainer>
  );
}

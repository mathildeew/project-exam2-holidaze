import { useLoggedIn } from "../../context/Context";
import useApi from "../../hooks/useApi";
import { MainButton } from "../../styles/Buttons";
import { RegisterManagerContainer } from "./ManagerReg.style";

export default function RegisterManager() {
  const { name, setIsManager } = useLoggedIn();
  const { fetchApi, isLoading, isSuccess } = useApi();

  const handleOnRegister = async () => {
    const response = await fetchApi(
      `https://api.noroff.dev/api/v1/holidaze/profiles/${name}`,
      "PUT",
      { venueManager: true }
    );

    if (response.status === 200) {
      setIsManager(true);
    }
  };

  return (
    <RegisterManagerContainer>
      <h2>Register as venue manager</h2>
      <p>Easy money in your pocket!</p>
      <MainButton onClick={() => handleOnRegister()}>
        {isLoading ? "Registering..." : isSuccess ? "Registered!" : "Register"}
      </MainButton>
    </RegisterManagerContainer>
  );
}

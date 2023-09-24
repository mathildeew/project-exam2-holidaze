import { LoaderContainer, LoaderSpinner } from "./Loader.style";

export default function Loader() {
  return (
    <LoaderContainer>
      <LoaderSpinner />
      <p>Loading...</p>
    </LoaderContainer>
  );
}

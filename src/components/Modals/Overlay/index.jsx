import { OverlayContainer } from "./Overlay.style";

export default function Overlay({ showModal }) {
  function noScroll() {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
  }

  function regularScroll() {
    if (showModal === false) {
      document.body.style.overflow = "unset";
    }
  }

  // console.log(typeof showModal);

  return (
    <OverlayContainer
      showModal={showModal}
      className={showModal ? "overlay active" : "overlay inactive"}
      open={noScroll()}
      closed={regularScroll()}
    ></OverlayContainer>
  );
}

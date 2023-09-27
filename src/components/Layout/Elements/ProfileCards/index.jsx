import { Card, Content, Title } from "./ProfileCards.style";

export default function ProfileCards({
  title,
  content,
  setShowModal,
  showModal,
}) {
  return (
    <Card
      onClick={() => setShowModal(showModal)}
      aria-label="Open venue manager register"
    >
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Card>
  );
}

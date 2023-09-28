import { AboutVenue, Host, Updates } from "../../../pages/Venue/Venue.style";
import { BoldText, SmallText } from "../../../styles/Text";
export default function About({
  description,
  owner,
  createdDate,
  updatedDate,
}) {
  return (
    <AboutVenue>
      <h2>About this property</h2>
      <p>{description}</p>

      <Host>
        <BoldText>Your host is</BoldText>
        {owner?.avatar ? (
          <img src={owner?.avatar} alt={owner?.name} />
        ) : (
          <img
            src="/images/placeholder/Profile_avatar_placeholder_large.png"
            alt={owner?.name}
          />
        )}
        <p>{owner?.name}</p>
      </Host>

      <Updates>
        <SmallText>Created: {createdDate}</SmallText>
        <SmallText>Last updated: {updatedDate}</SmallText>
      </Updates>
    </AboutVenue>
  );
}

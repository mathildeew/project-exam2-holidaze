import { Link } from "react-router-dom";
import { useLoggedIn } from "../../context/Context";
import { Card } from "./ProfileCards.style";

export default function ProfileCards({ setShowManagerReg }) {
  const { isManager } = useLoggedIn();

  return (
    <>
      {isManager === false ? (
        <Card
          onClick={() => setShowManagerReg(true)}
          aria-label="Open venue manager register"
        >
          <span className="heading">Register as venue manager</span>
          <span className="content">
            Rent out your property through us. Easy peasy money in your pocket!
          </span>
        </Card>
      ) : (
        <Link to={"/profile/manager"}>
          <Card>
            <span className="heading">Ready to list a new venue?</span>
            <span className="content">Let's get started!</span>
          </Card>
        </Link>
      )}
    </>
  );
}

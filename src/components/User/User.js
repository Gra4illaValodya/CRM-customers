import "./User.scss";
import avatar from "../../assets/avatar.png";
const User = () => {
  return (
    <div className="user">
      <div className="user__avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="user__wrapper">
        <div className="user__name">Elano</div>
        <div className="user__description">Developer</div>
      </div>
    </div>
  );
};
export default User;

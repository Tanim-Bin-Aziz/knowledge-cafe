import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex p-4 justify-between mx-18 border-b-2">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;

import { FaBars } from "react-icons/fa";

export default function Header({ toggle }: any) {
  return (
    <div className="header">
      <FaBars className="menu-btn" onClick={toggle} />
      <h3>Dashboard</h3>
    </div>
  );
}
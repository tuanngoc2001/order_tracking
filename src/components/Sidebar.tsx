import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaChartPie,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

export default function Sidebar({ collapsed }: any) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* User */}
      <div className="sidebar-user">
        <FaUserCircle className="avatar" />
        {!collapsed && (
          <div>
            <h4>Tuấn Ngọc</h4>
            <p>Administrator</p>
          </div>
        )}
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">
        <NavLink to="/home" className="menu-item">
          <FaHome />
          {!collapsed && <span>Trang chủ</span>}
        </NavLink>

        <NavLink to="/stats" className="menu-item">
          <FaChartPie />
          {!collapsed && <span>Thống kê</span>}
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="sidebar-logout" onClick={handleLogout}>
        <FaSignOutAlt />
        {!collapsed && <span>Logout</span>}
      </div>
    </div>
  );
}
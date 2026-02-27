import "./Auth.css";
import { useState } from "react";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";

function Login({ switchToRegister }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">
      <h2>Đăng Nhập</h2>

      <div className="input-group">
        <input type="email" placeholder="Email" />
      </div>

      {/* PASSWORD INPUT CÓ ICON */}
      <div className="input-group password-group">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Mật khẩu"
        />

        <span
          className="password-toggle"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <button className="auth-btn">Đăng Nhập</button>

      <div className="divider">
        <span>Hoặc đăng nhập với</span>
      </div>

      <div className="social-buttons">
        <button className="google-btn">
          <FaGoogle /> Google
        </button>

        <button className="facebook-btn">
          <FaFacebookF /> Facebook
        </button>
      </div>

      <div className="switch-text">
        Chưa có tài khoản?{" "}
        <span onClick={switchToRegister}>Đăng ký</span>
      </div>
    </div>
  );
}

export default Login;
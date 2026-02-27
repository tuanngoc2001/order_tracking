import "./Auth.css";

function Register({ switchToLogin }) {
  return (
    <div className="auth-container">
      <h2>Đăng Ký</h2>

      <div className="input-group">
        <input type="text" placeholder="Họ và tên" />
      </div>

      <div className="input-group">
        <input type="email" placeholder="Email" />
      </div>

      <div className="input-group">
        <input type="password" placeholder="Mật khẩu" />
      </div>

      <button className="auth-btn">Tạo Tài Khoản</button>

      <div className="switch-text">
        Đã có tài khoản?{" "}
        <span onClick={switchToLogin}>Đăng nhập</span>
      </div>
    </div>
  );
}

export default Register;
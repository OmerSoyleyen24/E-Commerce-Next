"use client"

import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      await axios.post("https://e-commerce-next-4uow.onrender.com/user/register", {
        username,
        email,
        password,
      });
      setSuccess(true);
      setUsername("");
      setEmail("");
      setPassword("");

      // 2 saniye sonra ana sayfaya yönlendir
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      console.error("Kayıt Hatası:", error);
      setError("Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyiniz.");
    }
  };

  return (
    <div className="account-column">
      <h2><strong>Register</strong></h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Kayıt başarılı! Yönlendiriliyorsunuz...</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <span>Username<span className="star">*</span></span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <span>Email address<span className="star">*</span></span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <span>Password <span className="star">*</span></span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="remember">
          <div>
            Your personal data will be used to support your experience throughout this website to
            manage access to your account, and for other purposes described in our{" "}
            <a href="/privacy">privacy policy</a>.
          </div>
          <button type="submit" className="btn btn-sm">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

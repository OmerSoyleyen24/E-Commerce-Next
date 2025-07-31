'use client';

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const router = useRouter();

    const getCheckFormData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Email ve şifre gereklidir.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/user/login", {
                email,
                password
            });

            const { token } = response.data;

            console.log("Alınan token:", token);

            if (token) {
                localStorage.setItem("token", token);
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                router.refresh();
                router.push("/");

            } else {
                alert("Giriş başarısız. Token alınamadı.");
            }
        } catch (error) {
            console.error("Giriş hatası:", error);
            alert("Hatalı email veya şifre!");
        }
    };

    return (
        <div className="account-column">
            <h2><strong>Giriş Yap</strong></h2>
            <form onSubmit={getCheckFormData}>
                <div>
                    <label>
                        <span>E-posta adresi <span className="star">*</span></span>
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
                        <span>Şifre <span className="star">*</span></span>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <p className="remember">
                    <label>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <span>Beni hatırla</span>
                    </label>
                    <button className="btn btn-sm" type="submit">Giriş Yap</button>
                </p>
                <a href="/forgot-password" className="form-link">Şifrenizi mi unuttunuz?</a>
            </form>
        </div>
    );
};

export default Login;

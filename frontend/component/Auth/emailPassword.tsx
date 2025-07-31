import React, { useState, useContext } from 'react';
import { AuthContext } from "@/context/AuthContext";

const EmailPassword = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("AuthContext must be used within an AuthProvider");
    }

    const { user, updatePassword } = authContext;

    const [showPassword, setShowPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [isChangingPassword, setIsChangingPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    const handlePasswordChange = async () => {
        if (!newPassword.trim()) {
            alert("Şifre boş olamaz");
            return;
        }
        try {
            await updatePassword(newPassword);
            alert("Şifre başarıyla güncellendi");
            setIsChangingPassword(false);
            setNewPassword('');
        } catch (error) {
            alert("Şifre güncellenirken hata oluştu");
            console.error(error);
        }
    };

    return (
        <div className="emailPassword">
            <h2>Account</h2>
            <div>
                <div id="email">E-mail: {user?.email}</div>
                <div id="password">
                    {isChangingPassword ? (
                        <label htmlFor="newPassword">
                            Password:
                            <input
                                id="newPassword"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="password-input"
                                required
                            />
                        </label>
                    ) : (
                        <span>
                            Password: **********
                        </span>
                    )}
                </div>
            </div>
            <div className="buttons">
                {!isChangingPassword && (
                    <button onClick={() => setIsChangingPassword(true)} className="btn">
                        Change Password
                    </button>
                )}
                {isChangingPassword && (
                    <>
                        <button onClick={handlePasswordChange} className="btn">
                            Save new password
                        </button>
                        <button onClick={() => setIsChangingPassword(false)} className="btn">
                            Cancel
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default EmailPassword;
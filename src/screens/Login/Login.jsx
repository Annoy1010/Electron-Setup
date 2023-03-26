import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setSuccessfulLogin }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ user: '', pass: '' });
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleLogin = () => {
        if (user.user !== 'user' || user.pass !== '123456') {
            setError(true);
        } else {
            setSuccess(true);
            setSuccessfulLogin(true);
            setTimeout(() => navigate('/'), 2000);
        }
    };

    return (
        <div className="wrapper">
            <div className="login-form">
                <h2 className="login-heading">QUẢN LÝ THỰC TẬP</h2>
                <input
                    className={`input-item ${error === true && 'notice-error'}`}
                    value={user.user}
                    type="text"
                    placeholder="Tên đăng nhập"
                    name="user"
                    onChange={(e) =>
                        setUser({
                            ...user,
                            [e.target.name]: e.target.value,
                        })
                    }
                    onFocus={() => setError(false)}
                />
                <input
                    className={`input-item ${error === true && 'notice-error'}`}
                    value={user.pass}
                    type="password"
                    placeholder="Mật khẩu"
                    name="pass"
                    onChange={(e) =>
                        setUser({
                            ...user,
                            [e.target.name]: e.target.value,
                        })
                    }
                    onFocus={() => setError(false)}
                />
                <span className="forgetpass">Quên mật khẩu?</span>
                {error === true && <div className="notice">Vui lòng kiểm tra lại thông tin đăng nhập</div>}
                {success === true && <div className="notice-success">Đăng nhập thành công</div>}
                <button className="btn-submit" onClick={handleLogin}>
                    Đăng nhập
                </button>
            </div>
        </div>
    );
};

export default Login;

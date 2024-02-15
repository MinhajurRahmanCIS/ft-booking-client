import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import login from '../../assets/login/login.png';
const Login = () => {
    const { loginUser, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/')
            })
            .catch(err => console.log(err));
    };
    return (
        <div className="hero mt-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 justify-center items-center">
                <div>
                    <img className='' src={login} alt="" />
                </div>
                <div className="md:w-11/12">
                    <form onSubmit={handelLogin} className="card-body border">
                        <h1 className="text-5xl text-center font-bold">Login</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
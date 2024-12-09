import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";


const Login = () => {

    const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);

    const [error, setError] = useState({});

    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Login | EquiSports";
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log({ email, password });

        userLogin(email, password)
            .then((result) => {
                setUser(result.user);
                navigate("/");
                toast.success("Login successfully!");
            })
            .catch((err) => {
                console.log("Error", err.message);
                setError({ ...error, login: err.code });
                toast.error("Login failed. Please try again");
            })


    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
                toast.success("Login successfully!");

            })
            .catch(error => {
                console.log('ERROR', error.message)
                toast.error("Registration failed. Please try again");
            })
    }



    return (
        <div className='min-h-screen flex justify-center items-center mb-10'>
            <div className="card bg-orange-100 w-full max-w-lg shrink-0 p-10">
                <h2 className='text-2xl text-black font-semibold text-center'>Login Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Email</span>
                        </label>

                        <input
                            name='email'
                            type="email"
                            placeholder="email"
                            className="input input-bordered bg-white"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-black">Password</span>
                        </label>
                        <input name='password' type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered bg-white" required />

                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className='btn btn-xs absolute right-2 top-12'>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </button>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral border-none bg-orange-500 hover:bg-orange-700 text-black">Login</button>
                    </div>
                </form>

                <div className="divider text-black">OR</div>

                <div className="flex flex-col items-center justify-center mb-3">
                    <p className='text-center font-semibold mb-2 text-black'>Continue with Google</p>

                    <button onClick={handleGoogleSignIn} className="text-4xl">
                        <FcGoogle />
                    </button>
                </div>

                <p className='text-center font-semibold text-black'>Don't Have An Account? <Link className='text-red-500' to={"/auth/register"}>Register</Link></p>


            </div>
        </div>
    );
};

export default Login;
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Register = () => {

    const { createNewUser, setUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();

    const [error, setError] = useState({});

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        document.title = "Register | EquiSports";
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must contain an uppercase letter, a lowercase letter, and at least 6 characters.");
            return;
        }


        console.log({ name, photo, email, password });

        createNewUser(email, password)
            .then((result) => {
                setUser(result.user);
                toast.success("Registered successfully!");


                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    })
                    .catch((err) => {
                        console.log("Error", err.message);
                    })
                console.log(result.user);



                navigate("/");
            })
            .catch((error) => {
                console.log("Error ", error.message);
                toast.error("Registration failed. Please try again");

            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
                toast.success("Registered successfully!");
            })
            .catch(error => {
                console.log('ERROR', error.message)
                toast.error("Registration failed. Please try again");
            })
    }





    return (
        <div className='min-h-screen flex justify-center items-center mb-10'>
            <div className="card bg-orange-100 w-full max-w-lg shrink-0 p-10">
                <h2 className='text-2xl font-semibold text-center text-black'>Register Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered bg-white" required />
                    </div>
                    {
                        error.name &&
                        <label className="label text-xs">
                            {error.name}
                        </label>
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Photo URL</span>
                        </label>
                        <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered bg-white" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered bg-white" required />
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-black">Password</span>
                        </label>
                        <input type={showPassword ? 'text' : 'password'}
                            name='password' placeholder="password" className="input input-bordered bg-white" required />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className='btn btn-xs absolute right-2 top-12'>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </button>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral border-none bg-orange-500 hover:bg-orange-700 text-black">Register</button>
                    </div>
                </form>

                <div className="divider text-black">OR</div>

                <div className="flex flex-col items-center justify-center mb-3">
                    <p className='text-center font-semibold mb-2 text-black'>Continue with Google</p>

                    <button onClick={handleGoogleSignIn} className="text-4xl">
                        <FcGoogle />
                    </button>
                </div>


                <p className='text-center font-semibold text-black'>Already Have An Account? <Link className='text-red-500' to={"/auth/login"}>Login</Link></p>

            </div>
        </div>
    );
};

export default Register;
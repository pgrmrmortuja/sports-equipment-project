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
        document.title = "Register | Career Pathway";
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        // if (name.length < 3) {
        //     setError({ ...error, name: "Name must be at least 3 characters long." });
        //     return;
        // }

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
            <div className="card bg-cyan-100 w-full max-w-lg shrink-0 p-10">
                <h2 className='text-2xl font-semibold text-center'>Register Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    {
                        error.name &&
                        <label className="label text-xs">
                            {error.name}
                        </label>
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? 'text' : 'password'}
                            name='password' placeholder="password" className="input input-bordered" required />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className='btn btn-xs absolute right-2 top-12'>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </button>

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral border-none bg-cyan-500 hover:bg-cyan-700">Register</button>
                    </div>
                </form>

                <div className="divider">OR</div>

                <div className="flex flex-col items-center justify-center mb-3">
                    <p className='text-center font-semibold mb-2'>Continue with Google</p>

                    <button onClick={handleGoogleSignIn} className="text-4xl">
                        <FcGoogle />
                    </button>
                </div>


                <p className='text-center font-semibold'>Already Have An Account? <Link className='text-red-500' to={"/auth/login"}>Login</Link></p>

            </div>
        </div>
    );
};

export default Register;
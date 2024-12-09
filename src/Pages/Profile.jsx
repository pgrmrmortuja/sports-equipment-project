import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Profile | Career Pathway";
    }, []);

    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        try {
           
            await updateUserProfile({ displayName: name, photoURL: photo });
            navigate("/");
            toast.success("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error.message);
            toast.error("Failed to update profile. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center mb-10 mt-10">
            <div className="card bg-cyan-100 w-full max-w-md p-16 shadow-lg">
                <h1 className="text-3xl text-center font-semibold mb-8 p-5">Your Information</h1>
                <div className="text-center">
                    <img
                        src={user?.photoURL || "https://via.placeholder.com/150"}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full mx-auto"
                    />
                    <h2 className="text-xl font-bold mt-4">{user?.displayName || "Name not available"}</h2>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
                <form onSubmit={handleUpdateProfile} className="mt-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input input-bordered"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            className="input input-bordered"
                            placeholder="Enter photo URL"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-neutral bg-cyan-500 hover:bg-cyan-800 border-none mt-6 w-full">
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;





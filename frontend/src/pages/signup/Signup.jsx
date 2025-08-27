import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-cover bg-center" 
			style={{ backgroundImage: "url('/background.jpg')" }} // <-- replace with your bg image
		>
			{/* Card */}
			<div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 bg-opacity-90">
				<h2 className="text-3xl font-bold text-center text-yellow-300 mb-6">
					Sign Up <span className="text-white">ChatApp</span>
				</h2>

				<form className="space-y-4">
					{/* Full Name */}
					<div>
						<label className="block text-sm text-white mb-1">Full Name</label>
						<input
							type="text"
							placeholder="Enter your full name"
							className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
						/>
					</div>

					{/* Username */}
					<div>
						<label className="block text-sm text-white mb-1">Username</label>
						<input
							type="text"
							placeholder="Enter username"
							className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
						/>
					</div>

					{/* Password */}
					<div>
						<label className="block text-sm text-white mb-1">Password</label>
						<input
							type="password"
							placeholder="Enter password"
							className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
						/>
					</div>

					{/* Confirm Password */}
					<div>
						<label className="block text-sm text-white mb-1">Confirm Password</label>
						<input
							type="password"
							placeholder="Confirm password"
							className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
						/>
					</div>

					{/* Gender */}
					<div>
						<label className="block text-sm text-white mb-1">Gender</label>
						<GenderCheckbox />
					</div>

					{/* Already have account */}
					<p className="text-sm text-white text-center">
						Already have an account?{" "}
						<Link to="/login" className="text-yellow-300 hover:underline">
							Login
						</Link>
					</p>

					{/* Submit Button */}
					<button
						type="submit"
						className="w-full py-2 mt-2 rounded-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:opacity-90 transition"
					>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default Signup;

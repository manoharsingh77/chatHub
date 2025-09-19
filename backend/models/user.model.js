import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		gender: {
			type: String,
			required: true,
			enum: ["male", "female"],
		},
		profilePic: {
			type: String,
			default: "",
		},
		// createdAt, updatedAt => Member since <createdAt>
		//New fields for friends system
		friends: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		], //accepted friends

		friendRequests: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		], // pending requests
	}, { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
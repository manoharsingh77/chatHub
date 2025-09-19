import User from "../models/user.model.js";

// ✅ Send a friend request
export const sendFriendRequest = async (req, res) => {
  try {
    const senderId = req.user._id;
    const { username } = req.params;
    console.log("REQ.USER:", req.user);     // <-- add this
    console.log("PARAM USERNAME:", req.params.username);
    const receiver = await User.findOne({ username });
    if (!receiver) {
      return res.status(404).json({ message: "User not found" });
    }

    if (receiver._id.equals(senderId)) {
      return res.status(400).json({ message: "You cannot add yourself" });
    }

    if (receiver.friendRequests.includes(senderId)) {
      return res.status(400).json({ message: "Friend request already sent" });
    }

    if (receiver.friends.includes(senderId)) {
      return res.status(400).json({ message: "User is already your friend" });
    }

    receiver.friendRequests.push(senderId);
    await receiver.save();

    res.status(200).json({ message: "Friend request sent" });
  } catch (err) {
    console.error("Error in sendFriendRequest:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Accept a friend request
export const acceptFriendRequest = async (req, res) => {
  try {
    const userId = req.user._id;
    const senderId = req.params.id;

    const user = await User.findById(userId);
    const sender = await User.findById(senderId);

    if (!user || !sender) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.friendRequests.includes(senderId)) {
      return res.status(400).json({ message: "No such friend request" });
    }

    // Add each other as friends
    user.friends.push(senderId);
    sender.friends.push(userId);

    // Remove request
    user.friendRequests = user.friendRequests.filter(
      (reqId) => reqId.toString() !== senderId
    );

    await user.save();
    await sender.save();

    res.status(200).json({ message: "Friend request accepted" });
  } catch (err) {
    console.error("Error in acceptFriendRequest:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Reject a friend request
export const rejectFriendRequest = async (req, res) => {
  try {
    const userId = req.user._id;
    const senderId = req.params.id;

    const user = await User.findById(userId);

    if (!user.friendRequests.includes(senderId)) {
      return res.status(400).json({ message: "No such friend request" });
    }

    user.friendRequests = user.friendRequests.filter(
      (reqId) => reqId.toString() !== senderId
    );

    await user.save();

    res.status(200).json({ message: "Friend request rejected" });
  } catch (err) {
    console.error("Error in rejectFriendRequest:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Get all pending requests
export const getFriendRequests = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate(
      "friendRequests",
      "username fullName profilePic"
    );

    res.status(200).json(user.friendRequests);
  } catch (err) {
    console.error("Error in getFriendRequests:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Get all friends
export const getFriends = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate(
      "friends",
      "username fullName profilePic"
    );

    res.status(200).json(user.friends);
  } catch (err) {
    console.error("Error in getFriends:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

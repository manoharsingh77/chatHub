import { useState } from "react";
import toast from "react-hot-toast";

const AddFriend = () => {
  const [username, setUsername] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleAddFriend = async () => {
    if (!username) return toast.error("Enter a username");
    try {
      const res = await fetch(`/api/friends/request/${username}`, {
        method: "POST",
        credentials: "include",        // ✅ send cookies/auth
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (!res.ok) {
        return toast.error(data.message || "Error sending request");
      }
      toast.success("Friend request sent!");
      setUsername("");
      setShowInput(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Error sending request");
    }
  };

  return (
    <div className="mb-2">
      {!showInput ? (
        <button
          className="btn btn-sm bg-green-500 text-white rounded-full w-full"
          onClick={() => setShowInput(true)}
        >
          Add Friend
        </button>
      ) : (
        <div className="flex gap-2 mt-1">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered input-sm flex-1 rounded-full"
          />
          <button
            className="btn btn-sm bg-sky-500 text-white rounded-full"
            onClick={handleAddFriend}
          >
            Send
          </button>
          <button
            className="btn btn-sm bg-red-500 text-white rounded-full"
            onClick={() => setShowInput(false)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default AddFriend;

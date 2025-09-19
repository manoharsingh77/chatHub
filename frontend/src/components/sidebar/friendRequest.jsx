import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const FriendRequests = () => {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const res = await fetch("/api/friends/requests", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      setRequests(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleAccept = async (id) => {
    try {
      const res = await fetch(`/api/friends/accept/${id}`, {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) return toast.error(data.message);
      toast.success("Friend request accepted!");
      fetchRequests(); // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  const handleReject = async (id) => {
    try {
      const res = await fetch(`/api/friends/reject/${id}`, {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) return toast.error(data.message);
      toast.success("Friend request rejected!");
      fetchRequests(); // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mb-2">
      <h3 className="text-white font-bold mb-1">Friend Requests</h3>
      {requests.length === 0 ? (
        <p className="text-gray-300">No pending requests</p>
      ) : (
        requests.map((req) => (
          <div key={req._id} className="flex justify-between items-center bg-gray-700 p-2 rounded mb-1">
            <span>{req.fullName} (@{req.username})</span>
            <div className="flex gap-1">
              <button
                className="btn btn-sm bg-green-500 text-white"
                onClick={() => handleAccept(req._id)}
              >
                Accept
              </button>
              <button
                className="btn btn-sm bg-red-500 text-white"
                onClick={() => handleReject(req._id)}
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FriendRequests;

# ChatHub

ChatHub is a real-time chat application built using modern web technologies. It allows users to send and receive messages instantly, manage conversations, and have a seamless chat experience.

---

## Features

- Real-time messaging between users
- Multiple conversation support
- User authentication and session management
- Responsive design for desktop and mobile
- Toast notifications for errors and updates

---

## Tech Stack

- **Frontend:** React, Tailwind CSS (or your styling framework)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (or your DB)
- **Authentication:** Cookie-based or JWT
- **Realtime Communication:** WebSocket / Socket.io
- **Notifications:** react-hot-toast

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/chatApp.git
cd chatApp
```
2. **Install dependencies**
```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```
  3. ***Set up environment variables***

* Create a .env file in the server folder.

* Add variables like this:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
4. ***Run the application***
``` bash
# Backend
cd server
npm run server

# Frontend
cd ../client
npm run dev
```




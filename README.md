🛠️ Tech Stack

| Technology      | Description                                   |
| ------------------- | ------------------------------------------------- |
| Frontend        | React, Zustand, Axios, Lucide Icons, React Router |
| Backend         | Express.js, MongoDB, JWT, Redis, Joi              |
| Auth & Security | bcrypt, JWT, Validator                            |

---

📦 Dependencies

🔧 Backend Dependencies

| Package           | Version    | Purpose                                      |
| ----------------- | ---------- | -------------------------------------------- |
| bcryptjs      | `^2.4.3`   | Hashing passwords for secure authentication  |
| cookie-parser | `^1.4.7`   | Parses cookies for session management        |
| cors          | `^2.8.5`   | Enables cross-origin requests                |
| dotenv        | `^16.4.7`  | Loads environment variables from `.env` file |
| express       | `^4.21.2`  | Backend framework for building APIs          |
| ioredis       | `^5.4.2`   | Redis client for caching & session storage   |
| joi          | `^17.13.3` | Schema validation for user inputs            |
| jsonwebtoken  | `^9.0.2`   | Secure authentication with JWT tokens        |
| mongoose      | `^8.9.5`   | ODM for MongoDB (database interaction)       |
| validator     | `^13.12.0` | Validates user input fields                  |

🎨 Frontend Dependencies

| Package              | Version    | Purpose                               |
| -------------------- | ---------- | ------------------------------------- |
| axios            | `^1.7.9`   | Fetching data from the backend API    |
| lucide-react     | `^0.475.0` | Beautiful icons for the UI            |
| react            | `^19.0.0`  | Core library for building UI          |
| react-dom      | `^19.0.0`  | Rendering UI elements in the DOM      |
| react-hot-toast  | `^2.5.1`   | Notifications and toasts for feedback |
| react-router-dom | `^7.1.5`   | Routing and navigation in the app     |
| zustand          | `^5.0.3`   | State management for React components |


📂 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/Sachin-Sahu149/Assignment
cd your-repo


2️⃣ Backend Setup

cd backend
npm install
npm start  # Runs the Express server


Set up your `.env` file with:

PORT=5000
MONGO_URI=your_mongodb_connection
ACCESS_TOKEN
REFRESH_TOKEN
NODE_ENV
REDIS_URL=your_redis_url



3️⃣ Frontend Setup

cd frontend
npm install
npm run dev  # Runs the frontend on localhost:5173


import { useState } from "react";
import { Link } from "react-router-dom";

export function Registration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    tenthPercentage: "",
    twelfthPercentage: "",
    program: "",
    branch: "",
    age: "",
    contact: "",
    gender: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("formdata :", formData);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen py-10 px-2 flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Student Registration
        </h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="col-span-2">
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="col-span-2">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="col-span-2">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
              required
            />
          </div>

          {/* 10th & 12th Percentage */}
          <div className="max-sm:col-span-2">
            <label className="block text-gray-700 mb-1">10th Percentage</label>
            <input
              type="text"
              name="tenthPercentage"
              placeholder="Enter percentage"
              value={formData.tenthPercentage}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          <div className="max-sm:col-span-2">
            <label className="block text-gray-700 mb-1">12th Percentage</label>
            <input
              type="text"
              name="twelfthPercentage"
              placeholder="Enter percentage"
              value={formData.twelfthPercentage}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          {/* Program (Dropdown) */}
          <div className="max-sm:col-span-2">
            <label className="block text-gray-700 mb-1">Program</label>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
              required
            >
              <option value="">Select Program</option>
              <option value="B.Tech">B.Tech</option>
              <option value="BCA">BCA</option>
              <option value="M.Tech">M.Tech</option>
            </select>
          </div>

          {/* Branch (Dropdown) */}
          <div className="max-sm:col-span-2">
            <label className="block text-gray-700 mb-1">Branch</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
              required
            >
              <option value="">Select Branch</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="Mechanical">Mechanical</option>
            </select>
          </div>

          {/* Age */}
          <div className="max-sm:col-span-2">
            <label className="block text-gray-700 mb-1">Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
              required
            />
          </div>

          {/* Contact No. */}
          <div className="max-sm:col-span-2">
            <label className="block text-gray-700 mb-1">Contact No.</label>
            <input
              type="text"
              name="contact"
              placeholder="Enter contact no."
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-sky-400 focus:outline-none"
              required
            />
          </div>

          {/* Gender (Radio Buttons) */}
          <div className="col-span-2">
            <label className="block text-gray-700 mb-1">Gender</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
                Female
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Register
            </button>
            <p className="text-center text-gray-700">Or</p>
            <Link to={'/login'}>
              <button className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

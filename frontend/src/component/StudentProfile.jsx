import { Mail, Phone, User } from "lucide-react";

export default function StudentProfile() {
  const student = {
    fullName: "Kumar Sahu",
    age: "18",
    gender: "Male",
    branch: "CSE",
    program: "B.Tech",
    tenthPercentage: "96.5%",
    twelfthPercentage: "94.8%",
    email: "punam@gmail.com",
    contact: "7453933845",
  };

  return (
    <div className="flex justify-center items-start min-h-full bg-gray-100 sm:p-6">
      <div className="w-full max-h-full  bg-white shadow-lg rounded-2xl p-6">
        <div className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">Student Profile</div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <User className="w-12 h-12 text-blue-500" />
            <div>
              <h2 className="text-lg font-semibold">{student.fullName}</h2>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md">{student.gender}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Branch:</strong> {student.branch}</p>
            <p><strong>Program:</strong> {student.program}</p>
            <p><strong>10th %:</strong> {student.tenthPercentage}</p>
            <p><strong>12th %:</strong> {student.twelfthPercentage}</p>
          </div>
          <div className="flex items-center gap-3 mt-4 text-gray-700">
            <Mail className="w-5 h-5 text-green-500" />
            <span>{student.email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Phone className="w-5 h-5 text-blue-500" />
            <span>{student.contact}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

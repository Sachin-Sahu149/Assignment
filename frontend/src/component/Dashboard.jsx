import React from "react";



export function Lectures({ data }) {

  return (
    <li className="p-3 bg-gray-200 rounded-lg">{data}</li>
  )
}

export function CourseAttendence({ name, presence }) {

  return (
    <li className="p-3 bg-gray-200 rounded-lg flex justify-between">
      <span>{name}</span>
      <span className="font-bold">{presence}%</span>
    </li>
  )
}

export function Dashboard() {

  let data = '12:15 - 13:10 - Compiler Construction'
  let A = [data, data, data, data, data, data, data, data, data]
  let course = {
    name: "Computer Network",
    presence: 78.9
  }
  let b = [course, course, course, course, course, course, course]

  return (
    <div className="min-h-full w-full bg-gray-100 p-4 overflow-y-auto flex flex-col">
      {/* Top Section */}
      <div className=" min-h-52  grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4 ">
        <div className="bg-green-200 p-4  min-h-36 rounded-xl shadow-md flex flex-col items-center justify-center">
          <p className="text-lg font-semibold">Attendance</p>

        </div>

        <div className="bg-red-300 p-4 min-h-36 rounded-xl shadow-md flex items-center justify-center text-white font-semibold">
          No Fee Due
        </div>
        <div className="bg-blue-300 p-4 rounded-xl min-h-36 shadow-md flex items-center justify-center text-white font-semibold">
          <p>Career Confidence with DNA</p>
        </div>
        <div className="bg-yellow-300 p-4 rounded-xl min-h-36 shadow-md flex items-center justify-center text-white font-semibold">
          Online Guest Lectures / Webinars
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-4 min-h-full overflow-y-auto ">
        {/* My Classes Section */}
        <div className="bg-white p-4 rounded-xl shadow-md flex-1 max-h-[32rem]  overflow-hidden">
          <h2 className="text-xl font-semibold mb-2">My Classes</h2>
          <div className="overflow-y-auto max-h-[28rem] py-5 px-3 custom-scrollbar">
            <p className="font-medium">February 13, 2025</p>

            <ul className="mt-2 space-y-2">
              {A.map((data, index) => {
                return <Lectures key={index} data={data} />
              })}
            </ul>

          </div>
        </div>

        {/* My Attendance Section */}
        <div className="bg-white p-4 rounded-xl shadow-md max-h-[32rem] flex-1 overflow-hidden">
          <h2 className="text-xl font-semibold mb-2">My Attendance</h2>
          <div className="max-h-[28rem] overflow-y-auto px-2 py-5 custom-scrollbar">
            <ul className="mt-2 space-y-2">
              {b.map((data, index) => (
                <CourseAttendence key={index} name={data.name} presence={data.presence} />
              ))}

            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}

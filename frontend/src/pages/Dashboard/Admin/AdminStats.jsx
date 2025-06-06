import React, { useEffect, useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineFileCopy, MdPendingActions } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminStats = ({ users }) => {
  const [data, setData] = useState();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/admin-stats")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log("data : ", data);
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
        {/* Length account and icon */}
        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Member</h3>
            <p className="text-3xl">{users.length}</p>
          </div>
        </div>
        {/* Length Approved class and icon */}
        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-blue-400">
            <MdOutlineFileCopy className="h-12 w-12 text-white" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Approved Class</h3>
            <p className="text-3xl">{data?.approvedClasses}</p>
          </div>
        </div>
        {/* Length Instructor and icon */}
        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-indigo-400">
            <FaChalkboardTeacher className="h-12 w-12 text-white" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Instructor</h3>
            <p className="text-3xl">{data?.instructorCount}</p>
          </div>
        </div>
        {/* Length Pending class and icon */}
        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-red-400">
            <MdPendingActions className="h-12 w-12 text-white" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Pending Class</h3>
            <p className="text-3xl">{data?.pendingClasses}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStats;

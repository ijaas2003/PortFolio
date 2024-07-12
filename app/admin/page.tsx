"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Admin = () => {
  const [adminName, setAdminName] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const router = useRouter();

  const handleFetch = async () => {
    try {
      const response = await fetch(
        "https://port-folio-two-xi.vercel.app/api/admin",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            adminName,
            adminPass,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      router.push("/admin/data");
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] bg-gray-900 flex justify-center items-center">
      <div className="bg-slate-700 flex flex-col text-white w-[300px] h-[300px] p-5 rounded-md">
        <div className="flex justify-center mb-5">
          <h1>Login</h1>
        </div>
        <div className="space-y-4 mb-5">
          <div>
            <input
              type="text"
              placeholder="Admin Name"
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
              className="w-full p-2 rounded"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Admin Password"
              value={adminPass}
              onChange={(e) => setAdminPass(e.target.value)}
              className="w-full p-2 rounded"
            />
          </div>
        </div>
        <button
          onClick={handleFetch}
          className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Admin;

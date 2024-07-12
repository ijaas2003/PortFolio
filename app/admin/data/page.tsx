"use client";
import { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://port-folio-two-xi.vercel.app/api/admin/data"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData.Data); // Assuming jsonData.Data is the array you want to display
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Admin Data</h1>
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">CompanyName</th>
              <th className="py-3 px-6 text-left">Time Stamp(Created)</th>
              <th className="py-3 px-6 text-left">Time Stamp(Updated On)</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light text-black-100">
            {data.map((item: any) => (
              <tr
                key={item._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {item._id}
                </td>
                <td className="py-3 px-6 text-left">{item.visiter}</td>
                <td className="py-3 px-6 text-left">{item.createdAt}</td>
                <td className="py-3 px-6 text-left">{item.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;

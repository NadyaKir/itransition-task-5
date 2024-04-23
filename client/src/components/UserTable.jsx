import React from "react";

function UserTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              №
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Full name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Adress
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              1
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              1234567
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              John Doe
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Vashington, 13 ds. street
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              +67(454)4563456
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;

import React from "react";

function UserTable() {
  return (
    <div className="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              №
            </th>
            <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Full name
            </th>
            <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Adress
            </th>
            <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              1234567
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              John Doe
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Vashington, 13 ds. street
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              +67(454)4563456
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;

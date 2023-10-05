import React from 'react';

const List = () => {
  return (
    <div className="w-full mx-auto sm:p-4 dark:text-gray-100">
    <h2 className="mb-4 text-2xl font-semibold leadi">Contacts</h2>
    <div className="overflow-x-auto">
      <table className="w-full p-6 text-xs text-left whitespace-nowrap">
        <colgroup>
          <col className="w-5" />
          <col />
          <col />
          <col />
          <col />                        
          <col />
          <col className="w-5" />
        </colgroup>
        <thead>
          <tr className="dark:bg-gray-700">
            <th className="p-3">A-Z</th>
            <th className="p-3">Name</th>
            <th className="p-3">Job title</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Email</th>
            <th className="p-3">Address</th>
            <th className="p-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>  
        <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
          {/* Your table rows go here */}
        </tbody>
      </table>
    </div>
  </div>
);
}

export default List;

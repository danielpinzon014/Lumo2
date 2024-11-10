import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Globe, Calendar, Clock } from 'lucide-react';

export function LandingList() {
  const landings = [
    {
      id: 1,
      name: 'Product Launch 2024',
      status: 'published',
      url: 'https://example.com/product-launch',
      visits: 1234,
      lastModified: '2024-03-15',
    },
    {
      id: 2,
      name: 'Spring Sale Campaign',
      status: 'draft',
      visits: 0,
      lastModified: '2024-03-14',
    },
    {
      id: 3,
      name: 'Newsletter Signup',
      status: 'published',
      url: 'https://example.com/newsletter',
      visits: 567,
      lastModified: '2024-03-10',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Landing Pages</h1>
          <p className="mt-1 text-sm text-gray-500">
            Create and manage your landing pages
          </p>
        </div>
        <Link
          to="/landing-builder/editor"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Landing Page
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    Page Name
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    URL
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Visits
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Last Modified
                  </th>
                  <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {landings.map((landing) => (
                  <tr key={landing.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                      {landing.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          landing.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {landing.status.charAt(0).toUpperCase() + landing.status.slice(1)}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {landing.url ? (
                        <a
                          href={landing.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-indigo-600 hover:text-indigo-900"
                        >
                          <Globe className="h-4 w-4 mr-1" />
                          View Page
                        </a>
                      ) : (
                        <span className="text-gray-400">Not published</span>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {landing.visits.toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {landing.lastModified}
                      </div>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <Link
                        to={`/landing-builder/editor/${landing.id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
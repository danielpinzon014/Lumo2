import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Play, Pause, Settings, MoreVertical, Clock } from 'lucide-react';

const automations = [
  {
    id: 1,
    name: 'VIP Customer Journey',
    description: 'Automatically tag and reward high-value customers',
    status: 'active',
    triggers: ['Order paid'],
    lastRun: '2024-03-15T10:30:00',
  },
  {
    id: 2,
    name: 'Abandoned Cart Recovery',
    description: 'Follow up with customers who abandoned their cart',
    status: 'paused',
    triggers: ['Cart abandoned'],
    lastRun: '2024-03-14T15:45:00',
  },
  {
    id: 3,
    name: 'Welcome Series',
    description: 'Onboard new customers with a series of welcome emails',
    status: 'active',
    triggers: ['Customer created'],
    lastRun: '2024-03-13T09:15:00',
  },
];

export function AutomationList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Automatizaciones</h1>
          <p className="mt-2 text-sm text-gray-700">
            Crea flujos automatizados para interactuar con tus clientes en el momento adecuado
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link
            to="/automation/editor"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nueva Automatización
          </Link>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Nombre
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Trigger
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Última Ejecución
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Estado
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Acciones</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {automations.map((automation) => (
                    <tr key={automation.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                        <div>
                          <div className="font-medium text-gray-900">{automation.name}</div>
                          <div className="text-sm text-gray-500">{automation.description}</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {automation.triggers.join(', ')}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-gray-400" />
                          {new Date(automation.lastRun).toLocaleString()}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            automation.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {automation.status === 'active' ? 'Activo' : 'Pausado'}
                        </span>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <div className="flex justify-end space-x-2">
                          <button
                            className="text-gray-400 hover:text-gray-500"
                            title={automation.status === 'active' ? 'Pausar' : 'Activar'}
                          >
                            {automation.status === 'active' ? (
                              <Pause className="h-5 w-5" />
                            ) : (
                              <Play className="h-5 w-5" />
                            )}
                          </button>
                          <Link
                            to={`/automation/editor?id=${automation.id}`}
                            className="text-gray-400 hover:text-gray-500"
                            title="Editar"
                          >
                            <Settings className="h-5 w-5" />
                          </Link>
                          <button className="text-gray-400 hover:text-gray-500" title="Más opciones">
                            <MoreVertical className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
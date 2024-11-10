import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Megaphone, 
  Mail, 
  Users, 
  FolderOpen, 
  UserCircle,
  Bell,
  Search,
  Menu,
  Workflow,
  LayoutTemplate
} from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <LayoutDashboard className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Lumo</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <NavLink 
                  to="/"
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/campaigns"
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`
                  }
                >
                  Campañas
                </NavLink>
                <NavLink
                  to="/email-builder"
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`
                  }
                >
                  Editor de Email
                </NavLink>
                <NavLink
                  to="/landing-builder"
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`
                  }
                >
                  <LayoutTemplate className="h-4 w-4 mr-1" />
                  Landing Pages
                </NavLink>
                <NavLink
                  to="/automation"
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`
                  }
                >
                  <Workflow className="h-4 w-4 mr-1" />
                  Automatización
                </NavLink>
                <NavLink
                  to="/crm"
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`
                  }
                >
                  CRM
                </NavLink>
                <NavLink
                  to="/assets"
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`
                  }
                >
                  Recursos
                </NavLink>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-600">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-600">
                <Bell className="h-5 w-5" />
              </button>
              <NavLink
                to="/profile"
                className="p-2 rounded-full text-gray-500 hover:text-gray-600"
              >
                <UserCircle className="h-5 w-5" />
              </NavLink>
            </div>
            <div className="flex items-center sm:hidden">
              <button className="p-2 rounded-md text-gray-500 hover:text-gray-600">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
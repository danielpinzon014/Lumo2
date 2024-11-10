import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StartOptionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export function StartOption({ icon: Icon, title, description, onClick }: StartOptionProps) {
  return (
    <div 
      onClick={onClick}
      className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div>
        <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
          <Icon className="h-6 w-6" />
        </span>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium">
          <span className="absolute inset-0" aria-hidden="true" />
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          {description}
        </p>
      </div>
      <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
        </svg>
      </span>
    </div>
  );
}
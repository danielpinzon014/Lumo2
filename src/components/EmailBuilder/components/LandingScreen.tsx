import React from 'react';
import { Mail, FileCode, LayoutTemplate } from 'lucide-react';
import { StartOption } from './StartOption';
import { TemplateCard } from './TemplateCard';
import { Template } from '../types';

interface LandingScreenProps {
  onStartFromScratch: () => void;
  onSelectTemplate: (templateId: string) => void;
  templates: Template[];
}

export function LandingScreen({ onStartFromScratch, onSelectTemplate, templates }: LandingScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create Your Email</h2>
          <p className="mt-4 text-lg text-gray-500">Choose how you'd like to start building your email campaign</p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Start from scratch */}
            <StartOption
              icon={FileCode}
              title="Start from Scratch"
              description="Begin with a blank canvas and create your email exactly how you want it"
              onClick={onStartFromScratch}
            />

            {/* Use a template */}
            <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                  <LayoutTemplate className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  Use a Template
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Start with a pre-designed template and customize it to your needs
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {templates.map((template) => (
                  <TemplateCard
                    key={template.id}
                    {...template}
                    onSelect={onSelectTemplate}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
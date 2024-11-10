import React from 'react';

interface TemplateCardProps {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  onSelect: (id: string) => void;
}

export function TemplateCard({ id, name, description, thumbnail, onSelect }: TemplateCardProps) {
  return (
    <div
      onClick={() => onSelect(id)}
      className="relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <img
          src={thumbnail}
          alt={name}
          className="object-cover rounded-md"
        />
      </div>
      <h4 className="text-sm font-medium text-gray-900">{name}</h4>
      <p className="mt-1 text-xs text-gray-500">{description}</p>
    </div>
  );
}
import React, { useState } from 'react';
import { FormField } from '../types';
import { Plus, Trash2 } from 'lucide-react';

interface FormBuilderProps {
  onSave: (fields: FormField[]) => void;
}

export function FormBuilder({ onSave }: FormBuilderProps) {
  const [fields, setFields] = useState<FormField[]>([]);

  const addField = (type: FormField['type']) => {
    const newField: FormField = {
      type,
      label: `New ${type} field`,
      name: `field_${Date.now()}`,
      required: false,
    };
    setFields([...fields, newField]);
  };

  const updateField = (index: number, updates: Partial<FormField>) => {
    const newFields = [...fields];
    newFields[index] = { ...newFields[index], ...updates };
    setFields(newFields);
  };

  const removeField = (index: number) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    onSave(fields);
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-lg font-medium">Form Builder</h3>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Save Form
        </button>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => addField('text')}
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <Plus className="h-4 w-4 inline mr-2" />
            Text Field
          </button>
          <button
            onClick={() => addField('email')}
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <Plus className="h-4 w-4 inline mr-2" />
            Email Field
          </button>
        </div>

        <div className="space-y-4">
          {fields.map((field, index) => (
            <div
              key={field.name}
              className="p-4 border border-gray-200 rounded-md"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={field.label}
                    onChange={(e) => updateField(index, { label: e.target.value })}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <button
                  onClick={() => removeField(index)}
                  className="ml-2 p-1 text-red-600 hover:bg-red-50 rounded"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Field Name
                  </label>
                  <input
                    type="text"
                    value={field.name}
                    onChange={(e) => updateField(index, { name: e.target.value })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={field.required}
                    onChange={(e) =>
                      updateField(index, { required: e.target.checked })
                    }
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    Required field
                  </label>
                </div>

                {field.type === 'text' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Placeholder
                    </label>
                    <input
                      type="text"
                      value={field.placeholder || ''}
                      onChange={(e) =>
                        updateField(index, { placeholder: e.target.value })
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
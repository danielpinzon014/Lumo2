import React from 'react';
import { 
  LayoutGrid, 
  Type, 
  Image as ImageIcon, 
  FormInput, 
  Square,
  Link as LinkIcon,
  Grid,
  Box
} from 'lucide-react';

export function Blocks() {
  return (
    <div className="p-4">
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Basic Blocks</h3>
        <div className="space-y-2">
          <div className="block-item">
            <LayoutGrid className="h-5 w-5 text-gray-400 mr-2" />
            <span>Section</span>
          </div>
          <div className="block-item">
            <Type className="h-5 w-5 text-gray-400 mr-2" />
            <span>Text</span>
          </div>
          <div className="block-item">
            <ImageIcon className="h-5 w-5 text-gray-400 mr-2" />
            <span>Image</span>
          </div>
          <div className="block-item">
            <LinkIcon className="h-5 w-5 text-gray-400 mr-2" />
            <span>Link</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Form Elements</h3>
        <div className="space-y-2">
          <div className="block-item">
            <FormInput className="h-5 w-5 text-gray-400 mr-2" />
            <span>Input</span>
          </div>
          <div className="block-item">
            <Square className="h-5 w-5 text-gray-400 mr-2" />
            <span>Button</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Layout</h3>
        <div className="space-y-2">
          <div className="block-item">
            <Grid className="h-5 w-5 text-gray-400 mr-2" />
            <span>Grid</span>
          </div>
          <div className="block-item">
            <Box className="h-5 w-5 text-gray-400 mr-2" />
            <span>Container</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .block-item {
          display: flex;
          align-items: center;
          padding: 0.75rem;
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          cursor: grab;
          transition: all 0.2s;
        }
        
        .block-item:hover {
          border-color: #4f46e5;
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
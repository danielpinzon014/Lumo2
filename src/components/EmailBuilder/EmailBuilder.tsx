/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import gjsPresetNewsletter from 'grapesjs-preset-newsletter';
import 'grapesjs/dist/css/grapes.min.css';
import './EmailBuilder.css';

export const EmailBuilderComponent: React.FC = () => {
  const editorRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    editorRef.current = grapesjs.init({
      container: containerRef.current,
      height: '100vh',
      fromElement: true,
      storageManager: false,
      plugins: [gjsPresetNewsletter],
      pluginsOpts: {
        gjsPresetNewsletter: {},
      },
      deviceManager: {
        devices: [
          {
            name: 'Desktop',
            width: '',
          },
          {
            name: 'Mobile',
            width: '320px',
            widthMedia: '480px',
          },
        ],
      },
      panels: {
        defaults: [
          {
            id: 'panel-devices',
            el: '.panel__devices',
            buttons: [
              {
                id: 'device-desktop',
                label: 'Desktop',
                command: 'set-device-desktop',
                active: true,
                togglable: false,
              },
              {
                id: 'device-mobile',
                label: 'Mobile',
                command: 'set-device-mobile',
                togglable: false,
              },
            ],
          },
        ],
      },
    });

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

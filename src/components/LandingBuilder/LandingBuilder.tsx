import React, { useEffect, useRef, useState } from 'react';
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import gjsBlocksBasic from 'grapesjs-blocks-basic';
import 'grapesjs/dist/css/grapes.min.css';
import './LandingBuilder.css';

export function LandingBuilder() {
  useEffect(() => {
    // Inicializar GrapesJS en el contenedor
    const editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      height: '100vh',
      width: 'auto',
      storageManager: { autoload: 0 },
      panels: { defaults: [] },
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section',
            label: 'Sección',
            content:
              '<section class="section"><h2>Bienvenido a mi página</h2></section>',
            category: 'Básico',
          },
          {
            id: 'text',
            label: 'Texto',
            content: '<p>Aquí va tu texto.</p>',
            category: 'Básico',
          },
          {
            id: 'image',
            label: 'Imagen',
            content: '<img src="https://via.placeholder.com/150" alt="Imagen">',
            category: 'Básico',
          },
        ],
      },
    });

    return () => {
      editor.destroy(); // Limpiar el editor cuando el componente se desmonte
    };
  }, []);

  return (
    <div>
      <h1>Editor de Landing Page con GrapesJS</h1>
      <div id="gjs" style={{ height: '80vh' }}></div>
    </div>
  );
}

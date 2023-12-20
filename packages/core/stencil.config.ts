import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { ValueAccessorConfig, angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
/*
//import { eventListenerTypesOutputTarget } from 'event-listener-types-output-target';
//FIXME: There is an error in generator that makes invalid signs in output file which generates Typescript error.
// Johnny run it once and fix the file but for any change in the events in our components,
// we need to regenerate this file again.
// Also uncomment a line 69.

 */

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['tds-radio-button'],
    event: 'tdsChange',
    targetAttr: 'value',
    type: 'radio',
  },
  {
    elementSelectors: ['tds-checkbox'],
    event: 'tdsChange',
    targetAttr: 'value',
    type: 'boolean',
  },
  {
    elementSelectors: ['tds-text-field', 'tds-textarea'],
    event: 'tdsChange',
    targetAttr: 'value',
    type: 'text',
  },
  {
    elementSelectors: ['tds-dropdown'],
    event: 'tdsChange',
    targetAttr: 'value',
    type: 'text',
  },
  {
    elementSelectors: ['tds-slider'],
    event: 'tdsChange',
    targetAttr: 'value',
    type: 'number',
  },
  {
    elementSelectors: ['tds-chip'],
    event: 'tdsChange',
    targetAttr: 'value',
    type: 'radio',
  },
  {
    elementSelectors: ['tds-chip'],
    event: 'tdsChange',
    targetAttr: 'value',
    type: 'boolean',
  },
];

export const config: Config = {
  namespace: 'tegel',
  globalStyle: 'src/global/global.scss',
  extras: {
    enableImportInjection: true,
    tagNameTransform: true,
  },
  plugins: [sass()],
  sourceMap: false,
  testing: {
    browserArgs: ['--headless=new'],
  },
  outputTargets: [
    // eventListenerTypesOutputTarget(),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    angularOutputTarget({
      componentCorePackage: '@scania/tegel',
      outputType: 'component',
      directivesProxyFile: '../angular/projects/components/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/projects/components/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      componentCorePackage: '@scania/tegel',
      proxiesFile: '../react/lib/components/stencil-generated/index.ts',
    }),
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
      customElementsExportBehavior: 'auto-define-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};

import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  
  moduleNameMapper: {
    // 👇 SOLUCIÓN: Enseña a Jest a resolver las rutas absolutas de 'src/'
    '^src/(.*)$': '<rootDir>/src/$1',
    
    // Mantenemos la solución anterior de los iconos
    '^ionicons/components/ion-icon.js$': '<rootDir>/node_modules/@ionic/core/components/ion-icon.js',
  },

  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!@angular|@ionic|@ionic/core|@stencil|ionicons|.*\\.mjs$)'
  ],

  testMatch: [
    '<rootDir>/src/**/*.spec.ts',
    '<rootDir>/src/**/*.test.ts'
  ],

  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/src/test.ts' 
  ],

  transform: {
    '^.+\\.(ts|js|mjs)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
};

export default config;

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/mocks/styles.js',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./src/mocks/localStorage.setup.js'],
};

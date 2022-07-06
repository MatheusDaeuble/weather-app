module.exports = {
  preset: 'jest-expo',
  testPathIgnorePatterns: ['/node_modules', '/android', '/ios'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    'jest-styled-components',
  ],
  collectCoverage: true,
  setupFiles: ['./setupFile.js'],
  collectCoverageFrom: [
    // Include:
    'src/ui/components/**/*.tsx',
    'src/util/*.ts',
    // Exclude:
    '!src/util/indexSVG.ts',
    '!src/util/templateSVG.ts',
    '!src/**/*.spec.tsx',
  ],
  coverageReporters: ['lcov'],
};

module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  testMatch: ['**/src/test/**/*.test.(ts|js)'],
  testEnvironment: 'node',
  collectCoverage: false,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/index.js"
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  }
};

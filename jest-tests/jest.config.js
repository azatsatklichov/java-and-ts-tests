module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts}",
    "resources/**/*.{js,jsx,ts}",
    "!**/node_modules/**",
    "!**/coverage/**"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 59,
      "functions": 60,
      "lines": 60,
      // "statements": -10
    }
  }
}






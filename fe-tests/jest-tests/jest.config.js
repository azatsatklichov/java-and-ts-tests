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
  "testResultsProcessor": "sonar-reporter",
  "coverageThreshold": {
    "global": {
      "branches": 91,
      "functions": 91,
      "lines": 91,
      "statements": -10
    }
  }
}






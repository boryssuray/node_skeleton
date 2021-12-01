module.exports = {
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
        diagnostics: {
          pathRegex: /\.(spec|test)\.ts$/
        }
      }
    },
    moduleFileExtensions: [
      'ts',
      'js',
      'json'
    ],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: [
      '**/test/**/*.test.(ts)'
    ],
    testEnvironment: 'node'
  };
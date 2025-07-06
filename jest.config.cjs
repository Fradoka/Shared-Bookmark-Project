// jest.config.cjs
module.exports = { // Use CommonJS module.exports
  // Specify the test environment
  testEnvironment: 'jsdom',

  // Tell Jest to transform JavaScript files using babel-jest
  transform: {
    '^.+\\.[tj]s$': 'babel-jest', // Apply babel-jest to .js and .ts files
  },

  // Tell Jest where to find your test files
  testMatch: [
    '<rootDir>/tests/**/*.test.js', // Matches files like tests/myFile.test.js
  ],

  // This is often needed with "type": "module" projects,
  // as Jest's default transformIgnorePatterns might exclude node_modules
  // that are published as ESM and need to be transpiled.
  // For now, let's include it. If your dependencies are all CommonJS, you might not need this.
  transformIgnorePatterns: [
    '/node_modules/(?!(your-esm-dependency-name-here|another-one)/)',
    // The above is if you have specific ESM modules in node_modules that need transforming.
    // A simpler, broader, but potentially slower option is:
    // "/node_modules/" // This will transform ALL node_modules. Often not ideal but useful for debugging.
    // For typical "type: module" setups, sometimes you need to tell Jest to
    // transform your own source files and not touch node_modules,
    // which the default transform and babel-jest usually do.
    // Let's try it without a custom transformIgnorePatterns first, as default behavior is often fine.
    // If you encounter "unexpected token" from inside node_modules later, uncomment this line:
    // 'node_modules/(?!.*\\.mjs$)' // A common pattern to ignore most node_modules but allow .mjs files
  ],

  // You can add these back if you like, but your test file already manages them.
  // resetModules: true,
  // clearMocks: true,
  // restoreMocks: true,
};
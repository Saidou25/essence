module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',  // Mock CSS imports
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',  // Mock image files like xLogo.png
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",  // Use Babel transformer
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],  // Setup files for Jest
};

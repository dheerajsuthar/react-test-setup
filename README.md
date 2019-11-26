# React Testing Library

Basic setup of Jest & React testing library to test a simple form.
## Setup

### Dependencies
```
npm install --save-dev @testing-library/jest-dom

npm install --save-dev @testing-library/react
```

### package.json
```
"test": "jest -c jest.config.js --watch"
```

### src/setupTests.js
```
import '@testing-library/jest-dom/extend-expect'
```
## Run
```npm start```
## Test
```npm test```
## Content
* [Usage of basic Jest matchers](https://jestjs.io/docs/en/using-matchers)
* [Jest module mocking](https://jestjs.io/docs/en/mock-functions)
* [Usage of query functions provided by React testing library](https://testing-library.com/docs/dom-testing-library/cheatsheet)
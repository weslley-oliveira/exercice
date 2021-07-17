# TypeScript

Install node/npm:

OS X users: can use `brew install node`

Windows users: can [download an Installer](https://nodejs.org/en/download/)

Linux users: can install it [via package manager](https://nodejs.org/en/download/package-manager/)

## Requirements

Install assignment dependencies:

```bash
$ npm install
```

## Making the test suite pass

Execute the tests with:

```bash
$ npm test
```

or to have it watch for changes:

```bash
$ npm test --watchAll
```

In the test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xit` to
`it`.

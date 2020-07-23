# Electron Quickstarter

Electron Quickstarter is a personal project build based on [this project](https://github.com/Robinfr/electron-react-typescript)

### What is included

  - React
  - HMR (Hot Module Reload)
  - Typescript
  - Webpack setup
  - ElectronBuilder setup

### Getting Started

Clone the repository

```sh
$ git clone --depth=1 https://github.com/gugamm/electron-quickstarter.git <your-project-name>
```

Then install the dependencies

```sh
$ cd <your-project-name>
$ npm install
```

### Scripts

Below is a description of each included script

| Script | Description |
| ------ | ------ |
| start | Launch electron main application and renderer application in watch mode |
| start-renderer | Launch renderer application in a browser in watch mode (should only be used if not using any node api) |
| build | Build all TS code into /dist folder. This is different from building a distributable version  |
| dist | Builds and generates a distributable version of your app |

### License

**MIT**

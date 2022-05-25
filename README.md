# Swifty Companion

The aim of this project is to allow [42 School](https://42.fr/) candidates to search for their colleagues and view their profiles which contain the following (image, name, login, wallet, current cursus level) and the projects they worked on with the following details (project status, final mark) and the skills they acquired during their cursus.

## Screens

![screens from the app](https://i.ibb.co/Pz5D765/Screens.png")

## Installation

> This project is created using react-native CLI

```
npm install
```

## Usage for android

```
npm run android
```

## Configuration

Rename the file `secrets-example.ts` to `secrets.ts` in `src/config` which include the following config variables:

| Name               | Required | Type     | Default value | Description |
| ------------------ | -------- | -------- | ------------- | ----------- |
| `CLIENT_SECRET_ID` | true     | `string` | -             | -           |
| `CLIENT_ID`        | true     | `string` | -             | -           |

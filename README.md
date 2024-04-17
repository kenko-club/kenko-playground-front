# Kenko Playground React

## Setup

Ensure you have yarn installed:

```sh
npm install --global yarn
```

To build and run the project in dev mode:

```
yarn
yarn dev
```

## Architecture

The project follows the atomic design architecture.
The `src/components` folder contains specific folders (mostly empty now) which should follow these principles :

- `01-atoms`: very basic component (examples: text, paragraph, link...)
- `02-molecules`: basic components made out of atoms (examples: button, input, tooltip...)
- `03-organisms`: a whole feature, made out of molecules and atoms (example: navigation bar, table...)
- `04-template`: a whole page, made out of organisms

These 4 folders must only contain **pure** components.

You then have the `pages` folder, which contains components that must only:

- define functions which fetch or send data to external systems (via API for example)
- return a template with its parameters

## Exercise

1. Regarding the atomic design architecture, discuss what changes could be made to the current code.
1. Checkout the git branch "step/2" to get the next part of the README.


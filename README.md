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

1. We want to isolate our Admin Panel page in its own page, out of the `App` component:

   1. Create an empty `AdminPanel` component in `pages/AdminPanel.tsx`.

      _Reminder: to create a component, you need to export a function with the same name of the `.tsx` file. In this case, the AdminPanel.tsx should contain:_

   ```ts
   export function AdminPanel() {
     return <></>;
   }
   ```

   2. Move the content of the `App` component inside `AdminPanel`
   3. Return `AdminPanel` in the `App`

1. We cleaned up the `App` component, however we did not follow the rules regarding what a page must contain. A page should only return a template.

   1. Create the `AdminPanelTemplate` template.
   2. Move the content of the `AdminPanel` page inside `AdminPanelTemplate`.
   3. Import the `AdminPanelTemplate` template in the `AdminPanel` page.

1. In the next step, we will create a pull request. How can we do that ? Checkout the branch `step/3` to get the next steps.


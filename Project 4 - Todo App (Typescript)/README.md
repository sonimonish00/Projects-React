- Check Updates/Upgrade first : https://docs.npmjs.com/updating-packages-downloaded-from-the-registry
- npm init -y
- npm i --save-dev typescript
- TSConfig File (Similar to ESlint,Prettier,gitignore,JSDoc,etc.) : npx tsc --init
  - Changing tsconfig.json - output dir
  - Changing tsconfig.json - Module System commonJS => es6
- Installing Bundlers (Webpack,Babel,grunt,gulp,parcel,snowpack etc.) : we will use snowpack bundler
- Delete everything to start with snowpack command to automatically create (2nd Commit to github until this)
- snowpack bundler 
  - npx create-snowpack-app . --template @snowpack/app-template-blank-typescript


# New Project - Todo App in React using TS (Web dev Simplified)

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.mjs` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.

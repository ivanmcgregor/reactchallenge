# Card Game App

## Technologies used:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Base components are done with [React Bootstrap](https://react-bootstrap.netlify.app/components/). It is currently in the beta but should become stable soon. 
Import components like `import Button from 'react-bootstrap/Button';` to avoid all of the components being bundled.

Styling should be done in scss (as that allows us to overwrite bootstrap variables and use mixins etc from there).

Testing is done with cypress, see their [docs](https://docs.cypress.io/guides/getting-started/writing-your-first-test) for more info.

## Available Scripts

In the project directory, you can run:

### `npm cy:ct`

Runs the app in cypress component testing mode. This is the unit test equivalent of your components. It will test every `*.(spec|test).(js|ts|jsx|tsx)` file in the `./src` folder.

Opens a new browser with your tests. Will refresh, when you do changes. Does not require the normal server to run and uses it's config. You might have to import the global styling if you require it for your tests.

If you have typical unit tests that test maybe a function, then you can test this with the underlying assertion stack as part of the component tests.

### `npm cy:e2e`

Will open the cypress ui so that you can pick e2e tests to run. This will run in your browser and load all tests from `./cypress/integration`. These tests should be across multiple components and testing the interaction (contrary to the component tests).

Cypress will mock all requests you tell cypress to mock, hence is preferable during development and for integration testing of our components. Do not mock every server request, so that we also test the integration with the backend systems!


### `npm test:ct`

Runs all cypress component tests headless for CI. See cy:ct for more details.\


### `npm test:e2e`

Runs all cypress e2e tests headless for CI. See cy:e2e for more details.\


### `npm start`

Runs the app in the default react development mode. Consider using either `cy:ct` instead or use it in conjunction with `cy:e2e`.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

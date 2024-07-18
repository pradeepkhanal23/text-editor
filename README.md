# PWA Text Editor

This project is a Progressive Web Application (PWA) text editor that runs in the browser, featuring offline functionality and data persistence using IndexedDB. It meets PWA criteria and is deployed on Render.

## User Story

As a developer, I want to create notes or code snippets with or without an internet connection so that I can reliably retrieve them for later use.

## Features

- **Offline Functionality:** Use the text editor without an internet connection.
- **IndexedDB Data Storage:** Store and retrieve content using IndexedDB.
- **Service Worker:** Enables offline functionality and installs as a PWA on desktop.
- **Webpack Bundling:** JavaScript files are bundled using Webpack.
- **Deployment:** Deployed on Render for scalability and reliability.

## Deplyment

This project is deployed on Render.Access the live demo [here.](https://text-editor-x28t.onrender.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:pradeepkhanal23/text-editor.git
   cd git@github.com:pradeepkhanal23/text-editor.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm run start
   ```

4. Open the application in your browser:

   ```bash
   http://localhost:your-port-number OR http://localhost:3000
   ```

## Folder Structure

The project includes a client-server folder structure.

- **Client**: Contains the frontend application bundled with Webpack.
- **Server**: Node.js backend with Express.js serving the client.

## Usage

1. Enter content in the text editor.
2. Content is saved automatically using IndexedDB.
3. Reload the application to retrieve saved content.

If you have any questions, feel free to reach out:

- **GitHub**: [pradeepkhanal23](https://github.com/pradeepkhanal23)
- **Email**: [pradeepkhanal642@gmail.com](mailto:pradeepkhanal642@gmail.com)

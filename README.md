# Express Hosting React Monorepo

## Purpose

This monorepo is designed to test the integration of a React build UI with an Express server for hosting. It serves as a demonstration of how to build and deploy a full-stack application using these technologies.

## Structure

- `ui`: Contains the React application.
- `server`: Contains the Express server.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/react-sso.git
   cd react-sso
   ```
2. Install dependencies for both ui and server:

   ```sh
   cd ui
   npm install
   cd ../server
   npm install
   ```

### Running the Application

1. Build the React application (this will create a `public` folder under the root directory):

   ```sh
   cd ui
   npm run build
   ```
2. Start the Express server:

   ```sh
   cd ../server
   npm start
   ```
3. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Contributing

Feel free to submit issues and pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.

# React To-Do List Application

This is a simple React To-Do List application that allows users to add, edit, delete, and mark tasks as completed. The application features a visually appealing interface with a larger and bolder text aligned to the left of the page.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed (strikes through the text)

## Project Structure
to-do-list-app/
├── public/
│ ├── index.html
│ └── favicon.ico
├── src/
│ ├── components/
│ │ ├── TodoItem.js
│ │ └── TodoList.js
│ ├── App.css
│ ├── App.js
│ ├── index.css
│ └── index.js
├── .gitignore
├── package.json
└── README.md

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Chandan-MN/to-do-list-app.git
    cd to-do-list-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Running the Application

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Troubleshooting

If you encounter the error `error:0308010C:digital envelope routines::unsupported`, you can bypass it by setting the `NODE_OPTIONS` environment variable:

1. **Linux/macOS:**

    ```bash
    export NODE_OPTIONS=--openssl-legacy-provider
    ```

2. **Windows:**

    ```cmd
    set NODE_OPTIONS=--openssl-legacy-provider
    ```

Alternatively, you can downgrade to a stable version of Node.js that does not have this issue, such as Node.js version 16.x.

1. **Use nvm (Node Version Manager) to manage Node.js versions:**

    **Install nvm (if not already installed):**

    - **macOS/Linux:**

        ```bash
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        ```

        After installing, close and reopen your terminal or run the following command:

        ```bash
        source ~/.nvm/nvm.sh
        ```

    - **Windows:**

        Download and run the nvm-setup from [nvm-windows releases](https://github.com/coreybutler/nvm-windows/releases).

2. **Install and use Node.js version 16.x:**

    ```bash
    nvm install 16
    nvm use 16
    ```

    Verify the version:

    ```bash
    node -v
    ```

3. Reinstall the dependencies to ensure compatibility:

    ```bash
    rm -rf node_modules package-lock.json
    npm install
    ```

4. Start the development server again:

    ```bash
    npm start
    ```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
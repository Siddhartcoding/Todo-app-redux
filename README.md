
Personal Todo App
This is a simple Todo application built using React and Redux. It allows users to add, remove, toggle completion status, 
and filter todos based on their completion status and search term.

Features
Add new todos
Remove todos
Toggle completion status of todos
Filter todos based on completion status (All, Completed, Incomplete)
Search todos by text
Technologies Used
React: A JavaScript library for building user interfaces.
Redux: A predictable state container for JavaScript apps.
React-Redux: Official React bindings for Redux.
Tailwind CSS: A utility-first CSS framework for quickly building custom designs.
Installation
To run this application locally, follow these steps:

Clone this repository to your local machine:
bash

git clone <repository-url>
Navigate to the project directory:
bash

cd <project-directory>
Install dependencies using npm or yarn:
bash

npm install
# or
yarn install
Start the development server:
bash

npm run dev
# or
npm run dev
Open your browser and visit http://URL to view the application.
File Structure
The project directory is structured as follows:

src/
|-- components/
|   |-- Todo.js
|   |-- TodoItem.js
|   |-- TodoList.js
|   |-- FilterButtons.js
|-- redux/
|   |-- actions.js
|   |-- reducers.js
|-- App.js
|-- main.js
components: Contains React components for different parts of the application.
redux: Contains Redux-related files including action creators and reducers.
App.js: Main component where the application is initialized.
index.js: Entry point of the application.
Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.

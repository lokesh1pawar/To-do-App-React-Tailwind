# Dynamic To-Do List Application 🚀

This is a beautifully designed dynamic to-do list application built with **React** and styled using **Tailwind CSS**. It allows users to manage their tasks efficiently with features like adding, completing, deleting, and filtering tasks. The application also persists data in local storage to ensure tasks are retained after a page refresh.

## Features

- **Add New Tasks**: Quickly add new tasks using a simple input field.
- **Mark Tasks as Complete**: Toggle task completion by clicking on the task.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Filter Tasks**: View tasks by categories - All, Completed, or Pending.
- **Data Persistence**: Tasks are saved in local storage to survive page refreshes.
- **Responsive Design**: A clean, responsive UI styled with Tailwind CSS.

## Demo

Todo App Demo



## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

## Components

### 1. `TodoApp`
The main component that manages the state and handles logic for adding, updating, and filtering tasks.

### 2. `AddTodo`
A form component for adding new tasks to the list.

### 3. `Filter`
Provides buttons to filter tasks by All, Completed, or Pending.

### 4. `TodoList`
Renders the list of tasks based on the current filter.

### 5. `TodoItem`
Displays individual tasks with options to toggle completion or delete them.

## API Integration

The app fetches initial tasks from the following API:
[https://dummyjson.com/todos](https://dummyjson.com/todos)

Tasks are mapped to the following structure:
```json
{
  "id": 1,
  "text": "Sample task",
  "completed": false
}
```

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **Local Storage**: To persist tasks between sessions.

## File Structure
```
src/
├── components/
│   ├── AddTodo.js
│   ├── Filter.js
│   ├── TodoList.js
│   └── TodoItem.js
├── App.js
└── index.js
```

## Screenshots

### Main Interface
![Main Interface](https://via.placeholder.com/800x400.png?text=Main+Interface)

### Add and Manage Tasks
![Add and Manage Tasks](https://via.placeholder.com/800x400.png?text=Add+and+Manage+Tasks)

## Contributing

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

**Lokesh Pawar**
- [GitHub](https://github.com/your-username)
- [Email](mailto:lokesh1pawar@gmail.com)


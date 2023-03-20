
# DevXplore Documentation

### This Web Application is made using Python and JavaScript



This document serves as the documentation for the DevXplore that allows developers to create profiles, share projects, and receive feedback from other developers through upvotes, downvotes, and comments.

## Technology Stack
The application uses the following technologies:

- Django as the main backend framework
- Pillow for image handling
- Django Rest Framework for making REST APIs
- React.js as a frontend library
- Axios for fetching data from the APIs
- Redux for state management
- Tailwind CSS for styling

### Django
Django is a high-level Python web framework that is used for building web applications quickly and easily. It is known for its "batteries included" philosophy, which means that it comes with many built-in features that make it easy to get started with web development.

Some of the key features of Django include its object-relational mapping (ORM) system, which makes it easy to work with databases, and its templating engine, which allows you to create dynamic HTML templates.

Django is also known for its security features, such as protection against cross-site scripting (XSS) and cross-site request forgery (CSRF) attacks. Additionally, Django has a strong community of developers and users, which means that it is well-documented and has many third-party packages available.

### Pillow
Pillow is a Python imaging library that is used for image processing and manipulation. It is a fork of the Python Imaging Library (PIL) and provides many of the same features, including support for opening, manipulating, and saving many different image file formats.

In the web application, Pillow is used for handling profile pictures that users can upload to their profiles. This includes resizing images, converting between different file formats, and compressing images to reduce their file size.

### Django Rest Framework
Django Rest Framework (DRF) is a third-party package that is used for building RESTful APIs with Django. It provides a set of tools and utilities that make it easy to build APIs, including serializers for converting between JSON and Python objects, views for handling API requests, and authentication and permission classes for securing your APIs.

DRF also provides support for versioning your APIs, pagination, filtering, and searching data, and generating API documentation.

In the web application, DRF is used to expose a RESTful API that allows developers to perform CRUD operations on profiles and projects. This API can be used by the frontend to fetch data from the backend and display it to users.

### React.js
React.js is a JavaScript library for building user interfaces. It was developed by Facebook and is used for building complex, interactive web applications.

React.js uses a component-based architecture, which means that you can create reusable UI components that can be composed together to build complex user interfaces. This makes it easy to build modular and maintainable code.

React.js also uses a virtual DOM, which allows it to update the UI efficiently and minimize the number of updates required to render changes to the UI.

In the web application, React.js is used as the frontend library for building the user interface. This includes creating components for displaying profiles, projects, and feedback, as well as handling user input and interaction.

### Axios
Axios is a third-party package for making HTTP requests from JavaScript. It provides a simple and consistent API for making requests and handling responses.

Axios supports features like request and response interceptors, which allow you to modify requests and responses before they are sent or received. It also supports automatic transformation of JSON data, handling of errors and timeouts, and cancellation of requests.

In the web application, Axios is used for fetching data from the backend API and updating the frontend UI in response to changes in the data.

### Redux
Redux is a state management library for JavaScript applications. It provides a way to manage the state of your application in a predictable and consistent way, which makes it easier to reason about and debug.

Redux works by maintaining a single global state object that represents the entire state of your application. Changes to this state are made by dispatching actions, which are simple JavaScript objects that describe the changes to be made.

Reducers are then used to update the state in response to actions. Reducers are pure functions

### Tailwind CSS
Tailwind CSS is a utility-first CSS framework that makes it easy to style your web applications. It provides a set of pre-defined CSS classes that can be used to style your HTML elements.

The key feature of Tailwind CSS is its "utility-first" approach, which means that you can add classes directly to your HTML elements to apply styling. For example, you can add the class "bg-gray-500" to a div element to give it a gray background color.

Tailwind CSS provides a large set of pre-defined classes for common styling tasks, such as text alignment, padding and margin, and typography. It also provides support for responsive design, which allows you to specify different styles for different screen sizes.

In the web application, Tailwind CSS is used for styling the user interface. This includes defining the layout and structure of the components, as well as defining the colors, typography, and spacing. The utility-first approach of Tailwind CSS makes it easy to create consistent and responsive designs without writing a lot of custom CSS.


## Installation

To set up DevXplore, follow the steps below:

1. Clone the repository to your local machine using the command, install git and follow the steps:

```bash
git clone https://github.com/ArshadAman/DevXplore

```
2. Create and activate a virtual environment using the following commands:

```bash
python -m venv env
source env/bin/activate
```
3. Install the required Python packages using the command:

``` pip install -r requirements.txt ```

4. Install Node.js and the required Node.js packages using the command:
``` npm install ```

5. Create a ```.env``` file in the root directory of the project with the following environment variables:

```makefile
SECRET_KEY=<your_secret_key>
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost
DATABASE_URL=sqlite:///db.sqlite3
```

6. Run the migrations using the command:
```
python manage.py makemigrations
python manage.py migrate
```
7. Start the development server of Django using the command:
```
python manage.py runserver

```

7. Start the development server of Reaact.js using the command:
```
npm start

```


The application should now be running on http://localhost:3000.
## Usage

### Creating a profile
To create a profile, click on the "Create Profile" button on the homepage and fill in the required details such as name, email, profile picture, and bio.

### Adding a Project
To add a project, click on the "Add Project" button on the homepage and fill in the required details such as title, description, and project image. You can also provide a link to the project if it is hosted elsewhere.

### Upvoting/Downvoting a Project
To upvote/downvote a project, click on the corresponding arrow button on the project card. The vote count will update in real-time.

### Commenting on a Project
To comment on a project, scroll down to the comment section on the project card and enter your comment in the input box. Press enter to submit the comment. You can also reply to other comments by clicking on the "reply" button.

### Searching for Projects
To search for projects, enter a search term in the search box on the homepage. The search will return projects that match the search term in the title or description.

## REST API
The web application also exposes a REST API that can be used to perform CRUD (Create, Read, Update, Delete) operations on profiles and projects. The API endpoints are listed below:

### Profiles
<!-- To be changed -->
- ```GET /api/profiles/ ```: Get a list of all profiles.
- ```GET /api/profiles/ ```: Get a single profile by ID.
- ```POST /api/profiles ```: Create a new profile.
- ```PUT /api/profiles/ ```: Update an existing profile.
- ```DELETE /api/profile ```: Delete a profile.

### Projects
<!-- To be changed -->
- ```GET /api/profiles/ ```: Get a list of all profiles.
- ```GET /api/profiles/ ```: Get a single profile by ID.
- ```POST /api/profiles ```: Create a new profile.
- ```PUT /api/profiles/ ```: Update an existing profile.
- ```DELETE /api/profile ```: Delete a profile.

To make a request to the API, send an HTTP request to the endpoint using the appropriate HTTP method (GET, POST, PUT, DELETE). The API will return a JSON response containing the requested data.

For example, to get a list of all profiles, you can send a GET request to the ```/api/profiles/``` endpoint.

```bash
GET /api/profiles/
```

The Api will return a JSON response containing list of all profiles:
```json
// To be changed
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "profile_picture": "http://example.com/profile_picture.png",
    "bio": "I am a full-stack developer with 5 years of experience.",
    "created_at": "2023-03-20T09:00:00Z",
    "updated_at": "2023-03-20T09:00:00Z"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "email": "janedoe@example.com",
    "profile_picture": "http://example.com/profile_picture.png",
    "bio": "I am a frontend developer with a passion for UI/UX design.",
    "created_at": "2023-03-20T09:00:00Z",
    "updated_at": "2023-03-20T09:00:00Z"
  }
]

```

You can also use tools like Postman or Insomnia to make requests to the API and test the endpoints.

## Conclusion
This concludes the documentation for the web application that allows developers to create profiles, share projects, and receive feedback from other developers. The application uses Django as the main backend framework, Pillow for image handling, Django Rest Framework for making REST APIs, React.js as a frontend library, Axios for fetching data from the APIs, Redux for state management, and Tailwind CSS for styling. The application also exposes a REST API that can be used to perform CRUD operations on profiles and projects.
## 🔗 Important Links
- [Download Python](https://www.python.org/downloads/)
- [Download Nodejs](https://nodejs.org/en/download)



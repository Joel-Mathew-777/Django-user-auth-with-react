# Django-React-User-Authentication-Application

A user authentication system built with Django and React.

## Features

- User registration
- User login
- JWT authentication

## Technologies Used

- **Backend**: Django, Django REST Framework
- **Frontend**: React, Ant Design, axios
- **Database**: SQLite

## Installation

### Backend

1. Navigate to the project directory:
   ```
   cd django-react-user-Authentication
   ```

2. Create a virtual environment and activate it:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install required packages:
   ```
   pip install -r requirements.txt
   ```

4. Run migrations:
   ```
   python manage.py migrate
   ```

5. Start the server:
   ```
   python manage.py runserver
   ```

### Frontend

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/users/register/` | Register a new user |
| POST | `/users/login/` | Authenticate a user and receive tokens |

## Project Structure

```
django-react-user-Authentication/
│
├── backend/
│   ├── users/          # Django app for authentication
│   ├── manage.py
│   ├── db.sqlite3
│   └── requirements.txt
│
└── frontend/           # React frontend (structure not provided)
```

## Contributing

Contributions are welcome. Please fork the repository and submit a pull request with your changes.

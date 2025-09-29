📝 Blog App
A simple Full Stack Blog Application built with Angular (Frontend) and .NET Core (Backend).

📂 Project Structure
syed-hunain-ahmad/
│
├── frontend/   # Angular 17 Blog Frontend
│   └── blog-frontend
│
├── backend/    # .Net Blog Backend API
│   └── BlogApi
│
└── README.md
🚀 Features
Create, edit, and delete blog posts

Display list of posts dynamically

Responsive UI (Angular Material / Bootstrap optional)

RESTful API with JWT authentication

SQL Server database support

🖥️ Frontend (Angular)
Setup
Bash

cd frontend/blog-frontend
npm install
ng serve
Open in browser: http://localhost:4200/

⚙️ Backend (.NET Core API)
Setup
Bash

cd backend/BlogApi
dotnet restore
dotnet run
API runs at: http://localhost:5000/ (or configured port)

🔗 API Endpoints
Method	Endpoint        	Description    
GET    	/api/posts      	Get all posts  
POST  	/api/posts      	Create new post
PUT    	/api/posts/{id}	Update a post  
DELETE	/api/posts/{id}	Delete a post  

Export to Sheets
🛠️ Tech Stack
Frontend: Angular 17, TypeScript, HTML, SCSS

Backend: ASP.NET Core 7/8, C#, Entity Framework Core

Database: SQL Server

Auth: JWT Authentication

Version Control: Git & GitHub

📌 How to Run Full Project
Start backend API:

   bash    cd backend/BlogApi    dotnet run    

Start frontend Angular app:

   bash    cd frontend/blog-frontend    ng serve    

Open browser → http://localhost:4200/

👨‍💻 Author
Syed Hunain Ahmad 
link: https://github.com/syedhunainahmad/devops-task.git

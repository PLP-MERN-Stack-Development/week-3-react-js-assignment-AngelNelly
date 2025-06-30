# 📝 Week 3 React JS Assignment – AngelNelly

This is a fully functional and visually styled **React + Vite** project that includes:

- A blog-like **Posts App** with pagination, search, and detailed view
- A **Task Manager** with filters (All, Active, Completed)
- A working **Create Post** page
- Routing using `react-router-dom`
- Responsive design with **Tailwind CSS**
- Live Deployment on **GitHub Pages**

Deployed URL 👉 [https://plp-mern-stack-development.github.io/](https://plp-mern-stack-development.github.io/)

---

## 📌 Features

- 🔍 **Posts Page**
  - Fetches posts from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
  - Search posts by title
  - Pagination for easy navigation
  - Click post title to view detailed page

- 🧠 **Post Detail Page**
  - Displays full post content
  - "Back to Posts" link for navigation

- ✍️ **Create Post Page**
  - Submit a new post with title and body
  - Redirects back to Posts page after submission

- ✅ **Task Manager**
  - Add, filter, delete tasks
  - Visual feedback for completed tasks
  - Fully interactive with filtering options

- 🌐 **Routing**
  - `/` – Home Page
  - `/about` – About Page
  - `/posts` – List of Posts
  - `/posts/:id` – Individual Post Detail
  - `/create` – Create a New Post
  - `*` – Not Found page

---

## 🛠️ Technologies Used

- **React 19**
- **Vite** for fast bundling
- **Tailwind CSS v4**
- **React Router DOM v7**
- **gh-pages** for deployment

---

## 📦 Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-AngelNelly.git

# 2. Navigate into the project
cd week-3-react-js-assignment-AngelNelly

# 3. Install dependencies
pnpm install

# 4. Run the development server
pnpm dev


Deployment
This app is deployed using GitHub Pages.

To deploy:

# Build the app
pnpm build

# Deploy to gh-pages branch
pnpm run deploy


Folder Structure

📁 src
├── 📂 components        // Reusable components like Navbar, Footer, Card
├── 📂 pages             // Home, Posts, PostDetail, CreatePost, About
├── 📂 layout            // Shared Layout with Navbar + Footer
├── App.jsx             // Routes setup
├── main.jsx            // App entry


🙋‍♀️ Author

Made with  and determination by Angela Chinweike
GitHub: @AngelNelly
Hashtag: #angelachinweike


⚠️ Notes
This project is part of the PLP MERN Stack Development Training.

The app uses mock API data from JSONPlaceholder.

GitHub Pages may return a 404 on reload — use in-app navigation.


📄 License
This project is licensed for educational purposes and personal portfolio use.


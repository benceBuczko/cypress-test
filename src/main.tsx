import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import { BlogPostPage } from './pages/BlogPost/BlogPostPage'
import { BlogPostList } from './pages/BlogPosts/BlogPostList'
import { NewBlogPost } from './pages/NewBlogPost/NewBlogPost'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <BlogPostList />
      },
      {
        path: 'new',
        element: <NewBlogPost />
      },
      {
        path: ':blogPostId',
        element: <BlogPostPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

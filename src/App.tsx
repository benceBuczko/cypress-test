import './App.css';
import { BlogPostList } from './components/BlogPostList';
import { Header } from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="content">
        <BlogPostList />
      </div>
    </div>
  )
}

export default App

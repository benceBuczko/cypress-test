import { ChangeEvent, FormEvent, useContext, useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { BlogPostContext } from "../../context/BlogPostsContext";
import { BlogPost } from "../../interfaces/BlogpPost";
import classes from "./NewBlogPost.module.css";

export const NewBlogPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const newBlogPostId = useId();

    const { blogPosts, setBlogPosts } = useContext(BlogPostContext);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const newBlogPost: BlogPost = {
            id: newBlogPostId,
            title,
            content,
            creationDate: new Date(),
            modifiedDate: new Date(),
        };
        setBlogPosts([...blogPosts, newBlogPost]);
        navigate('/');
    }

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={handleSubmit}>
                <label>
                    Title
                    <input name="title" value={title} onChange={handleTitleChange}></input>
                </label>
                <label>
                    Content
                    <textarea name="content" value={content} onChange={handleContentChange}></textarea>
                </label>
                <div className={classes.buttonContainer}>
                    <button>Create</button>
                </div>
            </form>
        </Card>  
    )
}
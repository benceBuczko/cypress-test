import { BlogPostCard } from "../../components/BlogPostCard";
import { useContext } from "react";
import { BlogPostContext } from "../../context/blogPostsContext";
import { Link } from "react-router-dom";
import classes from "./BlogPostList.module.css";

export const BlogPostList = () => {
    const blogPosts = useContext(BlogPostContext);

    return (
        <>
            {blogPosts.map(blogPost => (
                <Link className={classes.link} to={`/${blogPost.id}`} key={blogPost.id}>
                    <BlogPostCard blogPost={blogPost}/>
                </Link>
            ))}
        </>
    )
};
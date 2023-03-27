import { BlogPost } from "../../interfaces/BlogpPost";
import { BlogPostCard } from "../../components/BlogPostCard";
import { useContext } from "react";
import { BlogPostContext } from "../../context/blogPostsContext";

export const BlogPostList = () => {
    const blogPosts = useContext(BlogPostContext);

    return (
        <>
            {blogPosts.map(blogPost => (
                <BlogPostCard key={blogPost.id} blogPost={blogPost}/>
            ))}
        </>
    )
};
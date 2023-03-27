import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogPostCard } from "../../components/BlogPostCard";
import { BlogPostContext } from "../../context/blogPostsContext";

export const BlogPostPage = () => {
    const blogPosts = useContext(BlogPostContext);
    const { blogPostId } = useParams();

    const blogPost = blogPosts.find(blogPost => blogPost.id === blogPostId);

    return (
        <>
            {blogPost && <BlogPostCard blogPost={blogPost} shrinked={false}/>}
        </>
    )
}
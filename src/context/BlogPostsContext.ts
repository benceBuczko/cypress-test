import { createContext } from "react";
import { BlogPost } from "../interfaces/BlogpPost";

type BlogPostContextValue  = {
    blogPosts: BlogPost[],
    setBlogPosts: (blogPosts: BlogPost[]) => void;
}

export const BlogPostContext = createContext({} as BlogPostContextValue);
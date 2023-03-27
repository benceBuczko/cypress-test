import { createContext } from "react";
import { BlogPost } from "../interfaces/BlogpPost";

export const BlogPostContext = createContext([] as BlogPost[]);
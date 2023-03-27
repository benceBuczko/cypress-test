import { Link } from "react-router-dom";
import { BlogPost } from "../interfaces/BlogpPost";
import { blogPosts } from "../pages/BlogPosts/BlogPostList";
import classes from './BlogPostCard.module.css';
import { Card } from "./Card";

interface BlogPostCardProps {
    blogPost: BlogPost,
    shrinked?: boolean,
}

const dateTimeFormat = Intl.DateTimeFormat();

export const BlogPostCard = ({ blogPost: { title, content, creationDate, id}, shrinked = true }: BlogPostCardProps) => {
    return (
        <Card>
            <Link to={`/${id}`}>
                <div className={classes.header}>
                    <span className={classes.title}>
                        {title}
                    </span>
                    <span>
                        {dateTimeFormat.format(creationDate)}
                    </span>
                </div>
                <div className={shrinked ? classes.content: ''}>
                    {content}
                </div>
            </Link>
        </Card>
    )
};
import { BlogPost } from "../interfaces/BlogpPost";
import classes from './BlogPostCard.module.css';
import { Card } from "./Card";

interface BlogPostCardProps {
    blogPost: BlogPost,
    shrinked?: boolean,
}

const dateTimeFormat = Intl.DateTimeFormat();

export const BlogPostCard = ({ blogPost: { title, content, creationDate}, shrinked = true }: BlogPostCardProps) => {
    return (
        <Card>
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
        </Card>
    )
};
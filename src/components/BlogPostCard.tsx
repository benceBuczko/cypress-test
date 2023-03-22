import { BlogPost } from "../interfaces/BlogpPost";
import classes from './BlogPostCard.module.css';

interface BlogPostCardProps {
    blogPost: BlogPost
}

const dateTimeFormat = Intl.DateTimeFormat();

export const BlogPostCard = ({ blogPost: { title, content, creationDate} }: BlogPostCardProps) => {
    return (
        <div className={classes.card}>
            <div className={classes.header}>
                <span className={classes.title}>
                    {title}
                </span>
                <span>
                    {dateTimeFormat.format(creationDate)}
                </span>
            </div>
            <div className={classes.content}>
                {content}
            </div>
        </div>
    )
};
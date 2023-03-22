import { BlogPost } from "../interfaces/BlogpPost";
import { BlogPostCard } from "./BlogPostCard";
import classes from './BlogPostList.module.css';

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Super Post',
        content: 'Blah blah blah blah...',
        creationDate: new Date('2021-01-12'),
        modifiedDate: new Date('2021-01-15'),
    },
    {
        id: '2',
        title: 'Even More Super Giga Mega Long Title',
        content: 'Est ultricies integer quis auctor elit sed vulputate. Dolor sit amet consectetur adipiscing elit ut. Nec ullamcorper sit amet risus. Id venenatis a condimentum vitae sapien. Praesent semper feugiat nibh sed pulvinar. Elementum tempus egestas sed sed. Suscipit adipiscing bibendum est ultricies integer quis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Amet massa vitae tortor condimentum lacinia quis vel eros donec. At consectetur lorem donec massa sapien faucibus. Malesuada fames ac turpis egestas maecenas pharetra convallis. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Consequat nisl vel pretium lectus quam id leo. Rutrum quisque non tellus orci.',
        creationDate: new Date('2021-01-16'),
        modifiedDate: new Date('2021-01-16'),
    }
]

export const BlogPostList = () => {
    return (
        <div className={classes.container}>
            {blogPosts.map(blogPost => (
                <BlogPostCard key={blogPost.id} blogPost={blogPost}/>
            ))}
        </div>
    )
};
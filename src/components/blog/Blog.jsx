import React from "react";
import { Link } from "react-router-dom"; // or adjust if you're using another router
import "./blog.css";

const blogPosts = [
  {
    id: "1",
    title: "Building My Portfolio from Scratch",
    date: "July 15, 2025",
    excerpt: "Here’s how I planned and built my personal website using React and Tailwind...",
    slug: "building-my-portfolio",
  },
  {
    id: "2",
    title: "Why I Switched to Freelance Development",
    date: "June 28, 2025",
    excerpt: "Freelancing opened doors for creativity and flexibility. Here's my experience so far...",
    slug: "freelance-development-switch",
  },
  // Add more blog posts here
];

const BlogPage = () => {
  return (
    <div className="blog">
      <div className="flex">
        <div>
          <h1>The Bloggiest Blog</h1>
          <p>
            Thoughts, tutorials, and things I’ve learned along the way.
          </p>
        </div>
      <img className="portrait" src="../../src/assets/pics/one-hand-blogger.jpg" alt="Picture of a Blogger" />

      </div>
      <div>
        {blogPosts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.excerpt}</p>
            <Link
              to={`/blog/${post.slug}`}
              
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

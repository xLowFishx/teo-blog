import { useState } from "preact/hooks";

export default function BlogPostSuggestion() {

  const [suggestedBlog, setSuggestedBlog] = useState(null);

  const blogsData = Object.values(
    import.meta.glob("../pages/posts/*.md", { eager: true }),
  );

  const filteredBlogPosts = [...blogsData]
    .sort((a, b) => 
      new Date(a.frontmatter.pubDate).getTime()
      - new Date(b.frontmatter.pubDate).getTime()
    ).slice(3);

  const handleSuggestion = () => {
    const randomIndex = Math.floor(Math.random() * filteredBlogPosts.length);
    setSuggestedBlog(filteredBlogPosts[randomIndex].frontmatter.title);
  };

  return (
    <div>
      <button onClick={handleSuggestion}> Recomiendame un blog no listado </button>
      <p>{suggestedBlog}</p>
    </div>
  )
}
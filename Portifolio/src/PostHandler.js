function PostHandler() {

  async function getPosts() {
    const response = await fetch('/api');
    return response.json();
  }

  async function getArticles() {
    const posts = await getPosts();
    const articles = [];
    posts.forEach(post => post.type === "article" ? articles.push(post) : null)
    return articles;
  }


  return {
    getArticles,
  }

}

export default PostHandler
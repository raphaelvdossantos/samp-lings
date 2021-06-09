import PostHandler from './PostHandler';
import cursorHandler from './CursorHandler'
import './css/style.css';
import './css/mouse-cursor.css';
import './css/reset.css';
import './assets/favicon.png';


async function main() {
  const cursor = cursorHandler();
  cursor.start();

  const gallery = document.querySelector('.gallery-section');
  const postHandler = PostHandler();

  const articles = await postHandler.getArticles()
  console.log(articles)

  articles.forEach(article => {
    const h1 = document.createElement('h1');
    h1.innerText = article.content;
    gallery.appendChild(h1);
  })

  const api = await fetch('/api');

  console.log(api)
}

main();

import { useState } from "react";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([
    { title: "Html e Css: Come Creare la Tua Prima Pagina Web da Zero" },
    { title: "JavaScript: Cosa Sono le Variabili Spiegato Facile" },
    { title: "Front-End e Back-End: Qual è la Differenza?" },
    { title: "Flexbox in CSS: La Guida Rapida per Allineare Ogni Cosa" },
    { title: "5 Strumenti Gratuiti che Ogni Sviluppatore Dovrebbe Conoscere" },
  ]);

  return (
    <div className="container">
      <h1>My Blog</h1>

      <section className="articles-section">
        <h2>Articoli</h2>
        <ul>
          {/*.map per trasformare ogni oggetto nell'array "articles" in un
          elemento */}
          {articles.map((article, index) => (
            <li key={index}>{article.title}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;

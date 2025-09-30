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

  const [newArticleTitle, setNewArticleTitle] = useState("");

  {
    /*funzione che gestisce l'invio del form*/
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newArticle = {
      title: newArticleTitle,
    };
    {
      /* creo un nuovo array con i vecchi articoli (...) più quello nuovo.*/
    }
    setArticles([...articles, newArticle]);

    {
      /*Pulisce il campo input dopo l'aggiunta*/
    }
    setNewArticleTitle("");
  };

  return (
    <div className="container">
      <h1>My Blog</h1>

      <section className="form-section">
        <h2>Aggiungi un nuovo articolo</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Titolo del nuovo articolo..."
            value={newArticleTitle}
            onChange={(e) => setNewArticleTitle(e.target.value)}
          />
          <button type="submit">Aggiungi</button>
        </form>
        <section className="articles-section">
          <h2>Articoli:</h2>
          <ul>
            {/*.map per trasformare ogni oggetto nell'array "articles" in un elemento */}
            {articles.map((article, index) => (
              <li key={index}>{article.title}</li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
}

export default App;

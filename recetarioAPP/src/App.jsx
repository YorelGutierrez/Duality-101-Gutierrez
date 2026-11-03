import { useState } from "react";
import { recipes } from "./data/recipes.js";

/* Imagen con respaldo: si la URL falla, muestra un bloque con el emoji */
function RecipeImage({ recipe, className }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`${className} img-fallback`} role="img" aria-label={recipe.name}>
        <span>{recipe.emoji}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={recipe.image}
      alt={recipe.name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

/* Pantalla principal: lista de recetas */
function RecipeList({ onSelect }) {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <h1>Recetario</h1>
          <p>Recetas caseras, explicadas paso a paso.</p>
        </div>
      </header>

      <main className="page page--list">
        <section className="cards" aria-label="Recetas">
          {recipes.map((recipe) => (
            <button
              key={recipe.id}
              className="card"
              onClick={() => onSelect(recipe.id)}
              aria-label={`Ver receta: ${recipe.name}`}
            >
              <div className="card-media">
                <RecipeImage recipe={recipe} className="card-img" />
              </div>
              <div className="card-body">
                <h2>{recipe.name}</h2>
                <p>{recipe.tagline}</p>
                <div className="card-meta">
                  <span className="pill">{recipe.meta[0].value}</span>
                  <span className="pill">
                    {recipe.meta.find((m) => m.label === "Porciones").value} porciones
                  </span>
                </div>
              </div>
            </button>
          ))}
        </section>
      </main>
    </>
  );
}

/* Pantalla de detalle de una receta */
function RecipeDetail({ recipe, onBack }) {
  return (
    <main className="page">
      <button className="back" onClick={onBack}>
        ← Volver al recetario
      </button>

      <article>
        <div className="detail-top">
          <div className="detail-media">
            <RecipeImage recipe={recipe} className="detail-img" />
          </div>

          <div className="detail-intro">
            <h1>{recipe.name}</h1>
            <p className="lead">{recipe.tagline}</p>

            <dl className="facts">
              {recipe.meta.map((item) => (
                <div key={item.label} className="fact">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="detail-content">
          <aside className="ingredients">
            <h2>Ingredientes</h2>
            {recipe.ingredients.map((group) => (
              <div key={group.group} className="ing-group">
                <h3>{group.group}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          <section className="steps">
            <h2>Preparación</h2>
            <ol>
              {recipe.steps.map((step, i) => (
                <li key={step.title}>
                  <span className="step-num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </article>
    </main>
  );
}

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = recipes.find((r) => r.id === selectedId);

  const open = (id) => {
    setSelectedId(id);
    window.scrollTo({ top: 0 });
  };

  return selected ? (
    <RecipeDetail recipe={selected} onBack={() => open(null)} />
  ) : (
    <RecipeList onSelect={open} />
  );
}
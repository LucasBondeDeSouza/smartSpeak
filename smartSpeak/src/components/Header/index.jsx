import React from "react";
import Suggestion from "../Suggestion";

export default ({ chatHistory, setInput }) => {
  const handleSuggestionClick = (text) => {
    setInput(text);
  };

  return (
    chatHistory.length === 0 && (
      <header className="header">
        <div className="header__title">
          <h1>Olá</h1>
          <h2>Como posso ajudar você hoje?</h2>
        </div>

        <div className="suggests">
          <Suggestion
            text="Dê dicas para ajudar as crianças a terminar o dever de casa no prazo"
            icon="bx-stopwatch"
            onClick={handleSuggestionClick}
          />
          <Suggestion
            text="Ajude-me a escrever um e-mail de ausência do escritório"
            icon="bx-edit-alt"
            onClick={handleSuggestionClick}
          />
          <Suggestion
            text="Dê-me frases para aprender um novo idioma"
            icon="bx-compass"
            onClick={handleSuggestionClick}
          />
          <Suggestion
            text="Mostre-me como construir algo manualmente"
            icon="bx-wrench"
            onClick={handleSuggestionClick}
          />
        </div>
      </header>
    )
  );
};
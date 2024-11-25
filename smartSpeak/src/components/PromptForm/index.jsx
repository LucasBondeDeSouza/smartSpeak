import React, { useState } from "react";
import gemini_img from "../../assets/gemini.svg";

export default ({ addMessageToHistory, clearChatHistory, input, setInput }) => {

  const GOOGLE_API_KEY = 'AIzaSyCkrGwZmWzVK-fWP8dBBIJT9NEMPKKW3eI';
  const API_REQUEST_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GOOGLE_API_KEY}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: "outgoing", text: input };
    addMessageToHistory(userMessage);
    setInput("");

    try {
      const response = await fetch(API_REQUEST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: input }] }],
        }),
      });

      if (!response.ok) throw new Error("Erro na API. Tente novamente.");

      const data = await response.json();
      const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!responseText) throw new Error("Resposta inválida da API.");

      const botMessage = { type: "incoming", text: responseText, avatar: gemini_img };
      addMessageToHistory(botMessage);
    } catch (error) {
      const errorMessage = { type: "incoming", text: error.message, avatar: gemini_img };
      addMessageToHistory(errorMessage);
    } 
  };

  return (
    <section className="prompt">
      <form className="prompt__form" onSubmit={handleSubmit}>
        <div className="prompt__input-wrapper">
          <input
            type="text"
            placeholder="Insira uma mensagem aqui"
            className="prompt__form-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {input.length < 1 ? (
            <button type="button" className="prompt__form-button" onClick={clearChatHistory}>
              <i className="bx bx-trash"></i>
            </button>
          ) : (
            <button type="submit" className="prompt__form-button">
              <i className="bx bx-send"></i>
            </button>
          )}
        </div>
      </form>
      <p className="prompt__disclaim">
        O SmartSpeak pode exibir informações imprecisas, inclusive sobre pessoas, então verifique novamente suas respostas.
      </p>
    </section>
  );
};
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Chat from "./components/Chat";
import PromptForm from "./components/PromptForm";

export default () => {
  const [theme, setTheme] = useState(localStorage.getItem('themeColor') || 'dark_mode');
  const [chatHistory, setChatHistory] = useState(() => {
    return JSON.parse(localStorage.getItem('saved-api-chats')) || [];
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('themeColor', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark_mode' ? 'light_mode' : 'dark_mode'));
  };

  const addMessageToHistory = (message) => {
    setChatHistory((prevHistory) => {
      const updatedHistory = [...prevHistory, message];
      localStorage.setItem('saved-api-chats', JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };

  const clearChatHistory = () => {
    setChatHistory([]);
    localStorage.removeItem('saved-api-chats');
  };

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Header chatHistory={chatHistory} setInput={setInput} />
      <Chat theme={theme} chatHistory={chatHistory} />
      <PromptForm
        addMessageToHistory={addMessageToHistory}
        clearChatHistory={clearChatHistory}
        input={input}
        setInput={setInput}
      />
    </div>
  );
};

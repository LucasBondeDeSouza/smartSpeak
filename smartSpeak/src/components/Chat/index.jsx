import React from "react";

export default ({ chatHistory }) => {

    const formatText = (text) => {
        // Usa expressão regular para identificar texto entre '**' e substitui por <strong>
        const parts = text.split(/(\*\*.*?\*\*)/); // Divide o texto nos trechos que contêm '**'
        return parts.map((part, index) =>
            part.startsWith("**") && part.endsWith("**") ? (
                <strong key={index}>{part.slice(2, -2)}</strong>
            ) : (
                part
            )
        );
    };

    return (
        <section className="chats">
            {chatHistory.map((chat, index) => (
                <div key={index} className={`message ${chat.type}`}>
                    <div className="message__content">
                        {chat.type === "incoming" && (
                            <img
                                className="message__avatar"
                                src={chat.avatar}
                                alt="Avatar"
                            />
                        )}
                        <p className="message__text">{formatText(chat.text)}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};
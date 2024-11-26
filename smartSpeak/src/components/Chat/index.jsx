import React from "react";
import { Typewriter } from "react-simple-typewriter";

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

    // Encontrar o índice da última mensagem do tipo "incoming"
    const lastIncomingIndex = chatHistory
        .map((chat) => chat.type)
        .lastIndexOf("incoming");

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

                        <p className="message__text">
                            {index === lastIncomingIndex ? (
                                // Aplica o efeito Typewriter apenas na última mensagem "incoming"
                                <Typewriter
                                    words={[
                                        formatText(chat.text)
                                            .map((part) =>
                                                typeof part === "string"
                                                    ? part
                                                    : part.props.children
                                            )
                                            .join(""),
                                    ]}
                                    loop={1} // Exibe o texto apenas uma vez
                                    cursor
                                    cursorStyle=""
                                    typeSpeed={50}
                                    deleteSpeed={0}
                                    delaySpeed={500}
                                />
                            ) : (
                                formatText(chat.text) // Exibe o texto diretamente para outras mensagens
                            )}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
};
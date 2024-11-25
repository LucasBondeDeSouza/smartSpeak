import React from "react";

export default ({ chatHistory }) => {

    return (
        <section className="chats">
            {chatHistory.map((chat, index) => (
                <div key={index} className={`message ${chat.type}`}>
                    <div className="message__content">
                        <img className="message__avatar" src={chat.avatar} alt="Avatar" />
                        <p className="message__text">{chat.text}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}
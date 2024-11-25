import React from "react";

export default ({ theme, chatHistory }) => {

    return (
        <section className="chats">
            {chatHistory.map((chat, index) => (
                <div key={index} className={`message ${chat.type}`}>
                    <div className="message__content">
                        {
                            chat.type === 'incoming' && 
                            <img className="message__avatar" src={chat.avatar} alt="Avatar" />
                        }
                        <p className="message__text">{chat.text}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}
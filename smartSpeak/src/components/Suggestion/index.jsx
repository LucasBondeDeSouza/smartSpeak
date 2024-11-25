import React from "react";

export default ({ text, icon, onClick }) => {

    return (
        <div className="suggests__item" onClick={() => onClick(text)}>
            <p className="suggests__item-text">{text}</p>
            
            <div className="suggests__item-icon">
                <i className={`bx ${icon}`}></i>
            </div>
        </div>
    )
}
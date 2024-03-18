import React, { useState } from 'react';

export const Album = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(prevState => !prevState);
    };

    return (
        <div style={{ margin: "0", padding: "20px", border: "1px solid black" }} onClick={handleClick}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <h2>Название: {props.title} <br /> Артист: {props.artist}</h2>
                <img style={{maxHeight: "10%", maxWidth: "10%"}} src={props.cover} alt="cover album" />
            </div>
            <div>
            {isVisible && props.songs.map((song, index) => (
                <p> {index+1} {song}</p>
            ))}
            </div>
        </div>
    )
};

import React from 'react';

const Cast = (props) => {
    const imageUrl = "https://image.tmdb.org/t/p/w500"
    const fullImagePath = imageUrl + props.cast.profile_path

    return (
        <div className="img-card">
            <div>
                <img src={fullImagePath} alt="character"/>
                </div>
                <div className="img-txt">{props.cast.name}
                <span className="chr-name">{props.cast.character}</span>
            </div>
        </div>
    )
}

export default Cast;
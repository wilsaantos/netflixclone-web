import React from "react";
import './styles.modules.scss'

export function FeaturedMovieComponent(prop: { item: any }) {

    //Manipulando Data para mostrar Ano - Manipulating Date to show Year
    let firstDate = new Date(prop.item.first_air_date);

    //Manipulando gêneros de dentro de objetos para serem mostrados - Manipulating Genres Inside Objects to be shown
    let genres = [];
    for(const i of prop.item.genres){
        genres.push(i.name)
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${prop.item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{prop.item.name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{prop.item.vote_average * 10}% Relevante</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{prop.item.number_of_seasons} Temporada{prop.item.number_of_seasons > 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{prop.item.overview}</div>
                    <div className="featured--buttons">
                        <a href="https://www.netflix.com" target="_blank" className="featured--watch">▶ Assistir</a>
                        <a href="https://github.com/wilsaantos" target="_blank" className="featured--myList">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>

            </div>

        </section >
    )
}
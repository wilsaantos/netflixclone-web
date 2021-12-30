import React from 'react'
import './styles.modules.scss'

export function MovieListComponent(props: { title: string, items: any }) {
    return (
        <div className="movieRow">
            <h2>{props.title}</h2>
            <div className='movieRow--listarea'>
                <div className='movieRow--list'>
                    {props.items.results.length > 0 && props.items.results.map((item: any, key: any) => (
                        <div className='movieRow--item' key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>


            </div>
        </div>

    )
}
import React, { useState } from 'react'
import './styles.modules.scss'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export function MovieListComponent(props: { title: string, items: any }) {
    const [scrollX, setScrollX] = useState(0)


    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = props.items.results.length * 150;
        if ((window.innerWidth - listWidth) > x) {
            x = (window.innerWidth - listWidth) - 60
        }
        setScrollX(x)
    }




    return (
        <div className="movieRow">
            <h2>{props.title}</h2>

            <div className='movieRow--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>

            <div className='movieRow--right' onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: props.items.results.length * 150
                }}>
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
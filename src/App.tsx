import React, { useEffect, useState } from 'react';
import Tmdb from './tmdb';
import { MovieListComponent } from './components/MovieList';
import './App.css';
import { FeaturedMovieComponent } from './components/FeaturedMovie';
import { Header } from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState<any[]>([]);
  const [featuredData, setFeaturedData] = useState<any>(null);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista de Filmes - Getting The Movie List
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o filme em destaque - Getting the Featured Movie
      let originals = list.filter(i => i.slug === 'originals');
      let randomFeatured = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let featured = originals[0].items.results[randomFeatured];
      let featuredInfo: any = await Tmdb.getMovieInfo(featured.id, 'tv')

      if(!featuredInfo.overview){
        location.reload();
      }

      setFeaturedData(featuredInfo)
    }

    loadAll();
  }, []);

  return (
    <div className='page'>

      <Header />

    {featuredData && 
    <FeaturedMovieComponent item={featuredData} />}

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieListComponent key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}
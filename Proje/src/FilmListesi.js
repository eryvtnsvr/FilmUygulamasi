const FilmListesi = ({ filmler, title, filmiSil }) => {
    return (
      <div className="film-listesi">
        <h2>{ title }</h2>
        {filmler.map(film => (
          <div className="film-afis" key={film.id} >
            <h2>{ film.baslik }</h2>
            <h4>Seans { film.seans }</h4>
            <button onClick={() => filmiSil(film.id)}>Filmi Sil</button>
          </div>
        ))}
      </div>
    );
  }
   
  export default FilmListesi;
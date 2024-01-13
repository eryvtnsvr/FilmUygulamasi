import { useState } from 'react';
import FilmListesi from './FilmListesi';

const Anasayfa = () => {
    const [filmler, setFilmler] = useState([
        {baslik: 'Sisli Gece', aciklama: 'açıklama1', seans: '11.00', id: '1'},
        {baslik: 'Merhamet', aciklama: 'açıklama2', seans: '16.30', id: '2'},
        {baslik: 'Pusu', aciklama: 'açıklama3', seans: '21.00', id: '3'}
    ]);

    const filmiSil = (id) => {
        const yeniListe = filmler.filter(film => film.id !== id);
        setFilmler(yeniListe);
    }
    return ( 
        <div className="anasayfa">
            <FilmListesi filmler = {filmler} title = 'Filmler' filmiSil = {filmiSil} />
        </div>
     );
}

export default Anasayfa;
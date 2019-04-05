import React from 'react';
import NoticiaCard from './NoticiaCard';

const NoticiasContainer = (props) => {

    const noticiasCards = props.noticias.map(noticia =>{
        return <NoticiaCard noticia={noticia}/>
    });
    return <div className="notica-list">{noticiasCards}</div>;
};

export default NoticiasContainer;
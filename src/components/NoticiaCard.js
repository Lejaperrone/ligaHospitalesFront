import React from 'react';

const NoticiaCard = (props) => {
    return(
        <div>
            <h1>{props.noticia.titulo}</h1>
            {props.noticia.epigrafe}
            <img alt={props.noticia.descripccion} src={props.noticia.imagen} height="100px" width="100px"/>
        </div>
    );
};

export default NoticiaCard;
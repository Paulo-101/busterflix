import React from 'react';
// props => {className: "o que alguém passar", href: "/" }
console.log('Funcionou!')

function ButtonLink(props){
    return(
        <a href={props.href} className={props.className}>

            Novo Vídeo

        </a>
    );
}

export default ButtonLink;
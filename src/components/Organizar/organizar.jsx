import React, { useState } from 'react';


import './organizar.css';
import Shelf from '../Shelf/shelf';
import Painel from '../Painel/painel';


function Organizar(props) {
    const [books, setBooks] = useState([
        {
            name: 'a',
            color: 'yellow',
            size: 1
        },
        {
            name: 'b',
            color: 'red',
            size: 2
        },
        {
            name: 'c',
            color: 'orange',
            size: 3
        },
        {
            name: 'd',
            color: 'lilac',
            size: 4
        },
        {
            name: 'e',
            color: 'lightblue',
            size: 5
        },
        {
            name: 'f',
            color: 'pink',
            size: 6
        },
        {
            name: 'g',
            color: 'green',
            size: 7
        },
        {
            name: 'h',
            color: 'darkblue',
            size: 8
        },
        {
            name: 'i',
            color: 'lightpink',
            size: 9
        },

    ]);

    return (
        <>
            <Shelf books={books} />
            <Painel books={books} setBooks={setBooks}/>

        </>
    )
}
export default Organizar;
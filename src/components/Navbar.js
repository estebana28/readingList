import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Lista de libros a leer</h1>
            <p>Tienes actualmente { books.length } para leer</p>
        </div>
    );
}

export default Navbar; 

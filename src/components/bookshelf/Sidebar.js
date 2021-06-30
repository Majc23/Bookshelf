import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ShelfEntries } from './ShelfEntries'
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const hanleLogout = () => {
        dispatch( startLogout() )
    }

    const handleAddNew = () => {
        dispatch( startNewNote() );
    }

    return (
        <aside className="journal__sidebar">
            
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <span> { name }</span>
                </h3>

                <button 
                    className="btn btn-primary-2"
                    onClick={ hanleLogout }
                >
                    Logout
                </button>
            </div>

            <div 
                className="journal__new-entry"
                onClick={ handleAddNew }
            >
                {
                    //Revisar para modificar el icono de agregar
                }
                <img
              style={{
                position: "relative",
                filter: "invert(100%)",
                margin: "-2px 0px -14px 0"
              }}
              src="/book-icon.png"
              alt="Book Icon"
              width="50px"
            />
                
                <p className="mt-5">
                    New book
                </p>
            </div>

            <ShelfEntries />    

        </aside>
    )
}

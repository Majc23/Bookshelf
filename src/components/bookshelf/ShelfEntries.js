import React from 'react'
import { useSelector } from 'react-redux';
import { ShelfEntry } from './ShelfEntry';

export const ShelfEntries = () => {

    const { notes } = useSelector( state => state.notes );

    return (
        <div className="journal__entries">
            
          <div className="journal__entrieshelf">  
            <h2>
            Currently Reading
            </h2>
            {
                //Revisar para hacer la division de shelf
                notes
                 .filter( note => note.shelf === 'currentlyReading' )
                  .map( note => (
                    <ShelfEntry 
                        key={ note.id }
                        { ...note }
                    />
                ))
            }
         </div>

         <div className="journal__entrieshelf">  
            <h2 >
            Want To Read
            </h2>
            {
                //Revisar para hacer la division de shelf
                notes
                 .filter( note => note.shelf === 'wantToRead' && note.title !== '' && note.body !== ''  )
                  .map( note => (
                    <ShelfEntry 
                        key={ note.id }
                        { ...note }
                    />
                ))
            }
         </div>

         <div className="journal__entrieshelf">  
            <h2>
            Read
            </h2>
            {
                //Revisar para hacer la division de shelf
                notes
                 .filter( note => note.shelf === 'read')
                  .map( note => (
                    <ShelfEntry 
                        key={ note.id }
                        { ...note }
                    />
                ))
            }
         </div>

        </div>
    )
}

import Swal from 'sweetalert2';

import { db } from '../firebase/firebase-config';
import { types } from '../types/types';
import { loadBooks } from '../helpers/loadBooks';
import { fileUpload } from '../helpers/fileUpload';


export const startNewNote = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            shelf: 'wantToRead',
            url: 'https://res.cloudinary.com/drpquw3gr/image/upload/v1623374008/hjv9tdq2rvuv94c0rtow.png',
            date: new Date().getTime(),
            ban: true
        }

        /*
        Se manda a gravar en la base de datos (la referencia de la base es db y 
        con collection se grava), se le manda el path para guardar y lo que 
        se guardara
        */
        const doc = await db.collection(`${ uid }/bookshelf/notes`).add( newNote );

        dispatch( activeNote( doc.id, newNote ) );
        dispatch( addNewNote( doc.id, newNote ) );

    }
}

export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const updateShelf = ( Shelf ) =>({
    type: types.notesShelf,
    payload: {
        Shelf
    }
})
export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})


export const startLoadingNotes = ( uid ) => {
    return async( dispatch ) => {
        
        const notes = await loadBooks( uid );
        dispatch( setNotes( notes ) );

    }
}
//* Definir formulario
//* Definir estado inicial del formulario en redux
//* Acatualizar el l estado de redux(Para cuando una parte del formulario cambie)
//* Crear accion para actualizar el estado de redux cuando el formulario cambie
//Hacer Dispatch cuando haya un cambio en el formulario
//el valor mostrado por lo inputs en el formulario html va ser obtenido del estado de redux usando useSelecto


export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});


export const startSaveNote = ( note ) => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        if ( !note.url ){
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${ uid }/bookshelf/notes/${ note.id }`).update( noteToFirestore );

        dispatch( refreshNote( note.id, noteToFirestore ) );
        dispatch( startChangeSave() )
        Swal.fire('Saved', note.title, 'success');
    }
}

export const startChangeSave = () => ({
    type: types.notesChangeSave
})

export const refreshNote = ( id, note ) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});


export const startUploading = ( file ) => {
    return async( dispatch, getState ) => {

        const { active:activeNote } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload( file );
        activeNote.url = fileUrl;

        dispatch( startSaveNote( activeNote ) )
        

        Swal.close();
    }
}


export const startDeleting = ( id ) => {
    return async( dispatch, getState ) => {
         
        const uid = getState().auth.uid;
        await db.doc(`${ uid }/bookshelf/notes/${ id }`).delete();

        dispatch( deleteNote(id) );

    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
});


export const noteLogout = () => ({
    type: types.notesLogoutCleaning
});

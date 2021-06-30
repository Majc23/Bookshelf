import { db } from '../firebase/firebase-config';



export const loadBooks = async ( uid ) => {

    const notesSnap = await db.collection(`${ uid }/bookshelf/notes`).get();
    const notes = [];

    notesSnap.forEach( snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });
    
    return notes;
}




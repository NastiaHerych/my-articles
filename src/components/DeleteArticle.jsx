import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react';
import { db, storage } from '../firebaseConig';
import { toast } from 'react-toastify';
import { deleteObject, ref } from "firebase/storage";

export default function DeleteArticle({id, imageUrl}) {

    const handleDelete=async()=>{
        try {
           await  deleteDoc(doc(db, "Articles", id))
           toast("Article deleted successfully", { type: "success" });
           const storageRef = ref(storage, imageUrl);
            await deleteObject(storageRef);
        } catch (error) {
            toast("Error deleting article", { type: "error" });
            console.log(error);
        }
       
    }

  return (
    <div>
        <button className='btn btn-danger'
        onClick={handleDelete}>Delete</button>
    </div>
  )
}
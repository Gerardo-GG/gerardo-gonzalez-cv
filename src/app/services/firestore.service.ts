import { Injectable } from '@angular/core';
import {
    addDoc,
    collection,
    collectionData,
    deleteDoc,
    doc,
    Firestore,
    setDoc,
    updateDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

    constructor(private firestore: Firestore) {}

    getItems(collectionName: string): Observable<any[]> {
        const ref = collection(this.firestore, collectionName);
        return collectionData(ref, { idField: 'id' }) as Observable<any[]>;
    }

    async importData() {
        const users = {
            "5": {
                "button_link_title": "Repository",
                "button_link_url": "https://github.com/Gerardo-GG/todo-list-app",
                "button_modal_target": "#todolistModal",
                "modal_id": "todolistModal",
                "button_modal_title": "Preview",
                "description": "Todo List app made with a API to store the task for each user, it also saves the tasks on a local database to manage an internet failure.",
                "icon_1": "fa-android",
                "icon_2": "fa-list-check",
                "image_background": "https://github.com/Gerardo-GG/cv-images/blob/main/TodoList/image.png?raw=true",
                "project_name": "Task list",
                "text_icon_1": "Android Kotlin",
                "text_icon_2": "Todo list API",
                "type_project": "Learning project",
                "images": [
                    "https://github.com/Gerardo-GG/cv-images/blob/main/TodoList/1.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/TodoList/2.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/TodoList/3.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/TodoList/4.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/TodoList/5.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/TodoList/6.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/TodoList/7.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/TodoList/8.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/TodoList/9.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/TodoList/10.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/TodoList/11.png?raw=true"
                ]
            },
            "6": {
                "button_link_title": "Repository",
                "button_link_url": "https://github.com/Gerardo-GG/books-library",
                "button_modal_target": "#booksModal",
                "modal_id": "booksModal",
                "button_modal_title": "Preview",
                "description": "Library app with firebase auth and google books API.",
                "icon_1": "fa-swift",
                "icon_2": "fa-google",
                "image_background": "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/icon_light.png?raw=true",
                "project_name": "iMessage",
                "text_icon_1": "Swift UIKit",
                "text_icon_2": "Firebase Authentication and Firestorm",
                "type_project": "Learning project",
                "images": [
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/1.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/2.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/3.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/4.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/5.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/9.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/10.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/11.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/12.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/13.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/14.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/15.png?raw=true"
                ]
            },
            "7": {
                "button_link_title": "Repository",
                "button_link_url": "https://github.com/GerardoGarzon/iMessage",
                "button_modal_target": "#messageModal",
                "modal_id": "messageModal",
                "button_modal_title": "Preview",
                "description": "Chat App built with Swift applying MVC pattern design and Firebase",
                "icon_1": "fa-swift",
                "icon_2": "fa-google",
                "image_background": "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/icon_light.png?raw=true",
                "project_name": "iMessage",
                "text_icon_1": "Swift UIKit",
                "text_icon_2": "Firebase Authentication and Firestorm",
                "type_project": "Learning project",
                "images": [
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/1.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/2.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/3.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/4.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/5.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/9.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/10.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/11.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/12.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/13.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/14.png?raw=true",
                    "https://github.com/Gerardo-GG/cv-images/blob/main/iMessages/15.png?raw=true"
                ]
            }
        };

        for (const [id, data] of Object.entries(users)) {
            const docRef = doc(this.firestore, `projects/${id}`);
            await setDoc(docRef, data);
            console.log(`✅ Documento ${id} insertado.`);
        }
    }
}

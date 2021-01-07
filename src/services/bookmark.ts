import axios from 'axios';

const API = axios.create({
    baseURL: `http://localhost:5000/bookmarks`,    
});

export type Bookmarks = Bookmark[]

export type Bookmark = {
    title? : string
    url?: string
    tag?: string
    date?: any
}

export const getBookmarks = async () => {
    await API.get<Bookmarks>('/')
        .then(response => {
            console.log(response.data)
            const {data} = response;
            return data;
        })
        .catch(error => {
            console.log(error);
        })
}

export const addBookmark = async (params : Bookmark) => {
    await API.post('/add', {
        title: params.title,
        url: params.url,
        tag: params.tag,
        date: params.date
    })
    .then(res => {
        alert(`Data saved successfully. 
            ID = ${res.data.title}
            First name = ${res.data.url}
            Role = ${res.data.tag}
            Created At = ${res.data.date}`
        )
        console.log(res.data);
    })
    .catch(error => {
        console.log(error);
    });
}
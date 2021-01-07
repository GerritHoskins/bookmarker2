import axios from 'axios';

const API = axios.create({
    baseURL: `http://localhost:5000/bookmarks`,    
});

export const getBookmarks = async () => {
    try {
        let data = await API.get('/')
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
        return data;
        }
    catch(error){
        console.error(error);
    }
}

export const addBookmark = async (params) => {
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
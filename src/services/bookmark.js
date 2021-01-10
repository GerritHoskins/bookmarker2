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
    try {
        await API.post('/add', {
            title: params.title,
            url: params.url,
            tag: params.tag
        })
        .then(response => {
            alert(`Data saved successfully. 
                ID = ${response.data.title}
                First name = ${response.data.url}
                Role = ${response.data.tag}
                Created At = ${response.data.date}`
            )
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }catch(error){
        console.error(error);
    }
}
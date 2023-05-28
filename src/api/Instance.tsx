import React, { useEffect} from 'react';
import axios from 'axios';
const baseURL = 'https://course-api.com/react-tours-project';

// const client = axios.create({
//     baseURL:'https://localhost:15000'
// })

const Instance = () => {
    const [ tour, setTour ] = React.useState(null);
    const [ error, setError ] = React.useState(null);
    
    useEffect(() => {
        // get request with axios
        axios.get(baseURL).then((response) => {
            setTour(response.data);
            console.log(response)
        });
    }, []);

    if(!tour) {
        return null;
    };

    function createPost () {
        axios.post(baseURL, {
            title:'Hello world',
            body:'This is a new post',
        }).then((response) => {
            setTour(response.data)
        })
    };


    function updatePost() {
        axios.patch(`${baseURL}/1`, {
            title:'Hello world',
            body:'This is an update post'
        }).then((response) => {
            setTour(response.data)
        });
        
        if(!tour) return 'No tour!'
    }

    function deletePost() {
        axios.delete(`${baseURL},`).then((response) => {
            alert('post deleted');
            setTour(null);
        })
    }

    useEffect(() => {
        // invalid url will trigger an 404 error.
        axios.get(`${baseURL}/asdf`).then((response) => {
            setTour(response.data);
        }).catch(error => {
            setError(error);
        });
    }, []);

    // if(error) return `Error ${error.message}`;
    useEffect(() => {
        async function getPost() {
            const response = await client.get('/');
            setTour(response.data);
        }
        getPost();
    }, []);

    return (
        <>
          <div>
            <h1>Hi</h1>
            <button style={{
                padding:20, width:50, color: 'green'
            }} onClick={createPost}></button>
            <button onClick={updatePost}></button>
            <button onClick={deletePost}></button>
          </div>   
        </>
    )
}

export default Instance

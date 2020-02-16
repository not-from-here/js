/**
 * FETCH
 * JavaScript can send network requests to the server
 * and load new information whenever is needed.
 *
 * let promise = fetch(url, [options])
 * * url – the URL to access.
 * * options – optional parameters: method, headers etc.
 *
 */

/**
 *
 * Response provides multiple promise-based methods to access the body in various formats:
 *
 * * response.text() – read the response and return as text,
 * * response.json() – parse the response as JSON,
 * * response.formData() – return the response as FormData object,
 * * response.blob() – return the response as Blob (binary data with type),
 * * response.arrayBuffer() – return the response as ArrayBuffer (low-level representaion of binary data),
 *
 */

const fetch = require("node-fetch");
const promise = fetch('https://swapi.co/api/people/3')
    .then(response => {
        console.log(response.status); // 200
        return response.json();
    })
    .then(body => {
        console.log(body); /*
                            { name: 'R2-D2',
                              height: '96',
                              mass: '32',
                              hair_color: 'n/a',
                              skin_color: 'white, blue',
                              eye_color: 'red',
                              birth_year: '33BBY', ... ... }
                              */
    });


// Use async/await

const getResource = async (url) =>{
    /**
     * 1-fetch returns promise
     * 2-waiting for result of promise
     * 3-write result in variable response
     */
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(`Error ;( Could not fetch ${url}, status - ${response.status}`);
        //Error: Error ;( Could not fetch https://swapi.co/api/peple/54565464, status - 404
    }
    return await response.json();
};

getResource('https://swapi.co/api/people/5')
    .then((body)=>{
        console.log(body);
    })
    .catch(error=>{
        console.log(error);
        //Error: Error ;( Could not fetch https://swapi.co/api/peple/5, status - 404
    });

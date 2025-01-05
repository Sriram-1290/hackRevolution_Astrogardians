// script.js
async function fetchData(endpoint) {
    const output = document.getElementById('output');
    output.textContent = 'Loading...';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        output.textContent = JSON.stringify(data, null, 2); 
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
}
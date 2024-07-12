export const fetchCustomData = async () => {
    const endpoint = 'https://03a0-105-113-89-69.ngrok-free.app';
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Fetched Data:', data);
    return data;
};
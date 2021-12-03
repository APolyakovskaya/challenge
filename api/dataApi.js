export const getData = async () => {
    const data = await fetch('http://localhost:3000/data.json');
    return data.json();
}
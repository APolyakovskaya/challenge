export const getData = async () => {
    const url = process.env.APP_URL ? `${process.env.APP_URL}data.json` : 'http://localhost:3000/data.json';
    const data = await fetch(url);
    return data.json();
}
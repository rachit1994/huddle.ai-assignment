const baseUrl = 'https://jsonplaceholder.typicode.com';

export const get = async (url: string) => {
    const res = await fetch(`${baseUrl}/${url}`);
    return res.json();
}

const rest: any = { get };

export default rest;

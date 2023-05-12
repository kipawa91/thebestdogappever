import urlJoin from 'url-join';

const APIROOT = 'https://dog.ceo/api/';

export async function getAllBreeds() {

    const end = urlJoin(APIROOT, '/breeds/list/all');

    const breeds = fetch(end)
        .then(res => res.json())
        .then(json => Object.keys(json.message));

    return breeds;
}
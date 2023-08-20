import { json, error } from '@sveltejs/kit';

let number = 0;

export function GET({ url }) {
    const uid = String(url.searchParams.get('uid') ?? "");
    if (uid == ""){
        throw error(400, 'missing uid to get conversation');
    }
    number++;
    return json(number);
}
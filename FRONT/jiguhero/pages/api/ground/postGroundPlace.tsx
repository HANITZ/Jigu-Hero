
import {BASE_URL} from 'pages/api/fetch';


export default async function postGround(placeId, groundId, userId){
    const t =localStorage.getItem('access-token')
    const token = t.substring(1,t.length-1)
    const Token = `Bearer ${localStorage.getItem('access-token')}`

    const response = await fetch(`${BASE_URL}ground/place?placeId=${placeId}&groundId=${Number(groundId)}&userId=${Number(userId)}`, {
        method:'POST',
        headers:{
            "Authorization" : Token,
            "Content-Type": "application/json"
        }
    });
    const data = await response
    return data
}
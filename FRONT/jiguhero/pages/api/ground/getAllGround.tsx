<<<<<<< HEAD
=======
import renewAccess from "../auth/renewAccess";
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
import {BASE_URL, Token} from 'pages/api/fetch';

export default async function getAllGround(){
    const response = await fetch(`${BASE_URL}ground/list`, {
        method:'get',
        headers:{
            Authorization : Token
        }
    });
    const data = await response.json().catch(() => {
<<<<<<< HEAD
=======
        renewAccess;
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
    })
    return data
}
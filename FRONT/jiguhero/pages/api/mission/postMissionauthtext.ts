import { BASE_URL } from "pages/api/fetch";


const PostMissionauthtext = async (content,missionId,userId,imageId) => {
  const t =localStorage.getItem('access-token')
  const token = t.substring(1,t.length-1)
  const Token = `Bearer ${localStorage.getItem('access-token')}`

  let Form = new FormData();

  Form["content"]= content
  Form["missionId"] = missionId
  Form["userId"]= userId 
  Form["imageId"]= imageId

  
  const response = await fetch(`${BASE_URL}feed`, {
    method: "POST",
    headers: {
      Authorization: Token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Form),
  }) 
  
  const data = await response.json().catch((error) => {
      console.error("Error:", error);
    });
  return data
};

export default PostMissionauthtext;
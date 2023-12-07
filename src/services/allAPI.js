import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";


// 1 upload a video  => post method // reqBody contain details
export const uploadVideo = async(reqBody) =>{
   return await commonAPI("post",`${serverURL}/videos`,reqBody)
}
// 2 get all video
export const getAllVideos = async() =>{
    return await commonAPI("get",`${serverURL}/videos`,'')
}
// 3 get a particular video
export const getAVideo = async (id) =>{
return await commonAPI("get",`${serverURL}/videos/${id}`,'')
}
// 4 delete a video
export const deleteAVideo = async(id) =>{
    return await commonAPI("delete",`${serverURL}/videos/${id}`,{})
}

// 5 store watched videos history to json-server
export const watchVideoHistory = async(videoDetails) =>{
    return await commonAPI("post",`${serverURL}/history`,videoDetails) 
}

// 6 get video history from json-server
export const getVideoHistory = async() =>{
    return await commonAPI("get",`${serverURL}/history`,"")
}

// 7 for adding categories
export const addCategory = async(reqBody)=>{
    return await commonAPI("post",`${serverURL}/categories`,reqBody)
}

// 8 for getting the added category
export const getCategory = async() =>{
    return await commonAPI("get",`${serverURL}/categories`,"")
}

// 9 delete category
export const deleteCategory = async(id) =>{
return await commonAPI("delete",`${serverURL}/categories/${id}`,{})
}

// 10  api call for updating details to allVide array
export const updateCategory = async (id,reqBody) =>{
    return await commonAPI("put",`${serverURL}/categories/${id}`,reqBody)
}

// 11 foe deleting the dragged vide from categories
export const deleteDraggedVideo = async (categoryId, videoId) => {
  return await commonAPI(
    "delete",
    `${serverURL}/categories/${categoryId}/allVideos/${videoId}`,
    {}
  );
};



import base_url from "./base_url";
import commonApi from "./commonApi";

export const registerApi=async(data)=>{
    return await commonApi(`${base_url}/reg`,"POST","",data)
}

export const loginApi=async(data)=>{
    return await commonApi(`${base_url}/log`,"POST","",data)
}

export const updateProfileApi = async (data, headers) => {
    return await commonApi(`${base_url}/updateprofile`,"PUT", headers, data);
  };
  
  export const allBlogApi = async (headers) => {
    return await commonApi(`${base_url}/allblog`, "GET", headers, "");
  };
    
  export const createBlogApi = async (data, headers) => {
    return await commonApi(`${base_url}/addblog`, "POST", headers ,data);
  };
import axios from 'axios'

const baseUrl = "https://testing.eiman.de/api/";
const access_token = '2|yvpPPYUbbJsQaHdNpxxfnN5skOrKLUEKBTbcKhm6';

//DASHBOARD STATS
const dashboardStatsEndpoint = `${baseUrl}get_dash`;
const dashboardProjectListEndpoint = `${baseUrl}getmyproj`;
const projectDetailsEndpoint = `${baseUrl}getprojinfo`;
const projectPageGetStatsEndpoint = `${baseUrl}getstat`;
const projectListsEndpoint = `${baseUrl}getallproj`;

const apiCall = async (endpoint, params, method) => {
  const options = {
    method: method,
    url: endpoint,
    data: params ? params : {},
    headers: {
      'Authorization': `Bearer ${access_token}`,
    }
  }
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error', error)
    throw error; // Optionally rethrow the error to handle it elsewhere
  }
}

//PROJECTS
export const projectDashboardStats = (params) => {
  return apiCall(dashboardStatsEndpoint, params, 'post');
}
export const dashboardProjectList = (params) => {
  return apiCall(dashboardProjectListEndpoint, params, 'post');
}
export const projectDetails = (params) => {
  return apiCall(projectDetailsEndpoint, params, 'post');
}
export const projectPageGetStats = (params) => {
  return apiCall(projectPageGetStatsEndpoint, params, 'post');
}
//list
export const projectLists = (params) => {
  return apiCall(projectListsEndpoint, params, 'post');
}
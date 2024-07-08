import axios from 'axios'

const baseUrl = "https://testing.eiman.de/api/";
const access_token = '2|yvpPPYUbbJsQaHdNpxxfnN5skOrKLUEKBTbcKhm6';

//DASHBOARD STATS
const dashboardStatsEndpoint = `${baseUrl}get_dash`;
const dashboardProjectListEndpoint = `${baseUrl}getmyproj`;

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

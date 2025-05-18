import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'
import cleanFormData from '@/commons/utils/cleanFormData'

const deleteProjectMemberProjectWithMembers = (data = {}) => {
	let body = data;

	const { getToken } = tokenManager();
	const token = getToken();
	
	return axios.delete(`${environment.rootApi}/call/projectwithmembers/deleteprojectmember`, 
	{
		params: { token },
		data: cleanFormData(body),
		headers: {
			'Authorization': token,
			
		}
	})} 

export default deleteProjectMemberProjectWithMembers

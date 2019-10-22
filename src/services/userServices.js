import axios from 'axios'
const customUrl = `http://localhost:3001`;

class userServices {
	static async login({ email, password }) {
		const url = `${customUrl}/api/v1/users/login`
		const headers = { 'Content-Type': 'application/json' }
		const body = { email, password }

		return axios.post(url, body, { headers })
	}

	static async createUser({
		firstName,
		lastName,
		identification,
		age,
		city,
		gender,
		email,
		password }) {
		const url = `${customUrl}/api/v1/users/signup`
		const headers = { 'Content-Type': 'application/json' }
		const body = {
			firstName,
			lastName,
			identification,
			age,
			city,
			gender,
			email,
			password
		}
		return axios.post(url, body, { headers })
	}

	static async updateGuide({
		userId,
		description,
		languages,
		knowledge }) {
		const url = `${customUrl}/api/v1/guides/${userId}`
		const headers = { 'Content-Type': 'application/json' }
		const body = {
			description,
			languages,
			knowledge
		}
		return axios.put(url, body, { headers })
	}

	static async getGuides({
		city,
		fromAge,
		toAge,
		gender,
		language,
		knowledge }) {
		const url = `${customUrl}/api/v1/guides`
		const headers = { 'Content-Type': 'application/json' }
		const body = {
			city,
			fromAge: parseInt(fromAge),
			toAge: parseInt(toAge),
			gender,
			language,
			knowledge
		}
		return axios.post(url, body, { headers })
	}

	static async getProfile(userId) {
		const url = `${customUrl}/api/v1/users/${userId}`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async updateProfile({
		userId,
		firstName,
		lastName,
		identification,
		age,
		city,
		gender,
	}) {
		const url = `${customUrl}/api/v1/tourists/${userId}`
		const headers = { 'Content-Type': 'application/json' }
		const body = {
			firstName,
			lastName,
			identification,
			age,
			city,
			gender,
		}
		return axios.put(url, body, { headers })
	}


	static async getConversation({ touristId, guideId }) {
		const url = `${customUrl}/api/v1/chat/conversation`
		const headers = { 'Content-Type': 'application/json' }
		const body = { touristId, guideId }
		return axios.post(url, body, { headers })
	}




}

export default userServices

import axios from 'axios'

class userServices {
	static async login({ email, password }) {
		const url = `http://localhost:3001/api/v1/users/login`
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
		const url = `http://localhost:3001/api/v1/users/signup`
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
		const url = `http://localhost:3001/api/v1/guides/${userId}`
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
		const url = `http://localhost:3001/api/v1/guides`
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
}

export default userServices

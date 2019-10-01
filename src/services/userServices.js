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

		console.log(body)

		return axios.post(url, body, { headers })
	}

}

export default userServices

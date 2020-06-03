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

	static async getReviews(guideUserId) {
		const url = `${customUrl}/api/v1/reviews/user/${guideUserId}`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
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

	static async sendMessage(chatId, messages) {
		const url = `${customUrl}/api/v1/chat/${chatId}`
		const headers = { 'Content-Type': 'application/json' }
		const body = { messages }
		return axios.put(url, body, { headers })
	}

	static async getMatches(userId) {
		const url = `${customUrl}/api/v1/matches/user/${userId}`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async createMatch({
		tourist,
		guide
	}) {
		const url = `${customUrl}/api/v1/matches`
		const headers = { 'Content-Type': 'application/json' }
		const body = {
			tourist,
			guide
		}
		return axios.post(url, body, { headers })
	}

	static async getChat(chatId) {
		const url = `${customUrl}/api/v1/chat/${chatId}`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async getMatchByChatId(chatId) {
		const url = `${customUrl}/api/v1/matches/chat/${chatId}`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async updateMatch(chatId, status) {
		const url = `${customUrl}/api/v1/matches/chat/${chatId}`
		const headers = { 'Content-Type': 'application/json' }
		const body = { status }
		return axios.put(url, body, { headers })
	}

	static async postReview({
		giver,
		owner,
		matchId,
		points,
		description
	}) {
		const url = `${customUrl}/api/v1/reviews`
		const headers = { 'Content-Type': 'application/json' }
		const body = {
			giver,
			owner,
			matchId,
			points,
			description
		}
		return axios.post(url, body, { headers })
	}

	static async getReviews(userId) {
		const url = `${customUrl}/api/v1/reviews/user/${userId}`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async getMatchesPerMonth() {
		const url = `${customUrl}/api/v1/charts/matchesPerMonth`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async getNotifications(userId) {
		const url = `${customUrl}/api/v1/notifications/${userId}`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}
}

export default userServices

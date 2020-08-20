import axios from 'axios'
import { YearView } from 'react-calendar';
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
		birthDate,
		gender,
		email,
		password,
		idFront,
		idBack,
		profilePicture,
	}) {
		const url = `${customUrl}/api/v1/users/signup`
		const headers = { 'Content-Type': 'application/json' }
		const body = {
			firstName,
			lastName,
			identification,
			birthDate,
			gender,
			email,
			password,
			idFront,
			idBack,
			profilePicture,
		}
		return axios.post(url, body, { headers })
	}

	static async updateGuide({
		userId,
		description,
		city,
		languages,
		availableDays,
		groupwalk,
		knowledge }) {
		const url = `${customUrl}/api/v1/guides/${userId}`
		const headers = { 'Content-Type': 'application/json' }
		const body = {
			description,
			city,
			languages,
			availableDays,
			groupwalk,
			knowledge
		}
		return axios.put(url, body, { headers })
	}

	static async getGuides({
		fromAge,
		toAge,
		gender,
		language,
		city,
		knowledge,
		groupwalk,
		tourDay, }) {
		const url = `${customUrl}/api/v1/guides`
		const headers = { 'Content-Type': 'application/json' }
		const body = {
			fromAge: parseInt(fromAge),
			toAge: parseInt(toAge),
			gender,
			language,
			city,
			knowledge,
			groupwalk,
			tourDay
		}
		return axios.post(url, body, { headers })
	}

	// static async getReviews(guideUserId) {
	// 	const url = `${customUrl}/api/v1/reviews/user/${guideUserId}`
	// 	const headers = { 'Content-Type': 'application/json' }
	// 	return axios.get(url, { headers })
	// }

	static async getProfile(userId) {
		const url = `${customUrl}/api/v1/users/${userId}`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async updateProfile({
		userId,
		firstName,
		lastName,
		birthDate,
		gender,
	}) {
		const url = `${customUrl}/api/v1/tourists/${userId}`
		const headers = { 'Content-Type': 'application/json' }
		const body = {
			firstName,
			lastName,
			birthDate,
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
		const url = `${customUrl}/api/v1/matches/users/${userId}`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async createMatch({
		tourist,
		guide,
		city,
		knowledge,
		matchDate
	}) {
		const url = `${customUrl}/api/v1/matches`
		const headers = { 'Content-Type': 'application/json' }
		const body = {
			tourist,
			guide,
			city,
			knowledge,
			matchDate
		}
		return axios.post(url, body, { headers })
	}

	static async getChat(chatId) {
		const url = `${customUrl}/api/v1/chat/${chatId}`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async getMatchByChatId(chatId) {
		const url = `${customUrl}/api/v1/matches/chats/${chatId}`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async updateMatch(chatId, status) {
		const url = `${customUrl}/api/v1/matches/chats/${chatId}`
		const headers = { 'Content-Type': 'application/json' }
		const body = { status }
		return axios.put(url, body, { headers })
	}

	static async updateMatchStatus(matchId, status) {
		const url = `${customUrl}/api/v1/matches/${matchId}`
		const headers = { 'Content-Type': 'application/json' }
		const body = { status }
		return axios.put(url, body, { headers })
	}

	static async updateMatchDate(matchId, matchDate) {
		const url = `${customUrl}/api/v1/matches/updateDate/${matchId}`
		const headers = { 'Content-Type': 'application/json' }
		const body = { matchDate }
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
		console.log(url);
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	//Informes
	static async getMatchesPerMonth() {
		const url = `${customUrl}/api/v1/charts/matchesPerMonth`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async getCitiesPerMatch() {
		const url = `${customUrl}/api/v1/charts/citiesPerMatch`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}
	static async getUsersCreatedPerMonth(){
		
		const url = `${customUrl}/api/v1/charts/usersCreatedPerMonth`
		const headers = { 'Content-Type': 'application/json' }
		
		return axios.get(url,  { headers })
	}
	static async getUsersReportedByReason() {
		const url = `${customUrl}/api/v1/charts/usersReportedPerReason`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}
	static async getUsersReportedByReason() {
		const url = `${customUrl}/api/v1/charts/usersReportedPerReason`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async getCategoriesPerGender() {
		const url = `${customUrl}/api/v1/charts/categoriesPerGender`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async getCategoriesMostSelected() {
		const url = `${customUrl}/api/v1/charts/categoriesMostSelected`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}
	static async getUsersPerAge() {
		const url = `${customUrl}/api/v1/charts/usersPerAge`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

static async getMatchesPerCategories(){
	const url = `${customUrl}/api/v1/charts/matchesPerCategories`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
}
static async getUsersPerLanguages(){
	const url = `${customUrl}/api/v1/charts/usersPerLanguages`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
}


static async getUsersPerGender(){
	const url = `${customUrl}/api/v1/charts/usersPerGender`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
}
static async getCategoriesPerCity(){
	const url = `${customUrl}/api/v1/charts/categoriesPerCity`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
}


	static async getNotifications(userId) {
		const url = `${customUrl}/api/v1/notifications/${userId}`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async upLoadImg(file) {
		const url = `${customUrl}/api/v1/users/identification`
		const fd = new FormData();
		fd.append('file', file);

		return axios.post(url, fd)
	}

	static async getaceptNewUser() {
		const url = `${customUrl}/api/v1/admin/pending`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async getCompliantsList() {
		const url = `${customUrl}/api/v1/admin/compliant`
		const headers = { 'Content-Type': 'application/json' }
		return axios.get(url, { headers })
	}

	static async updateCompliantStatus({
		compliantId,
		status,
	}) {
		const url = `${customUrl}/api/v1/admin/compliant/${compliantId}`
		const headers = { 'Content-Type': 'application/json' }
		const body = {
			status
		}
		return axios.put(url, body, { headers })
	}

	static async updateUserStatus({
		userId,
		status,
	}) {
		const url = `${customUrl}/api/v1/admin/${userId}`
		const headers = { 'Content-Type': 'application/json' }
		const body = {
			status
		}
		return axios.put(url, body, { headers })
	}

	static async updateCompliantStatus({
		userId,
		status,
	}) {
		const url = `${customUrl}/api/v1/admin/${userId}`
		const headers = { 'Content-Type': 'application/json' }
		const body = {
			status
		}
		return axios.put(url, body, { headers })
	}

	static async createCompliant({
		userId,
		accusedId,
		description,
		status,
		reason
	}) {
		const url = `${customUrl}/api/v1/users/compliant`
		const headers = { 'Content-Type': 'application/json' }
		const body = {
			userId,
			accusedId,
			description,
			status,
			reason
		}
		return axios.post(url, body, { headers })
	}
}

export default userServices

import axios from 'axios'
class languageService {

static async getLanguages() {
    const url = `http://localhost:3001/api/v1/languages`
    const headers = { 'Content-Type': 'application/json' }
    
    return axios.get(url, { headers })
}

static async createLanguage({
    name,
    }) {
    const url = `http://localhost:3001/api/v1/users/languages`
    const headers = { 'Content-Type': 'application/json' }
    const body = {
        name
    }
    return axios.post(url, body, { headers })



}
}

export default languageService

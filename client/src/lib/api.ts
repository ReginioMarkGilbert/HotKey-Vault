import axios from 'axios'

const api = axios.create({
   baseURL: 'http://localhost:3000/api'
})

export const shortcutApi = {
   async getShortcuts() {
      const response = await api.get('/shortcuts')
      return response.data
   },

   async saveShortcuts(shortcuts: any[]) {
      const response = await api.post('/shortcuts', { shortcuts })
      return response.data
   }
}
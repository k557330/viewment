import axios from 'axios'

export const callSelectAll = async (table) => {
    const response = await axios.get(`/api/${table}`)
    return response
}
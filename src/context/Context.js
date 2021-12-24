import { createContext, useState } from 'react'
import axios from 'axios'
import { apiKey } from '../api/api_key'

export const ContextCats = createContext()

const MyContextProvider = ({ children }) => {

    const [catsImgRandom, setCatsImgRandom] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [catsImgCategory, setCatsImgCategory] = useState([])

    const runImagesRandom = async () => {
        try {
            axios.defaults.headers.common['x-api-key'] = apiKey

            let query_Params = {
                limit: 6
            }

            let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: query_Params })

            setIsLoading(false)
            setCatsImgRandom(response.data)

        } catch (err) {
            console.log(err)
            setIsLoading(true)
        }
    }

    const runCategoryImages = async (query) => {
        try {
            axios.defaults.headers.common['x-api-key'] = apiKey

            let query_Params = {
                category_ids: query,
                limit: 6
            }

            let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: query_Params })

            setIsLoading(false)
            setCatsImgCategory(response.data)

        } catch (err) {
            console.log(err)
            setIsLoading(true)
        }
    }

    return (
        <ContextCats.Provider value={{ isLoading, catsImgRandom, catsImgCategory, runImagesRandom, runCategoryImages }}>
            {children}
        </ContextCats.Provider>
    )
}

export default MyContextProvider
import { useState, useCallback } from 'react'
import axios from 'axios'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, isAuth = false ) => {

        let headers = {}

        if (body) {
            headers = { 'Content-Type': 'application/json' }
        }

        setLoading(true)
        try {
            const response = await axios({
                method,
                url,
                data: body,
                headers
            })

            setLoading(false)

            return response.data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = () => setError(null)

    return { loading, request, error, clearError }
}
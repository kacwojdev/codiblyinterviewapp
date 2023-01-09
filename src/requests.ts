import { useEffect, useState } from 'react'
import { PageColors, Service } from './types'

export const useListColorsService = (page: number) => {
    const [result, setResult] = useState<Service<PageColors>>({
        status: 'loading'
    })

    useEffect(() => {
        fetch(`https://reqres.in/api/products?per_page=5&page=${page}`)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(response => {
                console.log(response)
                return setResult({ status: 'loaded', payload: response })
            })
            .catch(error => setResult({ status: 'error', error }))
    }, [])

    return result
}

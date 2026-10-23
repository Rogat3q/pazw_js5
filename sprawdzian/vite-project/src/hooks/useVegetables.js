import { useState, useEffect } from "react"
import { downloadVegetables } from "../service/vegetables"

export function useVegetables() {
    const [vegetables, setVegetables] = useState()
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        downloadVegetables()
            .then(data => setVegetables(data))
            .catch(err => setError(err))
            .finally(() => setIsLoading(false))
    }, [])

    return { vegetables, setVegetables, error, isLoading }
}

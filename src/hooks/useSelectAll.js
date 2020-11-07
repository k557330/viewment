import { useCallback, useState } from 'react'
import { callSelectAll } from '../api/db'

const useSelectAll = (table) => {
    const [selectAll, setSelectAll] = useState([])

    const selectFromDB = useCallback(async () => {
        const response = await callSelectAll(table)
        setSelectAll(response.data)
    }, [table, setSelectAll])
    
    return [selectAll, selectFromDB]
}

export default useSelectAll
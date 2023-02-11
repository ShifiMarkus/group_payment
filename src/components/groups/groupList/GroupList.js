import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
// import react from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const GroupList = () => {
    const [groupsList, setGroupsList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            var res = await fetch(`https://localhost:44320/api/Groups`)
            if (res.ok) {
                let data = await res.json()
                setGroupsList(data)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            {groupsList?.map((item,index) => {
                return (
                    <></>
                )
            })}
        </>
    )
}
export default GroupList;

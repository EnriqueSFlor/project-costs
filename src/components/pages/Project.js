
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'


export default function Project(){

    const { id } = useParams()
    const [project, setProject] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
         .then((data) => {
        setProject(data)
        })
        .catch((err) => console.log(err))
        }, 300)
    }, [id])
    
    return (
        <>
            {project.name ? (
                <p>{project.name}</p>
            ): (
                <Loading /> 
            )}
        </>
    )
}
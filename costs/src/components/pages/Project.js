import styles from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'

function Project() {

    const {id} = useParams()
    
    const [project, setProject] = useState([])

    const [showProjectform, setShowProjectForm] = useState(false)

    useEffect(() =>{
        setTimeout(() =>{
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            },
        }).then(resp => resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch(err => console.log(err))
        }, 400)
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectform)
    }
   
    return (
     <>
        {project.name ? (
            <div className={styles.project_details}>
                <Container customClass='column'>
                    <div className={styles.details_container}>
                        <div>
                            <h1>Projeto: {project.name}</h1>
                            {!showProjectform ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total do orçamento:</span> {project.budget}€
                                    </p>
                                    <p>
                                        <span>Total utilizado:</span> {project.cost}€
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <p>Detalhes do projeto</p>
                                </div>
                            )}
                        </div>
                        <button className={styles.btn} onClick={toggleProjectForm}>
                            {!showProjectform ? 'Editar projeto' : 'Fechar'}
                        </button>
                    </div>
                </Container>
            </div>
        ) : (<Loading />)}
     </>
    )

 
}

export default Project
import {useNavigate} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import styles from './NewProjects.module.css'

function NewProjet(){

    const navigate = useNavigate()

    function createPost(project) {
        
        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then(((resp) => resp.json()))
        .then((data) => {
            console.log(data)
            //redirect
           navigate('/projects', { message: 'Projeto criado com sucesso!' } )
        })
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie o seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar projeto'/>
        </div>
    )
}

export default NewProjet
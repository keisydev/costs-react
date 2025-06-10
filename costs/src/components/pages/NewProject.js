import {useNavigate} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import styles from './NewProjects.module.css'

function NewProjet(){

    const navigate = useNavigate();

    const createPost = async (project) => {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    try {
        const response = await fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        });

        const data = await response.json();

        // O código só chega nesta linha depois que tudo acima foi concluído com sucesso.
        navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } });

    } catch (error) {
        console.error("Erro ao criar o projeto:", error);
    }
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
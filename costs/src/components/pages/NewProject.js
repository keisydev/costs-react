import ProjectForm from '../project/ProjectForm'
import styles from './NewProjects.module.css'

function NewProjet(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie o seu projeto para depois adicionar os serviços</p>
            <ProjectForm/>
        </div>
    )
}

export default NewProjet
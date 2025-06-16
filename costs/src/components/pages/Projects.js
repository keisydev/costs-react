import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Importa os dados dos projetos do arquivo local
import { projectsData } from '../../src/mock/db.js'

import Message from '../layout/Message'
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import styles from './Projects.module.css'
import ProjectCards from '../project/ProjectCards'

function Projects() {
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    //  useEffect corrigido para carregar dados locais
    useEffect(() => {
        setTimeout(() => { //  timeout para simular o carregamento
            setProjects(projectsData)
            setRemoveLoading(true) //  remove o <Loading />
        }, 400)
    }, []);

    //  Função removeProject corrigida para manipular o estado diretamente
    function removeProject(id) {
        const updatedProjects = projects.filter((project) => project.id !== id)
        setProjects(updatedProjects);
        setProjectMessage('Projeto removido com sucesso!')
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text='Criar projeto' />
            </div>
            {message && <Message type='success' msg={message} />}
            {projectMessage && <Message type='success' msg={projectMessage} />}
            <Container customClass='start'>
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCards
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))}
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    );
}

export default Projects
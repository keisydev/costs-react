import { useLocation } from 'react-router-dom'
import { useState } from 'react' //  useEffect e import de dados removidos

import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import styles from './Projects.module.css'
import ProjectCards from '../project/ProjectCards'

//  Recebe 'projects' e 'handleRemove' como props do App.js
function Projects({ projects, handleRemove }) {
  const [projectMessage, setProjectMessage] = useState('')

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  //  A função local foi removida. Usamos a que veio das props
  function removeProject(id) {
    handleRemove(id)
    setProjectMessage('Projeto removido com sucesso!')
  }

  // O useEffect foi removido, pois os dados vêm prontos das props

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='Criar projeto' />
      </div>
      {message && <Message type='success' msg={message} />}
      {projectMessage && <Message type='success' msg={projectMessage} />}
      <Container customClass='start'>
        {/* O removeLoading não é mais necessário, a lógica é mais simples */}
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCards
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category?.name || 'Sem Categoria'}
              key={project.id}
              handleRemove={removeProject}
            />
          ))
        ) : (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;
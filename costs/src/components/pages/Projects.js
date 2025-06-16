import { useLocation } from 'react-router-dom'
import { useState, useMemo } from 'react' //  Adicionado useMemo

import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import styles from './Projects.module.css'
import ProjectCards from '../project/ProjectCards'

// Recebe 'projects' e 'handleRemove' como props do App.js
function Projects({ projects, handleRemove }) {
  const [projectMessage, setProjectMessage] = useState('')
  // MUDANÇA: Novos estados para controlar os filtros
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  function removeProject(id) {
    handleRemove(id)
    setProjectMessage('Projeto removido com sucesso!')
  }

  // Lógica para pegar as categorias únicas dos projetos
  const uniqueCategories = useMemo(() => {
    const categories = projects.map(p => p.category?.name).filter(Boolean);
    return ['Todos', ...new Set(categories)];
  }, [projects]);


  // Lógica para filtrar os projetos com base nos estados de busca
  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((project) => {
        if (activeCategory === 'Todos') return true;
        return project.category?.name === activeCategory;
      });
  }, [projects, searchTerm, activeCategory]);

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='Criar projeto' />
      </div>
      
      {message && <Message type='success' msg={message} />}
      {projectMessage && <Message type='success' msg={projectMessage} />}

      {/* Adicionados os novos elementos de filtro */}
      <div className={styles.filter_container}>
        <input
          type="text"
          placeholder="Buscar por nome..."
          className={styles.search_input}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className={styles.category_filters}>
          {uniqueCategories.map(category => (
            <button
              key={category}
              className={`${styles.filter_button} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <Container customClass='start'>
        {/* Mapeia a lista FILTRADA de projetos */}
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
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
          <p>Nenhum projeto encontrado com os filtros aplicados.</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;
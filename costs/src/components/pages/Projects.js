import { useLocation } from 'react-router-dom'
import { useState, useMemo } from 'react'

import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import styles from './Projects.module.css'
import ProjectCards from '../project/ProjectCards'
import Modal from '../layout/Modal' // Importar o novo componente Modal

function Projects({ projects, handleRemove }) {
  const [projectMessage, setProjectMessage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')

  // Estados para controlar o modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState(null)

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }
  
  // Função que abre o modal
  const handleDeleteRequest = (id, name) => {
    setProjectToDelete({ id, name })
    setIsModalOpen(true)
    setProjectMessage('') // Limpa mensagens antigas
  };

  // Função que fecha o modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setProjectToDelete(null);
  };

  // Função que confirma a exclusão
  const handleConfirmDelete = () => {
    if (projectToDelete) {
      handleRemove(projectToDelete.id)
      setProjectMessage('Projeto removido com sucesso!')
      handleCloseModal()
    }
  };

  const uniqueCategories = useMemo(() => {
    const categories = projects.map(p => p.category?.name).filter(Boolean);
    return ['Todos', ...new Set(categories)];
  }, [projects])

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((project) => {
        if (activeCategory === 'Todos') return true
        return project.category?.name === activeCategory
      });
  }, [projects, searchTerm, activeCategory])

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto" />
      </div>

      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}

      <div className={styles.filter_container}>
        <input
          type="text"
          placeholder="Buscar por nome..."
          className={styles.search_input}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className={styles.category_filters}>
          {uniqueCategories.map((category) => (
            <button
              key={category}
              className={`${styles.filter_button} ${
                activeCategory === category ? styles.active : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <Container customClass="start">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCards
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category?.name || 'Sem Categoria'}
              key={project.id}
              //Passa a nova função para o card
              onDeleteRequest={handleDeleteRequest} 
            />
          ))
        ) : (
          <p>Nenhum projeto encontrado com os filtros aplicados.</p>
        )}
      </Container>
      
      {/* Renderiza o Modal no final */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      >
        <h4>Confirmar Exclusão</h4>
        <p>Você tem certeza que deseja excluir o projeto:</p>
        <p><strong>{projectToDelete?.name}</strong>?</p>
        <p>Esta ação não poderá ser desfeita.</p>
      </Modal>
    </div>
  )
}

export default Projects
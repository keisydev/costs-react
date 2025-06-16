import { v4 as uuidv4 } from 'uuid'
import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'
import ProjectForm from '../project/ProjectForm'
import ServiceForm from '../Service/ServiceForm'
import ServiceCard from '../Service/ServiceCard'

// MUDANÇA: Recebe 'projects' e 'handleEdit' do App.js
function Project({ projects, handleEdit }) {
  const { id } = useParams()
  
  const [project, setProject] = useState(null)
  const [services, setServices] = useState([])
  const [showProjectform, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [message, setMessage] = useState()
  const [type, setType] = useState()

  useEffect(() => {
    //  Encontra o projeto no array que veio das props em vez de fazer fetch
    const currentProject = projects.find((p) => p.id === id)
    if (currentProject) {
        setProject(currentProject)
        setServices(currentProject.services)
    }
  }, [id, projects])

  function editPost(project) {
    setMessage('')
    if (project.budget < project.cost) {
      setMessage('O orçamento não pode ser menor que o custo do projeto!')
      setType('error')
      return false
    }
    
    // Chama a função do App.js para editar
    handleEdit(project)
    setShowProjectForm(false)
    setMessage('Projeto atualizado!')
    setType('success')
  }

  function createService(project) {
    setMessage('');
    const lastService = project.services[project.services.length - 1]
    lastService.id = uuidv4()
    const newCost = parseFloat(project.cost) + parseFloat(lastService.cost)

    if (newCost > parseFloat(project.budget)) {
      setMessage('Orçamento ultrapassado, verifique o valor do serviço')
      setType('error')
      project.services.pop()
      return false
    }
    project.cost = newCost

    // Chama a função do App.js para salvar a alteração
    handleEdit(project)
    setShowServiceForm(false)
    setMessage('Serviço adicionado!')
    setType('success')
  }

  function removeService(id, cost) {
    setMessage('')
    const servicesUpdated = project.services.filter((service) => service.id !== id)
    const projectUpdated = { ...project }
    projectUpdated.services = servicesUpdated
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)
    
    // Chama a função do App.js para salvar a alteração
    handleEdit(projectUpdated)
    setMessage('Serviço removido com sucesso')
    setType('success')
  }

  function toggleProjectForm() { setShowProjectForm(!showProjectform) }
  function toggleServiceForm() { setShowServiceForm(!showServiceForm) }
  
  return (
    <>
      {project ? (
        <div className={styles.project_details}>
          <Container customClass='column'>
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectform ? 'Editar projeto' : 'Fechar'}
              </button>
              {!showProjectform ? (
                <div className={styles.project_info}>
                  <p><span>Categoria:</span> {project.category.name}</p>
                  <p><span>Total do orçamento:</span> {project.budget}€</p>
                  <p><span>Total utilizado:</span> {project.cost}€</p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm handleSubmit={editPost} btnText='Concluir edição' projectData={project} />
                </div>
              )}
            </div>
            <div className={styles.service_form_container}>
              <h2>Adicione um serviço</h2>
              <button className={styles.btn} onClick={toggleServiceForm}>
                {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
              </button>
              <div className={styles.project_info}>
                {showServiceForm && (<ServiceForm handleSubmit={createService} btnText='Adicionar serviço' projectData={project} />)}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass='start'>
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard id={service.id} name={service.name} cost={service.cost} description={service.description} key={service.id} handleRemove={removeService} />
                ))
              }
              {services.length === 0 && <p>Não há serviços cadastrados.</p>}
            </Container>
          </Container>
        </div>
      ) : (<Loading />)}
    </>
  )
}

export default Project
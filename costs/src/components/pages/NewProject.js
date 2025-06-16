import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProjects.module.css'

// Recebe 'handleSubmit' como prop do App.js
function NewProject({ handleSubmit }) {
  const navigate = useNavigate();

  function createPost(project) {
    //Lógica de fetch removida. Apenas chama a função do App.js
    handleSubmit(project)
    // Navega para a página de projetos com a mensagem de sucesso
    navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } })
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>Crie o seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText='Criar projeto' />
    </div>
  );
}

export default NewProject;
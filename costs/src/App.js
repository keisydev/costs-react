import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid' //  Importar para gerar IDs únicos

// Importar os dados mockados aqui
import { projectsData } from './mock/db.js'

import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

function App() {
  //  O state agora vive aqui
  const [projects, setProjects] = useState([])

  // Carrega os dados iniciais quando o App é montado
  useEffect(() => {
    setProjects(projectsData)
  }, [])

  // Função para ADICIONAR um projeto
  function addProject(project) {
    // Adiciona os campos que o backend costumava criar
    project.cost = 0
    project.services = []
    project.id = uuidv4() // Gera um ID único

    setProjects([...projects, project])
  }

  // Função para REMOVER um projeto
  function removeProject(id) {
    const updatedProjects = projects.filter((project) => project.id !== id)
    setProjects(updatedProjects)
  }

  //Função para EDITAR um projeto (para a página de detalhes)
  function editProject(updatedProject) {
    const newProjectsArray = projects.map((project) => {
      if (project.id === updatedProject.id) {
        return updatedProject
      }
      return project
    });
    setProjects(newProjectsArray)
  }

  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
          {/*O estado e as funções são passados como props para as rotas */}
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects projects={projects} handleRemove={removeProject} />} />
          <Route path='/company' element={<Company />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newproject' element={<NewProject handleSubmit={addProject} />} />
          <Route path='/project/:id' element={<Project projects={projects} handleEdit={editProject} />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
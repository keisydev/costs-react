import { v4 as uuidv4 } from 'uuid';
import styles from './Project.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Importar os dados mockados em vez de buscar na rede.
import { projectsData } from '../mock/mockDatabase';

import Loading from '../layout/Loading';
import Container from '../layout/Container';
import Message from '../layout/Message';
import ProjectForm from '../project/ProjectForm';
import ServiceForm from '../Service/ServiceForm';
import ServiceCard from '../Service/ServiceCard';

function Project() {
    const { id } = useParams();
    
    const [project, setProject] = useState(null); //  Iniciar com null para facilitar a lógica de loading.
    const [services, setServices] = useState([]);
    const [showProjectform, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState();
    const [type, setType] = useState();

    useEffect(() => {
        setTimeout(() => {
            // procuramos o projeto no nosso array mockado
            const currentProject = projectsData.find((p) => p.id === id);
            
            if (currentProject) {
                setProject(currentProject);
                setServices(currentProject.services);
            }
        }, 400);
    }, [id]);

    function editPost(updatedProject) {
        setMessage('');

        if (updatedProject.budget < updatedProject.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!');
            setType('error');
            return false;
        }

        // Atualiza o estado diretamente.
        setProject(updatedProject);
        setShowProjectForm(false);
        setMessage('Projeto atualizado!');
        setType('success');
    }

    function createService(project) {
        setMessage('');

        const lastService = project.services[project.services.length - 1];
        lastService.id = uuidv4();
        const lastServiceCost = lastService.cost;
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);
        
        if (newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço');
            setType('error');
            project.services.pop();
            return false;
        }

        project.cost = newCost;

        // Atualiza o estado diretamente.
        // Usa spread `...` para garantir que o React detecte a mudança no objeto.
        setProject({ ...project });
        setServices(project.services);
        setShowServiceForm(false);
        setMessage('Serviço adicionado!');
        setType('success');
    }

    function removeService(id, cost) {
        setMessage('');

        const servicesUpdated = project.services.filter(
            (service) => service.id !== id
        );

        const projectUpdated = { ...project }; // Cria uma cópia para não modificar o estado diretamente

        projectUpdated.services = servicesUpdated;
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

        //  Atualiza o estado diretamente.
        setProject(projectUpdated);
        setServices(servicesUpdated);
        setMessage('Serviço removido com sucesso');
        setType('success');
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectform);
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm);
    }
    
    return (
        <>
            {project ? (
                <div className={styles.project_details}>
                    <Container customClass='column'>
                       {message && <Message type={type} msg={message} />}
                       <div className={styles.details_container}>
                           <div>
                               <h1>Projeto: {project.name}</h1>
                               {!showProjectform ? (
                                   <div className={styles.project_info}>
                                       <p><span>Categoria:</span> {project.category.name}</p>
                                       <p><span>Total do orçamento:</span> {project.budget}€</p>
                                       <p><span>Total utilizado:</span> {project.cost}€</p>
                                   </div>
                               ) : (
                                   <div className={styles.project_info}>
                                       <ProjectForm handleSubmit={editPost} btnText = 'Concluir edição' projectData={project} />
                                   </div>
                               )}
                           </div>
                           <button className={styles.btn} onClick={toggleProjectForm}>
                               {!showProjectform ? 'Editar projeto' : 'Fechar'}
                           </button>
                       </div>
                       <div className={styles.service_form_container}>
                           <h2>Adicione um serviço</h2>
                           <button className={styles.btn} onClick={toggleServiceForm}>
                               {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                           </button>
                           <div className={styles.project_info}>
                               {showServiceForm && (<ServiceForm
                                   handleSubmit={createService}
                                   btnText='Adicionar serviço'
                                   projectData={project}
                               />)}
                           </div>
                       </div>
                       <h2>Serviços</h2>
                       <Container customClass='start'>
                           {services.length > 0 &&
                               services.map((service) => (
                                   <ServiceCard
                                       id={service.id}
                                       name={service.name}
                                       cost={service.cost}
                                       description={service.description}
                                       key={service.id}
                                       handleRemove={removeService}
                                   />
                               ))
                           }
                           {services.length === 0 && <p>Não há serviços cadastrados.</p>}
                       </Container>
                   </Container>
                </div>
            ) : (<Loading />)}
        </>
    );
}

export default Project;
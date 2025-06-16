import styles from './ProjectCards.module.css'
import { Link } from 'react-router-dom'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

//  A prop 'handleRemove' agora se chama 'onDeleteRequest'
function ProjectCards({ id, name, budget, category, onDeleteRequest }) {
  
  const remove = (e) => {
    e.preventDefault()
    // Chama a função para ABRIR O MODAL, passando id e nome
    onDeleteRequest(id, name)
  }

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> {budget}€
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category?.toLowerCase()]}`}></span> {category}
      </p>
      <div className={styles.project_card_actions}>
        <Link to={`/project/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  )
}

export default ProjectCards
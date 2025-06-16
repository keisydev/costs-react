import styles from './Company.module.css'
import companyImage from '../../img/company.jpg' // adiciona uma imagem para ilustrar

function Company() {
  return (
    <div className={styles.company_container}>
      <h1>Sobre o <span>Costs</span></h1>
      <p>
        O <strong>Costs</strong> nasceu da necessidade de simplificar o gerenciamento financeiro de projetos. Acreditamos que o controle de custos não precisa ser uma tarefa complexa e demorada. Nossa missão é oferecer uma ferramenta intuitiva, visual e eficiente para que freelancers, pequenas equipes e gestores possam focar no que realmente importa: a execução de um trabalho incrível.
      </p>
      <img src={companyImage} alt="Nossa equipe" />
      <p>
        Nossos valores são a <strong>transparência</strong>, a <strong>agilidade</strong> e a <strong>simplicidade</strong>. Cada funcionalidade do Costs é pensada para fornecer clareza sobre o orçamento e os gastos, permitindo tomadas de decisão mais rápidas e seguras. Queremos ser o parceiro ideal para o sucesso dos seus projetos.
      </p>
    </div>
  );
}

export default Company
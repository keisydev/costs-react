import styles from './Contact.module.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa' // Ícones para um toque profissional

function Contact() {
  return (
    <div className={styles.contact_container}>
      <h1>Entre em Contato</h1>
      <p>Tem alguma dúvida, sugestão ou feedback? Adoraríamos ouvir você!</p>
      <ul className={styles.contact_list}>
        <li>
          <FaEnvelope /> <span>contato@costs.com</span>
        </li>
        <li>
          <FaPhone /> <span>(11) 99999-8888</span>
        </li>
        <li>
          <FaMapMarkerAlt /> <span>Rua dos Projetos, 123 - São Paulo, SP</span>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
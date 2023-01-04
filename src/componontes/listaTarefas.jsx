import { Trash } from 'phosphor-react';
import styles from './radio.module.css';

export function Lista({ content, onDeleteTask }) {
  function deleteTask() {
    onDeleteTask(content)
  }

  return (
    <div className={styles.lista}>
      <div>

        <header>
          <input  type="checkbox" /> {content}
          <button onClick={deleteTask} title='Deletar tarefa'>
            <Trash size={20} />
          </button>
        </header>
      </div>
    </div>

  )

}


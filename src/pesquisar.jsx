import { useState } from 'react';
import { Lista } from './componontes/listaTarefas';

export function Pesquisar() {
  const [addtask, setAddTask] = useState([


  ])

  const [newCreateTask, setNewCreateTask] = useState('')


  function handleCreateNewTask() {

    event.preventDefault()

    const newTask = event.target.input.value

    setAddTask([...addtask, newTask]);
    setNewCreateTask('');
  }

  function deleta(comentToDelete) {
    const deletando = addtask.filter(addtask => {
      return addtask != comentToDelete;
    })
    setAddTask(deletando)
  }

  let tamanho = addtask.length;


  function handleNewTaskChange() {
    setNewCreateTask(event.target.value)
  }
  return (
    <div className='wrapper'>
      <form onSubmit={handleCreateNewTask}>
        <input value={newCreateTask}
          name='input'
          type="text"
          className='formLista'
          onChange={handleNewTaskChange}
          placeholder='Adicione uma nova tarefa' />

        <button type='submit' className='button'>Criar</button>

      </form>
      <div>
        <div className='contador' >
          <div className='criadas'>
            <span>Tarefas criadas</span>
            <span id='tamanho'> {tamanho} </span>
          </div>
          <div className='concluidas'>
            <span>Concluidas</span>
            <span id='tamanho'> ## </span>
          </div>

        </div>
        {addtask.map(task => {
          return <Lista content={task}
            onDeleteTask={deleta}

          />
        })}

      </div>
    </div>



  )


}

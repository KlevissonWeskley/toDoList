import todoLogo from '../../assets/toDoLogo.svg'
import { PlusCircle } from 'phosphor-react'

import styles from './header.module.css'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onAddTask: (taskTiltle: string) => void;
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        onAddTask(title)
        setTitle('')
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }
    return (
        <header className={styles.header}>
            <img src={todoLogo} />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input placeholder='Adicione uma nova tarefa'
                       onChange={onChangeTitle} 
                       value={title}
                />
                <button>
                    Criar 
                    <PlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}
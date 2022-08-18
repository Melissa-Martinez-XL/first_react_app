import { useEffect } from "react";

const Procesando = (() => {

    function list() {
        const list = [
            {title: 'HTML', id: 1},
            {title: 'CSS', id: 2},
            {title: 'JavaScript', id: 3},
            {title: 'Java', id: 4},
            {title: 'JSX', id: 5}
        ];

        const listItems = list.map (items =>
            <li key={items.id}>
                {items.title}
            </li>
            );
        
        return (
            <>
            <p>Tareas:</p>
            <ul>
                {listItems}
            </ul>
            <p>La tarea esta siendo procesada</p>
            </>
        );
    }

    useEffect(() => {
        console.log('Componente montado: Procesando');

        return () => {
            console.log('Componente desmontado: Procesando');
        }
    }, []);

    return list();
});

export { Procesando };
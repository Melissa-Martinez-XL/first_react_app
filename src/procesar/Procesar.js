import { useEffect } from "react";

const Procesar = (() => {

    useEffect (() => {
        console.log('Componente montado: Procesar');

        return () => {
            console.log('Componente desmontado: Procesar');
        }
    }, []);

    return <p>Hay tareas para procesar</p>
});

export { Procesar };
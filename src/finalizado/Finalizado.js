import { useEffect} from "react";

const Finalizado = (() => {

    useEffect(() => {
        console.log('Componente montado: Finalizado');

        return () => {
            console.log('Componente desmontado: Finalizado');
        }
    }, []);

    return <p>El proceso ha finalizado </p>
});

export { Finalizado };
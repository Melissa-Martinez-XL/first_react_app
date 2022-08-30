import { useEffect} from "react";
import styles from './finalizado.module.scss';

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
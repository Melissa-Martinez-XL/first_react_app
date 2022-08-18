import { string } from "prop-types";
import { Finalizado } from "./Finalizado";
import { Procesando } from "./Procesando";
import { Procesar } from "./Procesar";

const Card = ({color, status}) => {

    function showText () {

        if (status === 'procesar') {

            return <Procesar />
        }

        if (status === 'procesando') {

           return <Procesando />                
        }

        return <Finalizado />

    }

    return (
        <div style={{ backgroundColor: color }}>
            <span>Estado: {status}</span>

            {showText()}
       
        </div>

    );
}

/*
class Card extends Component {
    constructor(params) {
        super(params);
    }

    render() {
        return(
            <div style={{ backgroundColor: this.props.color }}>
                <p>Tareas</p>
                <span>Estado: {this.props.status}</span>
                
                <div>
                    <ul>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </div>
        );
    }
}

*/

Card.propTypes = {
    status: string.isRequired,
    color: string.isRequired,
};

export { Card };
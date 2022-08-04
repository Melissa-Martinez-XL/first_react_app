import { string } from "prop-types";

const Card = ({color, status}) => (

    <div style={{ backgroundColor: color }}>
        <span>Estado: {status}</span>

        {status === 'procesar' ? (
            <p>Tiene una tarea por procesar.</p>
        ) : status === 'procesando' ? (
            <>
                <div>
                    <p>Tareas:</p>
                    <ul>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <p>La tarea se esta procesando.</p>
            </>
        ) : status === 'finalizado' ?(
            <p>La tarea ha finalizado</p>
        ) : (
            alert('Un error ha ocurrido')
        )}
    </div>
);

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
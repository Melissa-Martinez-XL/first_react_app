import { string } from "prop-types";

const Card = ({color, status}) => {

    function showText () {

        if (status === 'procesar') {

            return <p>Tiene una tarea por porcesar</p>;
        }

        if (status === 'procesando') {

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

        return <p>La tarea ha finalizado</p>;

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
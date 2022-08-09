import { string, func } from 'prop-types';

const InputElement = ({value, onChange }) => {

    function handleChange(event) {
        
        const { target: { value } } = event;
        onChange(value);
    }

    return <input type='text' name='' value={value} onChange={handleChange} placeholder='Ingrese el estado'/>;
}

/*
class InputElement extends Component {
    constructor(params) {
        super(params);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { target: { value } } = event;
        const { onChange } = this.props;
        onChange(value);
    }

    render() {

        const { value } = this.props;
        return (
            <div>
                <input type="text" name="" value={value} onChange={this.handleChange} />   
            </div>
        );     
    }
}
*/

InputElement.propTypes = {
    value: string.isRequired,
    onChange: func.isRequiered,
}

export { InputElement };
import { InputElement } from "../inputElement/InputElement";
import { func, array } from 'prop-types';
import { useState } from "react";
import { Button } from '../button/Button';

const UserInput = ({changeStatus, status}) => {

    const [inputValue, setInputValue] = useState('');
    const [disabledInput, setDisabledInput] = useState(true);

    function handleClick() {

        changeStatus(inputValue);

        setInputValue('');
        setDisabledInput(true);

    }

    function inputChange(newValue) {

        const result = status.find(element => element === newValue);
        
        setDisabledInput(result === null || result === undefined);
        setInputValue(newValue);

    }

    return (
        <>
            <InputElement value={inputValue} onChange={inputChange} />
            <Button onClick={handleClick} disabled={disabledInput} label="Enviar" />
        </>
    );
}

/*
class UserInput extends Component {
    constructor(params) {
        super(params);

        this.state = {
            inputValue: '',
            disabledInput: true,
        }

        this.handleClick = this.handleClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    handleClick() {
        const { changeStatus } = this.props;
        changeStatus(this.state.inputValue);
        
        this.setState({
            inputValue: ''
        });
    }

    inputChange(newValue) {
        const { status } = this.props;

        const result = status.find(element => element === newValue);
        this.setState(
            { disabledInput: result === null || result === undefined, inputValue: newValue }
         );
    }

    render() {
        const { inputValue, disabledInput } = this.state;

        return (
            <>
            <InputElement value={inputValue} onChange={this.inputChange} />
            <InputButton handleChange={this.handleClick} disabled={disabledInput}/>
            </>
        );
    }

}
*/

UserInput.propTypes={
    changeStatus: func.isRequired,
    status: array.isRequired,
}

export { UserInput };
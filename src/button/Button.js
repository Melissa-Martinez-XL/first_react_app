import { func, string, bool } from "prop-types";

import styles from './button.module.scss'

const Button = ({disabled, onClick, label}) => (
    <button type="button" disabled={disabled} onClick={onClick} className={styles.button}>{label}</button>
);

/*
class Button extends Component {   
    constructor(params) { 
        super(params);
    }

    render() {
        const {disabled, onClick} = this.props;

        return (    
            <button type="button" disabled={disabled} onClick={onClick}>{this.props.label}</button>
        );
    }

}
*/

Button.propTypes = {   
    onClick: func.isRequired,
    label: string.isRequired,
    disabled: bool,
};

Button.defaultProps = { 
    disabled: false,
};

export { Button };


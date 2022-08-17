import { string, array, func } from 'prop-types';  
import { useEffect, useState } from 'react';

import { Button } from './Button'; 

// Componente Inicial

const Buttons = ({status, statuses, onClick}) => {

    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledBack, setDisabledBack] = useState(true);

    useEffect(() => {
        
        const statusIndex = statuses.indexOf(status);

        setDisabledBack(statusIndex === 0);
        setDisabledNext(statusIndex === statuses.length -1)

    }, [status]);

    // Funciones
    
    function handleBack() {

        const nextStatusIndex = statuses.indexOf(status) -1;
        const nextStatus = statuses[nextStatusIndex];
        onClick(nextStatus);

    }

    function handleNext() {

        const nextStatusIndex = statuses.indexOf(status) +1;
        const nextStatus = statuses[nextStatusIndex];
        onClick(nextStatus);

    }

    // function disabledNext() {

    //     const statusIndex = statuses.indexOf(status);

    //     return statusIndex === statuses.length -1;

    // }

    // function disabledBack() {

    //     const statusIndex = statuses.indexOf(status);

    //     return statusIndex === 0;

    // }

    // Return
    return (
        <>
            <Button onClick={handleBack} disabled={disabledBack} label="Retroceder estado" />
            <Button onClick={handleNext} disabled={disabledNext} label="Avanzar estado" />
        
        </>
    );

} 

/*
class Buttons extends Component { 
    constructor(params) {         
        super(params);            


        this.handleBack = this.handleBack.bind(this);  
        this.handleNext = this.handleNext.bind(this);
        this.disabledNext = this.disabledNext.bind(this);
        this.disabledBack = this.disabledBack.bind(this);
    }

    handleBack() {  
        const { status, statuses, onClick } = this.props;  
       
        let nextStatusIndex = statuses.indexOf(status) - 1; 
        
        const nextStatus = statuses[nextStatusIndex]; 
        onClick(nextStatus);   
    }

    handleNext() {
        const { status, statuses, onClick } = this.props;    
        let nextStatusIndex = statuses.indexOf(status) + 1; 
        
        const nextStatus = statuses[nextStatusIndex];   
        onClick(nextStatus);    
    }

    disabledNext() {
        const { status, statuses } = this.props;

        const statusIndex = statuses.indexOf(status);

        return statusIndex === statuses.length -1;
    }

    disabledBack() {
        const { status, statuses } = this.props;
        const statusIndex = statuses.indexOf(status);

        return statusIndex === 0;
    }

    getIndex() {
        const { status, statuses } = this.props;
        const statusIndex = statuses.indexOf(status);
    }

    render () {
        return ( 
            <>
                <Button onClick={this.handleBack} disabled={this.disabledBack()} label='Retroceder estado' />  
                <Button onClick={this.handleNext} disabled={this.disabledNext()} label='Avanzar estado' />
            </>
        );
    }
}
*/

Buttons.propTypes = {  
    status: string.isRequired,
    statuses: array.isRequired,
    onClick: func.isRequired,
};


export { Buttons };
import { Component } from 'react'
import '../../templates/home/style.css'

export class ButtonCarregar extends Component {
    render() {
        const { text, onClick, disabled } = this.props;
        
        return (
            <div className='buttonCenter'>
                <button
                    className='button'
                    onClick={onClick}
                    disabled={disabled}
                >
                    {text}
                </button>
            </div>
        )
    }
}
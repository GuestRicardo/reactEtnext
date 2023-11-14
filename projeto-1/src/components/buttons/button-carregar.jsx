import { Component } from 'react'
import './style.css'

export class ButtonCarregar extends Component {
    render() {
        const { text, onClick, disabled } = this.props;

        return (
            <div className='buttonCenter'>
                <button
                    className='buttonC'
                    onClick={onClick}
                    disabled={disabled}>
                    {text}
                </button>
            </div>
        )
    }
}
import { Component } from 'react'
import '../../templates/home/style.css'

export class ButtonCarregar extends Component{
    render() {
        const {text, onClick} = this.props;
        return (
            <div className='buttonCenter'>
                <button
                   onClick={onClick}
                  className="buttonC"  >
                    { text }
                </button>
            </div>
        )
    }
}
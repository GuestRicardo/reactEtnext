import { Component } from 'react'
import '../../templates/home/style.css'

export class ButtonCarregar extends Component{
    render() {
        const {text, quandoClica} = this.props;
        return (
            <div className='buttonCenter'>
                <button
                   onClick={quandoClica}
                  className="buttonC"  >
                    { text }
                </button>
            </div>
        )
    }
}
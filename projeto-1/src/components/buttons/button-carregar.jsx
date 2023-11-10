import { Component } from 'react'
import '../../templates/home/style.css'

export class ButtonCarregar extends Component{
    render() {
        const {text} = this.props;
        return (
            <div className='buttonCenter'>
                <button
                  onClick={this.loadMorePosts} 
                  className="buttonC"  >
                    { text }
                </button>
            </div>
        )
    }
}
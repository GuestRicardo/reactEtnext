import { Component } from 'react'
import '../../templates/home/style.css'

export class ButtonCarregar extends Component{
    render() {
        return (
            <div  onClick={this.loadMorePosts} className='buttonCenter'>
                <button className="buttonC"  >
                    Carregar Páginas
                </button>
            </div>
        )
    }
}
import { Component } from "react";
import './style.css'

export class InputSearch extends Component {
    render() {
        return (
            <div classNames="containeri">
                <div className="input-group">
                    <label className="input-group__label" for="myInput">My Label</label>
                    <input type="search" id="myInput" class="input-group__input" value="Buscar" />
                </div> <br />
            </div>
        )
    }
}
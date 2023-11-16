import { Component } from "react";
import './style.css'

export class InputSearch extends Component {
    render() {
        return (
            <div classNames="containeri">
                <div className="input-group">
                    <label className="input-group__label" for="myInput">My Label</label>
                    <input type="text" id="myInput" class="input-group__input" value="This is my input" />
                </div> <br />
            </div>
        )
    }
}
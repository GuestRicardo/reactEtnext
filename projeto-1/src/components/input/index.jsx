import { Component } from "react";
import './style.css'

export class InputSearch extends Component {
    render() {
        const { onChange, searchValue } = this.props;
        return (
            <div className="containerI">
                <div className="form__group field">
                    <input
                        type="input" className="form__field"
                        placeholder="Name" name="name"
                        id={'name'} required
                        onChange={onChange}
                        value={searchValue}

                    />
                    <label for="name" className="form__label">Digite á Busca</label>
                </div>
            </div>
        )
    }
}
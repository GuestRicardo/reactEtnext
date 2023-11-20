
import './style.css'

export const InputSearch = ({ searchValue, handleChange }) =>{
    return (
        <div className="containerI">
            <div className="form__group field">
                <input
                    type="input" className="form__field"
                    placeholder="Name" name="name"
                    id={'name'} required
                    onChange={handleChange}
                    //value é o estado do elemento
                    value={searchValue}
                />
                <label for="name" className="form__label">Digite á Busca</label>
            </div>
        </div>
    )

}
import './input-form.scss';
import Input from "../input/Input";
import InputLabel from "../input_label/InputLabel";

const InputForm = ({title, inputs, inputChange}) => {
    return (
        <div className={'InputForm'}>
            <div className={'form__title'}>
                <h2>{title}</h2>
            </div>
            <div className={'form__content'}>
                {inputs.map(item => (
                    <div className={'form__item'} key={item.id}>
                        <InputLabel name={item.name} title={item.title} necessary={item.necessary} />
                        <Input name={item.name} onChange={inputChange} />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default InputForm;
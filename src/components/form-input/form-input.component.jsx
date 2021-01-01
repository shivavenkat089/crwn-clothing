import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...restFormInputProps }) => (
  <div className="group">
    <input
      onChange={handleChange}
      className="form-input"
      {...restFormInputProps}
    />
    {label ? (
      <label
        className={`${
          restFormInputProps.value.length > 0 ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...restFormInputProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...restFormInputProps} />
    {label ? (
      <FormInputLabel
        className={`${restFormInputProps.value.length > 0 ? 'shrink' : ''}`}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherCustomButtonProps
}) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherCustomButtonProps}
  >
    {children}
  </button>
);

export default CustomButton;

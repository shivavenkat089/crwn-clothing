import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid black;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const googleSignInStyle = css`
  background-color: #4285f4;
  color: white;
  border-color: #4285f4;
  &:hover {
    background-color: #357ae8;
    border-color: #357ae8;
    color: white;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyle;
  }
  if (props.inverted) {
    return invertedButtonStyles;
  }
  return buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${buttonStyles}
  ${getButtonStyles}
`;

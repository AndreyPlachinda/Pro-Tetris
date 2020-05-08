import styled from "styled-components";
import {Button, Input} from 'antd';

export const AuthPageStyled = styled.div`
  display: flex;
  justify-content: center;
  height: 750px;
  align-items: center;
`;
export const AuthFormWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  width: 500px;
  margin-left: 16px;
`;

export const FormStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleStyled = styled.div`
  font-size: 36px;
`;

export const TextStyled = styled.div`
  margin-top: 16px;
  font-size: 24px;
`;

export const InputStyled = styled(Input)`
  margin-top: 16px;
  border-radius: 4px;
  margin-left: 16px;
`;

export const ButtonStyled = styled(Button)`
  margin-top: 16px;
  border-radius: 4px;
  margin-left: 16px;
  width: 200px;
  background: #2B7804;
  border-color: #2B7804;
  &:hover {
    background: #6A9D4F;
    border-color: #2B7804;
  }
`;
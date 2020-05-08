import * as React from "react";
import * as s from "./styled";
import { Link } from "react-router-dom";

export const FormAuthComponent = () => {
    const [value, setValue] = React.useState(
        localStorage.getItem('userName') || ''
    );

    const onChange = React.useCallback(
        e => setValue(e.target.value),
        []
    );
    const onClick = React.useCallback(
        () => localStorage.setItem('userName', value),
        [value]
    );
    return (
        <s.AuthPageStyled>
            <s.AuthFormWrapperStyled>
                <s.TitleStyled>Pro-Tetris</s.TitleStyled>
                <s.FormStyled>
                    <s.TextStyled>Имя:</s.TextStyled>
                    <s.InputStyled
                        value={value}
                        onChange={onChange}
                        placeholder="Введите имя"
                    />
                    <Link to={{ pathname: '/tetris' }}>
                        <s.ButtonStyled type="primary" onClick={onClick}>
                            Войти
                        </s.ButtonStyled>
                    </Link>
                </s.FormStyled>
            </s.AuthFormWrapperStyled>
        </s.AuthPageStyled>
    )
};
import React from "react";
import * as s from "./styled";
import {TitleStyled} from "../Auth/styled";
import {Tooltip} from "antd";
import { Link } from "react-router-dom";

export const HeaderPage: React.FC = () => (
    <s.HeaderComponentStyled>
        <Link to={{ pathname: '/' }}>
            <s.LeftCircleOutlinedStyled />
        </Link>
        <TitleStyled>Pro-Tetris</TitleStyled>
        <Tooltip placement="leftTop" title="Home Page">
            <div />
        </Tooltip>
    </s.HeaderComponentStyled>
);
import React from "react";
import {
    DivComponentStyled,
    MainComponentStyled,
    PlayButtonStyled,
} from "./styled";
import {CanvasComponentStyled} from "../figures/rectangle";
import {TextStyled} from "../Auth/styled";
import { ArrowUpOutlined, ArrowDownOutlined, ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

export const MainComponent: React.FC = () => {
  return (
      <MainComponentStyled>
          <DivComponentStyled>
              <TextStyled>{`Player: ${localStorage.getItem('userName') || ''}`}</TextStyled>
              <PlayButtonStyled id='start' type="primary">
                  Start the game
              </PlayButtonStyled>
              <TextStyled>Keyboard shortcuts:</TextStyled>
              <span><ArrowUpOutlined /> - rotate</span>
              <span><ArrowDownOutlined /> - down</span>
              <span><ArrowLeftOutlined /> - left shift</span>
              <span><ArrowRightOutlined /> - right shift</span>
          </DivComponentStyled>
        <DivComponentStyled>
              <TextStyled>Next figure</TextStyled>
              <canvas id='nextFigureId' width='200' height='200' style={{border: '2px solid', marginTop: '8px'}}/>
              <div style={{ marginTop: '16px' }} id='resultId'/>
          </DivComponentStyled>
          <DivComponentStyled>
              <CanvasComponentStyled />
          </DivComponentStyled>
      </MainComponentStyled>
  );
};
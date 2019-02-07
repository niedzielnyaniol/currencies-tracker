import styled, { css } from 'styled-components';

const ScrollWrapper = styled.div`
  height: 366px;
  overflow-y: auto;
`;

const Container = styled.div`
  padding: 15px 20px;

  ${(props) => props.extraBottomPad && css`
    padding-bottom: 61px;
  `};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export {
  ScrollWrapper,
  Container,
  ButtonWrapper,
};

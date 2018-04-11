import styled, { css } from 'styled-components';

const ScrollWrapper = styled.div`
  height: 365px;
  overflow-y: auto;
`;

const Container = styled.div`
  padding: 15px 20px;

  ${(props) => props.extraBottomPad && css`
    padding-bottom: 51px;
  `};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export {
  ScrollWrapper,
  Container,
  ButtonWrapper,
};

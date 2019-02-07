import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 40px;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
`;

const ItemContainerWrapper = styled.div`
  width: 500px;
`;

const HeaderWrapper = styled.div`
  margin: 20px auto 0 auto;
`;

export {
  HeaderWrapper,
  Container,
  Content,
  ItemContainerWrapper,
};

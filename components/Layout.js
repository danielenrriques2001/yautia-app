import Header from '../components/Header'
import styled from 'styled-components';
export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header/>
      <main>{children}</main>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.main`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  width: 80%;
  margin: 0 auto;
  border-radius: 45px;
  padding: 3rem;
`;

import Header from '../components/Header'
import styled from 'styled-components';
export default function Layout({ children }) {
  return (
    <LayoutContainer >
      <Header/>
      <main>{children}</main>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.main`
  
  width: 80%;
  margin: 0 auto;
  border-radius: 45px;
  padding: 3rem;
`;

import { useSession, signOut, getSession } from "next-auth/react"
import styled from 'styled-components';

  const Heading = styled.h2`
  position: relative;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  text-align: center;
`;

const HeadingSpan = styled.span`
  color: #111; 
  font-family: 'Helvetica Neue', sans-serif; font-size: 275px; 
  font-weight: bold; 
  letter-spacing: -1px; 
  line-height: 1; 
  text-align: center; 
  font-size: 45px;
  
`; 
const ProfileContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

const ProfileButton = styled.button`

  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter,sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s,-webkit-box-shadow .2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-top: 15px;
  


&:hover {
  box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
}
`;

function Profile() {

  const { data: session, status } = useSession()


  if(session) {
    return (
      <ProfileContainer> 
        <Heading>Welcome!</Heading>
        <HeadingSpan>{session.user.name}</HeadingSpan>


      <ProfileButton onClick={() => signOut()}>Sign out</ProfileButton>
      </ProfileContainer>
    )
  } else {
    <div>You have to sign in!</div>
  }
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
      props: { session },
  };
}

export default Profile;

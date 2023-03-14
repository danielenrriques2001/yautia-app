import Layout from '@/components/Layout'
import { SessionProvider } from "next-auth/react"
import SettingsContextProvider from '@/components/context/PomodoroSettingProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App({ Component, pageProps: {session, ...pageProps} 
}) {
  return (
  <SettingsContextProvider>
    <ToastContainer position="top-right" limit={1}/>
    <SessionProvider session = {session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
  </SessionProvider>
  </SettingsContextProvider>

    )
}

export default App;


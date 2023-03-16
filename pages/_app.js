import Layout from '@/components/Layout'
import { SessionProvider } from "next-auth/react"
import SettingsContextProvider from '@/components/context/PomodoroSettingProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App({ Component, pageProps: {session, ...pageProps} 
}) {
  return (
  <SettingsContextProvider>
    <ToastContainer 
      limit={1}
      position="top-center"
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="light"
      autoClose={2000}
      />

    <SessionProvider session = {session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
  </SessionProvider>
  </SettingsContextProvider>

    )
}

export default App;


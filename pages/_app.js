import Layout from '@/components/Layout'
import { SessionProvider } from "next-auth/react"
import SettingsContextProvider from '@/components/context/PomodoroSettingProvider';

function App({ Component, pageProps: {session, ...pageProps} 
}) {
  return (
  <SettingsContextProvider>
    <SessionProvider session = {session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
  </SessionProvider>
  </SettingsContextProvider>

    )
}

export default App;


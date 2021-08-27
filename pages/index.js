import Head from 'next/head'
import styles from '../styles/Home.module.css'
import moment from 'moment'
import { useRouter } from 'next/router'

function Home({now}) {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Generated <code className={styles.code}>{router.asPath}</code> at {' '}
          <code className={styles.code}>{moment(now).format()} <span style={{fontSize: 'xx-small'}}>({moment(now).fromNow()} [{(Date.now() - now) / 1000} seconds])</span></code>.
        </p>

        <div style={{textAlign: 'left', width: '100%'}}>
          <a href="https://nextjs-time-api.vercel-support.app/api/time" target="_blank" style={{'textDecoration': 'underline'}}>Time API</a> Returned:
          <pre>
            {
              now
            }
          </pre>
        </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}


export async function getStaticProps() {
  const res = await fetch('https://nextjs-time-api.vercel-support.app/api/time')
  const {now} = await res.json()
  console.log('getStaticProps...')
  console.log(`now is ${now}`)
  
  return {
    props: {
      now,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 180 seconds
    revalidate: 600, // In seconds
  }
}


export default Home
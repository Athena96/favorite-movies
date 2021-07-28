import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'
import Image from 'next/image'
import Script from 'next/script'
import myimage from '../public/tst.png'
import { Logger } from 'aws-amplify';
const logger = new Logger('foo');

const Home = ({ data }) => {
  logger.info('info Home');

  if (data) {
    return (

      <Layout home>
      <Head>
        <title>{'Favorite Movies'}</title>
      </Head>

      <Image
        src={myimage}
        placeholder="blur"
        alt="Picture of the"
      /><br/>
      <Image
  src="https://nextjs.org/static/images/learn.png"
  blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
  alt="Picture of the author"
  placeholder="blur"
  width='300px'
  height='300px'
/>
<Script
  src={'https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.map'} // consent mangagement
  strategy="beforeInteractive"
  onLoad={() => {
    // If loaded successfully, then you can load other scripts in sequence
    console.log('loaded!');
  }}
/>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Favorite Movies - Dynamic (SSG) - {process.env.API_HOST}</h2>
        <ul className={utilStyles.list}>
          {data.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/movies/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <small>{date}</small>
              </small>
            </li>
          ))}
        </ul>
      </section>
      
    </Layout>
    )
  } else {
    return <></>;
  }
}

export async function getServerSideProps() {
  logger.info('info getServerSideProps');

  const res = await fetch('https://6obli1j4bb.execute-api.us-west-2.amazonaws.com/Prod/listMovies')
  const data = await res.json()
  return {
    props: {
      data,
    }
  }
}

export default Home

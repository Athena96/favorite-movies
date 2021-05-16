import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'

const Home = ({ data }) => {

  if (data) {
    return (

      <Layout home>
      <Head>
        <title>{'Favorite Movies'}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Favorite Movies</h2>
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
  const res = await fetch('https://6obli1j4bb.execute-api.us-west-2.amazonaws.com/Prod/listMovies')
  const data = await res.json()
  return {
    props: {
      data,
    }
  }
}

export default Home

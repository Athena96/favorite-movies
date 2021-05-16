import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Movie({ movie }) {

  return (
    <Layout>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <article>
        <div>
          <img
            src={movie.image}
            width={250}
            alt={`image`}
          />
        </div>
        <h1 className={utilStyles.headingXl}>{movie.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={movie.date} />
        </div>
      </article>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('https://6obli1j4bb.execute-api.us-west-2.amazonaws.com/Prod/listMovies');
  const rawdata = await res.json()
  for (const movie of rawdata) {
    if (movie.id === context.query.id) {
      return { props: { movie } }
    }
  }
}
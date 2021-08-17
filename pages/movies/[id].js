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
          {/* <img
            src={movie.image}
            width={250}
            alt={`image`}
          /> */}
        </div>
        <h1 className={utilStyles.headingXl}>{movie.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={movie.date} />
        </div>

        {movie['allMovies'].map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>

                <a>{title}</a>

              <br />
              <small className={utilStyles.lightText}>
                <small>{date}</small>
              </small>
            </li>
          ))}
      </article>
    </Layout>
  )
}


export async function getStaticPaths() {
  // const res = await fetch('https://6obli1j4bb.execute-api.us-west-2.amazonaws.com/Prod/listMovies');
  // const data = await res.json();
  // const paths = data.map((movie) => ({
  //   params: { id: movie.id },
  // }))
  
  // return { paths, fallback: 'blocking' }
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch('https://6obli1j4bb.execute-api.us-west-2.amazonaws.com/Prod/listMovies');
  const rawdata = await res.json()
  const movie = {}
  let mvs = []
  for (const m of rawdata) {
    mvs.push(m);
    if (m.id === params.id) {
      movie['title'] = m.title;
      movie['id'] = m.id;
      movie['date'] = m.date;
    }
  }

  movie['allMovies'] = mvs;
  return { 
    props: { 
      movie 
    },
    revalidate: 10
  }
}
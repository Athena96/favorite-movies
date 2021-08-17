import Layout from '../../components/layout'
import Head from 'next/head'
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


        {movie['allMovies'].map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>

                <a>{title}</a>

              <br />
             
            </li>
          ))}
      </article>
    </Layout>
  )
}


export async function getStaticPaths() {
  const res = await fetch('https://6obli1j4bb.execute-api.us-west-2.amazonaws.com/Prod/listMovies');
  const data = await res.json();
  const paths = data.map((movie) => ({
    params: { id: movie.id },
  }))
  
  return { paths, fallback: 'blocking' }
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
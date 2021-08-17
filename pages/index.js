// import Layout from '../components/layout'
// import Head from 'next/head'
// import Date from '../components/date'
// import utilStyles from '../styles/utils.module.css'

export default function Movie({ movies }) {

  return (

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    )

}


export async function getStaticProps() {
  const res = await fetch('https://6obli1j4bb.execute-api.us-west-2.amazonaws.com/Prod/listMovies');
  const movies = await res.json()
  // const movie = {}
  // let mvs = []
  // for (const m of rawdata) {
  //   mvs.push(m);
  //   if (m.id === params.id) {
  //     console.log('MATCj')
  //     movie['title'] = m.title;

  //     movie['id'] = m.id;

  //     movie['date'] = m.date;
  //   }
  // }

  // movie['allMovies'] = mvs;
  return { 
    props: { 
      movies 
    },
    revalidate: 10
  }
}


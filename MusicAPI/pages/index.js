import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

function HomePage({ artists }) {
  return (
    <Layout>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1 className="title">Homepage</h1>

      <ul>
        {artists.results.map((artist) => (
          <li key={artist.id}>
            <Link
                href="/release/[slug]"
                as={`/release/${slug(artist.title)}-${artist.id}`}>
              <a>{artist.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{``}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  // data fetch
  const data = await unfetch(
    'https://api.discogs.com/database/search?q=RicardoVillalobos&key=MelDbWCfnIPWXiqffJfE&secret=gVezXcfHyBapgYBqbuxVTaLFVchUKdWF'
  )
  const artists = await data.json()
  return {
    props: {
      artists
    }
  }
}

export default HomePage

import Layout from '../../components/layout'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

function ReleaseDetail({ artist }) {
  return (
    <Layout>
      <Head>
        <title>Release Detail</title>
      </Head>
      <h1>{artist.title}</h1>
      <figure>
        <img src={artist.image} alt={artist.title} />
      </figure>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await unfetch(
    'https://api.discogs.com/database/search?q=RicardoVillalobos&key=MelDbWCfnIPWXiqffJfE&secret=gVezXcfHyBapgYBqbuxVTaLFVchUKdWF'
  )
  const artists = await data.json()
  const paths = artists.results.map((artist) => {
    return { params: { slug: `${slug(artist.title)}-${artist.id}`}}
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  console.log(params.slug)

  const data = await unfetch(
    'https://api.discogs.com/database/search?q=' +
      params.id +
      '&key=MelDbWCfnIPWXiqffJfE&secret=gVezXcfHyBapgYBqbuxVTaLFVchUKdWF'
  )
  const artist = await data.json()
  return {
    props: {
      artist
    }
  }
}

export default ReleaseDetail

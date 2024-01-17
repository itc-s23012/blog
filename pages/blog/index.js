import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
import { getPlaiceholder } from 'plaiceholder'

import { eyecatchLocal } from 'lib/constants'
const props = { title: 'Blog', subtitle: 'Recent Posts' }
const Home = ({ posts }) => {
  return (
    <Container>
      <Meta pageTitle='ブログ' />
      <Hero {...props} />

      <Posts posts={posts} />
    </Container>
  )
}

const getStaticProps = async () => {
  const posts = await getAllPosts()

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts
    }
  }
}

export default Home
export { getStaticProps }

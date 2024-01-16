import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
import { getPlaiceholder } from 'plaiceholder'

import { eyecatchLocal } from 'lib/constants'
const props2 = { title: 'Blog', subtitle: 'Recent Posts' }
const Blog = ({ posts }) => {
  return (
    <Container>
      <Meta pageTitle='ブログ' />
      <Hero {...props2} />

      <Posts posts={posts} />
    </Container>
  )
}

const getStaticProps = async () => {
  const posts = await getAllPosts()
  const processedPosts = []

  for (const post of posts) {
    if (!Object.prototype.hasOwnProperty.call(post, 'eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64

    processedPosts.push(post)
  }

  return {
    props: {
      posts: processedPosts
    }
  }
}

export default Blog
export { getStaticProps }

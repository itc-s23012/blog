import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
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

  return {
    props: {
      posts
    }
  }
}

export default Blog
export { getStaticProps }

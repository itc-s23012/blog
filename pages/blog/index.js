import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
const props2 = { title: 'Blog', subtitle: 'Recent Posts' }
const Blog = () => {
  return (
    <Container>
      <Meta pageTitle='ブログ' />
      <Hero {...props2} />
    </Container>
  )
}

export default Blog

import Hero from 'components/hero'
const props2 = { title: 'Blog', subtitle: 'Recent Posts' }
const Blog = () => {
  return <Hero {...props2} />
}

export default Blog

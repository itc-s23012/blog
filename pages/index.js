import Container from 'components/container'
import Hero from 'components/hero'
import Meta from 'components/meta'
const props = {
  title: 'CUBE',
  subtitle: 'アウトプットしていくサイト',
  imageOn: []
}
const Home = () => {
  return (
    <Container>
      <Meta />
      <Hero {...props} />
    </Container>
  )
}
export default Home

import Container from 'components/container'
import Hero from 'components/hero'
const props = {
  title: 'CUBE',
  subtitle: 'アウトプットしていくサイト',
  imageOn: []
}
const Home = () => {
  return (
    <Container>
      <Hero {...props} />
    </Container>
  )
}
export default Home

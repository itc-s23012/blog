import Hero from 'components/hero'
const props = { title: 'CUBE', subtitle: 'アウトプットしていくサイト' }
const Home = () => {
  return (
    <>
      <Hero {...props} />
    </>
  )
}
export default Home

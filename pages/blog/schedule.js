import { client } from 'lib/api'

const Schedule = () => {
  return <h1>記事のタイトル</h1>
}

const getStaticProps = async () => {
  const res = await client.get({
    endpoint: 'blogs'
  })
  try {
    console.log(res)
  } catch (err) {
    console.log(err)
  }

  return {
    props: {}
  }
}

export { getStaticProps }
export default Schedule

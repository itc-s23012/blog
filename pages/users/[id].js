import React from 'react'
const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/')
  const data = await res.json()

  const paths = data.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async context => {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json()

  return {
    props: { user: data }
  }
}

const Details = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.id}</p>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.city}</p>
      <p>{user.username}</p>
    </div>
  )
}

export default Details
export { getStaticPaths }
export { getStaticProps }

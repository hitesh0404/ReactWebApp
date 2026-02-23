import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
    <p>in side home</p>
      <Outlet></Outlet>
    </>
  )
}

export default Home
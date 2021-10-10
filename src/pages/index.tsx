import { NavBar } from 'components/nav-bar'

export default function Index() {
  return <NavBar />
}

export const getStaticProps = async () => {
  return {
    props: {}
  }
}

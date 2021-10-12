import { HomeTemplate } from 'templates/Home'

export default function Home() {
  return <HomeTemplate />
}

export const getStaticProps = async () => {
  return {
    props: {}
  }
}

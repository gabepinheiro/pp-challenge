import Button from '@mui/material/Button'
import { styled } from '@mui/system'

const CustomButton = styled(Button)`
  border-radius: 100px;
`

export default function Index() {
  return (
    <>
      <h1>Marvel</h1>
      <CustomButton size="large" variant="contained">
        Custom button
      </CustomButton>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {}
  }
}

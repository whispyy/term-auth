import styled from 'styled-components'
import { Colors, Metrics } from './theme'


const ContainerBox = styled.div`
  max-width: 600px;
  margin: ${Metrics.large}px;
  padding: ${Metrics.large}px;
  border: solid 1px #202637;
  border-radius: ${Metrics.radius.normal}px;
  background-color: #0c162d;
  color: ${Colors.disabled};
`

export default ContainerBox

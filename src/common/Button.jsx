import styled from "styled-components";
import { Colors, Metrics } from "./theme";

const Button = styled.button`
  color: ${Colors.primary};
  background: none;
  border: solid 1px ${Colors.primary};
  border-radius: ${Metrics.radius.normal}px;
  padding: ${Metrics.small}px ${Metrics.medium}px;
`

export default Button

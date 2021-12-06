import Label from './Label'
import Input from './Input'

const Field = ({
  id = 'default',
  label,
  ...props
}) => (
  <div>
    <Label for={id}>{label}</Label>
    <Input id={id} {...props} />
  </div>
)

export default Field

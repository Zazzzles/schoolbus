import Flex from '../../components/flex'
import Text from '../../components/text'

const ExampleRow = ({ title, value, children }) => (
  <Flex m="1em 0" alignItems="center">
    <Flex flexDirection="column" width="30%">
      <Text m="0" fontWeight="bold" color="gray.xdark" width="25%">
        {title}
      </Text>
      <Text m="0" color="gray.default" fontSize="small" width="20%">
        {value}
      </Text>
    </Flex>
    {children}
  </Flex>
)

export default ExampleRow

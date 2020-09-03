import Flex from '../../components/flex'
import Text from '../../components/text'
import ExampleRow from './example-row'

const TextExport = ({ keys, values, keyPrefix, propKey, children }) => {

  return (
    <Flex flexDirection='column' mb='5em'>
      {keys.map(key => (
        <ExampleRow
          key={key}
          title={`${keyPrefix}.${key}`}
          value={values[key]}
        >
          <Text {...{ [propKey]: key }} m='0' maxWidth='70%'>
            {children || 'Mollit nulla qui minim amet laborum do esse esse ullamco veniam eu in laborum.'}
          </Text>
        </ExampleRow>
      ))}
    </Flex>
  )
}

export default TextExport
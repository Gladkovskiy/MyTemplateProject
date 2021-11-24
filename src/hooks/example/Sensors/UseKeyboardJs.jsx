import useKeyboardJs from 'react-use/lib/useKeyboardJs'

const Demo = () => {
  const [isPressed] = useKeyboardJs('a + b')

  return <div>[a + b] pressed: {isPressed ? 'Yes' : 'No'}</div>
}

export default Demo

// требования npm add keyboardjs
// useKeyboardJs(combination: string | string[]): [isPressed: boolean, event?: KeyboardEvent]

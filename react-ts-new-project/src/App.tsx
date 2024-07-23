import Input from './components/Input.tsx'
import Button from './components/Button.tsx'
import Container from './components/Container.tsx'
import Form, { type FormHandle } from './components/Form.tsx'
import { useRef } from 'react'

function App() {

  const customForm = useRef<FormHandle>(null)

  function handleSave(data: unknown) {
    // data is always extracted as a string even if its input type is a number (like age below)
    const extractedData = data as { name: string; age: string}
    console.log(extractedData)
    customForm.current?.clear()
  }

  const input = useRef<HTMLInputElement>(null)

  return (
    <>
    <Container as={Button}>Click Me</Container>
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Your name" type="text" ref={input} />
        <Input id="age" label="Your age" type="number" ref={input} />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
    </>
  )
}

export default App;

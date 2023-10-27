import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'
import Question from './Question';
import ArticleSection from './Article';
import './Selection.css'

function Selection() {
  const [value, setValue] = React.useState('Question')
  return (
    <> 
    <Form>
  <Form.Field>
    <b style={{ fontSize: '18px' }}>Selected value: {value}</b>
  </Form.Field>
  <Form.Field>
    <Checkbox
      radio
      label={<b style={{ fontSize: '16px' }}>Question</b>}
      name='checkboxRadioGroup'
      value='Question'
      checked={value === 'Question'}
      onChange={(e, data) => setValue(data.value)}
    />
  </Form.Field>
  <Form.Field>
    <Checkbox
      radio
      label={<b style={{ fontSize: '16px' }}>Article</b>}
      name='checkboxRadioGroup'
      value='Article'
      checked={value === 'Article'}
      onChange={(e, data) => setValue(data.value)}
    />
  </Form.Field>
</Form>

{value === 'Question' ? (
    <Question />
  ) : (
      <ArticleSection />
      )}
      </>
  )
}

export default Selection;

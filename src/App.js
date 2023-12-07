
import { Container, Row, Col } from 'react-bootstrap'
import FormInput from './components/FormInput';
import QAList from './components/QAList'
import { question } from './data'
import { useState } from 'react';

function App() {
  const [data, setdata] = useState(question)

  const addItem = (newData) => {
    setdata([...newData])
  }
  const deleteAllItem = () => {
    question.splice(0, question.length)
    setdata([])
  }
  const deleteOneItem = (newItems) => {
    setdata([...newItems])
  }
  return (
    <div className="font text-center color-body">
      <Container className="p-5">

        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">اسئله واجوبه شائعه</div>
          </Col>
          <Col sm="8">
            <FormInput data={data} onAdd={addItem} />
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {data.length ? (<button className="btn-color w-100 my-3" onClick={deleteAllItem}>مسح الكل</button>) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default App;


import { Row, Accordion } from 'react-bootstrap';
// import { question } from '../data';
const QAList = ({ data, deleteOneItem }) => {
    const onDeleteItem = (ID) => {
        const index = data.findIndex((item) => item.id === ID)
        data.splice(index, 1)
        // const newData = [...data]
        deleteOneItem(data)
    }
    return (
        <Row>
            {data.map((item, index) => {
                return (
                    <Accordion>
                        <Accordion.Item eventKey={item.id} key={Math.random()}>
                            <Accordion.Header>
                                <div className="m-auto">{item.qa}</div>
                            </Accordion.Header>
                            <Accordion.Body className="text-end">
                                <div className="px-3 d-inline ">{item.an}</div>
                                <button className="btn-color" onClick={() => onDeleteItem(item.id)}>مسح  </button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                )
            })}
        </Row>
    )
}

export default QAList

import React from 'react'
import { Row, Accordion } from 'react-bootstrap';
const QAList = ({ data }) => {
    return (
        <Row>
            {data.map((item, index) => {
                return (
                    <Accordion>
                        <Accordion.Item eventKey={item.id} key={index}>
                            <Accordion.Header>
                                <div className="m-auto">{item.qa}</div>
                            </Accordion.Header>
                            <Accordion.Body className="text-end">
                                <div className="px-3 d-inline ">{item.an}</div>
                                <button className="btn-color">مسح  </button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                )
            })}
        </Row>
    )
}

export default QAList

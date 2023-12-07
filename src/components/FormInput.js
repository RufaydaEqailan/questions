import React, { useState } from 'react'
import { Row, Form, Col } from 'react-bootstrap';

const FormInput = ({ data, onAdd }) => {
    const [qa, setQa] = useState('')
    const [an, setAn] = useState('')

    const addNewItem = () => {
        console.log(data)
        const newItem = { id: Math.random(), qa: qa, an: an };
        data.push(newItem);
        // const newData = [...data];
        // const newData = [...data, newItem];
        setQa('')
        setAn('')
        onAdd(data);
        // data.push({ id: Math.random(), qa: qa, an: an })


        // onAdd()
    }
    return (
        <Row className="my-3">
            <Col sm="5">
                <Form.Control type="text" placeholder="ادخل السوال" onChange={(e) => { setQa(e.target.value) }} value={qa} />
            </Col>

            <Col sm="5">
                <Form.Control type="text" placeholder="ادخل الاجابه" onChange={(e) => { setAn(e.target.value) }} value={an} />
            </Col>
            <Col sm="2">
                <button className="btn-color w-100" type="submit" onClick={addNewItem}>
                    اضافة
                </button>
            </Col>
        </Row>
    )
}

export default FormInput

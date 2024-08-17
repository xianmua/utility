import {Row, Col, Input} from 'antd'

const {TextArea} = Input
export default function JsonFormat () {

    return (
        <Row style={{height: '100vh'}}>
            <Col span={10}>
                <TextArea  />
            </Col>
            <Col span={2}></Col>
            <Col>hello</Col>
        </Row>
    )
}
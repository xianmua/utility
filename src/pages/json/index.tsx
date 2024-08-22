import { useCallback, useEffect, useState } from 'react'
import { Row, Col, Input, Button, Space } from 'antd'
import JSONPretty from 'react-json-pretty'
import 'react-json-pretty/themes/monikai.css'
import '@/pages/styles.css'

const { TextArea } = Input

export default function JsonUtils() {
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<string>()

  const handleInput = useCallback((e: any) => {
    setInput(e?.target?.value || '')
  }, [])

  const handleCheck = useCallback(() => {
    let flag = false
    try {
      JSON.parse(input)
      flag = true
    } catch {
      flag = false
    }
    setOutput(flag ? 'JSON校验通过' : 'JSON校验不通过')
  }, [input])

  useEffect(() => {
    if (!input) {
      setOutput('')
    } else {
      handleCheck()
    }
  }, [input, handleCheck])

  return (
    <Row style={{ height: '100%', padding: 20 }}>
      <Col span={10}>
        <TextArea rows={20} onChange={handleInput} allowClear />
      </Col>
      <Col span={2}>
        <Space direction="vertical" size="small">
          <Button onClick={handleCheck} style={{ width: '100%' }}>
            格式化检验{'>>'}
          </Button>
        </Space>
      </Col>
      <Col span={11} style={{ backgroundColor: '#e3e9f2', padding: 10 }}>
        {output}
        <JSONPretty data={input} />
      </Col>
    </Row>
  )
}

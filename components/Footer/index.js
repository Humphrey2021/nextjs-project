import { Layout, Row, Col } from 'antd'

const { Footer } = Layout

export default function MyFooter() {
  return (
    <Footer>
      <Row>
        <Col span={6}>sadf</Col>
        <Col span={18}>sadf</Col>
      </Row>
      <Row justify='center'>
        <Col>CopyrightÂ© 2015-2021 LBank. All Right Reserved.</Col>
      </Row>
    </Footer>
  )
}

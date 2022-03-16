import { Layout, Button } from 'antd'

const { Footer } = Layout

export default function MyFooter() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <div>Ant Design ©2018 Created by Ant UED</div>
      <Button>按钮</Button>
    </Footer>
  )
}

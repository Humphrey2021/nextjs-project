// import styles from './index.module.less'
import { Layout } from 'antd'

const { Header } = Layout
export default function MyHeader() {
  return (
    <>
      <Header className='site-layout-sub-header-background' style={{ padding: 0 }} />
    </>
  )
}

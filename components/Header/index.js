import { Layout } from 'antd'
// import styles from './index.module.less'

const { Header } = Layout
export default function MyHeader() {
  return (
    <>
      <Header className='site-layout-sub-header-background' style={{ padding: 0 }} />
    </>
  )
}

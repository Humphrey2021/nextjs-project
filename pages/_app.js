import { ConfigProvider, Layout } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import MyHead from '../components/myHead'
import GolbalHeader from '../components/Header'
import GolbalFooter from '../components/Footer'
import 'moment/locale/zh-cn'
import '../styles/globals.less'
import 'antd/dist/antd.less'
const { Content } = Layout
moment.locale('zh-cn')

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider locale={zhCN}>
      <MyHead />
      <Layout>
        <GolbalHeader />
        <Content>
          <Component {...pageProps} />
        </Content>
        <GolbalFooter />
      </Layout>
    </ConfigProvider>
  )
}

export default MyApp

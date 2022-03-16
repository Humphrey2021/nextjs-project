import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import MyHead from '../components/myHead'
import GolbalHeader from '../components/Header'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.less'
import '../styles/globals.less'

moment.locale('zh-cn')

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider locale={zhCN}>
      <MyHead />
      <>
        <GolbalHeader />
        <Component {...pageProps} />
      </>
    </ConfigProvider>
  )
}

export default MyApp

import { useRoutes } from 'react-router-dom'
import routes from './router'
import { BackTop } from 'antd'

import AppHeader from '@/components/header'
import AppFooter from '@/components/footer'
function App() {
  const style: React.CSSProperties = {
    height: 40,
    width: 80,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#ff385c',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  }
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <div className="main">{useRoutes(routes)}</div>
      <BackTop>
        <div style={style}>返回顶部</div>
      </BackTop>
      <AppFooter></AppFooter>
    </div>
  )
}

export default App

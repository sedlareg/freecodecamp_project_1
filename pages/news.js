import { Layout, Title } from '../components'

export default () =>
  <Layout title='News' description='all news' headerType='interior'>
    <main id='news'>
      <Title title='News' imgPath='/static/new/news-title.jpg' />
      <div style={{ height: '700px' }}>News</div>
    </main>
  </Layout>

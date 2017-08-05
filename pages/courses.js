import { Layout, Title } from '../components'

export default () =>
  <Layout title='Courses' description='all Courses' headerType='interior'>
    <main id='courses'>
      <Title title='Courses' imgPath='/static/new/courses-title.jpg' />
      <div style={{ height: '700px' }}>Courses</div>
    </main>
  </Layout>

import Head from 'next/head'

export default ({ title, description }) =>
  <div>
    <Head>
      <meta charset='utf-8' />
      <title dangerouslySetInnerHTML={{ __html: title }} />
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      {/* <link rel='shortcut icon' href='/static/favicon.ico' /> */}
      <link
        href='https://fonts.googleapis.com/css?family=Josefin+Sans'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
        rel='stylesheet'
      />
      <link href='/static/css/materialize.css' rel='stylesheet' />
      <link href='/static/css/style.css' rel='stylesheet' />
    </Head>
  </div>

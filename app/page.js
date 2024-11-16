import Link from "next/link"

async function fetchData(){
  const res = await fetch('https://jsonplaceholder.org/posts')
  const result = await res.json()
  return result
}

export default async function Home() {
  const posts = await fetchData()
  console.log(posts)

  return (
    <div className="main_page">
      <h1 className="main_title">Main page</h1>
      <p className="main_posts">
        {posts.map(el => (
          <div key={el.id} className="post">
            <Link className="el_title" href={'/post/' + el.id}>{el.title}</Link>
            <h3 className="el_content">{el.content}</h3>
            <Link href={el.url}></Link>
            <a className="el_url">{el.url}</a>
            <p className="el_date">{el.publishedAt}</p>
          </div>
        ))}</p>
    </div>
  )
}

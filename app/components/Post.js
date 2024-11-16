import Link from "next/link"

export const Post = ({post}) => {
  return (
    <div>
        <Link href="/">Back</Link>
        <br></br>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <strong>Post id: {post.id}</strong>
    </div>
  )
}

export default Post

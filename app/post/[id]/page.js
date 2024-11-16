import Post from '@/app/components/Post'

async function fetchDataId(id){
    const res = await fetch('https://jsonplaceholder.org/posts/' + id)
    const result = await res.json()
    return result
}

const PagePost = async ({params: {id}}) => {
    const post = await fetchDataId(id)

    return (
        <div className="post">
            <Post post={post}/>
        </div>
    )
}

export default PagePost
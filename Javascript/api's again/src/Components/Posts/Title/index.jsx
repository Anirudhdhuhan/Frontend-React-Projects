export default function Title({post}){
    return(<>
     <p className="text-2xl mb-5 text-silver-900">{post.id} {post.title}</p>
    </>)
}
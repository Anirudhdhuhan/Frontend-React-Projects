export default function Tags({post}){
    return(<>
    <p className="bg-gray-400/50 font-bold rounded-xl pt-3 px-2 w-fit">Tags:- {post.tags}</p>
    </>)
}
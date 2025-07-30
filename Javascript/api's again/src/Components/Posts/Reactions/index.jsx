export default function Reactions({post}){
    return(<div>
    
    <p className="">Likes:- {post.reactions.likes}</p>
    <p className="">Dislikes:- {post.reactions.dislikes}</p>

    
    </div>)
}
import { useState } from "react"

interface IPost{
    title: string;
    description: string;
    image: string;
    author: string
}

let liked = false

export function Post(props: IPost){
    const [likes, setLikes] = useState(0);
    function incrementLikes() {
        if (liked == false) {
            setLikes(likes+1);
            liked = true;
        } else if (liked == true) {
            setLikes(likes-1);
            liked = false;
        }
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt="" />
            <p>Автор: {props.author}</p>
            <p>Лайки: {likes}</p>
            <button onClick={incrementLikes}>👍</button>
        </div>
    )
}
type cardData ={
    data: {
        title: string;
        description: string;
        img: string;
    }
}
const cardElment:React.FC<cardData> = (props) => {
    return (
            <div className="card" >
                <img src={props.data.img} alt="" />
                <h4>{props.data.title}</h4>
                <p>{props.data.description}</p>
            </div>
    )
}

export default cardElment

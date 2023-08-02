import { data } from "../data"
import dot from "../assets/images/icon-list.svg"
import  "./Section.css"
export default function Section(){
    const listOfInfo = data.map(item=>(
        <div className="list" key={item.id}>
            <div className="dot"><img src={dot} alt="dot" /></div>
            <div className="list">{item.msg}</div>
        </div>
    ))
    return(
        <section>
            <h2>Stay updated!</h2>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            {listOfInfo}
        </section>
    )
    
}
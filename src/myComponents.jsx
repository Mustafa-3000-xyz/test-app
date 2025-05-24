import axios from "axios";
import { useEffect, useState } from "react"
// ============================================================== //
export function Section() {
    let [data, setData] = useState([]);
    useEffect(function () {
        async function fetch() {
            let res = await axios.get('https://dummyjson.com/recipes');
            let data = res.data.recipes;
            setData(data);
        }
        fetch();
    }, []);

    return <section>
        <h2>Hello world</h2>

        {
            data.map(function (ele) {
                return <div key={ele.id} className="card" style={{width: "width: 18rem"}}>
                    <img src={ele.image} alt="" className="card-img-top"/>
                        <div className="card-body">
                            <p className="card-text">
                                {ele.name}
                            </p>
                        </div>
                </div>
            })
        }
    </section>
}
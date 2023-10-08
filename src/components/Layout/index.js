import './style.css'

import { Post } from '../Post'

export function Layout() {

    return (
        <>

            <div className="MainGrid" >

                <div className="first-column" style={{gridArea: "firstColumn"}}>



                    <div className="box" style={{margin: "30px 0"}} >
                        <Post />
                    </div>
                </div>


            </div>
            
        </>
    )

}
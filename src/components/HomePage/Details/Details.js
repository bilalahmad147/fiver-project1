import React from 'react'
import style from './details.module.css'
import DetailCard from './Card/DetailCard'
import RefineSearch from './RefineSearch/RefineSearch'

function Details() {
    return(
        <div className={style.div1}>
            <div className={style.child1}>
                <RefineSearch />
            </div>
            <div className={style.child2}>
                <DetailCard />
            </div>
        </div>
    )
}

export default Details
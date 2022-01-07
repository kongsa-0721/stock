import React from 'react'
import { Iusers } from './index'

interface Iprops {
    item: Iusers,
    callback: (item: Iusers) => void
}
const Delete = (props: Iprops) => {
    const { item, callback } = props;
    const ondelete = (item: Iusers) => {
        callback(item)
    }
    return (
        <div>
            {item.id}
            <button onClick={() => { ondelete(item) }}>删除</button>
        </div>
    )
}

export default Delete

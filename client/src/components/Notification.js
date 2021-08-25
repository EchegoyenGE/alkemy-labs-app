import React from 'react'

const Notification = ({ message }) => {

    if(!message.text) return null

    return (
        <div className={message.type === true ? 'successNotification' : 'errorNotification'}>
            {message.text}
        </div>
    )
}

export default Notification
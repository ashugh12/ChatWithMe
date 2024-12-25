
const Message = () => {
    return (
        <div className="text-white chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt=" avatar" />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-indigo-700`}>Hi! what's upp?</div>

            <div className="chat-footer text-xs opacity-50 flex gap-1 items-center">12:42</div>
        </div>
    )
}

export default Message

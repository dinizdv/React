import './modal.css'

export default function({ content, close }){
    return(
        <div className="modal">
            <div className="container-profile">
                <button className="close" onClick={close}>
                <i class="fa-solid fa-x"></i>
                </button>

                <main>
                    <h2>Call {content.client} details</h2>
                    <div className="row">
                        <span>
                            Client: <i className='i-modal'>{content.client}</i>
                        </span>
                    </div>

                    <div className="row">
                        <span>
                            Subject: <i className='i-modal'>{content.subject}</i>
                        </span>
                    </div>

                    <div className="row">
                    <span>
                            Registration: <i className='i-modal'>{content.createdFormat}</i>
                        </span>
                    </div>

                    <div className="row">
                        <span>
                            Status: <i className='i-modal status-modal' style={{backgroundColor: content.status === 'Opened' ? '#00b570' : '#9b9b9b'}}>{content.status}</i>
                        </span>
                    </div>

                    {/* if it has complement */}
                    {content.complement !== '' && (
                        <div className="row">
                        <span>
                            Complement: <i className='i-modal i-complement'>{content.complement}</i>
                        </span>
                    </div>
                    )}

                </main>
                </div>
        </div>
    )
}
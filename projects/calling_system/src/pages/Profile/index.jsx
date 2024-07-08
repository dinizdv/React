import { useContext, useState } from "react"
import Header from "../../components/Header"
import Title from "../../components/Title"
import userAvatar from '../../assets/userAvatar.png'
import { AuthContext } from "../../contexts/auth"
import './profile.css'

export default function Profile(){
    const { user } = useContext(AuthContext)
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl) // photo or null

    return(
        <div>
            <Header/>

            <div className="content">
                <Title name="My profile">
                    <i class="fa-solid fa-gear"></i>
                </Title>

            <div className="container-profile">
                <form className="form-profile">
                    <label className="container-img-profile">
                    <span className="icon-upload">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    </span>
                    <input type="file" accept="image/*" />
                    {avatarUrl === null ? (
                        <img src={userAvatar} alt="Profile photo" width={250} height={240}/>
                    ) : (
                        <img src={avatarUrl} alt="Profile photo" width={250} height={240}/>
                    )}

</label>

<label>Nome</label>
<input type="text" placeholder="Your name" />

<label>Email</label>
<input type="email" placeholder="teste@gmail.com" disabled={true} />

<button type="submit" className="btn-save">Save data</button>
                </form>
            </div>

            <button className="logout-btn">Logout</button>

            {/* <div className="container-profile">
                <button className="logout-btn">Logout</button>
            </div> */}
            </div>

        </div>
    )
}
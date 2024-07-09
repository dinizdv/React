import { useContext, useState } from "react"
import Header from "../../components/Header"
import Title from "../../components/Title"
import userAvatar from '../../assets/userAvatar.png'
import { AuthContext } from "../../contexts/auth"
import './profile.css'
import { toast } from "react-toastify"
import { db, storage } from "../../services/firebaseConnection"
import { doc, updateDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage'

export default function Profile(){
    const { user, storageUser, setUser, logout } = useContext(AuthContext)
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl) // photo or null
    const [newImage, setNewImage] = useState(null)
    const [name, setName] = useState(user && user.name)
    const [email, setEmail] = useState(user && user.email)

    function handleFile(e){
        if(e.target.files[0]){
            const image = e.target.files[0]

            if(image.type === 'image/jpeg' || image.type === 'image/png'){
                setNewImage(image)
                setAvatarUrl(URL.createObjectURL(image))
            } else {
                toast.info('Upload a PNG or JPEG image!')
                setNewImage(null)
                return
            }
        }
    }

    async function handleUpload(){
        const currentUid = user.uid
        const uploadRef = ref(storage, `images/${currentUid}/${newImage.name}`) // firebase: folder/folder/photoName
        const uploadTask = uploadBytes(uploadRef, newImage)
        .then((snapshot) => {
            getDownloadURL(snapshot.ref).then( async (downloadUrl) => {
                let photoUrl = downloadUrl
                const docRef = doc(db, "users", user.uid)
                await updateDoc(docRef, {
                    avatarUrl: photoUrl,
                    name: name
                })
                .then(() => {
                    let data = {
                        ...user,
                        name: name,
                        avatarUrl: photoUrl
                    }
                    setUser(data)
                    storageUser(data)
                    toast.success(`User ${data.name} successfully updated!`)
                })
            })
        })
    }

    async function handleSubmit(e){
        e.preventDefault()
        if (newImage === null && name !== ''){
            const docRef = doc(db, "users", user.uid)
            await updateDoc(docRef, {
                name: name
            })
            .then(() => {
                let data = {
                    ...user,
                    name: name
                }

                setUser(data) // to firebase
                storageUser(data) // to localStorage
                toast.success(`User ${data.name} successfully updated!`)
            })
        } else if(newImage!== null && name !== ''){
            handleUpload()
        }
    }

    return(
        <div>
            <Header/>

            <div className="content">
                <Title name="My profile">
                    <i class="fa-solid fa-gear"></i>
                </Title>

            <div className="container-profile">
                <form className="form-profile" onSubmit={handleSubmit}>
                    <label className="container-img-profile">
                    <span className="icon-upload">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    </span>
                    <input type="file" accept="image/*" onChange={handleFile}/>
                    {avatarUrl === null ? (
                        <img src={userAvatar} className="img-myProfile" alt="Profile photo"/>
                    ) : (
                        <img src={avatarUrl} className="img-myProfile" alt="Profile photo"/>
                    )}

</label>

<label>Name</label>
<input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

<label>Email</label>
<input type="email" value={email} disabled={true} />

<button type="submit" className="btn-save">Save data</button>
                </form>
            </div>

            <button className="logout-btn" onClick={() => logout()}>Logout</button>

            {/* <div className="container-profile">
                <button className="logout-btn">Logout</button>
            </div> */}
            </div>

        </div>
    )
}
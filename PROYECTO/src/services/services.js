import firebase from "../config/firebase"

export async function getAllProductos(){
    const querySnapshot = await firebase.db.collection("productos")
    .get()

    return querySnapshot.docs
}

export async function userRegister({...data}){
    return await firebase.auth.createUserWithEmailAndPassword(data.email, data.password)
}

export async function createUser({...data}, responseUser){
    return firebase.db.collection("usuarios")
    .add({
        nombre: data.name,
        apellido: data.lastname,
        uid: responseUser.user.uid
    })
}

export async function userAuth({...data}){
    return await firebase.auth.signInWithEmailAndPassword(data.email, data.password)
}

export async function authentication(responseUser){
    return await firebase.db.collection("usuarios")
    .where("uid", "==", responseUser.user.uid)
    .get()
}

export async function createProduct(data){
    return await firebase.db.collection("productos")
    .add(data)
}

export async function getByIdProductos(id){
    return await firebase.db.doc("productos/"+id)
    .get()
}

export async function setByIdProductos(id, data){
    return await firebase.db.doc("productos/"+id)
    .set(data)
}

export async function deleteByIdProductos(id){
    return await firebase.db.doc("productos/"+id)
    .delete()
}
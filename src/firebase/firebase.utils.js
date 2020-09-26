import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyD_y8loznUuaKya6oq1OLwq1KhcG44VKC4",
    authDomain: "globalbuybd-auth.firebaseapp.com",
    databaseURL: "https://globalbuybd-auth.firebaseio.com",
    projectId: "globalbuybd-auth",
    storageBucket: "globalbuybd-auth.appspot.com",
    messagingSenderId: "676138681404",
    appId: "1:676138681404:web:3267a9d87604d4309f6f39",
    measurementId: "G-35EHNYN8E9"
  };
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();



export const createAdminProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const adminRef = firestore.doc(`admins/${userAuth.uid}`);

  const snapShot = await adminRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await adminRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return adminRef;
};

export const uploadImage = async (file) =>{
  const imageRef = storage.ref(`products/${file.name}`)
 
  await imageRef.put(file)
  var imgUrl = []
  await imageRef.getDownloadURL().then((url)=>{
      imgUrl.push(url)
    })
  // var uploadTask = imageRef.put(file)
  // uploadTask.on('state_changed',
  // (snapShot)=>{
  //   var progress = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
  //   // alert(`upload is ${progress}% done`)
  // },
  // (error)=>{
  //   alert(error)
  // },
  // ()=>{
  //   // alert('successfully uploaded the file')
  //   imageRef.getDownloadURL().then((url)=>{
  //     imgUrl.push(url)
  //     console.log(imgUrl[0])
  //   }).catch((error)=>alert(error))
  // })
  
  return imgUrl[0] 
}
export const uploadProduct =async(productObj)=>{
  const productRef = firestore.doc(`products/${productObj.product_code}`)
  const snapShot =await productRef.get()
  delete productObj.file
  if (!snapShot.exists) {
    try{
      productRef.set(
        productObj
      )
    }catch(error){
      alert(error)
    }
   
  }
  else{
    alert('there is already a product with this given prodcut_code, please change the product code')
  }
}

export const getAllProducts = async()=>{
  const productsCollectionRef = firestore.collection('products')
  try{
    const products =await productsCollectionRef.get()
    const productsArray = []
    products.forEach((doc)=>{
      console.log(doc.id, " => ", doc.data())
      productsArray.push(doc.data())
    })
    return productsArray;
  }catch(error){
    alert(error)
  }
}
export const updateProduct = async (productObj) =>{
  const productRef = firestore.doc(`products/${productObj.product_code}`)
  try{
    delete productObj.file
    await productRef.update(productObj)
  }catch(error){
    alert(error)
  }
}
export const deleteProduct = async(id)=>{
  const productRef = firestore.doc(`products/${id}`)
  try{
    await productRef.delete()
  }catch(error){
    alert(error)
  }
}
export const getSingleProduct = async (id) =>{
  const productRef = firestore.doc(`products/${id}`)
  try {
    const product = await productRef.get()
    return product
  }catch(error){
    alert(error)
  }
}
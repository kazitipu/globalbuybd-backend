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
    const { name, email } = userAuth;
    const createdAt = new Date();
    try {
      await adminRef.set({
        name,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating admin", error.message);
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
export const uploadProduct =async(productObj,discount)=>{
  const productRef = firestore.doc(`products/${productObj.id}`)
  const snapShot =await productRef.get()
  delete productObj.file
  const newProductObj ={...productObj, new:productObj.new ==='true'?true:false, sale:productObj.sale ==='true'?true:false}
  if (!snapShot.exists) {
    try{
      productRef.set({
        ...newProductObj, discount:discount
      }
      )
    }catch(error){
      alert(error)
    }
   
  }
  else{
    alert('there is already a product with this given prodcut Id, please change the product Id and upload again')
  }
}
export const uploadAliProduct =async(productObj)=>{
  const productRef = firestore.doc(`aliproducts/${productObj.productId}`)
  const snapShot =await productRef.get()
  const newProductObj ={...productObj}
  if (!snapShot.exists) {
    try{
      productRef.set({
        ...newProductObj
      }
      )
    }catch(error){
      alert(error)
    }
   
  }
  else{
    alert('this product is already added to your website. try adding different product')
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
export const getAllAliProducts = async()=>{
  const aliProductsCollectionRef = firestore.collection('aliproducts')
  try{
    const products =await aliProductsCollectionRef.get()
    const aliProductsArray = []
    products.forEach((doc)=>{
      console.log(doc.id, " => ", doc.data())
      var originalPrice =[]
      if (doc.data().originalPrice.min == doc.data().originalPrice.max){
        originalPrice.push(Math.round(doc.data().originalPrice.min * 90))
      } else{
        originalPrice.push(`${Math.round(doc.data().originalPrice.min * 90)}- ${Math.round(doc.data().originalPrice.max * 90)}`)
      }
      var salePrice =[]
      if (doc.data().salePrice.min == doc.data().salePrice.max){
        salePrice.push(Math.round(doc.data().salePrice.min * 90))
      } else{
        salePrice.push(`${Math.round(doc.data().salePrice.min * 90)}- ${Math.round(doc.data().salePrice.max * 90)}`)
      }
      const newObj ={
          id:doc.data().productId,
          name:doc.data().title,
          price: originalPrice[0],
          salePrice:salePrice[0],
          pictures:[...doc.data().images],
          availability:doc.data().availability,
          rating:doc.data().ratings.averageStar,
          categoryId: doc.data().categoryId,
          description: doc.data().description,
          specs: doc.data().specs,
          feedback: doc.data().feedback,
          orders: doc.data().orders,
          totalAvailableQuantity: doc.data().totalAvailableQuantity,
          variants: doc.data().variants
      }
      aliProductsArray.push(newObj)
      originalPrice=[]
      salePrice=[]
    })
    return aliProductsArray;
  }catch(error){
    alert(error)
  }
}
export const updateProduct = async (productObj,discount) =>{
  const productRef = firestore.doc(`products/${productObj.id}`)
    const product = await productRef.get()
    if (!product.exists){
      const aliProductRef = firestore.doc(`aliproducts/${productObj.id}`)
      try{
        const aliProductSnapShot = await aliProductRef.get()
        await aliProductRef.update({...aliProductSnapShot.data(),...productObj,discount})
      }catch(error){
        alert(error)
      }
     
    }else{
      try{
        delete productObj.file
        await productRef.update({...productObj,discount})
      }catch(error){
        alert(error)
      }

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
    if (!product.exists){
      const aliProductRef = firestore.doc(`aliproducts/${id}`)
      try{
        const aliProduct = await aliProductRef.get()
      var originalPrice =[]
      if (aliProduct.data().originalPrice.min == aliProduct.data().originalPrice.max){
        originalPrice.push(Math.round(aliProduct.data().originalPrice.min * 90))
      } else{
        originalPrice.push(`${Math.round(aliProduct.data().originalPrice.min * 90)}- ${Math.round(aliProduct.data().originalPrice.max * 90)}`)
      }
      var salePrice =[]
      if (aliProduct.data().salePrice.min == aliProduct.data().salePrice.max){
        salePrice.push(Math.round(aliProduct.data().salePrice.min * 90))
      } else{
        salePrice.push(`${Math.round(aliProduct.data().salePrice.min * 90)}- ${Math.round(aliProduct.data().salePrice.max * 90)}`)
      }
        const aliProductObj ={
          id:aliProduct.data().productId,
          name:aliProduct.data().title,
          price: originalPrice[0],
          salePrice:salePrice[0],
          pictures:[...aliProduct.data().images],
          availability:aliProduct.data().availability,
          rating:aliProduct.data().ratings.averageStar,
          categoryId: aliProduct.data().categoryId,
          description: aliProduct.data().description,
          specs: aliProduct.data().specs,
          feedback: aliProduct.data().feedback,
          orders: aliProduct.data().orders,
          totalAvailableQuantity: aliProduct.data().totalAvailableQuantity,
          variants: aliProduct.data().variants
        }
        return aliProductObj
      }catch(error){
        alert(error)
      }

    }else{
      return product.data()
    }
   
  }catch(error){
    alert(error)
  }
}

// get all users 

export const getAllUsers = async()=>{
  const usersCollectionRef = firestore.collection('users')
  try{
    const users =await usersCollectionRef.get()
    const usersArray = []
    users.forEach((doc)=>{
      console.log(doc.id, " => ", doc.data())
      usersArray.push({uid:doc.id, ...doc.data()})
    })
    return usersArray;
  }catch(error){
    alert(error)
  }
}

export const deleteUser = async(id)=>{
  const productRef = firestore.doc(`users/${id}`)
  try{
    await productRef.delete()
  }catch(error){
    alert(error)
  }
}
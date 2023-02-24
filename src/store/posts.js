// import { reactive } from "vue";
import { v4 as uuid } from "uuid";
// import { getDatabase, ref as databaseRef, set } from "firebase/database";
import { uploadBytes, ref as storageRef } from "firebase/storage";
import { storage } from "../firebase";

// state
// const state = reactive({
//   currencies: {
//     data: [],
//     isLoading: false,
//   },
//   currencyIntegrations: {
//     data: [],
//     isLoading: false,
//   },
//   favoriteCurrencies: {
//     my: [],
//     default: [],
//   },
// });

// actions

async function uploadFiles(files) {
  if (!files || !files.length) return;
  const filesArray = Array.from(files).map((file) => ({ name: uuid(), file }));

  for (const file of filesArray) {
    const imageRef = storageRef(storage, `images/${file.name}`);
    await uploadBytes(imageRef, file.file);
  }

  return filesArray.map((item) => item.name);
}
// async function fetchCurrencies(userId, name, email, imageUrl) {
//   function writeUserData(userId, name, email, imageUrl) {
//     const db = getDatabase();
//     set(databaseRef(db, "users/" + userId), {
//       username: name,
//       email: email,
//       profile_picture: imageUrl,
//     });
//   }
// }

export { uploadFiles };

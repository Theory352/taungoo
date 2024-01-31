import { db } from "../firebase/Firebase";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  const postColloctionRef = collection(db, "posts");

  const onPost = async (newPost) => {
    if (newPost != "") {
      await addDoc(postColloctionRef, {
        subject: newPost,
      });
    } else {
      alert("should fill");
    }
  };

  // Real time collect from db
  useEffect(() => {
    onSnapshot(postColloctionRef, (snapshot) => {
      setPost(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <PostContext.Provider value={{ onPost, post }}>
      {children}
    </PostContext.Provider>
  );
};

export const Post = () => {
  return useContext(PostContext);
};

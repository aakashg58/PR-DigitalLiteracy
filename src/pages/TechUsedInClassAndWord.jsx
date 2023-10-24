import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import TechUsedInClassAndWordIntro from "../Layouts/Main/TechUsedInClassAndWord/TechUsedInClassAndWordIntro";
import YouTubeVideoSection from "../Layouts/Main/TechInDailyLife/YouTubeVideoSection";
import { db } from "../firebase/firebase";

function TechUsedInClassAndWord() {
  const navigate = useNavigate();
  const [osvalue, setosValue] = useState("");
  const [dataFromFirebase, setDatafromFirebase] = useState([]);
  const docRef = collection(db, "youtube-videos");

  useEffect(() => {
    console.log("useEffect 1");
    const unsubscribe = onSnapshot(docRef, (querySnapshot) => {
      const videos = querySnapshot.docs.map((doc) => doc.data());
      setDatafromFirebase(Object.values(videos));
    });

    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  const dataFromClassAndWordIntro = (osvalue) => {
    setosValue(osvalue);
  };

  useEffect(() => {
    navigate("/techInClassAndWord");
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <TechUsedInClassAndWordIntro
        dataFromClassAndWordIntro={dataFromClassAndWordIntro}
        dataFromFirebase={dataFromFirebase}
      />
      <YouTubeVideoSection osvalue={osvalue} />
      <Footer />
    </div>
  );
}

export default TechUsedInClassAndWord;

import { Snippet } from "@next/font/google";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { Community, CommunityState } from "../atoms/communitiesAtom";
import { auth, firestore } from "../firebase/clientApp";

const useCommunityData = () => {
    const [user] = useAuthState(auth);
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(CommunityState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

  const onJoinOrLeaveCommunity = (
    communityData: Community,
    isJoined: boolean
  ) => {
    // is the user singed in ?
    //if not => open auth modal

    if (isJoined) {
      leaveCommunity(communityData.id);
      return;
    }
    joinCommunity(communityData);
  };

  const getMySnippets = async () => {
    try {
        //get snippets
        const snippetDocs = await getDocs(collection(firestore, `users/${user?.uid}/communitySnippets`))

        const snippets = snippetDocs.docs.map((doc) => ({...doc.data() }))
        console.log('here are snippets', snippets);

    } catch (error){
        console.log('getMySnippets error', error);
    }
  }
  const joinCommunity = (communityData: Community) => {};
  const leaveCommunity = (communityId: string) => {};

  useEffect(() => {
    if(!user) return;
    getMySnippets();
  }, [user]);
  
  return {
    communityStateValue,
    onJoinOrLeaveCommunity
  };
};
export default useCommunityData;

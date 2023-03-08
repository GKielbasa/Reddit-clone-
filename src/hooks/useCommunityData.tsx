import { Snippet } from "@next/font/google";
import { collection, doc, getDocs, increment, writeBatch } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { Community, CommunitySnippet, CommunityState } from "../atoms/communitiesAtom";
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
        setCommunityStateValue((prev) => ({
          ...prev,
          mySnippets: snippets as CommunitySnippet[],
        }));

    } catch (error: any){
        console.log('getMySnippets error', error);
        setError(error.message);
    }
    setLoading(false);
  };

  const joinCommunity = async (communityData: Community) => {
    // batchWrite do bazyDanych
    //update the numberOfMembers (+1)
    try {
      const batch = writeBatch(firestore);

      //create new community snippet
      const newSnippet: CommunitySnippet = {
        communityId: communityData.id,
        imageURL: communityData.imageURL || "",
      };
      batch.set(
        doc(
          firestore,
          `users/${user?.uid}/communitySnippets`,
          communityData.id
        ),
        newSnippet
      );
      batch.update(doc(firestore, "communities", communityData.id), {
        numberOfMembers: increment(1),
      });
      await batch.commit();
      // update recoil state - communityState.mySnippets
      setCommunityStateValue((prev) => ({
        ...prev,
        mySnippets: [...prev.mySnippets, newSnippet],
      }));
    } catch (error: any) {
      console.log("joinCommunity error", error);
      setError(error.messege);
    }


  };

  const leaveCommunity = (communityId: string) => {
        // batchWrite do bazyDanych
     //delete new community snippet from user
     //update the numberOfMembers (-1)

    // update recoil state - communityState.mySnippets
  };

  useEffect(() => {
    if(!user) return;
    getMySnippets();
  }, [user]);
  
  return {
    communityStateValue,
    onJoinOrLeaveCommunity,
    loading,
  };
};
export default useCommunityData;

import { Community } from "@/src/atoms/communitiesAtom";
import { firestore } from "@/src/firebase/clientApp";
import { doc } from "@firebase/firestore";
import { getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React from "react";
import safeJsonStringify from "safe-json-stringify";

type CommunityPageProps = {
  communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
  return <div>WELCOME TO {communityData.id}</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // get community data and pass it to client
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocRef);

    //Next.js ma problem z serializacją timestamp który mamy w typie community należy wgrac packet save JSON stringify?

    return {
      props: {
        // communityData: communityDoc.data(), -> to rozwiazanie  nie zadziała Next.js ma problem z serializacją timestamp który mamy w typie community należy wgrac packet save JSON stringify?

        communityData: JSON.parse(
          safeJsonStringify({ id: communityDoc.id, ...communityDoc.data })
        ),
      },
    };
  } catch (error) {
    // dodac jakis error page
    console.log("getServerSideProps error", error);
  }
}

export default CommunityPage;

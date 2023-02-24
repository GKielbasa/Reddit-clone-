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

export default CommunityPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log("GET SERVER SIDE PROPS RUNNING");

  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.community as string
    );
    const communityDoc = await getDoc(communityDocRef);
    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() }) // needed for dates
            )
          : "",
      },
    };
  } catch (error) {
    // Could create error page here
    console.log("getServerSideProps error - [community]", error);
  }
}

                //znaleźć pod spodem bład !!!!!!!!!!!!!!!

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   // get community data and pass it to client
//   try {
//     const communityDocRef = doc(
//       firestore,
//       "communities",
//       context.query.communityId as string
//     );
//     const communityDoc = await getDoc(communityDocRef);

//     //Next.js ma problem z serializacją timestamp który mamy w typie community należy wgrac packet save JSON stringify?

//     return {
//       props: {
//         communityData: communityDoc.exists()
//           ? JSON.parse(
//               safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() }) // needed for dates
//             )
//           : "",
//       },
//     };
//   } catch (error) {
//     // Could create error page here
//     console.log("getServerSideProps error - [community]", error);
//   }
// }



import { atom } from "recoil";
import { FieldValue, Timestamp } from "firebase/firestore";

export interface Community {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: "public" | "restrictied" | "private";
  createdAt?: Timestamp;
  imageURL?: string;
}

export interface CommunitySnippet {
  communityId: string;
  isModerator?: boolean;
  imageURL?: string;
}
interface CommunityState {
  mySnippets: CommunitySnippet[];
  //visitedCommunity
}
const defaultCommunityState: CommunityState = {
  mySnippets: [],
};

export const CommunityState = atom<CommunityState>({
  key: 'communitiesState',
  default: defaultCommunityState,
});
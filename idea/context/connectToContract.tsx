import { createContext, useContext } from 'react';

import { ApiPromise } from "@polkadot/api";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import type { PostType } from "../../hooks/postFunction";
import type { ProfileType } from "../../hooks/profileFunction";

import useLocalStorage from '../hooks/useLocalStorage';

export const ConnectToContract = createContext<Any>();

export function useContractContext() {
  return useContext(ConnectToContract);
};

export function ContractProvider({ children }: { children: any; }) {
  const [api, setApi] = useLocalStorage<ApiPromise>();

  const [isCreatedProfile, setIsCreatedProfile] = useLocalStorage<Boolean>(true);
  const [isCreatedFnRun, setIsCreatedFnRun] = useLocalStorage<Boolean>(false);
  const [showNewPostModal, setShowNewPostModal] = useLocalStorage<Boolean>(false);
  const [isSetup, setIsSetup] = useLocalStorage<Boolean>(false);
  const [isDistributed, setIsDistributed] = useLocalStorage<Boolean>(false);

  const [imgUrl, setImgUrl] = useLocalStorage<String>("");
  const [accountList, setAccountList] = useLocalStorage<InjectedAccountWithMeta[]>([]);
  const [profile, setProfile] = useLocalStorage<ProfileType>();
  const [actingAccount, setActingAccount] = useLocalStorage<InjectedAccountWithMeta>();
  const [generalPostList, setGeneralPostList] = useLocalStorage<PostType[]>([]);
  const [balance, setBalance] = useLocalStorage<String>("0");

  const [friendList, setFriendList] = useLocalStorage<Array>([]);
  const [messageList, setMessageList] = useLocalStorage<Array>([]);
  const [showMessageModal, setShowMessageModal] = useLocalStorage<Boolean>(false);
  const [userName, setUserName] = useLocalStorage<String>("");
  const [userImgUrl, setUserImgUrl] = useLocalStorage<String>("");
  const [myImgUrl, setMyImgUrl] = useLocalStorage<String>("");
  const [messageListId, setMessageListId] = useLocalStorage<String>("");
  const [messageMemberList, setMessageMemberList] = useLocalStorage<Array>([]);
  const [myUserId, setMyUserId] = useLocalStorage<String>("");

  const [name, setName] = useLocalStorage<String>("");
  const [individualPostList, setIndividualPostList] = useLocalStorage<PostType[]>([]);
  const [showSettingModal, setShowSettingModal] = useLocalStorage<Boolean>(false);
  const [followingList, setFollowingList] = useLocalStorage<Array<string>>([]);
  const [followerList, setFollowerList] = useLocalStorage<Array<string>>([]);

  const value = {
    api, setApi,
    isCreatedProfile, setIsCreatedProfile,
    isCreatedFnRun, setIsCreatedFnRun,
    showNewPostModal, setShowNewPostModal,
    isSetup, setIsSetup,
    isDistributed, setIsDistributed,
    imgUrl, setImgUrl,
    accountList, setAccountList,
    profile, setProfile,
    actingAccount, setActingAccount,
    generalPostList, setGeneralPostList,
    balance, setBalance,
    friendList, setFriendList,
    messageList, setMessageList,
    showMessageModal, setShowMessageModal,
    userName, setUserName,
    userImgUrl, setUserImgUrl,
    myImgUrl, setMyImgUrl,
    messageListId, setMessageListId,
    messageMemberList, setMessageMemberList,
    myUserId, setMyUserId,
    name, setName,
    individualPostList, setIndividualPostList,
    showSettingModal, setShowSettingModal,
    followingList, setFollowingList,
    followerList, setFollowerList,
  };

  return (
    <ContractProvider.Provider value={value}>{children}</ContractProvider.Provider>
  );
}
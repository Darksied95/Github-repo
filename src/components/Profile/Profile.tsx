import { RootState } from "@/redux/store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

type ProfileProps = {};

const Profile: React.FC<ProfileProps> = () => {
  const { profile } = useSelector((state: RootState) => state);
  console.log(profile);

  const {
    avatar_url,
    login,
    bio,
    followers,
    following,
    name,
    twitter_username,
    location,
  } = profile;
  return (
    <div className="main1:w-[254.4px] main2:w-[294.4px]">
      <div className="flex gap-3 items-center mb-6 main1:block main1:mb-4">
        {avatar_url && (
          <Image
            src={avatar_url}
            alt="/"
            width={72}
            height={72}
            unoptimized
            className="rounded-full w-[16%] aspect-square main1:w-full main1:mb-3 "
          />
        )}
        <h1>
          <span className="text-primary font-semibold text-2xl block leading-7">
            {name}
          </span>
          <span className="text-slate-500 font-thin text-xl">{login}</span>
        </h1>
      </div>
      <div className="text-primary">
        <button className="border border-solid border-header-icon rounded-md w-full flex items-center gap-2 text-secondary font-thin text-sm p-1 main1:hidden">
          <svg viewBox="0 0 16 16" version="1.1" width="16" height="16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm3.82 1.636a.75.75 0 0 1 1.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 0 1 1.222.87l-.022-.015c.02.013.021.015.021.015v.001l-.001.002-.002.003-.005.007-.014.019a2.066 2.066 0 0 1-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.331 3.331 0 0 1-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 0 1 .183-1.044ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.25 2.25.592.416a97.71 97.71 0 0 0-.592-.416Z"></path>
          </svg>
          <span>Set status</span>
        </button>
        <p className="my-2 main1:mb-4">{bio}</p>
        <button className="w-full bg-header-icon p-[.3rem] rounded-md font-semibold text-sm mb-5">
          Edit profile
        </button>
        <div className="border-b border-solid border-header-icon pb-8 main1:pb-2 main1:flex flex-col">
          <ul className="order-2">
            <li className="items-center gap-2 font-normal text-sm hidden main1:flex  mb-2">
              <svg
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                className="opacity-90"
              >
                <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
              </svg>
              <a href="">{location}</a>
            </li>
            <li className="flex items-center gap-2 font-normal text-sm mb-2">
              <svg
                className="opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 273.5 222.3"
                role="img"
                height="16"
                width="16"
              >
                <title id="lafqbrlmtsa9bd39ghz3zrz0k56f20h">Twitter</title>
                <path
                  d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
                  fill="currentColor"
                ></path>
              </svg>
              <a href="">@{twitter_username}</a>
            </li>
          </ul>
          <div className="flex items-center order-1 main1:pb-5">
            <a href="" className="flex items-center gap-[.15rem]">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
              >
                <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
              </svg>
              <span className="text-sm">13 </span>
              <span className="opacity-60 text-sm font-thin"> followers</span>
            </a>
            <span className="flex my-auto  mx-1 leading-none">.</span>
            <a href="" className="flex items-center gap-[.15rem]">
              <span className="text-sm">6</span>
              <span className="opacity-60 text-sm font-thin">following</span>
            </a>
          </div>
        </div>
        <div className="pt-5">
          <h1 className="font-semibold mb-2">Achievements</h1>
          <div className="flex mb-2">
            <a href="">
              <Image src="/Yolo.png" alt="" width={64} height={64} />
            </a>
            <a href="">
              <Image src="/PullShark.png" alt="" width={64} height={64} />
            </a>
          </div>
          <div className="flex gap-2">
            <span className="border border-solid border-green text-green  text-xs rounded-full px-2 py-[.02rem]">
              Beta
            </span>
            <span className="text-xs text-blue">Send feedback</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;

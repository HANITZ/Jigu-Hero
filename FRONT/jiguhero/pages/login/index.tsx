import KakaoImg from "/public/kakao_login.png";
import GoogleImg from "/public/google_login.png";
import NaverImg from "/public/naver_login.png";
import Image from "node_modules/next/image";
import Head from "node_modules/next/head";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Main } from "next/document";
import { ParsedUrlQuery } from "querystring";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  console.log(session)
  return (
    <>
      <LoginWrapper>
        <Head>
          {/* header 추가 */}
          <title>로그인 | 지구-방위대</title>
        </Head>
        
        <main>
          <LoginText>로그인</LoginText>
          <SnsLoginText>SNS 계정으로 로그인하기</SnsLoginText>

          {/* 카카오 로그인*/}
          <SnsLoginKakao>
            {!session && (
              <ul>
                <li>
                  <a
                    href={"/api/auth/signin"}
                    onClick={(e) => {
                      e.preventDefault();
                      signIn("kakao");
                    }}
                  >
                    <Image src={KakaoImg} alt="Kakao" />
                  </a>
                </li>
              </ul>
            )}
          </SnsLoginKakao>

          {/* 구글 로그인*/}
          <SnsLoginGoogle>
            {!session && (
              <ul>
                <li>
                  <a
                    href={"/api/auth/signin"}
                    onClick={(e) => {
                      e.preventDefault();
                      signIn("google");
                    }}
                  >
                    <Image src={GoogleImg} alt="Google" />
                  </a>
                </li>
              </ul>
            )}
          </SnsLoginGoogle>

          <SnsLoginNaver>
            {!session && (
              <a
                className="btn btn-block social-btn kakao"
                href={`${process.env.NAVER_AUTH_URL}`}
              >
                <Image src={NaverImg} alt="Naver" />
              </a>
            )}
          </SnsLoginNaver>
        </main>
      </LoginWrapper>
    </>
  );
}

const LoginWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginText = styled("h1")`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 3.5rem; */
  height: 10vh;
`;
const SnsLoginText = styled("span")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
`;
const SnsLoginKakao = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
`;
const SnsLoginGoogle = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
`;

const SnsLoginNaver = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
`;
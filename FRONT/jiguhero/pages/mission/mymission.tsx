import styled from "styled-components";
<<<<<<< HEAD
import { ButtonFull, ButtonBorder } from 'styles/styled';
import Backcomponents from 'components/back';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { tabpage } from "states/mypage";
import { RecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import React, { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
<<<<<<< HEAD
=======
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
>>>>>>> c6fd418499a98888cdcdabe4c0d5596a9e51ce3c

const NavBar = styled('div')`
  z-index: 999;
 position: fixed;
  left: 0;
  right: 0;
  top:60px;
  height: 60px;
  /* padding: 2rem; */
  color: white;
  background: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
    @media only screen and (min-width: 650px) {
    display:none;
  }
`
const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 0px 5px 0px 20px;
`;

const BackCompo = styled(Backcomponents)`
  margin-top: 10px;
  margin-bottom: 10px;
`
=======
import { ButtonFull, ButtonBorder, ParentsDiv } from 'styles/styled';
import Backcomponents from 'components/back';
import MissionModal from 'components/MissionModal';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { missionTabpage } from "states/mission";
import { RecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import React, { useState, useEffect } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
const Div = styled('div')`
    padding: 18px;
`

const List = styled('div')`
  border: 1px solid #98C064;
  border-radius: 15px;
<<<<<<< HEAD
  height: 150px;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
=======
  width: auto;
  height: auto;
  display:flex;
  /* flex-direction: row; */
  /* align-items: center;
  justify-content: center; */
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
  overflow: hidden;
  margin: 5px;
  :hover{
    cursor: pointer;
  }

<<<<<<< HEAD
  @media screen and (min-width: 360px){
      width:350px;

=======
  /* @media screen and (min-width: 360px){
      width:350px;
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
  }
  @media screen and (min-width:450px){
      width: 350px;
  }
  @media screen and (min-width: 700px) and (max-width:1400){
<<<<<<< HEAD
      width:500px;
  }
=======
      width:800px;
  } */
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
`
/* const ListImg = styled('div') <{ image: string }>` * /
/* background-image: url('${(props) => props.image}'); */
const ListImg = styled('div')`
  background-image: url('https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_960_720.jpg');
  background-size: cover;
  background-position: center;
  width: 150px;
  height: 150px;
  border: 1px solid none;
  float: left;
`
const ListContent = styled('div')`
  width: 200px;
  height: 150px;
  border: 1px solid none;
<<<<<<< HEAD
  float: left;
=======
  /* float: left; */
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

const TextWrapper = styled('div')`
<<<<<<< HEAD
  margin: 4px;
`

const TitleName = styled('a')`
  font-size: 1rem;
  font-weight: bolder;
`
const Name = styled('a')`
  font-size: 0.75rem;
=======
  margin-left: 15px;
  margin-right: auto;
`

const TitleName = styled('h2')`
  font-size: 1rem;
  font-weight: bolder;
  margin: 0;
`
const Name = styled('p')`
  font-size: 0.75rem;
  margin-top: 5px;
  margin-bottom: 0;
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
`
const Date = styled(Name)`
  `
const JoinPeople = styled(Name)`
  `
const PointBtn = styled('div')`
  border-radius: 12.5px;
  padding: 5px;
  border: 1px solid #98C064;
  background-color: #98C064;
  color: white;
  font-size: x-small;
  margin-left: auto;
  margin-right: 15px;
`
const ListWrapper = styled('div')`
  display: flex;
  justify-content:center;
  align-items: center;
`
const ButtonWrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin: 20px;
`

<<<<<<< HEAD
interface IBackColor {
  backColor: string,
}
const AchieveBtn = styled('button')`
  border: solid 1px black;
  background-color: ${(props: IBackColor) => props.backColor};
  color: white;
  font-size: medium;
  padding-left:10px;
  padding-right:10px;
  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
=======

const AchieveFullBtn = styled(ButtonFull)`
  font-size: medium;
  border-radius: 10px;
  padding: 3px 10px;
  /* text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black; */
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
  :hover{
    cursor: pointer;
  }
`

<<<<<<< HEAD
const CertifyBtn = styled('button')`
  border: solid 1px;
  border: solid 1px black;
  background-color: ${(props: IBackColor) => props.backColor};
  color: white;
  font-size: medium;
  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
  padding-left:10px;
  padding-right:10px;
  :hover{
    cursor: pointer;
  }
`
<<<<<<< HEAD
const AchieveWrapper = styled('div')`
  display:flex;
  justify-content: left;

`
const CertifyWrapper = styled('div')`
  display:flex;
  justify-content: space-between;

=======
const TextPositionWrapper = styled('div')`
  justify-content: center;
  align-items: center;
`
const AchieveWrapper = styled('div')`
  display:flex;
  justify-content: center;
  max-width: 500px;
=======
const CertifyFullBtn = styled(AchieveFullBtn)`
`
const AchieveBorderBtn = styled(ButtonBorder)`
  font-size: medium;
  border-radius: 10px;
  padding: 3px 10px;
    :hover{
    cursor: pointer;
  }
`
const CertifyBorderBtn = styled(AchieveBorderBtn)`
`

const AchieveWrapper = styled('div')`
  display:flex;
  justify-content: center;
  /* max-width: 500px; */
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
`
const ProgressWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  
`
const CertifyWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
>>>>>>> c6fd418499a98888cdcdabe4c0d5596a9e51ce3c
=======
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
`
const CertifyGoBtn = styled(ButtonFull)`
  padding: 3px 10px;
  border-radius: 10px;
<<<<<<< HEAD
<<<<<<< HEAD
  margin-left: 25px;
  margin-right: 25px;
`
const Text = styled('a')`
  font-size: small;
  font-weight: bold;
  margin-left: 25px;
  margin-right: 25px;
`

const Progress = styled(ProgressBar)`
  width: 250px;
  /* .wrapper{
    width: 250px;
  }
  .barCompleted{
    background-color: #65ACE2;
    width: ${(props) => props.completed};
  }
  .container{
    background-color: black;
  } */
`
=======
=======
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
  margin-left: 140px;
  margin-right: 25px;
`
const Text = styled('a')`
  font-size: 15px;
  font-weight: bolder;
  margin-left: 25px;
  margin-right: 25px;
`
const Text2 = styled('a')`
  font-size: 13px;
<<<<<<< HEAD
`

const Text2Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  
  margin: 0 15px 15px 15px;
`
=======
  margin-left: 4rem;
  margin-right:1rem;
`


>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a

//진행률바 라이브러리 이용
const Progress = styled(ProgressBar)`
  max-width: 350px;
  width: 90%;
  
`

const CertifyFeed = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text3 = styled('a')`
  font-size: large;
  font-weight: bolder;
  background-color: #fcfca886;
`

const HeroTextWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const NoHeroText1 = styled('a')`
  font-family: PyeongChangPeace-Bold;
  font-size: 100px;
  padding: 50px 0 0 0;
`
const NoHeroText2 = styled('a')`
  font-size: medium;
  font-weight: bold;
`

const BottomDiv = styled('div')`
  margin-bottom: 70px;
`

<<<<<<< HEAD
>>>>>>> c6fd418499a98888cdcdabe4c0d5596a9e51ce3c
=======
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
// interface MissionProps {
//   entryPoint: number;
//   title: string;
//   startDate: number;
//   endDate: number;
//   sidoCode: string;
//   nowPerson: number;
//   maxPerson: number;
//   repImageURL: string;
//   missionId: number;
// }

//내가 참여중인 미션 보여주는 함수
function NowMission() {
  const router = useRouter();
  return (
<<<<<<< HEAD
    <>
      <List onClick={() => router.push(`/ mission / `)}>
        {/* <ListImg image={repImageURL} /> */}
        <ListImg />
        <ListContent>
          <div>
            <TextWrapper>
              <TitleName>제목</TitleName>
            </TextWrapper>
            <TextWrapper>
              <Name>지역</Name>
            </TextWrapper>
            <TextWrapper>
              <Date>시작 날짜~끝 날짜</Date>
            </TextWrapper>
            <TextWrapper>
              <JoinPeople>1 / 5명</JoinPeople>
            </TextWrapper>
          </div>
          <PointBtn>+200</PointBtn>
        </ListContent>
      </List>
    </>
  )
}

<<<<<<< HEAD
=======
//달성률 & 인증샷 버튼 그룹
>>>>>>> c6fd418499a98888cdcdabe4c0d5596a9e51ce3c
function ButtonGroup() {
  // 탭 전환
  const tab = useRecoilValue(tabpage);
  const setTab = useSetRecoilState(tabpage);

  //달성률 버튼 클릭하면 연두색 인증샷 버튼 클릭하면 하얀색!
  const [tabColor, setTabColor] = useState(true)
<<<<<<< HEAD
=======
  console.log(tabColor)
>>>>>>> c6fd418499a98888cdcdabe4c0d5596a9e51ce3c
=======
    <List onClick={() => router.push(`1`)}>
      {/* <ListImg image={repImageURL} /> */}
      <ListImg />
      <ListContent>
        <TextWrapper>
          <TitleName>제목</TitleName>
          <Name>지역</Name>
          <Date>시작 날짜~끝 날짜</Date>
          <JoinPeople>1 / 5명</JoinPeople>
        </TextWrapper>
        {/* </div> */}
        <PointBtn>+200</PointBtn>
      </ListContent>
    </List>
  )
}

//달성률 & 인증샷 버튼 그룹
function ButtonGroup() {
  // 탭 전환
  const tab = useRecoilValue(missionTabpage);
  const setTab = useSetRecoilState(missionTabpage);

  //달성률 버튼 클릭하면 연두색 인증샷 버튼 클릭하면 하얀색!
  const [tabColor, setTabColor] = useState(true)
  console.log(tabColor)
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
  return (
    <>
      {/* 탭 전환을 위한 버튼들 */}
      <ButtonWrapper>
        {tabColor ?
<<<<<<< HEAD
<<<<<<< HEAD
          <AchieveBtn backColor={`#98C064`} onClick={() => { setTabColor(!tabColor) }}>달성률</AchieveBtn>
          : <AchieveBtn backColor={`#fffff`} onClick={() => { setTabColor(!tabColor) }}>달성률</AchieveBtn>
        }
        {tabColor ?
          <CertifyBtn backColor={`#fffff`} onClick={() => { setTabColor(!tabColor) }}>인증샷</CertifyBtn>
          : <CertifyBtn backColor={`#98C064`} onClick={() => { setTabColor(!tabColor) }}>인증샷</CertifyBtn>
        }
      </ButtonWrapper >

    </>
  )
}
=======
          <AchieveBtn backColor={`#98C064`} onClick={() => { setTab(true), setTabColor(!tabColor) }}>달성률</AchieveBtn>
          : <AchieveBtn backColor={`#fffff`} onClick={() => { setTab(true), setTabColor(!tabColor) }}>달성률</AchieveBtn>
        }
        {tabColor ?
          <CertifyBtn backColor={`#fffff`} onClick={() => { setTab(false), setTabColor(!tabColor) }}>인증샷</CertifyBtn>
          : <CertifyBtn backColor={`#98C064`} onClick={() => { setTab(false), setTabColor(!tabColor) }}>인증샷</CertifyBtn>
=======
          <AchieveFullBtn dColor={'#98C064'} hColor={'98C064'} onClick={() => { setTab(true), setTabColor(!tabColor) }}>달성률</AchieveFullBtn>
          : <AchieveBorderBtn dColor={'#65ACE2'} onClick={() => { setTab(true), setTabColor(!tabColor) }}>달성률</AchieveBorderBtn>
        }
        {tabColor ?
          <CertifyBorderBtn dColor={' #65ACE2'} onClick={() => { setTab(false), setTabColor(!tabColor) }}>인증샷</CertifyBorderBtn>
          : <CertifyFullBtn dColor={'#98C064'} hColor={'98C064'} onClick={() => { setTab(false), setTabColor(!tabColor) }}>인증샷</CertifyFullBtn>
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
        }
      </ButtonWrapper >
      {tab ? <Achievement /> : <Certification />}
    </>
  )
}

//임시 더미파일들
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
<<<<<<< HEAD

=======
function MyMobileView() {

}
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
//나의 인증샷 (mui 사용함!)
function MyCertificationLists() {
  return (
    <>
      <CertifyFeed>
        <ImageList sx={{ width: 350 }} cols={3} rowHeight={130}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CertifyFeed>
    </>
  );
}

<<<<<<< HEAD
>>>>>>> c6fd418499a98888cdcdabe4c0d5596a9e51ce3c
//달성률과 나의 인증샷 보여주는 탭
function Achievement() {
  return (
    <>
<<<<<<< HEAD
      {/* 달성률 바 */}
      <AchieveWrapper>
        <Text>달성률</Text>
        <Progress completed={60} />
      </AchieveWrapper>

      {/* 내 인증샷 모아보기 */}
=======
=======
//달성률과 나의 인증샷 보여주는 탭
function Achievement() {
  const [Modal, setModal] = useState(false)
  useEffect(() => {
    if (Modal === false) {
      console.log('hihi', Modal)
    } else {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        console.log('bye', Modal)
      };
    }
  }, [Modal]);

  return (
    <>
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a

      {/* 달성률 바 */}
      <AchieveWrapper>
        <Text>달성률</Text>
<<<<<<< HEAD
=======
        <Text2>~일만 더 인증하면 성공이에요!</Text2>
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
      </AchieveWrapper>

      <ProgressWrapper>
        <Progress completed={60} bgColor={'#65ACE2'} />
      </ProgressWrapper>

<<<<<<< HEAD
      <Text2Wrapper>
        <Text2>~일만 더 인증하면 성공이에요!</Text2>
      </Text2Wrapper>

      {/* 내 인증샷 모아보기 */}

>>>>>>> c6fd418499a98888cdcdabe4c0d5596a9e51ce3c
      <CertifyWrapper>
        <Text>나의 인증샷</Text>
        <CertifyGoBtn hColor={'#65ACE2'} dColor={'#98C064'}>인증하기</CertifyGoBtn>
      </CertifyWrapper>
<<<<<<< HEAD

=======
      <MyCertificationLists />
>>>>>>> c6fd418499a98888cdcdabe4c0d5596a9e51ce3c
=======

      {/* 내 인증샷 모아보기 */}

      <CertifyWrapper>
        <Text>나의 인증샷</Text>
        <CertifyGoBtn hColor={'#65ACE2'} dColor={'#98C064'} onClick={() => setModal(true)}>인증하기</CertifyGoBtn>
        <MissionModal show={Modal} setShow={setModal} />
      </CertifyWrapper>
      <MyCertificationLists />
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
    </>
  )
}

<<<<<<< HEAD
<<<<<<< HEAD
//다른 사람들의 인증샷을 보여주는 탭
function Certification() {

  return (
    <>
=======
=======
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a

//대원들의 인증샷 (mui 사용함!)
function HeroCertificationLists() {
  return (
    <>
      <CertifyFeed>
        <ImageList sx={{ width: 350 }} cols={3} rowHeight={130}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CertifyFeed>
    </>
  )
}
//다른 사람들의 인증샷을 보여주는 탭
function Certification() {
  return (
    <>
      <HeroTextWrapper>
        <Text3>📸대원들의 인증샷</Text3>
      </HeroTextWrapper>

      {/* 인증샷 없으면 */}
      <HeroTextWrapper>
        <NoHeroText1>앗!</NoHeroText1>
        <NoHeroText2>아직 인증한 대원이 없어요😥</NoHeroText2>
      </HeroTextWrapper>
      {/* 인증샷 있으면 */}
      <HeroCertificationLists />
<<<<<<< HEAD
>>>>>>> c6fd418499a98888cdcdabe4c0d5596a9e51ce3c
=======
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a

    </>
  )
}

export default function MyMissionFeed() {
  return (
    <>
      {/* 헤더 */}
      <Head>
        <title>나의 임무 | 지구-방위대</title>
      </Head>
<<<<<<< HEAD
      {/* 네브바 */}
      <NavBar>
        <Header>
          {/* 모바일 뷰에서 뒤로가기 버튼! */}
          <BackCompo name='나의 임무'></BackCompo>
        </Header>
      </NavBar>
=======
      {/* 모바일 뷰에서 뒤로가기 버튼! */}
      <Backcomponents name='나의 임무'></Backcomponents>


>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a

      <Div></Div>
      {/* 참여중인 미션 보여줌! */}
      <ListWrapper>
        <NowMission />
      </ListWrapper>

      {/* 달성률 인증샷 탭 */}
      <ButtonGroup />
<<<<<<< HEAD
<<<<<<< HEAD

      <Achievement />

=======
      <BottomDiv></BottomDiv>
>>>>>>> c6fd418499a98888cdcdabe4c0d5596a9e51ce3c
=======
      <BottomDiv></BottomDiv>
>>>>>>> f77d0a544892c403360790cc1333dd3dd946b22a
    </>
  )
}
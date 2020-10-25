import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { type } from "../variables/index";
import { H1 } from "../variables/Text";
import { ReactComponent as TopLogo } from "../images/logo.svg";
import botw from "../images/first/botw.jpg";
import dohd from "../images/first/dohd.jpg";
import gwmw from "../images/first/gwmw.jpg";
import hina from "../images/first/hina.jpg";
import rdepfg from "../images/first/rdepfg.jpg";
import sasi from "../images/first/sasi.jpg";
import sith from "../images/first/sith.jpg";
import cial from "../images/second/cial.jpg";
import asoc from "../images/second/asoc.jpg";
import boje from "../images/second/boje.jpg";
import ctmefg from "../images/second/ctmefg.jpg";
import ctoo from "../images/second/ctoo.jpg";
import doch from "../images/second/doch.jpg";
import gochfg from "../images/second/gochfg.jpg";
import mcje from "../images/second/mcje.jpg";
import sach from "../images/second/sach.jpg";
import aira from "../images/third/aira.jpg";
import aots from "../images/third/aots.jpg";
import bthd from "../images/third/bthd.jpg";
import ccdi from "../images/third/ccdi.jpg";
import doc3 from "../images/third/doc3.jpg";
import medifg from "../images/third/medifg.jpg";
import ralc from "../images/third/ralc.jpg";
import saob from "../images/third/saob.jpg";

export const MainPage = () => {
  return (
    <Container>
      <Header>
        <HeadDiv>
          <HeadText>
            LBC <span>2020</span>
          </HeadText>
          <TopLogo />
        </HeadDiv>
      </Header>
      <Body>
        <Notice>
          <p>
            <span>Read</span> free Christ-centered literature curated based on
            the topic discussed in each session. Simply <span>click </span> on
            any book to <span>download</span>
          </p>
        </Notice>
        <BOD>
          {itemArray.map((item, i) => {
            return (
              <>
                <NH1>
                  Session {item.id}: {item.session}
                </NH1>
                <IMAGECARD>
                  {item.info.map((it) => {
                    return (
                      <>
                        <InnerDiv>
                          <Link to={it.url}>
                            <IMG src={it.img} alt=""></IMG>
                          </Link>
                        </InnerDiv>
                      </>
                    );
                  })}
                </IMAGECARD>
              </>
            );
          })}
        </BOD>
        <Bottom>
          <Bot>
            <p>The literature is sourced from Chapel Library </p>
            <p>© Copyright 2018 Chapel Library </p>
            <p>
              {" "}
              Chapel Library sends Christ-centered materials from prior
              centuries worldwide without charge, relying entirely upon God’s
              faithfulness. We therefore do not solicit donations, but we
              gratefully receive support from those who freely desire to give.{" "}
            </p>
            <p>
              <span>Worldwide</span>, please download material without charge
              from our website, or contact the international distributor as
              listed there for your country.<br></br> In{" "}
              <span>North America</span>, for additional copies of this booklet
              or other Christ-centered materials from prior centuries, please
              contact
            </p>
            <p>
                <Link to= "https://www.chapellibrary.org/search">CHAPEL LIBRARY </Link>
              2603 West Wright Street Pensacola, Florida 32505
              USA Phone: (850) 438-6666 • Fax: (850) 438-0227
              chapel@mountzion.org • www.ChapelLibrary.org
            </p>
          </Bot>
        </Bottom>
      </Body>
      <Footer>
        <p>© Lagos Bible Conference 2020</p>
        <Foot>
          <p>
            Sovereign Grace Bible Church Plot 457C Oluwadamilola Fashade Street,
          </p>
          <p> Omole Phase 1, Lagos </p>
          <p> www.sgbc.ng </p>
        </Foot>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #f7f9fc;
`;

const Header = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  background-color: #222222;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
`;
const HeadText = styled(H1)`
  color: white;
  font-size: 4.5rem;
  font: Roboto Condensed;

  span {
    color: #ff0000;
  }
`;

const Notice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 85%;
  height: auto;
  margin-top: 15.5rem;
  background-color: #454545;
  border-radius: 0.7rem;
  color: white;
  margin-bottom: 2rem;
  span {
    color: #ff0000;
  }

  p {
    margin: 1rem 0;
  }
`;

const HeadDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5rem 0 5rem;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BOD = styled.div`
  margin: 0 0 0 5rem;
`;
const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
const IMG = styled.img`
  width: 80%;
  height: auto;
  margin-bottom: 2rem;
`;
const IMAGECARD = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
const NH1 = styled(H1)`
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-weight: bold;
  color: #222222;
`;
const Bottom = styled.div`
  height: auto;
  text-align: justify;
  background-color: #ffffff;
  padding-top: 7rem;
  padding-bottom: 7rem;
`;
const Bot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  span {
    font-weight: bold;
  }
  p {
    width: 50%;
    margin-bottom: 1.3rem;
  }
  p:nth-child(5) {
    width: 20%;
    text-align: center;
    margin-top: 2rem;
}
`;
const Footer = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  background-color: #222222;
  padding: 4rem 4rem;
  font-size: 1.3rem;
  p {
    display: flex;
    align-items: center;
  }
`;
const Foot = styled.div`
  width: 20%;
  flex-wrap: wrap;
`;

const itemArray = [
  {
    id: 1,
    session: "Sin, a Common Plague",
    info: [
      {
        img: sasi,
        url:
          "https://www.google.com/url?sa=D&q=https://www.chapellibrary.org:8443/api/books/download%3Fcode%3Dsasi%26amp%3Bformat%3Dpdf&ust=1603552560000000&usg=AOvVaw09Bj1n0vyUafdN4gISnGXU&hl=en-GB",
      },
      {
        img: hina,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=hina&amp;format=pdf",
      },
      {
        img: sith,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=sith&amp;format=pdf",
      },
      {
        img: rdepfg,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=sith&amp;format=pdf",
      },
      {
        img: botw,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=botw&amp;format=pdf",
      },
      {
        img: gwmw,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=gwmw&amp;format=pdf",
      },
      {
        img: dohd,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=dohd&amp;format=pdf",
      },
    ],
  },
  {
    id: 2,
    session: "Christ, a Common Saviour",
    info: [
      {
        img: cial,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=cial&amp;format=pdf",
      },
      {
        img: sach,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=sach&amp;format=pdf",
      },
      {
        img: asoc,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=asoc&amp;format=pdf",
      },
      {
        img: mcje,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=mcje&amp;format=pdf",
      },
      {
        img: doch,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=doch&amp;format=pdf",
      },
      {
        img: ctoo,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=ctoo&amp;format=pdf",
      },
      {
        img: gochfg,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=gochfg&amp;format=pdf",
      },
      {
        img: ctmefg,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=ctmefg&amp;format=pdf",
      },
      {
        img: boje,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=boje&amp;format=pdf",
      },
    ],
  },
  {
    id: 3,
    session: "The Church's Unique Mission",
    info: [
      {
        img: doc3,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=doc3&amp;format=pdf",
      },
      {
        img: ccdi,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=ccdi&amp;format=pdf",
      },
      {
        img: bthd,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=bthd&amp;format=pdf",
      },
      {
        img: aots,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=aots&amp;format=pdf",
      },
      {
        img: ralc,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=ralc&amp;format=pdf",
      },
      {
        img: saob,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=saob&amp;format=pdf",
      },
      {
        img: aira,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=aira&amp;format=pdf",
      },
      {
        img: medifg,
        url:
          "https://www.chapellibrary.org:8443/api/books/download?code=medifg&amp;format=pdf",
      },
    ],
  },
];

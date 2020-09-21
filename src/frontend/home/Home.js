import React, {useState} from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import mediaQuery from "styled-media-query";
import {useMediaQuery} from "react-responsive/";
import Footer from "../../components/footer/Footer";
import Slider from "react-slick"


const Home = () => {
  const [contactStatus, setContactStatus] = useState(void 0);
  const isMobile = useMediaQuery({query: '(max-device-width: 768px)'});
  const sendMessage = e => {
    setContactStatus("wait");
    e.preventDefault();
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const message = document.getElementById("message").value;
    const data = {name, address, message};
    fetch("https://1q3t4ibk18.execute-api.ap-northeast-1.amazonaws.com/prod/contact", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(() => {
      setContactStatus("success");
      setTimeout(() => setContactStatus(void 0), 5000)
    }).catch(() => setContactStatus("error"))
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    swipeToSlide: true
  };
  return <div>
    <Header/>
    <Container>
      <img src="images/team.jpg" className="ui image"/>
      <Title>product</Title>
      <div className="ui container">
        <Cards className="ui cards">
          <AnchorCard className="ui card" href="https://portal.framecbattle.com">
            <div className="image">
              <CardImage src="/images/product/frame-c-battle.png"/>
            </div>
            <div className="content">
              <div className="header">Frame C Battle</div>
              <div className="meta">
                https://portal.framecbattle.com
              </div>
              <div className="description">
                <div>ブロックチェーンを利用したカードバトルゲーム。</div>
                <div>使用技術：ブロックチェーン/ 双方向リアルタイム通信</div>
                <div>作成工数：１年弱</div>
                <div>受注時目安価格：500万円</div>
              </div>
            </div>
          </AnchorCard>
          <AnchorCard className="ui card" href="https://www.online-babysitter.net">
            <div className="image">
              <CardImage src="/images/product/online-babysitter.png"/>
            </div>
            <div className="content">
              <div className="header">オンライン キッズ・ベビーシッター</div>
              <div className="meta">
                https://www.online-babysitter.net
              </div>
              <div className="description">
                <div>ルワンダのママたちがzoomを通して子どもと遊んでくれます。</div>
                <div>使用技術：特になし</div>
                <div>作成工数：10日</div>
                <div>受注時目安価格：20万</div>
              </div>
            </div>
          </AnchorCard>
          <AnchorCard className="ui card" href="https://www.muscle-learning.com">
            <div className="image">
              <CardImage src="/images/product/muscle-learning.png"/>
            </div>
            <div className="content">
              <div className="header">Muscle Learning</div>
              <div className="meta">
                https://www.muscle-learning.com
              </div>
              <div className="description">
                <div>腹筋がどれだけ割れているかをAI診断でチェックするサービス</div>
                <div>使用技術：AI</div>
                <div>作成工数：15日</div>
                <div>受注時目安価格：30万</div>
              </div>
            </div>
          </AnchorCard>
          <AnchorCard className="ui card" href="https://www.final-sequence.org">
            <div className="image">
              <CardImage src="/images/product/final-sequence.png"/>
            </div>
            <div className="content">
              <div className="header">Final Sequence</div>
              <div className="meta">
                https://www.final-sequence.org/
              </div>
              <div className="description">
                <div>生きた証を残すためのサイト。サンプル収集・マーケティングを怠り『座礁』</div>
              </div>
            </div>
          </AnchorCard>
        </Cards>
      </div>
      <Title>about</Title>
      <div className="ui container center aligned">
        コロナを機に”THE SHOW”のチームは結成されました。<br/><br/>
        私たちはそれぞれで『座礁』を味わいましたが、チームであればその苦しみさえも楽しみ、新しい価値を生み続けることができることに気づかされました。<br/><br/>
        “THE SHOW”は月一で一週間の開発合宿を行い、何かしらの新しいプロダクトを世に送り出すこと。<br/>
        そして新しい何かを作りたい人の力になることを目的としてチャレンジし続けます。
      </div>
      <Title>member</Title>
      <div className="ui container">
        <div className="ui centered cards">
          <div className="ui card" style={{marginRight: isMobile ? "" : "10vw"}}>
            <div className="image">
              <CardImage src="/images/member/uc.jpg"/>
            </div>
            <div className="content">
              <div className="header">中嶋 雄士</div>
              <div className="meta">
                <span>企画</span>
              </div>
              <div className="description">
                <div>TORIAEZU OÜ(エストニア / HR) Founder & CEO</div>
                <div>Chant-through Ltd.（ルワンダ / ベビーシッター事業）Founder & CEO</div>
              </div>
            </div>
          </div>
          <div className="ui card">
            <div className="image">
              <CardImage src="/images/member/seki.jpg"/>
            </div>
            <div className="content">
              <div className="header">関 侑樹</div>
              <div className="meta">
                <span>開発</span>
              </div>
              <div className="description">
                <div>on the rock 株式会社 (ブロックチェーン / 開発全般)Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{margin: "10vh 0 2vh 0", display: !isMobile && "flex", justifyContent: !isMobile && "center"}}>
          <Slider {...settings} style={{width: !isMobile && "60vw"}}>
            <Voices>
              <Message>朝は起きないし、夜は酒盛り。この開発チームはいつ仕事をしているんだろうと、当初は心配していました。が、生活をつぶさに見ていると、布団にいるときに彼らのディスカッションは始まり、酒宴で聞いた嘘偽りのない話をサービスに追加。そして、開発合宿の佳境になると、七輪の横でBBQをしながら仕上げる姿に新しい時代を感じました。
              </Message>
              <Author>鋸南エアルポルト（千葉） KYO PAXI</Author>
            </Voices>
            <Voices>
              <Message>よく遊び、よく眠り、よく食べ、よく飲み、よく働く。広島の街にも繰り出していってました。遊びを最大化させて、仕事も進めるスタイルは、他の滞在している方にとっても、常連さんにとっても新鮮で、滞在してくれたことで、二人のこと、みんな大好きになりました！
              </Message>
              <Author>ゲストハウス縁（広島） 余島純</Author>
            </Voices>
            <Voices>
              <Message>渉外と開発のバランスがとれているチームだと思いました。当館での合宿中はストイックに突如断食と開発を同時に実行。夜も寝ずに昼寝しながらサービスを作り上げていました。一見するとエンジニアしか仕事をしていないように思ましたが、実は企画担当はお酒を飲みながら無限にアイディアを出しており、それがこのチームの最大の特徴なのだと感じました。チームとして前提がしっかりと共有をされているので、見た目はラフですが、出来上がったサービスやスピード感には感動すら覚えました。
              </Message>
              <Author>Chapter Two Tokyo（東京） 上田拓明・恵利加
              </Author>
            </Voices>
          </Slider>
        </div>
      </div>
      <Title>events</Title>
      <div className="ui container">
        <Cards className="ui cards">
          <AnchorCard className="ui card" href="https://stand-by-me.jp/">
            <div className="image">
              <CardImage src="/images/event/standbyme.png"/>
            </div>
            <div className="content">
              <div className="header">【福岡】2020 9/21〜9/28 開発合宿</div>
              <div className="meta">
                #開発合宿
              </div>
              <div className="description">
                <div>居酒屋付きシェアハウスSTAND BY MEで開発合宿をしています。</div>
              </div>
            </div>
          </AnchorCard>
        </Cards>
      </div>
      <Title>contact</Title>
      <div className="ui container">
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" id="name"/>
          </div>
          <div className="field">
            <label>Mail Address</label>
            <input type="text" name="address" placeholder="Mail Address" id="address"/>
          </div>
          <div className="field">
            <label>Message</label>
            <textarea name="message" placeholder="Message" id="message"/>
          </div>
          <button className="ui button" onClick={sendMessage}>Submit</button>
          {contactStatus && (contactStatus === "wait" ? <WaitIcon/> : contactStatus === "success" ? <SuccessIcon/> :
            <ErrorIcon/>)}
        </form>
      </div>
    </Container>
    <Footer/>
  </div>
};

const WaitIcon = () => (
  <i className="ui ellipsis horizontal icon" style={{color: "black"}}/>
);

const SuccessIcon = () => (
  <i className="fa fa-check-circle" style={{color: "green"}}/>
);

const ErrorIcon = () => (
  <i className="fa fa-times" style={{color: "red"}}/>
);

const Title = ({children}) => {
  return <TitleContainer id={children.toString()}><SideLine>{children}</SideLine></TitleContainer>
};

const mediaMobile = mediaQuery.lessThan("medium");

const Container = styled.div`
  margin-top: 3vh;
  margin-bottom: 15vh;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20vh 0 5vh 0;
`;

const SideLine = styled.div`
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;
  font-size: 3rem;
  padding: 3vh 3vw 3vh 3vw;
`;

const CardImage = styled.img`
`;

const Cards = styled.div`
  justify-content: space-between;
  ${mediaMobile`  justify-content: center; !important`}
  align-content: space-between;
  margin-bottom: -10vh !important;
  ${mediaMobile`margin-bottom: 0vh !important;`}
`;

const AnchorCard = styled.a`
  margin-bottom: 10vh !important;
  ${mediaMobile`margin-bottom: 3vh !important;`}
`;

const Voices = styled.div`
  color: #2C3882;
  text-align: center;
`;
const Message = styled.div`
  text-align: left;
  font-size: 1.5rem;
  line-height: normal;
  margin-bottom: 4vh;
`;
const Author = styled.div`
  font-size: 2rem;
  margin-bottom: 4vh;
  line-height: 3rem;
`;

export default Home;

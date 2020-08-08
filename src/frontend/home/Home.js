import React, {useState} from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import mediaQuery from "styled-media-query";

const Home = () => {
  const [contactStatus, setContactStatus] = useState(void 0);
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

  return <div>
    <Header/>
    <Container>
      <img src="images/team.jpg" className="ui image"/>
      <Title>product</Title>
      <div className="ui container">
        <Cards className="ui cards">
          <a href="https://portal.framecbattle.com">
            <Card className="ui card">
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
            </Card>
          </a>
          <a href="https://www.online-babysitter.net">
            <Card className="ui card">
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
            </Card>
          </a>
          <a href="https://www.muscle-learning.com">
            <Card className="ui card">
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
            </Card>
          </a>
          <a href="https://www.final-sequence.org">
            <Card className="ui card">
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
            </Card>
          </a>
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
      <div className="ui centered cards">
        <div className="ui card" style={{marginRight: "10vw"}}>
          <div className="image">
            <CardImage src="/images/member/yushi.png"/>
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
            <CardImage src="/images/member/seki.png"/>
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
      <Title>events</Title>
      <div className="ui container">
        <ComingSoon>Coming Soon</ComingSoon>
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
            <input type="text" name="message" placeholder="Message" id="message"/>
          </div>
          <button className="ui button" onClick={sendMessage}>Submit</button>
          {contactStatus && (contactStatus === "wait" ? <WaitIcon/> : contactStatus === "success" ? <SuccessIcon/> :
            <ErrorIcon/>)}
        </form>
      </div>
    </Container>
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
  margin-top: 20vh;
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

const ComingSoon = styled.div`
  margin: 10vh 0 -5vh 0;
  font-size: 3rem;
  text-align: center;
`;

const CardImage = styled.img`
  height: 30vh !important;
  ${mediaMobile`height: auto !important;`}
`;

const Cards = styled.div`
  justify-content: space-between;
  ${mediaMobile`  justify-content: center;`}
  align-content: space-between;
  margin-bottom: -10vh !important;
  ${mediaMobile`margin-bottom: 0vh !important;`}
`;

const Card = styled.div`
  margin-bottom: 10vh !important;
  ${mediaMobile`margin-bottom: 1vh !important;`}
`;
export default Home;

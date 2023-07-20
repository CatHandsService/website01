import { styled } from "styled-components";

const list = [
  {
    district: "東京都",
    name: "N・T様",
    message: "毎日安定して定時で帰ることができ、育児に参加できるようになりました。"
  },
  {
    district: "大阪府",
    name: "I・S様",
    message: "毎朝鏡で死んだ魚の目をした自分を見るのが嫌で嫌で堪りませんでしたが、最近はほぼ定時で退社でき、よく笑うようになったと恋人も喜んでいました。"
  },
  {
    district: "北海道",
    name: "R・O様",
    message: "サービス残業の時間が副業の時間に変わり、少しずつですがバイク日本一周のための資金を貯めることが出来ています。"
  },
]

export const Customers = () => {
  const CustomersContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 80px 0;
    background-color: #ededed;
  `;

  const H2 = styled.h2`
    margin: 0;
    font-size: 40px;
    text-align: center;
  `;
  const CustomersWrapper = styled.div`
    width: 70%;
    padding-bottom: 40px;
    margin: 0 auto;
    background-color: #ededed;
  `;

  const Title = styled.p`
    margin: 20px 0 5px;
    padding: 10px 0 0 1ch;
  `;
  const P = styled.p`
    margin: 0;
    padding-left: 1ch;
  `;

  return (
    <CustomersContainer id="Customers">
      <H2>Customers</H2>
      <CustomersWrapper>
        {list.map((value, key) => (
          <>
            <Title key={key}>{value.district}&emsp;{value.name}</Title>
            <P>{value.message}</P>
            <hr/>
          </>
        ))}
        <a style={{textDecoration: "underline"}}>
          <p style={{ textAlign: "center", margin: "20px auto 0"}}>...and more</p>
        </a>
      </CustomersWrapper>
    </CustomersContainer>
  )
}

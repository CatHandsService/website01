import { styled } from "styled-components";
import image from "../assets/catCEO.jpg"

export const Mission = () => {
  const MissionContainer = styled.div`
    width: 100%;
    margin: 0 auto !important;
    padding: 80px 0;
  `;

  const MissionWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
  `;

  const H2 = styled.h2`
    margin: 0;
    font-size: 40px;
    text-align: center;
  `;

  const ContentsWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
  `;

  const ImageColumn = styled.div`
    width: 40%;
    height: 400px;
    position: relative;
    overflow: hidden;
  `;

  const Img = styled.img`
    width: 500px;
    height: inherit;
    background: url(${image}) 0 0 no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: -200px;
  `;

  const TextColumn = styled.div`
    width: calc(60% - 40px);
    padding-left: 40px;
  `;

  const P = styled.p`
    margin: 0;
  `;

  return (
    <MissionContainer id="mission">
      <MissionWrapper>
        <H2>MISSION</H2>
        <ContentsWrapper>
          <ImageColumn>
            <Img/>
          </ImageColumn>

          <TextColumn>
            <p>私がプレイヤーだった頃は、非効率かつ非合理的な労働に疲弊して生産性を落としてしまっていました。その結果、生産を補うために労働時間が伸び、引き換えに自分の時間、家族との時間、友人との時間を犠牲にしていました。</p>
            <P>私は自分に問いかけました。</P>
            <P>果たして、それは幸せなのか？</P>
            <P>生産性と定時退社の両立は不可能なのか？</P>
            <p>業務、生産を科学し、生産性向上のためのノウハウを提供。迅速、確実に定時で帰る方法を、あまねくすべての労働者へ提案し、定時退社をコンサルティングします。</p>
            <hr/>
            <br/>
            <P>T-easy CEO</P>
            <P>テイジー・ホームズ</P>
          </TextColumn>
        </ContentsWrapper>
      </MissionWrapper>
    </MissionContainer>
  )
}

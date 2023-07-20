import { Button, TextField } from "@mui/material";
import { styled } from "styled-components";

export const Commission = () => {
  const CommissionContainer = styled.div`
    width: 100%;
    padding: 80px 0;
  `;

  const H2 = styled.h2`
    margin: 0;
    font-size: 40px;
    text-align: center;
  `;

  const CommissionWrapper = styled.div`
    width: 70%;
    /* height: 400px; */
    margin: 20px auto;
    padding: 20px 40px 40px;
    border: 2px solid #444;
    border-radius: 10px;
  `;

  const Form = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const RowTop = styled.div`
  `;

  const RowMiddle = styled.div`
  `;

  const P = styled.p`
    margin: 0;
    font-size: 12px;
    font-weight: 100;
  `;

  // const Button1 = styled.button`
  //   width: 200px;
  //   height: 50px;
  //   margin: 10px auto 0;
  //   background: rgba(0, 0, 255, .75);
  //   border: 2px solid #00f;
  //   border-radius: 10px;
  //   color: #fff;
  //   font-size: 20px;
  //   font-weight: bold;
  //   transition: .3s all;
  //   &&:hover{
  //     background-color: #fff;
  //     color: #00f;
  //   }
  // `;

  return (
    <CommissionContainer id="Commission">
      <H2>Commission</H2>

      <CommissionWrapper>
        <P>*は必須項目です。</P>
        <Form>
          <RowTop>
            <TextField
              required
              label="お名前"
              sx={{width: "300px", margin: "20px 20px 20px 0"}}
            />
            <TextField
              required
              label="ご職業"
              sx={{width: "300px", margin: "20px 20px 20px 0"}}
            />
          </RowTop>
          <RowMiddle>
            <TextField
              required
              label="メールアドレス"
              sx={{width: "300px", margin: "20px 20px 20px 0"}}
            />
            <TextField
              label="電話番号"
              sx={{width: "300px", margin: "20px 20px 20px 0"}}
            />
          </RowMiddle>
          <TextField
            required
            label="T-easyに相談したい内容"
            sx={{width: "100%", margin: "10px 0"}}
            multiline
            rows={7}
          />
          {/* <Button>送信</Button> */}
          <Button variant="contained" sx={{width: "300px", height: "50px", margin: "20px auto 0", borderRadius: "10px", fontSize: "20px"}}>
            Send
          </Button>
        </Form>
      </CommissionWrapper>
    </CommissionContainer>
  )
}

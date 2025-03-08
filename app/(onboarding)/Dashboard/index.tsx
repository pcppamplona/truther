import styled from "styled-components/native";

export default function Dashboard() {
  return (
    <>
      <StyledScrollView>
        <ContentContainer>
          <Title>Track Crypto Prices</Title>
        </ContentContainer>
      </StyledScrollView>
    </>
  );
}

// Styled Components
const StyledScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  width: 100%;
  background-color: #dc143c;
`;

const Title = styled.Text`
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  color: white;
  margin-top: 90px;
`;

const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
`;

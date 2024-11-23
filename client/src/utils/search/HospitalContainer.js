import styled from "@emotion/styled";
import KakaoMap from "./utils/KakaoMap";
import BackButton from "../../commons/BackButton";
import { useState, useEffect } from "react";

export default function HospitalContainer() {
  const [isTime, setIsTime] = useState(false);
  useEffect(() => {
    setIsTime(false);
  }, []);
  return (
    <Container>
      <BackButton route="search/detail" />
      <MapContainer>
        <KakaoMap setIsTime={setIsTime} />
      </MapContainer>
      <HospitalList>
        {isTime && (
          <>
            <Hospital>
              <p style={{ fontWeight: "bold" }}>01</p>
              <p style={{ fontWeight: "bold" }}>인앤인내과의원</p>
              <p>80점</p>
              <p>거리 310m</p>
            </Hospital>
            <Hospital>
              <p style={{ fontWeight: "bold" }}>02</p>
              <p style={{ fontWeight: "bold" }}>양대원내과의원</p>
              <p>71점</p>
              <p>거리 410m</p>
            </Hospital>
            <Hospital>
              <p style={{ fontWeight: "bold" }}>03</p>
              <p style={{ fontWeight: "bold" }}>공덕 365 의원</p>
              <p>60점</p>
              <p>거리 30m</p>
            </Hospital>
          </>
        )}
      </HospitalList>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapContainer = styled.div`
  width: 860px;
  margin-right: 20px;
`;

const HospitalList = styled.div`
  width: 250px;
  height: 530px;
  border: 1.5px solid black;
  border-radius: 14px;
  margin-top: 100px;
  background-color: #d0efad;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hospital = styled.div`
  width: 230px;
  height: 150px;
  margin: 7px;
  background-color: white;
  border: 1.5px solid black;
  border-radius: 14px;
  font-size: 18px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

import styled from "@emotion/styled";
import KakaoMap from "./utils/KakaoMap";
import BackButton from "../../commons/BackButton";
import { useEffect, useState } from "react";

export default function PharmacyContainer() {
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
              <p style={{ fontWeight: "bold" }}>공덕약국</p>
              <p>4.3점</p>
              <p>거리 300M</p>
            </Hospital>
            <Hospital>
              <p style={{ fontWeight: "bold" }}>02</p>
              <p style={{ fontWeight: "bold" }}>마포약국</p>
              <p>4.0점</p>
              <p>거리 400M</p>
            </Hospital>
            <Hospital>
              <p style={{ fontWeight: "bold" }}>03</p>
              <p style={{ fontWeight: "bold" }}>우리약국</p>
              <p>4.3점</p>
              <p>거리 500M</p>
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

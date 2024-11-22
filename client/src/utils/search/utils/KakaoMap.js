import { useEffect, useState } from "react";
import Bar from "./Bar";
import styled from "@emotion/styled";

export default function KakaoMap({ setIsTime }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setIsTime(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const container = document.getElementById("map");

    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const mapInstance = new window.kakao.maps.Map(container, options);
    setMap(mapInstance);

    return () => {
      setMap(null);
    };
  }, []);

  useEffect(() => {
    if (!debouncedSearchTerm || !map) return;

    const searchPlace = (keyword) => {
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(keyword, (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const position = new window.kakao.maps.LatLng(data[0].y, data[0].x);
          const marker = new window.kakao.maps.Marker({
            position: position,
          });

          marker.setMap(map);

          const infoWindow = new window.kakao.maps.InfoWindow({
            content: `<div style='padding:5px;'>${data[0].place_name}</div>`,
          });

          window.kakao.maps.event.addListener(marker, "click", () => {
            infoWindow.open(map, marker);
          });

          map.setCenter(position);
        } else {
          alert("검색된 장소가 없습니다.");
        }
      });
    };

    searchPlace(debouncedSearchTerm);
  }, [debouncedSearchTerm, map]);

  return (
    <>
      <Wrapper>
        <Bar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="장소를 
        검색하세요"
        />
      </Wrapper>
      <div
        id="map"
        style={{
          width: "860px",
          height: "507px",
          border: "1px solid black",
          borderRadius: "14px",
          marginTop: "50px",
        }}
      ></div>
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f736fc6b7ff09b784d9cb8d9ac1bed76&libraries=services"
      ></script>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #1c1c1c;
  border-radius: 14px;
  display: flex;
  align-items: center;
  height: 80px;
`;

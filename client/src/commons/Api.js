// pages/api-call.js
import { useState } from "react";

export default function APICallExample() {
  const [responseData, setResponseData] = useState(null);

  const callAPI = async () => {
    const url = new URL("http://3.36.98.189:8080/signUp");

    // GET 요청에 필요한 데이터를 URLSearchParams로 추가
    const params = {
      username: "hi",
      password: "123",
      confirmedPassword: "123",
    };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    try {
      const response = await fetch(url.toString(), {
        method: "GET", // GET 요청
        headers: {
          "Content-Type": "application/json", // JSON 형식의 데이터를 요청
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // 응답을 JSON으로 변환
      setResponseData(data);
    } catch (error) {
      console.error("Error while calling API:", error);
    }
  };

  return (
    <div>
      <h1>Server API Test</h1>
      <button onClick={callAPI}>Call API</button>
      <pre>
        {responseData
          ? JSON.stringify(responseData, null, 2)
          : "No response yet"}
      </pre>
    </div>
  );
}

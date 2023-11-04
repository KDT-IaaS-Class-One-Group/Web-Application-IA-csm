const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");

const app = express();
const port = 3000;

app.use(express.static("public")); // 정적 파일 서비스

app.get("/search", (req, res) => {
  const searchTerm = req.query.searchTerm; // 검색어를 쿼리 파라미터로 받음
  const results = [];

  fs.createReadStream("../data/cpu.csv")
    .pipe(csv())
    .on("data", (row) => {
      // CSV 파일에서 데이터 읽어오기
      if (row.name.includes(searchTerm)) {
        results.push(row);
      }
    })
    .on("end", () => {
      res.json(results); // JSON 형식으로 결과 반환
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
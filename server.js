import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

app.get("/products", async (req, res) => {
    try {
        // Fakestore API'ye istek gönder
        const response = await axios.get("https://fakestoreapi.com/products");

        // Başarılı yanıtı gönder
        res.json(response.data);
    } catch (error) {
        // Hata durumunda 500 döndür
        console.error("API request failed:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(5000, () => console.log("Proxy server running on http://localhost:5000"));

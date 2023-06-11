const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes/mainRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const brandRoutes = require("./routes/brandRoutes");
const commentRoutes = require("./routes/commentRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const nextCartRoutes = require("./routes/nextCartRoutes");
const sliderRoutes = require("./routes/slider");
const bannerRoutes = require("./routes/bannerRoutes");
const productImgRoutes = require("./routes/productImgRoutes");
const productFeatureRoutes = require("./routes/productFeatureRoutes");
const positiveCommentRoutes = require("./routes/positiveCommentRoutes");
const negativeCommentRoutes = require("./routes/negativeCommentRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api/main", mainRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/nextCart", nextCartRoutes);
app.use("/api/slider", sliderRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/productImg", productImgRoutes);
app.use("/api/productFeature", productFeatureRoutes);
app.use("/api/positiveComment", positiveCommentRoutes);
app.use("/api/negativeComment", negativeCommentRoutes);

app.listen(3000, () => console.log("run on port 3000"));

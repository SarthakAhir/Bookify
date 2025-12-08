const express = require("express");
const app = express();
const port = 8080
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");


const mongo_url = "mongodb://127.0.0.1:27017/bookify";

main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});

async function main() {
    await mongoose.connect(mongo_url);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//Index
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    // render by view name (no extension) so the configured engine is used
    res.render("listings/index", { allListings });
});

// New Listing Form
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

app.post("/listings", async (req, res) => {
   // let {title, description, image, price, location, country} = req.body;
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

// Show Routs
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});

// Edit Route
app.get("/listings/:id/edit", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
});

// Update Route
app.put("/listings/:id", async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
});

// Delete Route
app.delete("/listings/:id", async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

console.log("hii");
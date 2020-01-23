require('dotenv').config(); 
var express         =require("express"),
    app             =express(),
    bodyParser      =require("body-parser"),
    mongoose        =require("mongoose"),
    flash           =require("connect-flash"),
    passport        =require("passport"),
    LocalStrategy   =require("passport-local"),
    methodOverride  =require("method-override"),
    Campground      =require("./models/campground"),
    Comment         =require("./models/comment"),
    User            =require("./models/user"),
    seedDB          =require("./seeds");
    
 // ----------------------- REQUIRING ROUTES -----------------------  
 var commentRoutes      =require("./routes/comments"),
     campgroundRoutes   =require("./routes/campgrounds"),
     indexRoutes        =require("./routes/index");    


//-------- APP CONFIG --------
/*
mongoose.connect("mongodb://localhost/yelp_camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
*/

mongoose.connect(process.env.MONGOOSE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to DB??')
}).catch(err => {
    console.log('ERROR:', err.message);
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
//seedDB();  -----SEED DB
app.use(flash());

//-------- MOMENT CONFIG --------
app.locals.moment= require('moment');

//-------- PASSPORT CONFIG --------
app.use(require("express-session")({
    secret: "Accio",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
    res.locals.currentUser= req.user;
    res.locals.error= req.flash("error");
    res.locals.success= req.flash("success");
    next();
});

app.use(indexRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);



app.listen(process.env.PORT || 3000, function() {
    console.log("YelpCamp server has started");
}); 
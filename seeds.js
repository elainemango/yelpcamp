var mongoose        =require("mongoose"),
    Campground      =require("./models/campground"),
    Comment         =require("./models/comment");
/*
var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Vel fringilla est ullamcorper eget. Sagittis eu volutpat odio facilisis mauris sit amet. Dui vivamus arcu felis bibendum ut tristique. Faucibus scelerisque eleifend donec pretium. Mi quis hendrerit dolor magna eget. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Id ornare arcu odio ut sem nulla pharetra diam. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Velit laoreet id donec ultrices tincidunt arcu. Sed elementum tempus egestas sed sed."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Vel fringilla est ullamcorper eget. Sagittis eu volutpat odio facilisis mauris sit amet. Dui vivamus arcu felis bibendum ut tristique. Faucibus scelerisque eleifend donec pretium. Mi quis hendrerit dolor magna eget. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Id ornare arcu odio ut sem nulla pharetra diam. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Velit laoreet id donec ultrices tincidunt arcu. Sed elementum tempus egestas sed sed."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Vel fringilla est ullamcorper eget. Sagittis eu volutpat odio facilisis mauris sit amet. Dui vivamus arcu felis bibendum ut tristique. Faucibus scelerisque eleifend donec pretium. Mi quis hendrerit dolor magna eget. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Id ornare arcu odio ut sem nulla pharetra diam. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Velit laoreet id donec ultrices tincidunt arcu. Sed elementum tempus egestas sed sed."
    }
]
 */
function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){ /*
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, data){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    data.comments.push(comment);
                                    data.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        }); */
    }); 
}

module.exports = seedDB;
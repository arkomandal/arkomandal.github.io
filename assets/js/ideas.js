//should do manually. not by date
let upcoming_posts = [
    "mqtt",
    "socket",
    "nodejs event emitter",
    "network protocols",
    "live streams",
    "one to one chat",
    "angular best practices", //in angular cheet sheet
    "firebase push notification",
    "configuring apache",
    "apache vs nginx vs tomcat",
    "introduction to git",
    "introduction to docker",
    "oAuth2"
];

const ideas = [
    "angular ivy is just angular \"IV\"",
    "the next gen might see the emails the way we see postal cards these days",
    "dare not to mix AI with RPA",
    "sockets may fail, MQTT never"
];

let occassions = [
    {
        date: "2020-11-14",
        message: `happy diwali <i style="color: gold" class="fa fa-fire fa-x" aria-hidden="true"></i>`
    },
    {
        date: "2020-12-25",
        message: `merry christmas <i style="color: green" class="fa fa-gift fa-x" aria-hidden="true"></i>`
    },
    {
        date: "2021-01-01",
        message: `happy new year <i style="color: green" class="fa fa-gift fa-x" aria-hidden="true"></i>`
    }
];

let today = new Date();
let is_occassion = occassions.find(occassion => {
    let ocd = new Date(occassion.date)
    if (today.getDate() === ocd.getDate() &&
        today.getMonth() === ocd.getMonth() &&
        today.getFullYear() === ocd.getFullYear()
    ) return occassion;
});
if (is_occassion) {
    document.getElementById("current_idea").innerHTML = is_occassion.message;
}
else {
    //setting single random idea
    if (document.getElementById("current_idea"))
        document.getElementById("current_idea").innerHTML =
            ideas[Math.floor(Math.random() * ideas.length)];
}

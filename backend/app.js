var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const tournamentRouter=require('./routes/tournamentRoutes')
const authRouter = require('./routes/authRoutes')

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/tournaments',tournamentRouter)
app.use('/api/user',authRouter)
// app.use('/users', usersRouter);

//testing
app.get('/api/testing',(req,res)=>{
  res.status(200).json([
    {
        "title": "Hong Kong women&#x2019;s ice hockey team urges city not to cut funds for sport over national anthem blunder",
        "link": "https://www.scmp.com/news/hong-kong/society/article/3216709/hong-kong-womens-ice-hockey-team-urges-city-not-cut-funds-sport-over-national-anthem-blunder",
        "image": "https://cdn.i-scmp.com/sites/default/files/styles/1280x720/public/d8/images/canvas/2023/04/11/44e6b954-246f-4594-9214-28672b438049_2505b693.jpg?itok=03toDd5E",
        "pubDate": "Tue, 11 Apr 2023 21:18:27 +0800",
        "source": "scmp",
        "category": "Sport"
    },
    {
        "title": "Premier League relegation odds: Bookies reveal which clubs are most likely to go down this season",
        "link": "https://www.thesun.co.uk/sport/betting-tips/18729746/premier-league-relegation-odds-betfair-football-betting/",
        "image": "https://www.thesun.co.uk/wp-content/uploads/2022/09/GettyImages-1128064196-1.jpg",
        "pubDate": "Tue, 11 Apr 2023 13:00:00 +0000",
        "source": "thesun",
        "category": "Sport"
    },
    {
        "title": "How Man Utd stars facing axe would challenge for Europe as a stand-alone XI with De Gea, Maguire &#038; Martial",
        "link": "https://www.thesun.co.uk/sport/22005307/man-utd-axe-stars-starting-xi-martial-maguire-degea/",
        "image": "https://www.thesun.co.uk/wp-content/uploads/2023/04/the-sun-22-23-starting-xi-43968171-30d2-41c6-baae-db0fb4967f4c.png?strip=all&amp;amp;w=960  alt=   class= alignnone size-thesun-article-image wp-image-22005405  width= 960  height= 960  /&gt;&lt;/a&gt;&lt;figcaption class= wp-caption-text &gt;Here&amp;#8217;s how the stars facing the axe may look as a team on paper&lt;/figcaption&gt;&lt;figcredit&gt;&lt;/figcredit&gt;&lt;/figure&gt;\n\n\n\n&lt;figure id= attachment_22005776  class= wp-caption alignnone  style= width: 970px &gt;&lt;img loading= lazy   https://www.thesun.co.uk/wp-content/uploads/2023/04/d1394cbc-5dab-49c0-8b76-ebc76c84618f.jpg",
        "pubDate": "Tue, 11 Apr 2023 13:15:07 +0000",
        "source": "thesun",
        "category": "Sport"
    },
    {
        "title": "How Wrexham owner Ryan Reynolds and Blake Lively built incredible £370m fortune &#8211; from gin to Gucci and Gossip Girl",
        "link": "https://www.thesun.co.uk/sport/22003860/ryan-reynolds-blake-lively-net-worth-wrexham-films-deals/",
        "image": "https://www.thesun.co.uk/wp-content/uploads/2023/04/wrexham-owner-hollywood-actor-ryan-806351480.jpg",
        "pubDate": "Tue, 11 Apr 2023 13:13:01 +0000",
        "source": "thesun",
        "category": "Sport"
    },
    {
        "title": "Michael Salisbury dropped for weekend matches after Brighton penalty controversy",
        "link": "https://www.independent.co.uk/sport/football/stuart-attwell-pgmol-brighton-howard-webb-var-b2317755.html",
        "image": "https://static.independent.co.uk/2023/04/11/13/e994e4fae451c3016501033970450979Y29udGVudHNlYXJjaGFwaSwxNjgxMjk5NjEx-2.71426852.jpg?width=1200&amp;auto=webp",
        "pubDate": "Tue, 11 Apr 2023 12:49:53 GMT",
        "source": "independent",
        "category": "Sport"
    },
    {
        "title": "Police probing threatening messages sent to ref Kevin Clancy after Old Firm game",
        "link": "https://www.independent.co.uk/sport/football/police-scottish-football-association-police-scotland-old-firm-kevin-b2317780.html",
        "image": "https://static.independent.co.uk/2023/04/11/14/887fe20c1dcaa9ad982b15422f84d63bY29udGVudHNlYXJjaGFwaSwxNjgxMzAxOTYx-2.71670800.jpg?width=1200&amp;auto=webp",
        "pubDate": "Tue, 11 Apr 2023 12:53:34 GMT",
        "source": "independent",
        "category": "Sport"
    },
    {
        "title": "Manchester United bidders left in the dark by mysterious Glazers",
        "link": "https://www.independent.co.uk/sport/football/manchester-united-takeover-news-bids-glazers-b2317779.html",
        "image": "https://static.independent.co.uk/2022/11/23/04/093f901b33711a4a3f17dcbf5d6e0095Y29udGVudHNlYXJjaGFwaSwxNjY5MjQyNjYw-2.59859936.jpg?width=1200&amp;auto=webp",
        "pubDate": "Tue, 11 Apr 2023 13:01:14 GMT",
        "source": "independent",
        "category": "Sport"
    },
    {
        "title": "Grand National 2023: &apos;Animal Rising&apos; plead for people to join protest amid plan to sabotage race",
        "link": "https://www.mirror.co.uk/sport/horse-racing/grand-national-aintree-protest-groups-29681868",
        "image": "https://i2-prod.mirror.co.uk/incoming/article29681847.ece/ALTERNATES/s615/0_GettyImages-1390462042.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:47:58 +0000",
        "source": "dailymirror",
        "category": "Sport"
    },
    {
        "title": "Paul Gascoigne claims he has &#8216;died a couple of times&#8217; after battling demons but is now &#8216;not scared of anything&#8217;",
        "link": "https://www.thesun.co.uk/sport/22004940/paul-gascoigne-died-coma-alcohol-england/",
        "image": "https://www.thesun.co.uk/wp-content/uploads/2023/04/94684d38-96d5-4e40-a371-0d14345f2250.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:56:01 +0000",
        "source": "thesun",
        "category": "Sport"
    },
    {
        "title": "Manchester United win the race to sign highly-rated Aston Villa teenager Evie Rabjohn",
        "link": "https://www.dailymail.co.uk/sport/football/article-11960471/Manchester-United-win-race-sign-highly-rated-Aston-Villa-teenager-Evie-Rabjohn.html",
        "image": "https://i.dailymail.co.uk/1s/2023/04/11/13/69702911-0-image-m-4_1681216030383.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:40:16 GMT",
        "source": "dailymail",
        "category": "Sport"
    },
    {
        "title": "LuaLua caused a rule change and Courtois led to a £5million dispute &#8211; 5 loan stars who haunted their parent clubs",
        "link": "https://www.thesun.co.uk/sport/22004281/champion-league-lualua-rule-courtois-loan-parent-club/",
        "image": "https://www.thesun.co.uk/wp-content/uploads/2023/04/joao-cancelo-bayern-munich-controls-808713941.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:50:01 +0000",
        "source": "thesun",
        "category": "Sport"
    },
    {
        "title": "Woman convicted following racist rant against Colombia&#39;s first Black vice president",
        "link": "https://www.nbcnews.com/news/latino/woman-convicted-racist-rant-colombias-first-black-president-rcna79097",
        "image": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-04/230411-Francia-Marquez-mb-1338-11d3e5.jpg type=image/jpeg",
        "pubDate": "Tue, 11 Apr 2023 12:50:31 GMT",
        "source": "nypost",
        "category": "Sport"
    },
    {
        "title": "Ronnie O&apos;Sullivan identifies eight players who could stop him winning record world title",
        "link": "https://www.mirror.co.uk/sport/other-sports/snooker/ronnie-osullivan-snooker-world-championship-29681386",
        "image": "https://i2-prod.mirror.co.uk/incoming/article29681449.ece/ALTERNATES/s615/0_2023-World-Grand-Prix.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:37:54 +0000",
        "source": "dailymirror",
        "category": "Sport"
    },
    {
        "title": "Jorge Masvidal responds to cheating accusations from UFC rival Gilbert Burns",
        "link": "https://www.mirror.co.uk/sport/other-sports/mma/jorge-masvidal-ufc-mma-news-29681799",
        "image": "https://i2-prod.mirror.co.uk/incoming/article29681593.ece/ALTERNATES/s615/0_JS296242003.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:43:17 +0000",
        "source": "dailymirror",
        "category": "Sport"
    },
    {
        "title": "Laura Woods hits nail on the head over  failure  claim if Arsenal don&apos;t win Premier League",
        "link": "https://www.mirror.co.uk/sport/football/news/laura-woods-hits-nail-head-29681495",
        "image": "https://i2-prod.mirror.co.uk/incoming/article29681713.ece/ALTERNATES/s615/0_lw.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:45:44 +0000",
        "source": "dailymirror",
        "category": "Sport"
    },
    {
        "title": "Grand National braced for chaos as animal rights group 'planning to stop race' at Aintree",
        "link": "https://www.express.co.uk/sport/horseracing/1757019/Grand-National-animal-rights-planning-stop-race-Aintree",
        "image": "https://cdn.images.express.co.uk/img/dynamic/74/590x/1757019_1.jpg",
        "pubDate": "Tue, 11 Apr 2023 13:44:00 +0100",
        "source": "dexpress",
        "category": "Sport"
    },
    {
        "title": "Aintree Grand National 2023: Get £30 in free bets for horse racing with Bet UK",
        "link": "https://www.thesun.co.uk/sport/22004999/horse-racing-bet-uk-new-customer-offer-free-bets/",
        "image": "https://www.thesun.co.uk/wp-content/uploads/2023/04/RW-BET-UK-COMP-11-APR-2.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:41:37 +0000",
        "source": "thesun",
        "category": "Sport"
    },
    {
        "title": "IAN HERBERT: Ben Foster's infectious enthusiasm is spreading right through Wrexham",
        "link": "https://www.dailymail.co.uk/sport/football/article-11960305/IAN-HERBERT-Ben-Fosters-infectious-enthusiasm-spreading-right-Wrexham.html",
        "image": "https://i.dailymail.co.uk/1s/2023/04/11/12/69701635-0-image-a-42_1681212987934.jpg",
        "pubDate": "Tue, 11 Apr 2023 11:49:18 GMT",
        "source": "dailymail",
        "category": "Sport"
    },
    {
        "title": "Carlo Ancelotti laughs off the idea of managing Chelsea 'again' ahead of Champions League clash",
        "link": "https://www.dailymail.co.uk/sport/football/article-11960361/Carlo-Ancelotti-laughs-idea-managing-Chelsea-ahead-Champions-League-clash.html",
        "image": "https://i.dailymail.co.uk/1s/2023/04/11/13/69702575-0-image-a-32_1681215238026.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:20:31 GMT",
        "source": "dailymail",
        "category": "Sport"
    },
    {
        "title": "Erik ten Hag told to 'SHUT UP' after the United boss' schedule complaints",
        "link": "https://www.dailymail.co.uk/sport/football/article-11960175/Furious-Abel-Ferreira-tells-Erik-ten-Hag-SHUT-United-boss-schedule-complaints.html",
        "image": "https://i.dailymail.co.uk/1s/2023/04/11/12/69700843-0-image-a-62_1681211128401.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:32:34 GMT",
        "source": "dailymail",
        "category": "Sport"
    },
    {
        "title": "Police launch investigation after threats made to Celtic vs Rangers referee",
        "link": "https://www.express.co.uk/sport/football/1757011/Police-investigation-Celtic-Rangers-referee-football-news",
        "image": "https://cdn.images.express.co.uk/img/dynamic/67/590x/1757011_1.jpg",
        "pubDate": "Tue, 11 Apr 2023 13:29:00 +0100",
        "source": "dexpress",
        "category": "Sport"
    },
    {
        "title": "Championship run-in: Burnley aiming for 100 points and relegation battle hots up",
        "link": "https://www.independent.co.uk/sport/football/burnley-sheffield-united-blackpool-qpr-reading-b2317765.html",
        "image": "https://static.independent.co.uk/2023/04/11/13/43b24b4d6e6ab259e8f15306a827cce7Y29udGVudHNlYXJjaGFwaSwxNjgxMjk4OTA0-2.71667911.jpg?width=1200&amp;auto=webp",
        "pubDate": "Tue, 11 Apr 2023 12:19:24 GMT",
        "source": "independent",
        "category": "Sport"
    },
    {
        "title": "Mac Jones faces difficult NFL future after devastating New England Patriots update",
        "link": "https://www.mirror.co.uk/sport/other-sports/american-sports/nfl-mac-jones-patriots-belichick-29681412",
        "image": "https://i2-prod.mirror.co.uk/incoming/article29681272.ece/ALTERNATES/s615/0_New-England-Patriots-v-Atlanta-Falcons.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:18:56 +0000",
        "source": "dailymirror",
        "category": "Sport"
    },
    {
        "title": "Asian Tour: Hong Kong&#x2019;s Taichi Kho happy for return to regular routine, as International Series arrives in Vietnam",
        "link": "https://www.scmp.com/sport/golf/article/3216705/asian-tour-hong-kongs-taichi-kho-happy-return-regular-routine-international-series-arrives-vietnam",
        "image": "https://cdn.i-scmp.com/sites/default/files/styles/1280x720/public/d8/images/canvas/2023/04/11/abfddd71-ea81-4d47-9187-6c7ee1c3ad84_e5a1b276.jpg?itok=Xn8gJWG7",
        "pubDate": "Tue, 11 Apr 2023 20:24:08 +0800",
        "source": "scmp",
        "category": "Sport"
    },
    {
        "title": "Novak Djokovic fires warning to Rafael Nadal as Serb gears up to take on his neighbours",
        "link": "https://www.express.co.uk/sport/tennis/1757007/Novak-Djokovic-Rafael-Nadal-French-Open-Monte-Carlo",
        "image": "https://cdn.images.express.co.uk/img/dynamic/72/590x/1757007_1.jpg",
        "pubDate": "Tue, 11 Apr 2023 13:20:00 +0100",
        "source": "dexpress",
        "category": "Sport"
    },
    {
        "title": "Elle Brooke vs Ola Danielka tale of the tape: How OnlyFans star and influencer compare ahead of Kingpyn fight",
        "link": "https://www.thesun.co.uk/sport/22003095/elle-brooke-ola-danielka-fight-compare/",
        "image": "https://www.thesun.co.uk/wp-content/uploads/2023/04/TOB-GRAPHIC-TOTT-ELLE-V-OLA.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:21:44 +0000",
        "source": "thesun",
        "category": "Sport"
    },
    {
        "title": "Why Margzetta Frazier&#x27;s final season with UCLA gymnastics was her most meaningful",
        "link": "https://www.latimes.com/sports/ucla/story/2023-04-11/ucla-margzetta-frazier-ncaa-championships",
        "image": "https://ca-times.brightspotcdn.com/dims4/default/b17f9e9/2147483647/strip/false/crop/4398x2474+0+0/resize/1500x844!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb5%2Fa2%2F991131064c3e8d2b3646be6bc47c%2Fucla-womens-gymnastics-73543.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:00:47 GMT",
        "source": "latimes",
        "category": "Sport"
    },
    {
        "title": "Stop sneering at Wrexham,s Hollywood millions – we should all be celebrating their push for promotion",
        "link": "https://www.independent.co.uk/sport/football/wrexham-fc-ryan-reynolds-promotion-b2317730.html",
        "image": "https://static.independent.co.uk/2023/04/11/12/newFile-3.jpg?width=1200&amp;auto=webp",
        "pubDate": "Tue, 11 Apr 2023 12:09:17 GMT",
        "source": "independent",
        "category": "Sport"
    },
    {
        "title": "Referee Michael Salisbury dropped for next round of Premier League fixtures",
        "link": "https://www.independent.co.uk/sport/football/stuart-attwell-premier-league-var-howard-webb-brighton-b2317755.html",
        "image": "https://static.independent.co.uk/2023/04/11/13/e994e4fae451c3016501033970450979Y29udGVudHNlYXJjaGFwaSwxNjgxMjk5NjEx-2.71426852.jpg?width=1200&amp;auto=webp",
        "pubDate": "Tue, 11 Apr 2023 11:56:38 GMT",
        "source": "independent",
        "category": "Sport"
    },
    {
        "title": "Champions League football sign-up offer: Get £30 in free bets to use TODAY with Bet UK",
        "link": "https://www.thesun.co.uk/sport/20468877/football-sign-up-offer-free-bets-bet-uk/",
        "image": "https://www.thesun.co.uk/wp-content/uploads/2022/11/21_43_p_gorodenkoff-082-JS775418261-1-1.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:00:00 +0000",
        "source": "thesun",
        "category": "Sport"
    },
    {
        "title": "Watch as terrified Maxwel Cornet flees from huge dog at training ground while West Ham pals laugh their heads off",
        "link": "https://www.thesun.co.uk/sport/22004043/maxwel-cornet-dog-west-ham-fabianski/",
        "image": "https://www.thesun.co.uk/wp-content/uploads/2023/04/west-hams-maxwel-cornet-chased-809205154.jpg",
        "pubDate": "Tue, 11 Apr 2023 11:59:59 +0000",
        "source": "thesun",
        "category": "Sport"
    },
    {
        "title": "Macron sparks outrage by suggesting Europe take independent stance from U.S. on Taiwan",
        "link": "https://www.nbcnews.com/news/world/macron-europe-china-taiwan-usa-outrage-rcna79090",
        "image": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-04/230411-macron-china-mb-0829-ff0521.jpg type=image/jpeg",
        "pubDate": "Tue, 11 Apr 2023 11:56:26 GMT",
        "source": "nypost",
        "category": "Sport"
    },
    {
        "title": "Meet the Mainz wonderkid so good David Beckham demanded information on him after competing against Romeo",
        "link": "https://www.thesun.co.uk/sport/22002080/nelson-weiper-mainz-wonderkid-david-beckham/",
        "image": "https://www.thesun.co.uk/wp-content/uploads/2023/04/GETTY_1-FSV-Mainz-05-v-1-FC-Koeln-A-Juniors-German-Championship-Semi-Final-Leg-One_SPO_GYI148097-J.jpg",
        "pubDate": "Tue, 11 Apr 2023 11:55:38 +0000",
        "source": "thesun",
        "category": "Sport"
    },
    {
        "title": "Max Verstappen hits back at Lewis Hamilton over  incorrect  Red Bull claim",
        "link": "https://www.mirror.co.uk/sport/formula-1/max-verstappen-lewis-hamilton-f1-29680920",
        "image": "https://i2-prod.mirror.co.uk/incoming/article29681102.ece/ALTERNATES/s615/0_MAIN-F1-Grand-Prix-of-Saudi-Arabia-Qualifying.jpg",
        "pubDate": "Tue, 11 Apr 2023 11:44:30 +0000",
        "source": "dailymirror",
        "category": "Sport"
    },
    {
        "title": "Grand National 2023 sweepstake kit: Download your FREE printable runners list for Saturday&#8217;s big race",
        "link": "https://www.thesun.co.uk/sport/22003899/grand-national-sweepstake-kit-print-runners-list/",
        "image": "https://www.thesun.co.uk/wp-content/uploads/2023/04/takes-water-jump-goes-wins-725038073.jpg",
        "pubDate": "Tue, 11 Apr 2023 11:54:11 +0000",
        "source": "thesun",
        "category": "Sport"
    },
    {
        "title": "Inside Erling Haaland,s incredible car collection including £300k Rolls Royce and luxurious £120k Audi RS 6 Avant",
        "link": "https://www.thesun.co.uk/sport/22003520/erling-haaland-car-collection-manchester-city/",
        "image": "https://www.thesun.co.uk/wp-content/uploads/2023/04/manchester-citys-erling-haaland-media-809212337.jpg",
        "pubDate": "Tue, 11 Apr 2023 11:54:20 +0000",
        "source": "thesun",
        "category": "Sport"
    },
    {
        "title": "Watch: Sandstorms force Beijing to issue pollution health warning",
        "link": "https://www.nbcnews.com/video/sandstorms-force-beijing-to-issue-pollution-health-warning-169866821531",
        "image": "",
        "pubDate": "Tue, 11 Apr 2023 10:59:50 GMT",
        "source": "nypost",
        "category": "Sport"
    },
    {
        "title": "Premier League axe second official in wake of Anfield assistant's alleged elbow incident",
        "link": "https://www.express.co.uk/sport/football/1756995/Premier-League-axe-second-official-Anfield-elbow-Robertson",
        "image": "https://cdn.images.express.co.uk/img/dynamic/67/590x/1756995_1.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:47:00 +0100",
        "source": "dexpress",
        "category": "Sport"
    },
    {
        "title": "High-profile businessman John Dance no longer co-owner of Bravemansgame amid probe into his business",
        "link": "https://www.thesun.co.uk/sport/22003962/john-dance-no-longer-owner-bravemansgame-aintree-vertem-probe/",
        "image": "https://www.thesun.co.uk/wp-content/uploads/2023/03/GETTY_Cheltenham-Festival-2023-Day-Four_SPO_GYI1474171457jpg-JS803787041.jpg",
        "pubDate": "Tue, 11 Apr 2023 11:44:45 +0000",
        "source": "thesun",
        "category": "Sport"
    },
    {
        "title": "Bronny James given two instructions by dad LeBron during last high school match",
        "link": "https://www.mirror.co.uk/sport/other-sports/american-sports/nba-bronny-lebron-james-college-29680736",
        "image": "https://i2-prod.mirror.co.uk/incoming/article29680688.ece/ALTERNATES/s615/0_dja230328mcdaag136-0_566.jpg",
        "pubDate": "Tue, 11 Apr 2023 11:35:07 +0000",
        "source": "dailymirror",
        "category": "Sport"
    },
    {
        "title": "Jake Paul explains true motivation behind desire to beat YouTube rival KSI",
        "link": "https://www.mirror.co.uk/sport/boxing/jake-paul-ksi-boxing-fight-29681110",
        "image": "https://i2-prod.mirror.co.uk/incoming/article28939462.ece/ALTERNATES/s615/0_KSI-FULL-MEDIA-WORKOUT-KSI-shows-his-skills-ahead-of-fight-against-Faze-Temper-Misfits-Boxing.jpg",
        "pubDate": "Tue, 11 Apr 2023 11:38:20 +0000",
        "source": "dailymirror",
        "category": "Sport"
    },
    {
        "title": "Pep Guardiola proved a point with Bayern Munich - now Man City boss must do so again",
        "link": "https://www.mirror.co.uk/sport/football/news/manchester-city-bayern-champions-league-29679960",
        "image": "https://i2-prod.mirror.co.uk/incoming/article29681059.ece/ALTERNATES/s615/1_Untitled-1.jpg",
        "pubDate": "Tue, 11 Apr 2023 11:40:22 +0000",
        "source": "dailymirror",
        "category": "Sport"
    },
    {
        "title": "Everton and &#x27;the Grand Old Lady&#x27; are stung by relegation threat and fan upheaval",
        "link": "https://www.latimes.com/sports/soccer/story/2023-04-11/everton-goodison-park-fans-protest-premier-league",
        "image": "https://ca-times.brightspotcdn.com/dims4/default/acb49a2/2147483647/strip/false/crop/7316x4877+0+0/resize/1500x1000!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F15%2Fad%2Fde51951f4951b9178d0aafdb818c%2Fbritain-soccer-premier-league-76203.jpg",
        "pubDate": "Tue, 11 Apr 2023 11:30:58 GMT",
        "source": "latimes",
        "category": "Sport"
    },
    {
        "title": "Bournemouth star ‘banished from first team, despite relegation battle after ‘opening talks over free transfer,",
        "link": "https://www.thesun.co.uk/sport/22004216/bournemouth-banished-relegation-zemura-transfer/",
        "image": "https://www.thesun.co.uk/wp-content/uploads/2023/04/f028b699-1d96-4b36-b132-0435aaabe9ad.jpg",
        "pubDate": "Tue, 11 Apr 2023 11:42:00 +0000",
        "source": "thesun",
        "category": "Sport"
    },
    {
        "title": "Boxer Ricky Hatton, 44, denies taking cocaine after he was filmed with white powder on his nose",
        "link": "https://www.dailymail.co.uk/news/article-11959711/Boxer-Ricky-Hatton-44-denies-taking-cocaine-filmed-white-powder-nose.html",
        "image": "https://i.dailymail.co.uk/1s/2023/04/11/09/69695353-0-image-m-113_1681201040166.jpg",
        "pubDate": "Tue, 11 Apr 2023 10:27:53 GMT",
        "source": "dailymail",
        "category": "Sport"
    },
    {
        "title": "Max Verstappen fires back at 'incorrect' Lewis Hamilton over claims about his Red Bull",
        "link": "https://www.dailymail.co.uk/sport/formulaone/article-11960229/Max-Verstappen-fires-incorrect-Lewis-Hamilton-claims-Red-Bull.html",
        "image": "https://i.dailymail.co.uk/1s/2023/04/11/12/69700793-0-image-a-58_1681211055528.jpg",
        "pubDate": "Tue, 11 Apr 2023 11:09:49 GMT",
        "source": "dailymail",
        "category": "Sport"
    },
    {
        "title": "Premier League referee Stuart Attwell has survived the axe after officiating howler against Brighton",
        "link": "https://www.dailymail.co.uk/sport/football/article-11960291/Premier-League-referee-Stuart-Attwell-survived-axe-officiating-howler-against-Brighton.html",
        "image": "https://i.dailymail.co.uk/1s/2023/04/11/12/69701347-0-image-a-15_1681212119862.jpg",
        "pubDate": "Tue, 11 Apr 2023 11:38:24 GMT",
        "source": "dailymail",
        "category": "Sport"
    },
    {
        "title": "Emma Raducanu shares dream of copying Lewis Hamilton after being mentored by F1 star",
        "link": "https://www.express.co.uk/sport/tennis/1756971/Emma-Raducanu-Lewis-Hamilton-F1-Porsche",
        "image": "https://cdn.images.express.co.uk/img/dynamic/72/590x/1756971_1.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:12:00 +0100",
        "source": "dexpress",
        "category": "Sport"
    },
    {
        "title": "Carlo Ancelotti drops major hint over who will be the next full-time Chelsea manager",
        "link": "https://www.express.co.uk/sport/football/1756984/Real-Madrid-Carlo-Ancelotti-Chelsea-Champions-League",
        "image": "https://cdn.images.express.co.uk/img/dynamic/67/590x/1756984_1.jpg",
        "pubDate": "Tue, 11 Apr 2023 12:32:00 +0100",
        "source": "dexpress",
        "category": "Sport"
    },
    {
        "title": "Why does Wrexham play in the English football league pyramid and not in Wales&#8217; leagues?",
        "link": "https://www.thesun.co.uk/sport/22002029/wales-wrexham-english-football-league-wales/",
        "image": "https://www.thesun.co.uk/wp-content/uploads/2023/04/RTRMADP_SOCCER-ENGLAND-WXH-NOT-REPORT_1800705057_UP1EJ4A19276X_2023-04-10T161321Zjpg-JS809062031.jpg",
        "pubDate": "Tue, 11 Apr 2023 11:27:50 +0000",
        "source": "thesun",
        "category": "Sport"
    }
])
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

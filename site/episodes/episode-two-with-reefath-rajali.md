---
title:  "From Hackathon to Foundational Performance with Reefath Rajali"
episode-slug: "12c2ed8c-3857-413b-a976-7f33d051b079"
sponsorName: "SpeedCurve"
sponsorImageAlt: "Image of the SpeedCurve logo and an animated 6-eyed monster holding up a phone"
guestPhoto: "/guests/reefath-rajali"
guestName: "Reefath Rajali"
episodeNum: 2
lede: |
  Many people want their organization to prioritize performance, but where do you start? In this episode, Reefath Rajali—a mobile developer advocate at PayPal—talks about PayPal's performance journey, starting with a simple, lightweight prototype built during a hackathon. She discusses the hard work and challenges that went into getting organizational buy-in and the cultural changes necessary to make performance a foundational principle.
links:
 - url: https://twitter.com/Rajali
   text: "Reefath Rajali on Twitter"
 - url: https://www.polymer-project.org/
   text: "Polymer"
 - url: https://reactjs.org/
   text: "React"
 - url: https://babeljs.io/
   text: "Babel"
 - url: https://larahogan.me/blog/celebrate-achievements/
   text: "Celebrating our achievements by Lara Hogan"
 - url: https://developers.google.com/web/tools/lighthouse
   text: Lighthouse
 - url: https://www.catchpoint.com/
   text: Catchpoint
 - url: https://perfmattersconf.com/
   text: "#perfmatters Conference"
 - url: https://medium.com/paypal-engineering
   text: PayPal Engineering Blog
sponsorImage: "/sponsors/speedcurve_herman"
sponsorBlurb: |
  See how real people experience the speed of your website. Then use SpeedCurve's synthetic and real user monitoring solutions to find (and fix!) your web performance problems. Companies like Ancestry, BBC, Casper, Expedia, Shopify, and Zillow use SpeedCurve to create faster, more joyous experiences for their visitors.
sponsorLink: "https://speedcurve.com"
---
Reefath:

: We have a new recruit to PayPal. We really wanted to make sure that they understand at that point in time that PayPal cares about performance––that when you start coding or when you start designing anything, performance has to be something that should be the founding principle of it and not an afterthought.

Tim:

: That was Reefath Rajali, and this is Chasing Waterfalls––a podcast featuring conversations with the people working to make the web faster for everyone. My name is Tim Kadlec, I’m a web performance consultant and your host.

: I do have to apologize a little bit for the audio on this one. So, before deciding to do the podcast, I went out and I invested in a nice mic and good equipment to make this sound as good as possible. And I was really excited! Reefath was the first person I contacted to interview; I knew right away I wanted her on the show. It was only after talking to her that I realized that my MacBook had defaulted to the built-in mic. The whole time I thought I was recording on this really nice equipment, it was just the built-in mic. So, [laughs] that means the audio on this one is a little quieter maybe, a little bit more echoey than it usually would be. Steph at EDITAUDIO did a really good job cleaning up as much as she could, but there's only so much magic she can perform.

: So, apologies, it’s not going to be the most pristine audio in the world. That being said, the conversation was way too good not to share. Reefath is…she's brilliant. [laughs] And she shares a ton of information around what PayPal has been doing now—some of the wins that they're finding.

: But also just one of my favorite things about the conversation was hearing how it all started. A lot of people are at that point where they’re like, “how do I get my organization to even care about performance?” and this story from PayPal is very much grassroots. Reefath talks about it originating from a hackathon project and then months and months of advocating performance to different people inside of different parts of the organization before this became a thing. So, it's a really great conversation.

: Before we get into it, I do just want to thank [SpeedCurve](https://speedcurve.com) again for sponsoring. As I've mentioned before, I’m a huge, huge fan of SpeedCurve; I’m very honored to have them sponsoring the podcast.

: And sort of piggybacking off of the conversation with Reefath, one of the things she brings up is she talks about the importance of tying these performance improvements to business metrics and getting A/B experiments and things like that up and running. To me, it’s one of the most important things you can do. If you want performance to stick around in your organization, eventually you have to show a benefit. You have to show some impact for the business, for the user for that to stick.

: So, one of the first things I recommend any organization do if they don't have it is get real user data in place and then find a way to connect that to user engagement and business metrics, so you can quickly see and identify a correlation. There's almost always a correlation, it just depends on where and which metrics and your particular situation.

: And SpeedCurve lets you do that. So, SpeedCurve’s real user monitoring offering is called LUX. And out of the box, LUX is going to track how you’re performing in the real world with a bunch of beautiful dashboards, including user engagement charts. So, right away you’re able to see a connection between things like start, render and bounce rate, for example. That's one that I see a lot with the clients that I’ve worked with. Those sorts of things.

: But where the real power comes in is through customizing that. So, LUX has an addData API. It's a one-line JavaScript call that you include in your snippet when you embed it in your page. And you can add any metric you want to that; you can add your cart size, you can add conversion rate, you can add A/B segment information. You can add user account information like account ID or username—things like that. Or you can add additional performance metrics; I use it for some performance-related headers and things like that.

: Where this comes in from a business perspective though is you can add things like your conversion data to LUX and then start to see a correlation between cart size and load time or start render and conversion rate. And those are really powerful connections to make because those are what's going to help you continue to get the resources that you need to have available to you to make performance a long term investment, rather than just a short spike here and there.

: So, again, you can use SpeedCurve. You can get a 30 day free trial with SpeedCurve if you go to [SpeedCurve.com](https://speedcurve.com)—I highly recommend checking it out. Immediately start adding some of those important metrics through the addData API, immediately identify what those connections are as early as possible because that's going to help you sustain those efforts. So, again, go to SpeedCurve.com to give that a shot and thank you again, SpeedCurve, for sponsoring. And now onto the conversation!

: So, Reefath, thanks for taking the time to talk to me; I was really looking forward to this conversation, I’m really glad it worked out. 

Reefath: 

: Same here, Tim. I mean, it’s my pleasure; thanks for having me. 

Tim:

: You’re at PayPal—what exactly do you do there? 

Reefath:

: I’m a Mobile Developer Advocate at PayPal. I work on all things performance. By that, I mean I work with the individual web application teams, the platform teams—finding solutions on how we can make them faster and how we can make our web pages accessible to everyone in the world. That is my unified goal at work. 

Tim:

: That sounds awesome. So, that’s everything! That’s web, that’s native, that’s not just one little piece of it. 

Reefath:

: Yeah, that’s right. We work very closely with the native team as well because we found a lot of problems are very common between the web application world and the native application in terms of what are the performance bottlenecks, and how do we fix and derive solutions that would work common for both the worlds. 

Tim:

: When you joined, were you immediately looking into performance? Were you on for that kind of role or is that something that happened a little later? 

Reefath:

: Oh no, I was a software engineer. I joined PayPal as a senior software engineer and I was more into web application development. And this transformation of role into a Mobile Developer Advocate happened a couple of years ago. This transition started when I personally developed a passion for performance and mostly into web application. I started working on an initiative. I spoke with my leadership and I started in my team and optimizing the web apps. I brought together the team and we showed some really great benefits that we could get out of performance. And then eventually, I transferred myself into the role because I found a great interest in and my heart was lying in improving performance and making an impact for the whole of the company and not very specific to one specific thing. That is how my role transferred to what I am today. 

Tim:

: There is a lot to unpack there. So, back that up. If you can remember back to when you developed the passion and started going with this. I get a lot of questions from people that are at that stage. They’re interested in performance or they’re sold on performance being something that they feel should be prioritized in their company, but then getting that buy-in from the other folks can be really challenging. What was that process like? How did you do that? How did you manage to take this from something that you were really passionate about, to something where the company saw the benefit and said, “yeah, you know what, we should be investing in this as an organization.” 

Reefath:

: Yeah, absolutely. So, every year I host a hackathon for my organization. So, I host and I also participate in the hackathon. So, me and my team, we went ahead and built a prototype called PayPal Light. We wanted to show to our leaders how a lighter version of PayPal could be beneficial to our customers and how this is something would also be driving up our revenue. So, that is how I actually started. And I indeed built the PayPal Light using [Polymer](https://www.polymer-project.org/). 

Tim:

: Oh, cool. 

Reefath:

: Yeah. PayPal is completely a React shop really wanted to see something, we also wanted to learn new in our hackathon, and we also wanted to create something new. So, this is where we got the ide idea of a progressive web apps. I started and the prototype that I built, we went ahead and we explained it to our leaders and we caught their attraction. So, everybody was looking into their codebase, but our idea was something out of it and we went into a larger picture of it.

: So, we again went back to our Vice President, we pitched the idea again because a ten minute was not enough. So, we had a thirty minute one-on-one and we explained to him very clearly about how this idea could actually transfer into a production and what would be the benefits in terms of our customer delight and in terms of our revenue actives.

: So, that is how this journey actually started and as you said, it was not an easy journey. We had a lot of challenges. Because it is a larger organization and to transform a hackathon idea into fruition, there are a lot of team players and companies about. We have our product, we have our analyst, we have our designers, and we have our engineering group. So, it’s like four or five teams we have to come together, agree, and every single stream has a different leader.

: So, it was more about talking to the leaders, convincing them. We first went to the engineering leaders and then we went to our product leader. Our pitch was totally different. When we went to our product leaders, we spoke more about the business numbers and the business benefits. When we spoke to our engineering leaders, it was more about our consumer delight—how and why it is really important to create a lighter version of whatever we are trying to do. And then when we go to our analysts, we really wanted to tell them about how they could tie the numbers and show there is a business benefit out of the performance optimization stuff we would be doing.

: So, it actually took us six months of time period to get this initiated. Initially, I was the only engineer that started to work on it and eventually I could bring my team together. And as I said, it became a larger initiative across the organization. Once we were able to do our changes in terms of an A/B testing—so, this was a huge win for us because all the theory that we are talking about like the performance that will drive our business numbers, we have to show the actual data for any leader or teams to be coming with us. 

Tim:

: Right. 

Reefath:

: That’s a lot of effort; it wasn’t easy to do performance optimization under an A/B testing. So, our team went for it and we were able to actually show the numbers, the prospects increase for the people who were coming under the lighter version of our web applications.

Tim:

: Okay. So you did end up shipping? PayPal Lite went out somewhere? Or were there experiments done with full-blown PayPal just with optimizations applied? 

Reefath:

: So, I started all this work in a consumer onboarding team. So, you can imagine there are n number of applications when you see a PayPal site. And we started this optimization on one single team. And when I’m talking about an A/B testing, we did not roll out a new application, we actually did a feature-based application. So, 50% of our traffic, we were showing a larger bundle, like an unoptimized and older version. And 50% of our traffic we were showing an optimized version of our JavaScript, an optimized version of our CSS. So, that’s how we were able to measure. 

Tim:

: Nice. That whole concept of showing the business benefit can be really tricky for a lot of folks too because like you said, it’s not an easy thing to set up a proper A/B experiment for something like performance, particularly if you have other features and other changes out there. So, how long do you run that experiment for and did you have to make sure that nothing else got shipped during that time? Do you have to isolate it in some way or how did that work out? 

Reefath:

: It was not necessarily that we had to stop the other experiments because we had 50/50 of our traffic. So, it’s all orthogonal experiments. Meaning for your 50% of your traffic, you will be able to see the other experiments that we are running and there is an equal opportunity for the other 50% of the traffic that you will be able to see the other features and the experiments that we are running. But as you called out, there was some of the optimization that we were not able to do it as an A/B testing. And what we actually could measure out of it was only a subset of the optimization that we were able to do. So, that is one thing that we have to take it with a pinch of salt. But another interesting thing that happened was there was a marketing team that also did some of the optimization, but they took another route. What they did was they did not do the way that our team worked on. 

Tim:

: Sure. 

Reefath:

: Our team was very genuinely doing an older version of the JavaScript to 50% and a newer version of the JavaScript to 50%. What they did was they performed all the optimization in the codebase and they introduced an artificial latency to a certain group of users. So, the work was easier for them because they know like when they start—say, for example, it was ten seconds and they had reduced it to six seconds. When they did an experiment, they added that extra four seconds; they introduced a latency. So, the work was easier and they were able to experiment and show us similar business benefits. So, really there are two options available and it is totally dependent to the teams to pick which one they would want to choose.

Tim:

: The artificial latency one is kind of interesting. You read sometimes about Google or these other organizations that do this. Like, “oh, we slowed it down just to see what happened!” In your case it sounds like—and I don’t want to pick too much on the example you gave—but you made it sound as if they’d made the optimizations and had a faster version and then slowed it down to what it used to be, not necessarily…so nobody was getting a slower experience here, right? It was improvements were made, we slow it down to compare the improvement versus this artificial delay that was roughly what they were getting anyway. Is that about right? 

Reefath:

: What I was trying to say was ten seconds, for example, it was taking for the marketing pages to load. Say all the optimization and they reduced it to say, for example, six seconds. But when they wanted to test it out and see what are the business benefits that they are getting from this ten second to six seconds, they introduced an artificial four-second latency for the users that are falling under their control. So, the control users were actually seeing a ten-second latency and the treatment users were seeing optimized six-second latency. So, we were also able to prove that the users that were seeing the ten-second latency had a larger drop-off. All the theory that we know about, like what are the disadvantages of having a larger time to interactive, we were able to prove that there were larger drops off. In the more optimized version, we were able to see more prospects coming in that were driving more of our revenue. 

Tim:

: That’s the kind of thing—when you can get that data, that just expedites the whole thing. Suddenly everybody is paying attention when they weren’t before. Is it still like that? Do you still run experiments pretty often? 

Reefath:

: So, these experiments, especially on the optimization—how long do we run and all that are decided by our analysts because they have around six to eight weeks of time period even to get a valid data and to have the pool of data for them to derive any conclusions out of it. So, after the six to eight weeks, the product owners usually decide do they really want to continue it or if they are able to see the business benefits, we would immediately shut it down because we have already an optimized version and there is clearly no meaning to show an unoptimized and a longer version to the users. So, it’s a team by team basis, but if you ask me, overall we have shut down these experiments once we have those numbers and once we are able to make the use case toward leadership to say that, “hey, we did these optimizations and these are the business benefits.” 

Tim:

: We had talked a little bit before and you mentioned I believe that you had been doing a lot of differential serving. Did that have to go through that experiment process as well? And what is the life cycle of that? Is it one of those things where you’re like “hey, this is a cool thing that sounds like it would be good for performance,” and then “let’s test it and see what happens and if it works, it goes to production.” Is that typically how it all works out? 

Reefath:

: Yeah, differential serving is something that we tried new in our send money team. So, one of our engineers uses differential serving and he was able to reduce it on 25KB of the JavaScript. 

Tim:

: Before we get too far into that—that’s fantastic savings—but before we get too far into it, I guess we should back up just in case anyone is listening who isn’t familiar with what differential serving is. Can you explain that quick? 

Reefath:

: So, we have our modern browsers and then we have our legacy browsers. So, all our modern browsers—it’s not necessarily that we have to send all of our [Babel](https://babeljs.io/) polyfills. The code for the Babel polyfill is not necessary for the modern browsers, but for our legacy browsers, they are not advanced enough to have these newer ES6 modern JavaScript.

: So, currently what is happening is most of our web application is that we are delivering our Babel polyfill to our modern browsers and to our legacy browsers. So, differential serving would help us create two different bundles. A leaner version for the more modern browsers because the support is already available and a little bit larger version including a Babel polyfill for the legacy browsers. So, that is the idea behind differential serving.

Tim:

: Perfect. So, you found that you saved 25KB GZip from your JavaScript bundle like this? 

Reefath:

: Yeah.

Tim:

: Nice. So, did you roll that out then and test that in production and was there a real-world impact that you could point to? I mean, I’m not going to put you on the spot, I don’t expect you to bust out business metrics, but were you able to see it made some noticeable impact? 

Reefath:

: So, we did not deliver just the differential serving in one release. Differential serving along with the other optimization—

Tim:

: Sure. 

Reefath:

: So, I may not be able to really point out and say this was a business benefit out of the differential serving, but when you start optimizing, you will come to a stage to count on even 1KB or 2KB or 5KB. So, that is the point every developer would reach to and a 22KB or a 25KB off JavaScript from differential serving [Tim laughs] was a huge win for us! I will take it that way. 

Tim:

: That is a big chunk in one shot, you’re right. And eventually, you get to that point to where if you’ve been doing this for a few years—I mean you said I think 2017 was when you built the light and kind of started on that route. If you’ve been at it a couple of years, those big optimizations become harder and harder to come by because you’ve taken care of a lot of that low-hanging fruit by then. So, anything like that is worth something! That’s one thing that [Lara Hogan has talked a lot about](https://larahogan.me/blog/celebrate-achievements/) you know when she was at Etsy, they always celebrated the big performance wins to get everybody excited. Is that something PayPal does? Anything like that?

Reefath:

: I think our celebration… I can explain to you how we celebrated.

Tim:

: Sure. 

Reefath:

: So, though we started this with one application—I started with my own team, a consumer on-boarding team—very quickly I figured out that I was expecting a large turn out for PayPal but it was not happening. What was happening is, you click on any widget in PayPal it is actually moving to another application. But I was optimizing one app but the other app was not optimizing, so we were seeing drop-offs, and it was not turning out to be what we were expecting. So we went to—I can’t remember, the leadership—and we said, 'Hey, you know what? We have to design solutions at scale, and we have to make sure that every single app at PayPal is performing'. Only then we can—like, everybody’s effort becomes fruitful and we will be able to see a larger impact.

: So our celebration was actually reforming our performance team under leadership paving the way for us to form this focused thing. I mean that is where I belong to right now, and very thankful to the PayPal leader and leadership that gave us an opportunity. To me, that was a huge celebration, because we announced in our all-hands and our leadership calls us one of the highest priorities for PayPal. That is was the actual celebration for us. 

Tim:

: Good, I get it. As a performance nut, I think that’s a fantastic celebration. So this is a recent development? Having a dedicated performance team. Now, the structure on that—the folks on the performance team. Do they come from—is there somebody each individual unit or team that’s representing that performance team or is there a dedicated team that that’s all they do is that performance stuff? How does structure kind of look like?

Reefath:

: That’s a great question. So, the members in my team, these people are hand-picked because we are very, very passionate about improving performance. So because in a large organization it’s not about always rolling out new applications—because starting something from the base is always good, but it is not always feasible. So our team focuses on, 'Okay, you have an existing application. How do you improve performance?' But at the same time, PayPal is all about moving, taking, and working along with technology benefits. So what could be the next generation framework for PayPal? So we’re not doing optimization, but everything is inbuilt.

: So my team is working on both the efforts—to help the teams, like, if you’re up for building something new, what is the framework you could use? But if you’re not up for building something new, how do you improve your performance in your existing application. We’re only a four member team, so how do we do this across scale, right? 

Tim:

: Yeah.

Reefath:

: We go ahead and hunt for people—we call them performance champions—in each of these teams. I have always found that one or two engineers in each team has a passion for performance, so we have identified them as our point of contact. So anything performance-related for their team, we put them responsible, and we work with them very closely as initiators. Does it make sense?

Tim:

: Yeah, absolutely. Just to recap, to make sure I’m following you correctly, you have four folks that are kind of the core performance team. But then to make sure that every team is able to tackle their own performance stuff as it comes up, there’s these champions that you’ve identified, and they’re the representatives, so to speak, from that team. Getting that education across a large organization can be very challenging. And it’s a big piece of establishing any kind of performance culture that fits, so how do you disseminate that knowledge?

Reefath:

: We literally brainstormed about this, because, as you are saying, there are tens of thousands of people across the world that are working for my company. How do we do this? We are actually starting this team only in San Jose right now, and we have started three pillars. One is, how do we bring this culture-shift in the minds of our engineers, project owners, designers, and even leaders. I mean, how do we start infusing this concept of performance in them.

: To go into a little bit of detail into that—for example, if we have a new recruit to PayPal, we really want to make sure they understand at that point in time, that PayPal cares about performance. When you start coding or you start designing something, performance should be the founding principal of it, and not an afterthought. So we are working on creating learning videos that are very specific to PayPal.

: And then, I think I spoke to you about this, my team hosts a weekly workshop, a talk, I think I tweeted about it as well. So that is an opportunity as well. We have to constantly talk about it, we have to show people how they can improve performance in their day-to-day activities when they are coding, so that is something we do. And also we have lots of other ideas we do. We are planning to host performance hackathons. It’s all about how often we talk about it and how often we communicate to our developers about the technologies. The techniques—like, how do they improve it? And once you bring this culture shift, starting with small teams, I think that’s a huge win. We have named the team that I belong to—we have very successfully built the culture. And now that I’m out of my team, it is already embedded in them. Nobody has to tell the developers about the importance.

: So it’s just one tiny thing, but doing this across all the organization, of course it will take time, but we are working on—these are some of the ideas that we are currently doing at PayPal. It’s a continuous process. It’s a journey. 

Tim:

: I love the idea of having some videos or resources that are available right away as the onboarding process to kind of set the tone from the beginning. It’s interesting, because listening to you talk about this being a journey, and how often you’re talking about it, it sort of mirrors… You know, when we talk about performance monitoring, we always talk about, the more you integrate performance into the product, you know, checking build time—the more places that you’re tracking things, the more likely it is that you’re going to pay attention to it. And this is basically like a mirror of that, except, people! Not tools, but we’re talking about integrating performance at so many different checkpoints along the way. Like on the onboarding, and at weekly things, and with hackathons and stuff. It feels like a very similar thing going on.

Reefath:

: Yeah, so I was thinking about performance, but I can also talk about the tools. We also make sure that at every stage we check on the performance budgeting. During development, mostly does webpack so we can configure webpack to indicate immediately, like, are we just exceeding our performance budget? Then in our CI we have integrated with [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), so when we summon our PRs, and when our CI goes on, we get an immediate report on where our applications stand.

: This is something we have started from February, so we are actually getting into the process of integrating the CI with Google Lighthouse. And then of course we have our in-house tool that is actually capturing the real user monitoring data. But the one thing that I’m planning to build—I mean, this is for the future, really looking forward to an automated analysis, like, bottleneck analysis from the real time live data itself. So that is a design that I have put forward right now, but we will be taking it up towards the end of the year. 

Tim:

: So that’s interesting. The idea being that you can take the RUM data, and sort of automatically, almost surface a Lighthouse-ish report. Like, these are the bottlenecks you’re identifying based on the RUM data? 

Reefath:

: Yeah. It’s just that the Lighthouse is mostly a synthetic testing.

Tim:

: Right. 

Reefath:

: What I’m talking about is, we already consume those millions of data in our RUM, so I’m talking about consuming a little bit more from a Resource API so what we have is a Navigation API. So I’m looking looking for where to collect more information for the Resource API and do an automatic analysis, like a bottleneck analysis, and put it out to our developers out front, like, what is our bottleneck? So currently it is mostly manually done, so we are looking at how to automate the process. 

Tim:

: It’s great to have things like Lighthouse, and absolutely people should have things like that built in, like, the synthetic testing and those benchmarks and stuff. But at the end of the day it’s the RUM that’s actually—that’s what matters. So if you can get some kind of process to identify those bottlenecks and stay on top of those, that’s not requiring somebody to go in on a regular basis—or maybe they still do it, but at least give them a head start, that sounds like a huge win.

Reefath:

: Yeah. And also in PayPal we have a collaboration with a company called [CatchPoint](https://www.catchpoint.com/)—

Tim:

: Sure.

Reefath:

: So we can have the servers like all around the world. It does a synthetic test. Like, they hit our PayPal endpoints from the servers all around the world and they have some amazing dashboards, and they give us insight analysis. So, we wanted to cover all the areas. Like, we have our real user monitoring data. We have our Catchpoint integration. But I’m looking to build a tool to consume this real user-monitoring data and do an automated bottleneck analysis. So, really looking forward to touch the boundaries possible.

Tim:

: Very cool. So, you mentioned, when we first got into the build process tool thing, you threw out the term, “budgets.” Do you have a hard number on some metrics?

Reefath:

: For performance budgeting, we are currently working on—again, we want to automate, because every single day we are pushing code. And PayPal, like, it’s at least every two weeks we push code. So we really wanted to see something to automate it and find out, like, how much it is changing. So we are working with our web platform teams to build a dashboard to say, Hey, these are the applications. These are the budgeting that we need. And then, where do each of those apps, and where do each of these teams, stand against this budgeting. That is something that we are working on, so probably in June something we will be publishing.

Tim:

: Oh, cool. So this dashboard will be displayed or present for the entire—all the different teams to see at any standing point, how they’re standing up and stacking up. 

Reefath:

: So we own the real user monitoring data, so we’re looking forward to embed this information as well on the performance budgeting. So you’re right, it’s one single point where any single application can come and see where do they stand in terms of their performance budgeting. 

Tim:

: Yeah, that’s cool. So in the meantime, do they have hard goals or budgets, like, for example, Lighthouse runs. Is there a hard number that you’re targeting there in terms of a score? Or is it more, kind of just, we’re running it to keep tabs on it, but we’re not necessarily aiming for ninety or whatever?

Reefath:

: So we have goals. We at PayPal have a team called a Site Speed team. So they are our uber-performance team. 

Tim:

: So this is different than a performance team. There’s a Site Speed team and a performance team? Okay. 

Reefath:

: The Site Speed team is the one that does the market research, that talks to our merchants, that talks with consumers. Get the feedback, get the surveys done, understand what are the real time latency and performance problems. And then they trickle down and tell us, 'Hey, you know what, this is the goal.'

: As a company that we are looking forward, currently is our first time users in the ninety-fifth percentile to make our web pages interactive within five seconds. And for our repeated users, we are looking at two to three seconds. And I think that our data should want to have an goal of, like, even our first time users, we want it at two seconds. So all of our performance budgeting is derived from these numbers. If we are looking at five seconds—and of course every company has their infrastructure issues and everything—with our current infrastructure, what is it that we could really achieve? What is a feasible and a realistic budgeting? So we have derived from that number down to, okay, if this is my goal for my first time user, in slower 3G—maybe at a 440kb per second—what could be the size of my assets that I actually could give to the browser. So we have derived from our goals. 

Tim:

: That makes sense. Like, there are goals the budgets are not necessarily breaking things. As in, breaking builds, or anything like that. Is there any plan to push it to the extreme at some point? I guess, do you see that as ever a possibility? Because there’s always a risk. If it’s breaking things too aggressively, folks are really going to get annoyed at that. But on the other hand, if it’s not introducing at least some pause, there’s always the possibility that someone is going to push through anyway. So how are you kind of planning on balancing that?

Reefath:

: To be very honest, our leadership is very serious about this performance numbers. We have spoken to an extent of, like, if an application does not meet this target, we are not going to actually release it in production. But, to reach there, of course we have to do our homework. We have to educate them. Like, everything that we spoke about, we have to help them to make the culture shift. That is where my team is currently working on. And then we eventually—once we all set up the stage—we would eventually come to a position to tell our teams that, Hey teams, we have given you everything you needed, but if you're not reaching this performance budgeting, and you’re not reaching our goals, maybe you will not be allowed to production. So that is something we will eventually be landing on. 

Tim:

: It’s always an interesting, I think delicate, balance between finding ways to enforce that stuff and stay on top of it without it becoming a chore to do so. You can see that becoming a real thing. Like, suddenly your system is more annoying than it is productive. Or your performance team is more of a bad cop kind of a thing than an encouragement. So it’s always a tightrope to walk to some extent. 

Reefath:

: Yeah. But I don’t see much of a difference between accessibility and performance. I’m just making an analogy here: in PayPal, we have a dedicated team on accessibility, and they constantly audit and monitor. And if you’re failing at anything on that we are not supposed to release it. It’s something very strict at PayPal. And juniors are actually used to it. And now we are introducing a concept of performance. It’s all about getting into their mind that, Hey, this is as important as accessibility. So I think we are used to it, but again, it’s just taking some time to get into the mind of the engineers and the teams. I think it will happen. I don’t see much of a problem in that. 

Tim:

: Yeah, I’m a big believer in the performance/accessibility tie-in. To some extent, performance can dictate access, particularly in certain areas around the globe. Do you find a need to tailor any of these goals or any of these deliverys based on the geography that you’re going after? Are there certain geographies that you say, you know what, our typical goal here for interactive time, or our typical weight that we might allow just aren’t going to cut it here and we need to do something different?

Reefath:

: PayPal has business around like more than two hundred countries, and currently we are not looking to separate goals. For example, India, this is the goal, for U.S. this is the goal. We do not want to do that, because we already have a strong presence in all the developed countries. We are looking forward to expand into developing countries and make a really strong presence there. We are very strict about maintaining the same goal—what we have in the U.S., to have it in developing countries also. 

Tim:

: Makes sense. The more you introduce variance, the more complexity, all that stuff, which comes with its own set of challenges for sure. Is there any plan to roll out something like, going back to your experiment, there are companies who do the “light version” in certain places. I know Facebook’s got their own thing that they’re rolling out in certain countries, that is their light Facebook thing. There was the whole YouTube experiment, although I don’t know that Feather still exists—I’m not sure, I haven’t looked. But is that something that you’ve considered, or again, is it more like, again, you’re worried that that’s going to introduce too much complexity, and you’re going to make everything faster. 

Reefath:

: I’ll talk about how it is in the web app world, and I’ll also talk about in the native world how we are looking into. In the web app world, one of the teams, our checkout teams—they did something that is a checkout lite. And they actually started experimenting with India. So India was their first target, and they’re running experiments to see, like, a lighter version of the web app itself, how is it going to be beneficial?

: In our native application world also we have some concept of hyper-local use case. And some of the countries are native applications serve different purposes. So something could be very specific to a region that you could belong to. So that is the way that we are targeting in our nature application. In both the worlds we are working, and we are experimenting in a lighter version that’s very specific to the regions. 

Tim:

: That makes sense. I want to be conscious of time. There’s been a lot of good stuff. We could probably go back and unpack a bit more. But we can save that for round two! Maybe we can coax you back on at some point. In the meantime though, for anybody who wants to follow up and keep tabs on what you’re doing, or what PayPal’s doing, how do they do that?

Reefath:

: Mostly [I would tweet](https://twitter.com/Rajali), and I’m also planning to write more blog posts about what PayPal is doing, and how everybody can actually benefit. It’s a community. So, for example, when we all met in [#perfmatters conference](https://perfmattersconf.com/), it is a community of like-minded people who shared and discussed about, ‘hey, what are you working on, and how does my company actually gain from it?’

: And, again, sharing what I’m working on. So, a [platform on Medium](https://medium.com/paypal-engineering), like, we have it for PayPal, so we constantly share on the technologies, on our practice that we are making, so that is a space that you can follow, and also, I will be constantly tweeting about what I’m doing. And more specifically on performance for PayPal. For this are the resources I can think of.

Tim:

: Alright, well thank you so much for coming on, this was fantastic. It’s always interesting to hear, particularly at the scale you’re having to deal with, how you’re combating these performance challenges so thank you so much. 

Reefath:

: Thanks, Tim. I mean, it’s absolutely an honor to be here and thank you so much for the opportunity.

Tim:

: Thank you for tuning in, I hope you enjoyed the conversation as much as I did. Like I said, Reefath is brilliant. I’ve gone back to this conversation several times already just to try and digest some of the things she said.

: If you’ve enjoyed the podcast and you’d like to make sure you don’t miss out on any of the episodes, please subscribe in your favorite podcast subscription service or application. We should be in, I think most of them at this point. And if you feel so inclined and you want to leave a comment or review, that’s always appreciated. It helps to get the word out about the podcast. There’s some great people coming up, some great guests, some great conversations and I want to make sure that gets in front of as many people as possible so that’s always appreciated.

: The podcast is produced, as always, by Steph Colbourn from [EDITAUDIO](https://editaud.io/). And the intro and outro music that you head is done by [Daryl Banner](https://www.youtube.com/channel/UCDW4GF1L_ogK4OZtz_gB-zw). It’s the 8-bit cover of TLC’s Chasing Waterfalls, so thanks Daryl for providing that and thanks Steph for doing such an amazing job editing the podcast. And thank you for tuning in and I will see you all next time!
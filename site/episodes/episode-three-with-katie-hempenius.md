---
title:  "Performance for the Long-Haul with Katie Hempenius"
episode-slug: "ecebaf65-7b84-440a-a352-9ddce4e2eb14"
sponsorName: "SpeedCurve"
sponsorImageAlt: "Image of the SpeedCurve logo and an animated 6-eyed monster holding up a phone"
guestPhoto: "/guests/katie-hempenius"
guestName: "Katie Hempenius"
episodeNum: 3
lede: |
  Many people want their organization to prioritize performance, but where do you start? In this episode, Reefath Rajali—a mobile developer advocate at PayPal—talks about PayPal's performance journey, starting with a simple, lightweight prototype built during a hackathon. She discusses the hard work and challenges that went into getting organizational buy-in and the cultural changes necessary to make performance a foundational principle.
links:
 - url: https://twitter.com/katiehempenius
   text: "Katie Hempenius on Twitter"
 - url: https://www.youtube.com/watch?v=p_8oR9GFRvQ
   text: "Improving Page Performance in Modern Web Apps with Katie Hempenius"
 - url: https://twitter.com/addyosmani
   text: "Addy Osmani on Twitter"
 - url: https://www.youtube.com/watch?v=YJGCZCaIZkQ
   text: "Speed at Scale: Web Performance Tips and Tricks from the Trenches"
 - url: https://httparchive.org/
   text: "HTTP Archive"
 - url: https://twitter.com/katiehempenius/status/1133209127000379393
   text: "Tweet about page size increase"
 - url: https://developers.google.com/web/tools/lighthouse
   text: Lighthouse
 - url: https://www.webpagetest.org/
   text: WebPageTest
 - url: https://developers.google.com/speed/pagespeed/insights/
   text: "PageSpeed Insights"
 - url: https://github.com/siddharthkp/bundlesize
   text: Bundlesize
 - url: https://developers.google.com/web/tools/lighthouse/audits/budgets
   text: LightWallet
 - url: https://snyk.io/blog/77-percent-of-sites-use-vulnerable-js-libraries/
   text: "77% of sites use at least one vulnerable JavaScript library"
sponsorImage: "/sponsors/speedcurve_herman"
sponsorBlurb: |
  See how real people experience the speed of your website. Then use SpeedCurve's synthetic and real user monitoring solutions to find (and fix!) your web performance problems. Companies like Ancestry, BBC, Casper, Expedia, Shopify, and Zillow use SpeedCurve to create faster, more joyous experiences for their visitors.
sponsorLink: "https://speedcurve.com"
---
Katie:

: Now maybe your first party site is actually pretty decent and is holding the line but you keep getting push back from marketing to just keep adding more third party content and that is just really slowing the site down and that's one of those things...that issue is bigger than engineering. You need to have the company kind of come to an agreement on what your strategy is going to be around third party. 

Tim:

: That was Katie Hempenius and this is Chasing Waterfalls, a podcast featuring conversations with the people working to make the web faster for everyone. My name is Tim Kadlec, I'm a web performance consultant and your host.

: The conversation with Katie was great. But I think when I first got started with performance, it felt like, oh performance itself is a niche topic. And then as with anything, the closer you look, the more you start to realise that there are these other niche topics within the niche topic. So it's interesting, because in the performance community you could find somebody who is hyper-focused on images and other people are hyper-focused on JavaScript or even hyper-focused on a particular JavaScript framework or data analysis, whatever it happens to be.

: And the thing that I think is so great about Katie is you can't pin her down. Like she is constantly sharing amazing information across the board, everything from images to JavaScript to data analysis to networks stuff. Like she's just kind of everywhere. And I think the conversation ends up being really rich for that reason. Like we talked about a lot of different things. We talked about performance budgets, images, there's a whole bunch of stuff in this conversation, it's fantastic.

: Before we get to that, I do want to again thank my sponsor [SpeedCurve](https://speedcurve.com), once again for sponsoring this episode.

: One of the things that I..I harp on a lot, when it comes to performance work, is the importance of monitoring. Specifically, like, having real user data is in my opinion ground zero. Like, you have to have strong real user data if you want any chance of performance continuing to be a focus in your organisation. You have to be able to tie changes back to business requirements, to user behaviour, we have to be able to build up that case. I also feel like, you know, without that real user data you're always working...well hypothetically. You don't know how things are translating in the real world.

: But at the same token, synthetic data is important. You need synthetic data for the cleanliness, right, like the data is much cleaner, it's much easier to tie to development changes, to deployments, because you're able to focus things in isolation, you can really dig deep on an entire session and find out what's happening in this particular browser over this particular type of network on this particular page. So it's massively important as well.

: And SpeedCurve lets you do that. So, SpeedCurve’s real user monitoring offering is called LUX. And out of the box, LUX is going to track how you’re performing in the real world with a bunch of beautiful dashboards, including user engagement charts. So, right away you’re able to see a connection between things like start, render and bounce rate, for example. That's one that I see a lot with the clients that I’ve worked with. Those sorts of things.

: And one of the things I love about SpeedCurve is that you get both. Like, you can have your synthetic and your real user data through their LUX product, tie it together in the same interface. It may seem like a small thing but it's really, really powerful.

: Because, for one, it's one user interface, like you get comfortable with that one user experience, that one user interface and you can use it to mine both your synthetic and real user data. But you also...it makes it easier I think to find connections between the data and SpeedCurve will help you figure out like similar pages that are being tracked inside of  synthetically but as well as real user data. =

: Because, for one, it's one user interface, like you get comfortable with that one user experience, that one user interface and you can use it to mine both your synthetic and real user data. But you also...it makes it easier I think to find connections between the data and SpeedCurve will help you figure out like similar pages that are being tracked inside of  synthetically but as well as real user data. 

: So I think it's one of those things that is the sneaky powerful and one of the things that has me really excited about that product. So, again, you can get a free trial on [SpeedCurve.com](https://speedcurve.com), go to speedcurve.com, and thank you once again to them for sponsoring. And now on to the conversation with Katie.

: Katie, how's it going?

Katie: 

: Good. Glad to be here. Thanks for having me. 

Tim:

: I'm a very excitable kind of person. So I say this to pretty much everybody who comes on. But I have been so excited that we were able to make this work and get a chance to talk to you. I was trying to remember the other day, when it was that I first stumbled on you and your work. And I think it was a year, or two years ago, something like that, you had given a talk in [San Francisco at a meetup](https://www.youtube.com/watch?v=p_8oR9GFRvQ).

Katie:

: Yes, good memory. That was a couple years ago now. 

Tim:

: It was. And...but I saw this video after it came out and I'm just...I'm always very excited when other people are talking about performance and so I immediately started following and paying attention to what you were doing. Were you at Chrome at the time? When you gave that talk? 

Katie:

: No, I was at FitBit. At some point, yeah, I came over to Google and even then I wasn't focusing on performance. It's only been somewhat recently that I've started doing this full time. 

Tim:

: So was it a conscious move, to move into performance?

Katie:

: Yes. I was always interested in performance and I ended up giving a [talk at SmashingConf](https://vimeo.com/254858694) a year ago now. And that's when I kind of realised that there are other people at Google doing this as well, and then that's when I started working with [Addy](https://twitter.com/addyosmani), I was doing twenty percent time on their team and then eventually ended up moving over to their team full-time. 

Tim:

: Alright, so then now you're in...is it DevRel or? 

Katie:

: Yes.

Tim:

: And focusing on performance?

Katie:

: Correct

Tim:

: Ok. So one of the things that I was starting to get to, the thing that stands out in the last few months in particular, is just, performance is a huge thing for Chrome, it's something that they've made a focus over the last few years, very vocally. But it always feels like, the folks that I know there, I can kind of pinpoint this is their particular area of the performance spectrum that they focus on.

: And what I love about you is that I haven't been able to do that at all yet. Because you are just sharing amazing tip after tip of optimisations ranging from JavaScript stuff to more network based things. In addition, to just a ton of data. That kind of stuff. Like all this research that you're putting into, is that now part of the full eighty percent of the job? Is that the twenty percent where you're kind of off doing the investigative research into [HTTP Archive](https://httparchive.org/) and all that?

Katie: 

: Yeah I guess that now falls under my  like official job description. Sometimes I'm like, oh I should be doing my actual job instead of going off and making graphs and like oh, I found this data, I've measured some things. But yeah, it does fall roughly...it somehow relates to what I do.

Tim: 

: It's great, because it's...it's literally everything from the entire spectrum from...I've seen you talk about network, to browser, to specific optimisations, to you know, data sort of looking at this holistically and historically and you know cultural stuff as well.

Katie:

: Yeah I think that's kind of actually what makes performance so interesting, is it's very hard to draw like a box around it and say these are all the categories that go into it. I mean there's so much that affects performance. I think that makes it interesting. 

Tim:

: When you're first, I think, getting into performance or maybe from an outside perspective as well, you view performance as...itself as like this area of specialty right? And then once you start getting into it, you find out within performance there's so much ground that that covers that it's a big word, as it turns out.

Katie:

: Oh yeah, I mean I was having a conversation with someone yesterday and we were talking about performance. The conversation was getting to the point, you know, do you optimise for the network transfer time? Do you optimise for the computing, on like how much it takes to process something? You know there's so many different ways you can define performance.

Tim:

: Just curious about that conversation. Like, how did you answer that? How do you tell a company...maybe they're just getting started with performance perspective and trying to figure out where to place their focus?

Katie:

: I think it will depend on a little bit on the vertical you're in. So I mean I think in general everybody wants a fast initial page load but I do think it's fair to say that for some verticals it's going to matter more.

: Like the verticals I have in mind are for instance retail or news publications. Like news publications, if you can speed up your site that's...you know if you're serving ads, you're gonna serve a lot more ads, there's a really strong business case there. To be honest, I shouldn't be saying this, what I focus on is performance but for instance say you're a product where someone has to sign up and they're hooked, you know, they've bought a subscription for a year...you might not care as much about performance. Because you know once you have a customer they're going to stick with you.

: Yeah, so I would say in general, obviously looking at that initial page load and I know a lot of people it's like, "Oh do we emphasise time time to interactive or first contentful paint?" and I would tend to say look at both of them. I think people have a tendency of...where one of those will be really good for their site and one of those will be really bad and then they'll automatically choose to focus on the metric that makes them look good and throw out the other one. But if that one other number is really bad like that's indicating there's something wrong...there's something that needs to be fixed. Don't fall into that trap.

Tim:

: Like people love to look for that one metric to rule them all but I think that's how we got into this situation where I feel like we sort of collectively woke up from a few years ago when we realised that we were all optimising for page load time and at the expense of everything else.

Katie:

: Yeah. 

Tim:

: So, you gave a talk at [Google I/O with Addy](https://www.youtube.com/watch?v=YJGCZCaIZkQ), there's one little stat thing that I've just been fascinated about ever since I heard it, kind of in whisper of things, and now that you said it on stage I feel like it's probably safe to bring out publicly. But I've been fascinated by this...this statement you made on stage about the number of companies that you're seeing with like performance regressions. 

Katie:

: Yes, yeah.

Tim:

: Yeah, what was that stat?

Katie:

: The stat we used in the presentation was, forty percent of large brands regress on performance in six months. 

Tim:

: That's a very big, discouraging number. 

Katie:

: In fact, I think actually the exact one might be even like large brands focusing on performance. So even like, not even inadvertently. I should go up and pull up the exact wording, but yes. That is pretty stunning. 

Tim:

: Right, so it's not just like any company who hasn't been doing any performance work. Like, they're regressing from what? They're regressing from...? 

Katie:

: I think, you know, comparing what was the performance say in January versus July? Or you know like a six months differential. Did it get worse or did it get better?

Tim:

: And again, to emphasize your point, these are companies that are already, they are prioritizing performance in some way. It's not that they're ignoring it, they're doing performance work and the regressions are still happening?

Katie:

: So to be fair, I was not the one gathering those statistics, I can't talk to that in much detail but I think why I personally found that statistic interesting, so I don't know exactly who the large brands were, is that these are pretty large companies. They have the resources to put behind it. You know, it's not like, oh it's a startup of four people and that's just...performance is just not top priority right now, we have other things. Presumably these are large companies and you would think that they would have the resources to prioritize this.

: So even with all those resources they're still struggling with performance. And actually, yesterday or two days ago, this week I've been digging into HTTP Archive database, basically looking at the same thing, like how do site performance change over time? And I was looking at the Alexa top ten-thousand sites. But it was interesting because I posted the results for the top ten-thousands site but then I was also looking, like you know, does performance for the top a hundred or top ten is it any better or worse? And the very large sites, they did do a little bit better than the group as a whole but they still had performance issues. You know no one's immune. But I will say, Wikipedia is killing it.

Tim:

: They've got...they've got a killer team over there. They're doing some great work. 

Katie:

: Yeah, you look at their numbers and I think that maybe the site changed by one kilobyte or something in size.  Their numbers were awesome, you know everyone else their numbers were changing. 

Tim:

: There's like a tendency to view performance or even like accessibility as something that should be theoretically easier for these large companies with all the resources but I think that they're suffering from the same sort of regressions, the same sort growing size, hits at performance being a little bit of a bigger issue than just these sort of technical concerns and know-how. There's a lot more going on into making an organization actually have this sort of culture of performance established. 

Katie:

: Yeah and what I thought was interesting about the numbers, were seeing like, so maybe your, I don't know, images on your site increased by fifty kilobytes. Yes, it could be better but it's not the end of the world. But it's interesting seeing I guess, in particular, the amount of JavaScript that was increasing because you're like, "Ok, this actually is a problem, this is going to have a statistically significant impact on performance." It's not like, you know, we're splitting hairs over, you know, your CSS increasing by five kilobytes or anything like that.

Tim:

: I think I saw [the tweet](https://twitter.com/katiehempenius/status/1133209127000379393) and the JavaScript was like, what do you remember the numbers? And it was like what? Half a meg at the ninetieth percentile or something like that.

Katie:

: Yeah five-hundred and thirty kilobytes at the ninety percentile, two-hundred and sixty-five kilobytes at the seventy-fifth percentile and the fifty percentile so median, that's ninety kilobyte. That's...that's substantial. 

Tim:

: Yeah, and that's network size right? That's transfer size? 

Katie:

: Yeah.

Tim:

: Yeah, right. So you're talking even more once you get it on the device and the device has to do the parse, compilation, and execution of it. 

Katie:

: Yeah.

Tim:

: So it's ...it's a hefty little sum. Any sense of how much of that is third party versus first party? 

Katie:

: No, that's on my to-do list to dig into more. The other thing I'm curious about is, is this just, you know one kilobyte at a time site sizes are increasing? Or is it "oops, we accidentally included this module that really should not be here." And you know, in one commit the size of the site jumped by a hundred kilobytes. So, I'm currently digging into that and I'm interested to see what the answer is.

Tim:

: Yeah that's a...that's a really interesting way of framing it too. Because, the two narratives that tend to accompany the growth of JavaScript, you have the one narrative which is talking about third party aspect, right, and third party resources coming in and destroying the performance of a page. And the other narrative is around JavaScript and just our tendency to reach for big frameworks and, you know, additional modules and plug-ins and how quickly that adds up. So hopefully diving into the detail will at least give you a little bit of a sense of to which of those things we can actually blame in this particular situation of if it's a combination of both.

Katie:

: Yeah.

Tim:

: How do you advise teams to avoid that? Like if I'm looking at these numbers, they're discouraging numbers. The regression is discouraging, the increase in...cause there's not like a quick technical fix to this, right? There's more to it than just roll-out this optimisation or that optimisation.

Katie:

: Yeah, I mean we can talk about things like, I don't know, code-splitting or compressing payloads but after that, you start, you know people looking at JavaScript, it's kind of like one-off things or I don't know, switch to smaller libraries.

: But after that, it starts to come down to what the architecture of your application is. I mean I think the first thing is to just be aware of it. I mean that's why we've been talking about performance budgets so much because, you know, the people we know who are using them, everybody said like "Oh, they've caught things that we should've caught ourselves". Nobody catches when we're pushing code but you could have humans try and check for it but it's like it's something that...that computers can do so well. Computers are very good at measuring the size of your code, just do it. So that's a starting place.

: What's actually coming to mind now is...performance is very complex but at the same time, for a vast majority of sites, I do think there's quite a bit low-hanging fruit there. I know just the article I was looking at yesterday, maybe it was Paul, posted something on the HTTP Archive, trying to determine what percentage of sites are using gzip or brotli, some form of text compression. And it's only about two thirds of text based resources are being compressed. Which is like, that's low-hanging fruit. Like everybody should be compressing everything. So that's like really significant that a third of the resources on the web are not being compressed.

Tim:

: Sure.

Katie:

: And that's something you can totally fix in a day, you know. You don't have to, you know, switch out frameworks or anything like that. So, yes, performance is really tricky but at the same time, with a lot of sites, maybe at the top of your head point out like five different things that will not solve all the problems but make a significant impact.

Tim:

: Sure and I think I found probably the same. And that's also where a tool like [Lighthouse](https://developers.google.com/web/tools/lighthouse) or [WebPageTest](https://www.webpagetest.org/), or you know, [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), something that...that tries to give you some sort of a grade on this checklist of common or those low-hanging fruit optimisations can be a really invaluable tool for something like that to be set up to give you this report card and say hey, you're getting a low score based on these kind of base-level optimisations that we would expect to see in place.

Katie:

: That's part of the reason why I think it's just interesting to look at the size of sites, because, it's not a perfect picture but in some ways I think it gives you a kind of rough idea of how easy it is to optimise your site. Because I do think you can probably make the statement that as you push the envelope further and further, you are going to have to work harder and harder to optimize those bytes.

: But if someone is shipping two megabyte website, like, you know that there are some quick and easy fixes that will make their site significantly smaller. But as you get to smaller and smaller sites, to keep improving, yes it becomes way more difficult and that's when you start hearing like, we shared a bunch of things in our presentations at I/O about what Twitter is doing and they had some really neat optimisations and I think part of the reason for that they're at a place where their app is small enough that in order to keep pushing the envelope, you really have to start thinking outside of the box.

Tim:

: It's easy to get excited about that stuff. Right, like the last percentage, like the last ten percent.

Katie:

: Yes. It's very glamorous, yeah. But nobody wants to hear about how they should turn on gzip, yeah.
 
Tim:

: Yeah, like, do we need to be doing better as a community to be still advocating for things like gzip and things that, you know, maybe feel a little bit more mundane or old school because they're so well established. And if so, how do we get people excited about those things?

Katie:

: I find it interesting that you're touching on something that I've thought about a lot. It's like, how do you get people excited about stuff? Because there's some topics that people get really excited about because they're kind of glamorous and then there's some topics that nobody wants to touch because no one cares. These are topics that could still have a lot of impact but just they don't have the same mystique that, I don't know, maybe JavaScript optimisations do. That's a good question.

Tim:

: [Laughs] let's solve it. 

Katie:

: Yeah, I don't know what the answer is there.

Tim:

: That's alright. That's alright. You mentioned that you were talking a lot about the performance budgets stuff lately. I know you did a lot of work on this with Lighthouse and [LightWallet](https://developers.google.com/web/tools/lighthouse/audits/budgets), which I want to talk about as well. In case anybody is listening to this and not super familiar with this concept, can you kind of give a 101 overview, what is the performance budget and how are folks using it?

Katie:

: Performance budgets is the idea that you set targets for different performance metrics of your site and then you track them over time. And also uphold and adhere to these...these standards that you set.

: You can define performance budgets in a couple different ways. Well, three ways that you tend to see. One is based on some sort of timing based metric, so for instance setting a target for first contentful paint or time to interactive. The advantage there is that it kind of like directly measures performance, the downside is that you just see a ton of variation in what those metrics are from page loads to page load even if you're, you know, isolating everything in environment and everything else is held constant.

: Another way that you can do it, and this is probably what I see most people doing right now, and this is also what Lighthouse supports, just setting the amount of budgets for the amount of resources on a page. So either for the page overall or more frequently for setting budgets for the individual resources types. So for instance, we should have less than 200kb of JavaScript or less than 100kb of images. And then, the third approach you can take is some people do budgeting based on their Lighthouse score. So, you know, making sure that their score like never goes below 90 for example. 

Tim:

: Do you have a recommendation out of those three for what you have seen works?

Katie:

: I would say in general doing budgets based on resource sizes. I don't think budgets for timing-based metrics has really been solved yet. We've been looking at it with Lighthouse, I'm sure other people have been looking at it as well. The frustration there, as I mentioned, the timing metrics can be very inconsistent and for I think performance budgets to really impact how people work. You want to be able to trust them. And so, timing budgets basically end up acting like a flaky test.

: Ideally, you want to set up a performance budget and then say hey, if any commit fails the performance budget, we're not going to push that code and with timing budgets it's very difficult to do because you run it once, maybe it passes but the next time it fails. So, I think in order to fix that issue properly we need to bring in multiple runs where you're taking averages or medians or, I don't know, maybe some more sophisticated math to try and look at differentials.  

Tim:

: The trust that you mentioned there, that's a huge part of this, right? Because if you were talking about using a performance budget in a development workflow, potentially in a way that you're mentioning, which is, you know, breaking the build, right? Like, stopping a deploy from occurring if this budget is exceeded. Like having trust in the stability and reliability of that budget being accurate is absolutely critical.

: Because you're already asking developers a lot. You're already asking them to sort of say, we're going to introduce this new step in the development process and it's gonna potentially not let you ship code unless, you know, fix it. And if that is not reliable in a way, you're going to have a hard time getting folks to get on board with this. 

Katie:

: Oh yeah, I mean, if that was the case and I was a developer I'd be like, nope I don't want to use that. I think that the timing thing is interesting. So for some slides that I was putting together, I was just like I need examples of variations. Like, let me try running WebPageTest on YouTube. And in my mind, YouTube is like a very well-established site, it's big, it should have fairly consistent load times. I was getting anywhere between two and I think four seconds over ten runs for how long a page took to load. I was just like...it was just way more variants then even I was expecting. Just as an example, like, even YouTube's load times in my experience vary a lot. And that's with WebPageTest, everything's...you know lab environment.

Tim:

: Yeah that's quite the range there in variation.

Katie:

: Yeah.

Tim:

: Ok so...resource sizes, which they're a symptom. Like, you've already pointed out it's a symptom of other performance issues. So it's not like they're completely decoupled from the timing metrics anyway. Do you recommend starting with that timing metric and then coming up with a fuzzy approximation for what those resource sizes should be? Do you recommend doing resource sizes based on your current situation? Like how do you...where do you come in with that?

Katie:

:  Yeah, I probably recommend tracking and being aware of your timing metrics because ultimately that's...they represent the goal, that's what you care about. It's just that they're a bad thing to use for blocking builds. And that's where resource size come in.

Tim:

: Ok, and if an organisation wants to start using resource sizes in their performance budget, how do they come up with what those budgets should be?

Katie:

: Couple different ways to do this. One, you could start with the current state of your app and just say "hey, we're not going to get any slower, any larger. Let's start here and try to maintain that." Or, you can be more ambitious and say let's try to make this smaller by 20%. Or, you could try to...you could kinda work backwards from what your performance goal is. So if you're like hey, I know I wanna be...have a three second time interactive on 4G starting there and then working back and figuring out how much resources you could afford to ship. And then maybe one more way that we sometimes see people use is that they will look at their competitors and then work backwards from there. And just set out to beat their competitors.

Tim:

: Ok. So, like, either hold the ground, go twenty percent lower than whatever your current sizes are. Start at the timing and abstract it down at the resources sizes or a competitive thing. Like those are the four things you just went over, right?

Katie:

: Yeah, and I've probably...I think it does matter a little bit in where your product is in its lifecycle. So if you're starting out with a fresh product or a product that's very young. I would say you don't have a lot of technical debt in the performance sense. You don't have, like, a lot of bad architecture decisions that are slowing you down. So I would start with a pretty aggressive performance budget. But if you're starting with a legacy application, you might need to be somewhat less aggressive, just due to the fact that you're working with something that might take some time to change and then speed up. 

Tim:

: There's plenty of tools for this, right. Like, there's [bundlesize](https://github.com/siddharthkp/bundlesize). You came out with LightWallet, like you were the primary or one of the primary people working on that, correct? 

Katie:

: Yes. 

Tim:

: I'm guessing since that's so new, it's a fair guess that most people listening haven't run into it yet. So what exactly are we talking about with LightWallet?

Katie:

: Yeah so it's part of the newest version of Lighthouse, the command line version of Lighthouse, so not the Chrome extension, not the DevTools version. And just update your Lighthouse npm module and then to use it create a, what we're calling a budget.json file. In reality, you can call it anything but that's what we're calling it. And that you can just kind of think of as a config file, where you specify the budgets for your site.

: So one of the things you realise, when we started to develop this, is that it's hard to come up with universal budget. There's...you know, budgets can vary so much based on type of site that you have. So, on this budget.json file, you declare your budgets. Pretty simple format, you basically say, you know, resource type, JavaScript, budget, you know, 300kb, resource type images budget, 200kb, and so on. And then you run Lighthouse from the command line and use the budget path file to, you know, point Lighthouse to your budget path.

: And if you've done that, then when you open up the Lighthouse report, you'll see a summary of resources on your page as well as information on whether they, you know, pass or fail the budget that you've set up. Pretty simple to get started with. I would say, like you know, five minutes and you should have it running, so.  

Tim:

: Wow, which is nice. And if you're a site that has multiple different page types that are very different, say an e-comm site and you want to have separate budgets for home versus product versus search, you know how would that look with that? There'd be three separate budget.json files?

Katie:

: Yeah, so long term we're talking about adding the ability to put all those budgets into one file because we'll add a property probably that says something like path, that allows you to basically do like wildcard matching to...to budgets. Kind of like almost the similar to the format that robots.txt uses. So, you can do some neat stuff with that, like declare a default budget but then override that with specific budgets for different sites. But, that hasn't been shipped yet. We're still talking about that, so right now you would just create different budget files locally and then just point to a different budget file when you run Lighthouse, depending on the page that you're budgeting. 

Tim:

: Oh yeah, and the nice thing to is that, anybody doing this, they're gonna get the rest of the Lighthouse stuff as well. So they're gonna see, again, the low-hanging fruit stuff is gonna get surfaced as part of the full Lighthouse report. Maybe it's not what surfaced as a budget but they're able to get to the full report through this as well, correct? 

Katie:

: Correct. 

Tim:

: Yeah, awesome. So the budget.json file by the way, that was the part that really excited me about this. I think that's really cool because it feels like that there's all these different tools, right, that we can do budgets in. We can set budgets in different monitoring tools, we can set budgets in Lighthouse, we have a bunch of different command-line tools, some of them that are using common APIs underneath some of them that aren't. But, they all have some concept of a budget.

: And this feels like there's a nice portable format here that could potentially, in theory, be used in all of these different tools. Is that on the roadmap? To somehow take budget.json and maybe extra it maybe a little bit from Lighthouse and make it it's own, well like you said, like a robots.txt thing. But it's own separate thing that is sort of viewed as a not a Google thing, not a Lighthouse thing, but a...I don't know...a community thing or a pseudo-standard for any tools that want to do budget enforcement.

Katie:

: Uh, yes. We've definitely talked about that. I mean if you look at the format now, there's no like, Lighthouse budget, you know whatever. It's...it's generic. Yeah I think that would be super cool. I think the thought was maybe we get LightWallet out there, see what people's feedback is on it. You know, is the current, kind of API style, does it work for them or is there something better out there? And then go from there. Because I agree, I mean, it would be awesome if yeah, there was just a standard format and no matter what tool you're using, the format works with it.  

Tim:

: Sure, that makes sense. I'll also be really curious...I'm gonna circle back with you in a few months to find out, to see how people are using it in terms of how many different budgets people have set up. Because that...that's a conversation that comes up a lot. I think whenever folks are looking at performance budgets, it's, you know, we have different page types, we have different device types. You know, how far do you go down this rabbit hole of setting different budgets up for each different scenario?

: Because there's a lot of diminishing returns there. At some point, you're just introducing a lot of complexity and overhead. Do you have any sort of idea right now? Even not from the budget.json but just from the folks that you've talked to and worked with? 

Katie:

: I've talked with quite a few companies about this, in terms of what they want from their performance budget tooling and yeah, I was actually really surprised at the number of people who said indicated that they do page-specific performance budgeting. I kind of have in my mind, I was thinking, you know, one budget for the overall site. But yeah, a lot of people said that was important to them.

: I do think more granular performance budgets are useful, so instead of saying we should have 500kb or less on the page overall, it's much more useful to break that down by resource type. But I could see if you're trying to use a performance budget to ensure that a particular page number gets any bigger and you do have it broken down by resource type then it does need to be on a page by page basis. Because, you know, different pages have different resource compositions. And it's not necessarily that they have different performance goals for different pages, it's that they have different resources on each individual page. 

Tim:

: So LightWallet and a lot of similar tools, right. They're great for enforcing that budget in the dev process. What about before that? When you've been talking to these companies and stuff around like how they're using budgets, I'm curious about how folks are, or if they are, looking at budgets earlier in the workflow process, like in the design stage or if it's documented elsewhere and communicated in a different way to different stakeholders in the organisation.

: Because it feels like if you've got just LightWallet of BundleSize or something like that running in the dev environment that's a great start. But it also feels like you have to have....that budget has to have a little bit of a broader perspective and broader integration and a workflow for it to really have a chance of sticking without causing too much frustration.  

Tim:

: That makes sense. I want to be conscious of time. There’s been a lot of good stuff. We could probably go back and unpack a bit more. But we can save that for round two! Maybe we can coax you back on at some point. In the meantime though, for anybody who wants to follow up and keep tabs on what you’re doing, or what PayPal’s doing, how do they do that?

Katie:

: I agree. Because, I mean, realistically say you build a big feature and it ends up being, you know, too large, it breaks your performance budgets. It's going to be so tempting to say let's just ship it anyway than oh, let's tear it up, start over, and re-write the whole thing. Especially since you probably had a deadline for it, like it needed to get out the door at a certain time.

: So, I do think it's very important that these things get brought up earlier. I haven't seen I guess good examples of how that is done. I know my personal experience, there'd be things I'd be working on where I, you know, maybe pushed back either product or design saying like, why don't we like, tweak this ten percent and we won't have to bring in an external module, I can just write everything from scratch. For that to work, you do need to be in a position where you can get product to buy in on that.

Tim:

: Sure, because that's big balance there, too. Like that whole conversation around pulling the module and just have it working and move on versus yeah, if we take a little bit of time we can rewrite this ourselves and get better performance.

: But then you get this sort of performance versus productivity trade-off that maybe is at the heart of a lot of what you're seeing in terms of JavaScript growth over the last year. Maybe that conversation isn't being had enough. Maybe we're not being critical enough and evaluating, do we take a little bit of time internally to deal with this or do we just grab one of the thousands of packages or modules available and just pull it in?

Katie:

: Yeah and a lot of time I think that once something is in it can be so difficult to remove. If anything, it's people like  and I remember like,  you know, removing jQuery, you're like I'm pretty sure it's not going to break. But like, presumably, anything on this website could break if I remove this. 

Tim:

: Yeah I think you had the same thing with upgrading it. I mean like when I was at...I was at Snyk for a little bit and from a security perspective did [some digging through HTTP Archive](https://snyk.io/blog/77-percent-of-sites-use-vulnerable-js-libraries/) around, like, versions of libraries and jQuery versions. They linger. Like, you put out jQuery 1.2 or 1.3, they've been out for years and it's just all over the place. So you know the people upgrading, let alone pulling out a library that is as involved as something like, you know, one of the major JavaScript frameworks can be a very stressful, harrowing process.

Katie:

: Oh yeah. Like an ideal world, like the code is beautifully written and still has like nice isolation and blah blah blah but you know sometimes that isn't the case and you're like ah, this is just really nasty to untangle and remove and it's just like tempting to just leave it there.

Tim:

: Yeah, no it's...it's definitely a problem I don't think we've solved yet and I don't know what exactly the right solution is to that either. We'll have to have separate conversations where we solve this, we solve the performance educational thing, like we'll just solve all of these things together. I think that'd be great.

Katie:

: Yeah it would be interesting to calculate like half-life, so to speak, of jQuery. Because you know how like different like, radioactive developments have half-lives. It'd be like that but for modules, you know. Because I wouldn't be surprised if ten years from now, you're still seeing, like I don't know, like 10% of sites have jQuery in them or something. Like it just never left.

Tim:

: No you know I agree. I think it also...I mean tying it back to one of the very first things we were talking about on this, where you were talking about the regression thing. I feel like there's a very similar situation here where it's easier to get the initial resources and the initial push to do the initial performance work, to do the initial work to get jQuery involved on your site, to do the initial work to changeover to a React architecture or whatever.

: It's much easier to get that, it feels like, then to have the concerted long term resources necessary to then support and maintain and potentially deprecate and do things like that. That feels like the harder part of the process. It feels like there's the initial burst and then things kind of linger and get to this point where we have code rot or things that maybe we let sit too long and then we just start with another re-architecture all over again.

Katie:

: Yeah. And maybe that's something where kind of engineering management can set the tone that, you know, for example the best amount of lines of code to add is not add any, or just even  I know one of my previous teams at Google, there was like maybe like a month of so where there was a really big push to get rid of, you know, dead code basically. You know, they would do, you know, a big burndown chart. People would be encouraged to pick things up, so it was very clear that it was something that like mattered to the organisation overall, and it was prioritised and it was a good thing work on. So it wasn't like people were like oh, the only thing that I should be working on is adding stuff. Making it clear that sometimes moving stuff is just as important.

Tim:

: Yeah, sure maybe you have like a special dedicated scrisprintpt that comes up periodically. You know, some sort of regular cadence that is code-golf sprints of something. You know what I mean?

Katie:

: Yeah, once a quarter how much can you remove? Yeah.

Tim: 

: The engineering support, the top-down support—that's such a critical component of this entire conversation. There are limits to how much of this is going to stick after that initial push if you don't have the backing and the support from the organisation to keep those resources around to maintain it and deal with this long term.

: If we can safely say, you know, for a large percentage of organisations simply maintaining a sort of level of performance is going to be challenge. Why do you think that is? What do you think the contributing factors are that help to determine that whether or not you're going to be one of the 40% who's going to regress in the next six months or whether you're going to be one of the companies that manages to go in the opposite direction and either maintain or improve the situation?

Katie:

: I think the organisational part is key because certainly something I hear from like everyone is that, you know, maybe your first party site is actually pretty decent and is holding the line but you keep getting push back from marketing to just keep adding more third party content and that is just really slowing the site down and that's one of those things...that issue is bigger than engineering.

: You need to have the company kind of come to an agreement on what your strategy is going to be around third party. I think that's a big part of it, yeah. And I think the other thing then, maybe the other part, is just not understanding. And it might be not all companies you can draw that correlation but maybe not realizing the business impact of decisions. Like adding things to your application, that's not free, so to speak, there's a cost there.

Tim: 

: Yeah and I think you're right. I think those two both go hand-in-hand. The other thing I think that you kind of, that's going back again to your HTTP Archive tweet about like the stats that had grown overtime, we kinda zeroed in on JavaScript and talked about that a lot.

: But the other one that jumped out was the image weight. So, and I think that was more like a raw size thing that was kind of eye opening. The median it didn't seem like there was any change over the last year. But the raw size at like the 90th percentile, you know, as you start to get up there, we're talking over a megabyte of additional images on any given page. Which is...it's a lot. It's a lot. Especially when you're talking what, 1.8 megabytes I think is what you saw at the 90th percentile for sites as a whole?

Katie:

: Yeah.

Tim: 

: Yeah, and it makes sense I guess, right. We've got high resolution displays that have come out. All sorts of data show that people like images on their sites. You know, invokes emotion, and it kind of, certainly if you're shopping you want to see what you're going be shopping for. There's all sorts of reasons for putting images on to your site. But, we obviously have to balance that with performance. If you were to give people a couple things that they should be zeroing in on to try and minimise the impact of those images, what would those be?

Katie:

: I think the biggest thing would just be to systematise how you treat your images because really it only takes one super high-resolution image that accidentally gets uploaded to your website to just dilute it's size so if you can set up a script. Probably moving the image CDNs would be like the more advance level, but for a lot of people just setting up a local script to make sure the images are compressed and the right size will make a huge, huge difference.

: So I was testing out LightWallet and I was picking out big brands to run and I was on one, you know, household name and their site was thirteen megabytes and twelve of those megabytes were images. And there was just no need. It was so so sad. If nothing else, just make sure images are the right size and then for bonus points compress them. And if you really want to be an all-star, you know, start looking into [WebP](https://developers.google.com/speed/webp) or image lazy-loading. But a lot of time when I see sites with these huge image sizes it's just because they're serving really, really large images that are unnecessary.

Tim:

: Yeah, so the image optimisation definitely seems like an example of the low-hanging fruit that maybe we don't talk about quite as much as some of the other stuff today. I think most of the performance conversations that right now tend to dominate around the JavaScript techniques but the good news is that if you are sitting at thirteen megabytes, lets say, hypothetically with twelve megabytes of images, you know, its one of those things that introducing something in that build process can immediately get you some really really big wins.

Katie:

: Yeah and as we talked about, images are not going anywhere. Nor should they, because, you know, they do add a lot of value to the site experience but you just need to handle them correctly.

Tim:

: Right, we never make things faster in a vacuum, right. Performance doesn't exist in a vacuum. We do it because we expect that it's going to help the user and it's going to help the business. As much as us performance folks, we may love the idea of 10kb site that uses no web fonts and has one tiny thumbnail and it's performance is all get out and loads instantly, which is great. But it's not gonna solve the business needs or the user needs for the bulk of the web. It's always about balancing. Balancing this richness of experience with the performance of that experience.

Katie:

: Oh, exactly. I think, like, a shopping experience is a really good example of this. For instance, when I'm scrolling through stuff, maybe I want a lower quality image because I just want the items to load quickly as I'm scrolling. Then when I'm actually looking at particular products, I love it when they have high resolution images because I really want to see what the product looks like. And that's an example of where its just not one size fits all.

Tim:

: Yeah, that's where you have to be very creative I think with some of the solutions, right.

: Well, Katie thank you so much. If people wanted to keep up on what you're doing and what you're working on, how would they do that?

Katie:

: You can find me on Twitter, I'm just my name [@katiehempenius](https://twitter.com/katiehempenius) and that's 'h-e-m' like a skirt hem and 'p-e-n' like a pen you write with, and 'i-u-s'.

Tim:

: One of my favourite Twitter accounts to follow just because it's so much useful and fascinating information that pops up all the time. Not to put any pressure on you, but yeah. Alright, well thank you so much for doing this. Definitely would love to have you back on at some point again. 

Katie:

: Yeah, thank you so much.

Tim:

: Thanks for tuning in, I hope you enjoyed the conversation with Katie as much as I did. Like I said, Katie is the...the breadth of her knowledge is fantastic. It's incredible. And it was just a real pleasure talking to her and I am pretty positive she'll have to be on in the future again because there's just so much more we could even get into.

: If you enjoyed the podcast and you'd like to make sure you don't miss out on any of the other fantastic upcoming episodes, please subscribe in your favourite podcast subscription service or application, it should be in just about all of them. You know, and if you feel so inclined, feel free to leave a comment or review, that's always appreciated, it really helps to get the word out about the podcast. There's some really great fantastic conversations coming up and I really want to make sure that as many people as possible get to listen to that.

: The podcast is produced, as always, by Steph Colbourn from [EDITAUDIO](https://editaud.io/). And the intro and outro music that you head is done by [Daryl Banner](https://www.youtube.com/channel/UCDW4GF1L_ogK4OZtz_gB-zw). It’s the 8-bit cover of TLC’s Chasing Waterfalls, so thank you Daryl for providing that. Thank you, Steph, for doing such an incredible job every single time of editing the podcast and getting it transcribed. And thank you for tuning in and I will see you all next time!
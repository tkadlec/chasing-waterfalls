---
date: 2020-02-06
title:  "Dealing with Third Parties with Karolina Szczur"
episode-slug: "5524dd1b-b649-487e-bea6-db4cc742c413"
sponsorName: "SpeedCurve"
sponsorImageAlt: "Image of the SpeedCurve logo and an animated 6-eyed monster holding up a phone"
guestPhoto: "/guests/karolina-szczur"
guestName: "Karolina Szczur"
episodeNum: 4
lede: |
  You can do all the work to make your own code as fast as possible, but a few ill-performing third-party scripts can still bring your site to a crawl. In this episode, Karolina Szczur talks all about third-parties: how big of an issue they really how, how to identify which ones are the most problematic, and what you can do about it.
links:
 - url: https://twitter.com/fox
   text: "Karolina Szczur on Twitter"
 - url: https://thefox.is/
   text: "Karolina Szczur's site"
 - url: https://twitter.com/patrickhulce
   text: "Patrick Hulce on Twitter"
 - url: https://calibreapp.com/
   text: "Calibre"
 - url: https://speakerdeck.com/fox/the-state-of-the-web
   text: "The State of the Web"
 - url: https://twitter.com/addyosmani
   text: "Addy Osmani on Twitter"
 - url: https://www.thirdpartyweb.today/
   text: "Third Party Web"
 - url: https://developers.google.com/web/tools/lighthouse
   text: Lighthouse
 - url: https://support.mozilla.org/en-US/products/focus-firefox
   text: Firefox Focus
 - url: https://calibreapp.com/blog/fast-live-chat
   text: How We Improved the Performance of Our Live Chat by 30%
 - url: https://www.netlify.com/
   text: Netlify
 - url: https://www.heroku.com/
   text: Heroku
 - url: https://wpostats.com/2015/11/03/google-400ms.html
   text: Google found a 400ms delay resulted in less engagement
 - url: https://www.intercom.com/blog/reducing-intercom-messenger-bundle-size/
   text: "Reducing the Intercom Messenger Bundle Size by 65%"
 - url: https://twitter.com/csswizardry/status/915886339391918083
   text: Harry Roberts' tweet showing a performance waterfall with and without third-parties
 - url: https://twitter.com/benschwarz
   text: Ben Schwarz on Twitter
 - url: https://perf.email/
   text: "Performance Email Newsletter"
 - url: https://twitter.com/calibreapp
   text: "Calibre on Twitter"
sponsorImage: "/sponsors/speedcurve_herman"
sponsorBlurb: |
  See how real people experience the speed of your website. Then use SpeedCurve's synthetic and real user monitoring solutions to find (and fix!) your web performance problems. Companies like Ancestry, BBC, Casper, Expedia, Shopify, and Zillow use SpeedCurve to create faster, more joyous experiences for their visitors.
sponsorLink: "https://speedcurve.com"
---
Karolina:

: I think there's a lot of responsibility and accountability shifting, especially if it comes to third parties. It's like, well, I have to use this tool, therefore I'm dropping it in and here we are. We have the metrics we need. It doesn't matter what the customer's experiencing.

Tim:

: That was Karolina Szczur and this is Chasing Waterfalls, a podcast featuring conversations with the people working to make the web faster for everyone. My name is Tim Kadlec, I'm a web performance consultant and your host.

: Today's conversation with Karolina is all about third party resources. Anybody who's working in eComm or at a publisher, just about any site online, you've probably run into a situation where some sort of a third party resource, some sort of a third party script, whether it's advertising or analytics or something like that comes in and starts to wreck havoc on your beautifully laid performance plans. And this episode is all about that.

: There's a lot that goes into wrangling third party resources on the web. They're deceptively simple, that they're usually one or two lines that you drop in your page, but sometimes that one or two lines ends up pulling in three megabytes of JavaScript to operate a simple widget or something like that. So keeping tabs on third party resources is important, understanding just how significant the problem is and being able to balance that with your business considerations because theoretically, right, the reason why these third party resources get added to the pages because they provide a business value and so how do we balance that business value with the performance considerations and the implications that we run into there?

: There's a bunch to get into. Karolina covers all of it, like if you are having third party problems in any way, shape or form, this is the episode for you.

: Before we get to it though, I do want to thank my sponsor [SpeedCurve](https://speedcurve.com), for sponsoring the episode.

: If you've been listening to the podcast, you know, SpeedCurve's been sponsoring throughout so far, I've talked a lot about some of the fantastic features that they have specifically as it relates to this conversation. I want to focus on the third party functionality.

: So SpeedCurve has a dedicated third party dashboard that lets you get some really interesting and valuable insights into the third party resources that your site uses and how those are impacting performance. So out of the box they'll give you a waterfall that you're kind of used to showing all the different requests of your page, but they'll highlight what the third party resources are there and sort of group those requests together. So you can see at a glance, for example what Google Tag Manager is pulling in or you know, whatever third party resource it happens to be and you can see, 'oh hey they're pulling in 20 requests. Those 20 requests are doing 600 kilobytes and they're blocking the CPU for 150 milliseconds'. They make it very easy at a glance to see the performance impact of these different third parties.

: They use the third party database that's being maintained online by [Patrick Hulce](https://twitter.com/patrickhulce), which is becoming sort of the de facto standard for identifying automatically what third parties are. That being said, if there are any third party resources that it doesn't flag as a third party or that it doesn't recognize, you're able to in your settings go in and set up your own custom third parties.

: So for example, Chasing Waterfalls didn't identify SimpleCast out of the box. So I went in to the settings, I created a new third party called SimpleCast and then I put in a URL pattern to check for and now it's recognizing SimpleCast as a third party and I'm able to critically track the history of that. I use that for playing the episodes and I want to see just what performance impact and overhead is coming along with that versus going with some sort of a native solution that may have a little less bells and whistles. So now SpeedCurve is tracking that for me. I can see how that changes over time and I can get very clear insights into what it's doing to the performance of my pages.

: Once you have third parties tracked, you're then able to sort of plot all of those together in different charts and in your favorites, in your budgets, you can even have budgets around third party resources. So for example, I could have a budget around SimpleCast in this situation and say, you know, 'Hey, if it gets over this amount, let me know because I'm not willing to let it wreck that kind of havoc on the CPU' or 'I'm not willing to let it pull in that much weight'. So there's a ton you can do right inside of SpeedCurve. 

: All of it, again, comes with those sort of those beautifully designed dashboards, which makes, you know, sharing the data very easy. Cause one of the big things about third party trying to fix that internally is you're going to have to have this conversation with different stakeholders. You don't necessarily want to inundate them with numbers. You want to be able to show them quickly at a glance, some sort of a graphical representation around what the performance trade offs are so that you can have a conversation about, hey look, this is what it's causing us in performance. What are we getting out of business? Are there things we can do to sort of minimize this impact? Are we getting the value that we're expecting? 

: So again, all of that's inside of SpeedCurve of which it's extremely powerful, extremely helpful. You can get a free trial on [SpeedCurve.com](https://speedcurve.com). Thank you once again to them for sponsoring and now onto the conversation with Karolina.

: Karolina, thanks so much for taking the time to be on the podcast. Thank you for having me. So for folks who don't know who you are or aren't familiar with at work, do you mind giving just like a little bit of an introduction.

Karolina: 

: I'm a designer and a front end engineer. Currently I'm working as a design lead and performance advocate at [Calibre](https://calibreapp.com/), which is a <abbr title="Software as a Service">SaaS</abbr> platform for performance monitoring.

Tim:

: I became familiar with you in particular, I think from like a year or two years ago you gave this talk called [The State Of The Web](https://speakerdeck.com/fox/the-state-of-the-web). The deck made the rounds and eventually I found video. But it was this fantastic talk. It did not just like the technical optimizations. You had a lot of that in there. But the part that really appealed to me was that you were talking a lot about performance as it relates to privilege and the impact that that has on people outside of the little bubbles that we tend to operate in. 

Karolina:

: Yeah. I think that actually the kind of angle is very common in my performance work. Rather just sharing technical data. So that pub was kind of let's say a marriage of like an [Addy Osmani](https://twitter.com/addyosmani) style talk filled with, you know, actionable technical details and tooling as well as actual approach and thinking about, you know, applications of our work and the effect of our work that it has on people.  

Tim:

: Yeah, it was really, it was really effective combination too. So that's where I became aware of you. And then we've never, we've never talked, I've never had a chance to actually have like other than very brief online interactions to chat with you. So that had to change.

: So when we were talking about doing this and we were discussing what we might want to talk and you brought up a topic that I think has really, it relates a lot to that same and has a lot of those same sort of implications around what it means from a broader perspective when we're talking about, you know, these issues that we see from a performance perspective and that is this, you know, third-party performance.

: Let's just lay the groundwork here for anybody who's listening, what are we talking about when we're talking about third parties and we're talking about, you know, pulling in different dependencies or we're talking about third party resources as in, like, advertising, you know, how, what are we talking about here? 

Karolina:

: Yeah. So I think for people who are especially not super embedded in the performance word, you can kind of get confused by the word third party. Like what does that actually mean? You can assume, oh, does that mean a framework I'm using or does that mean you know, dependencies that we pull into our projects?

: That's not what we mean when we talk about third party. When we talk about third parties, what we actually are referring to is mostly ads, third party tooling in the sense of analytics or, primarily analytics, but any kind of like drag and drop in SaaS software that you're adding to your page. So yeah. Think Google Analytics, Segment—anything that you're kind of dropping in with like a JavaScript snippet, usually. 

Tim:

: It's not something that you wrote and it's not something necessarily contributing like a JavaScript framework or anything like that. That's what we're talking about here with third party resources.

Karolina:

: Yeah. Usually we're talking about external tooling. So an external kind of software as a service that you're using to achieve your business needs and primarily is, you know, software that you use to communicate with your customers or analytics software and primarily ads as well. 

Tim:

:  I feel like third party stuff—it's surprisingly not as discussed as it probably should be. But just how big of an issue is this? Specifically from a performance perspective. But I'd also be kind of curious about your take on related issues that come with it. 

Karolina:

: I think it's not discussed enough. I totally agree with that. I definitely see more people kind of being interested in it and kind of showing concern and what implications third parties have. Because I'm so embedded in the performance work from the standpoint of actually working on performance tooling and performance products, I'm very close to that subject.

: And what we've observed is that third parties vastly contribute to performance issues and bottlenecks. And I think one of the really interesting statistics in terms of like seeing the impact of the third party tooling is something that [Patrick Hulce](https://twitter.com/patrickhulce) did, the [Third Party Web Project](https://www.thirdpartyweb.today/) where he outlined that around 60% of executed JavaScript on top 4 million sites is actually external.

: So to me that's, that's huge. It has tremendous impact and we've seen that with our customers as well. We've seen the statistics of main thread execution and the page weight contribution as well, and they're just humongous when you compare it to, you know, what the code that you actually write yourself and the code that you release.

Tim:

: That's a huge chunk of execution. And just to be clear, that's excluding pulling jQuery from a Google CDN. That's not included in this conversation.

Karolina:

: No, no, that's not included. We were talking like ads and business kind of tooling, A/B testing, customer success analytics...

Tim:

:  So what's fascinating to me about this, I guess, is that 60% of executed JavaScript, we talk a lot about like JavaScript being the primary bottleneck from a performance perspective today. All that damage that it can do. But here we're sort of, we're inviting a huge chunk of of code into our pages and the sake of business or advertising or analytics or whatever it happens to be.

: But we're basically giving what 60% of the JavaScript that we're pulling in. We're giving control of that experience to some extent to these third party providers, right? Like when we do this, we're giving them some level of control over the experience that we're trying to provide.

Karolina: 

: Yeah, I think it's definitely an interesting dynamic and I think that's definitely a more common to kind of, you know, add on those services in teams that don't have an established performance culture.

: I think people who are really set on performance as one of their primary objectives, they really do pay attention to what they add to their sites or apps in terms of monitoring and services. But if you don't have that culture, it's just so easy to drag and drop another tool. Like it's literally usually one line of code.

: So people just don't really think about the responsibility and accountability and the impact of adding those tools, especially if you're talking about business objectives and a lot of those tools kind of feed into those, that kind of crucial business objectives, like understanding your customers boosting revenue. So it becomes really easy to just, well obviously we have to add this tool. There's nothing to talk about here. Like we just need it. So there's just no conversation there. 

Tim: 

: And you mentioned too that you said, you know, one of the things that you'd notice is that a lot of people seem concerned about it but that's kind of maybe where it stops sometimes and I want to kind of go back to that and unpack it a little bit. Because it seems to me, like a couple of things come to mind based on what you've said here and based on my own experience too. 

: The concern comes from maybe a few areas where one is what you just talked about right? Maybe that culture isn't embedded and they're missing the pieces that they need to be able to have tighter control on that.

: Part of that could be concern over the mystery of it. Like you know there's a lot of hand wavy things around third-party performance implications, but then you know how many people have actually sat there and figured out 'Hey we are getting hit this bad and this is what is costing us.'

: And then sort of that trade-off I think is the third thing that comes to mind. A lot of companies don't really know, like, 'when I use this tool, what am I giving up in the process? Like am I actually making a right value exchange here?'

: So I kinda wanna like, go back, if you don't mind like to each of these things a little bit. When you're looking at you know, customers' sites or in your own sort of just random profiling, which most of us performance people do because we're a little twisted like that. Have you seen like patterns or code smell kind of things that are signals that hey, hold on. There's something funky going on with the third party or that you've got to watch out for? 

Karolina:

: I feel like there's so many things you could be picking on. Obviously the first one is the size and you won't know until you either create a kind of a standalone use case for this is my website or a product with this tool and without and compare the benchmarks. Or use a tool for that will disable those third parties for you and see like, 'Oh actually this is the impact and that now I can quantify it'. So size is definitely one of them.

: I mean you could go as far as actually reading third party code and see like is this script actually referring to some other script? I know there are tools that actually have like recursive references, so the size that you see on the surface isn't actually the size and the number of requests that ended up happening at the very end. So I think size and maybe looking into whether the script refers to other scripts inside is something that I would kind of look at at the very beginning. 

Tim:

: When you mentioned loading the page with and without, do you recommend folks do that one big bulk thing? Like, here's our page with third party stuff. Here's our page without. Do you recommend people be a little bit more granular in a situation where you have a bunch of tests where each test is just pulling one provider out at a time? Or do you think there's sort of a progression to get to that point?

Karolina:

: I think it's definitely useful to be granular. We've actually recently built an interface to just kind of surface that kind of data. I feel like you can serve third party data through [Lighthouse](https://developers.google.com/web/tools/lighthouse) and you can surface, it's through a Chrome developer tools, but I feel like the impact that we talked about like 60% of execution on the main thread is still kind of hidden. 

: So you need an interface that will show you, this is how much page weight it will have against the total page weight. This is how much impact it will have against the script execution time. And then you can drill down 'these are all of the third parties, what's the size, what's the execution time'. And then you can identify, you know, your main offenders, which you know, might be something that you didn't expect. It was kind of like one of the main, main offenders.

: So I think definitely being granular and creating testing profiles and disabling specific third parties will give you more information and tell you where the bottlenecks are and what is the performance strategy we can adapt to solve this problem. Do we need to actually get rid of this third party? Do we need to find a new service that provides the same kind of tooling? Or is there a strategy that we could, you know, develop to mitigate this impact? 

Tim:

: Sure. So let's, let's go to that. I mean, the next part of this question then is like, okay, so we find out that such and such a tool is costing us, you know, it's, it's loading megabytes of JavaScript. Let's just say hypothetically, not at all a real world example, but let's just say that there's a widget that's pulling in React, an entire React app, just to execute something really small on your page. So it's slowing everything down. Not that I'm saying I have ever run into that. 

: But how do you go from that point to saying, 'Hey, this service that we are paying for to do X is wrecking havoc'. How you have that discussion with the rest of the teams around like, okay, we've got this performance issue but maybe you're still getting some business benefit from it. How do you make that logic leap?

Karolina:

: I definitely have actually an example of that because we, we had an issue with one of the providers for like kind of like a customer success tool and it was vastly non-performant and obviously as a performance company, like performance is the first thing for us. We have to be super performant.

: So there's this tool, that was kind of crucial for our business operations and that customer success was really contributing to performance issues. So we thought, 'well, the cost of migration will be large. We are not sure if we can find something that, you know, will offer the same service. So how do we progress from here?'

: And one of the ways we've mitigated that problem was to actually, it was a chat widget to make it maybe a more, I feel like this reference won't work very well if people can visualize it. So it was a chat kind of like customer success widget. So what we figured out to mitigate the performance hit was to actually [create a fake widget that looked the same](https://calibreapp.com/blog/fast-live-chat), but the JavaScript for that widget wasn't being loaded until someone actually wanted to interact with it. So click or hover action. So that means that there was no initial JavaScript and performance hit from that tool. It was on there happening when somebody was actually one thing to interact with it. So it was kind of like it, it wasn't the ideal solution at the time, but it was the best solution we could come up with to kind of compromise between business goals and performance.

Tim:

: And that's maybe I think, something that people have to really try to keep in mind when they're having this conversation. Because I think particularly if you're somebody who does care about performance and like that's something you get excited about and you're really, you know, want to make the site as performant as possible. You find a provider like this that does this and compromise might not be the word that you want to ever use. Right? Like you're just like this thing is doing, you know, damage. We need to pull it, get rid of it.

: But I guess it's important to sort of keep in mind, like again, we, we don't make sites faster for the sake of making them faster. We make them faster because it's better for the users. We are the people coming to the site. It's better for the business. If that's not true, then shaving a few extra kilobytes off, you know, even a megabyte off when it actually hurts the experience or it hurts the business. It may not be the right thing to do. 

Karolina:

: Yeah, exactly. It's all about the context and the value. So you always have to embed those conversations about performance in context and also your business needs. So that's kind of the ongoing conversation and the performance work was, well, how do we navigate performance that's often so hard to sell and business needs. Because so many times the correlation is so vague and it's so hard to prove with actual hard data. 

Tim:

: So going back to the chat widget example, that's a creative solution. We've seen that with, the thing that comes to mind is social sharing widgets. I remember that that was a really big thing. I don't think we have to talk about that as much anymore, but a few years ago I remember there was a decent amount of noise over, you know, folks talking about lazy loading, social sharing widgets and stuff like that.

: How did you get to that point? Did you go through a process first where you said, Hey, we've got this thing, it's causing damage. Let's look at other providers. Let's have a conversation to their current providers, see if there's anything that they can do or, or was it sort of, Hey, we know we're going to run into issues. Let's get creative about this right away. 

Karolina:

: Yeah. So this problem actually surfaced when we were redesigning and rebuilding our marketing side. So we kind of had this beautiful blank slate of like super performance site. And then when we notice, 'Oh this is the biggest bottleneck, it was super fast before adding this tool, but we also need this tool. So let's create a benchmark'.

: That was the first step. It was creating a benchmark with the current tool that we're using and several alternatives, so kind of measure well are they way more performing that what we are using? Is their a chance to maybe switch providers? Which was definitely a valuable exercise.

: But at that point we weren't quite ready to make that switch. The cost of the switch was just too big in terms of not on the cost of the software subscription, but also just the work that you would have to do to make that switch, which is why people usually just stay with the tools that um, they've kind of initially picked. So after kind of benchmarking and figuring out that, well the other tool is more performant, but the cost of making that switch is actually too large at the moment. How can we figure out a creative solution that will mitigate that performance impact? 

Tim:

: All right. Let's say that we had to have a conversation with a different business unit about maybe we're in that intermediate step, where we've identified that it's an issue and we're evaluating those potential services, but let's say that we're at a large company where you had zero say in the analytics provider that got like eye tracking software or something like that that got added to the page. What are some of the things that you should be focusing on or you would recommend people focus on in terms of having that conversation with whatever the team is? I don't know, the eye tracking team. This is what we've identified. Let's work together and figure it out. What's some of the data or points or the things that you would recommend people have on hand? 

Karolina:

: I think this is a pretty standard answer to any kind of team collaboration issue. And it starts with gathering, doing the research and gathering the data. Like that's very relevant to performance work, but also usually when you have any other kind of issue when you're working with other people and are not necessarily aware of whatever issue you've experienced and discovered, you have to bring in the data, especially in bigger companies where you know you're the performance advocates and people aren't or have no insight in performance or accessibility whatsoever. You have to bring as much data as possible to show the negative impact, the impact on main thread execution, the impact of the page rates showing and doing those benchmark tests saying, Oh, this is how our site or our product looks like without this tool or with this strategy that I came up with to actually show not only the problem but potential solutions. Because when you just only showed a problem, people don't respond to that very well because it's just kind of like, here, here's an issue that's really big and we should act on that. But I'm actually making that recommendation.

: So I feel like when you're trying to show those performance issues and get them action, especially in bigger organizations, you really have to bring in not only the research but possible solutions and I'm sure performance advocates or people who are kind of well versed in performance will be able to come up with potential solutions or at least this is the road I think we should take. This is the benchmarks we should do or performance monitoring we should employ to uncover those issues further and be able to actually work on them. 

Tim:

: So that's from the perspective of Hey, we've identified problems we need to clean it up. 

Karolina:

: Yup. 

Tim:

: I'm a big, when it comes to like code for example, I love shifting the performance conversation, the budget conversation, whatever you want to put it as early as possible. That means like as a developer I want to be able to see, I want to make it clear to the developers on the team as they're writing code what the performance implications is. 

: Are there things that folks can do to sort of get close-ish to that for when, when we're talking about, you know, organizations where you know, maybe they're using a tag management system and you've got five or six different teams that are all just dropping different things in based on what they're coming across that's useful. How do we get to a point where we're catching those third party offenders before they go out?

Karolina:

: We come back to like having a reliable performance monitoring system because that's where it really surfaces the problems, especially before they hit the production. One of the strategies that's great for that is using performance monitoring on GitHub pull requests and having transparency into that performance impact before it hits production. Like that's kind of the step where you will see it best. Especially if you're using tools like [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) to deploy staging previews. You can compare that to grand production while they're making changes. Get a performance review in GitHub and see how that pans out. It's actually something that we've been actively working on. And it's nearly finalized now and it's been tremendously useful to have that. Here's your performance impact review and your pull request instead of doing it after it's released. Because at that point it's too late.

Tim:

: Right. I always think of the, [the old study](https://wpostats.com/2015/11/03/google-400ms.html) that, years ago, I think it was Google, like we're just trying to find out what happens when you insert a delay when things are slower. So the inserted sort of like an artificial delay in search results and then all the usual things that you would expect. Right. People were less engaged, they did less searches, blah, blah, blah. Kind of boring. Well, I mean not at the time, probably not boring, but like, you know, the things you would expect to have happen.

: But the thing that always stuck to me about that particular one is then when they removed the delay, they put everybody back on even footing. And the folks who had had to suffer with this like 500 millisecond delay or whatever, uh, it took them months to return to normal levels of engagement.

: And so it always kind of hit me like we have to be careful cause if we're reactive to this too much, like if we put stuff out there and let things get past, you know we don't have that front line of defense. Those checks that you're talking about. We can put a bad taste in people's mouth and it's not like it's an immediate fix for them. Like we don't get to just pull it away and then pretend nothing ever happened. Like we've left a bad taste for a lot of these folks and it's going to be reflected in user metrics and business metrics. 

Karolina:

: Definitely. And I think people really kind of grew impatient with the progression of the web. I don't really know what's the, what's the specific cause, but I observe it amongst all my developer and a designer friends, people who are in tech but also kind of like casual users of the internet that people would just don't handle delays well. So if something is not performant or I can't complete this action that I'm here for very swiftly, I'm just going to ditch it. I'm just going to go elsewhere because actually I have other things to do. So that's why performance is really important and because we have this scarcity of time that we can give away. 

Tim:

: And that's a really good point I think about like your friends that aren't the developers or the designers. Because as a developer, you know you or I will hop out on a page and if it's slow, I don't know, maybe we put an ad blocker or maybe we, you know, open like [Firefox Focus](https://support.mozilla.org/en-US/products/focus-firefox) or something that's going to shut all that stuff down because we have a suspicion that it's these third party things giving us grief. I haven't looked at like ad blocker usage or anything like that, but for somebody who's not got that technical background, I don't expect that to be their first like thing that they're going to reach for.

: I mean, have you seen, are the folks you've talked to, are you expecting them to do something like that or is it more like, 'Hey, you know what, this is really slow. I'm just, I'm leaving'?

Karolina:

:  Yeah, I've seen a lot of kind of the departure approach, like I've seen to send my parents who like, they're fairly technical for their age, but they had no idea ad blocker existed. So when I installed it for them, they were like, wow, the web is so much lighter suddenly. 

Tim:

: This is back to your State Of The Web kind of thing. Like this idea of like this broader implication of the performance. Because I mean, two things, right? Like if they're just leaving, they're not blaming third parties, they're blaming us. Right? We could say all we want about like the amazing job we did on our performance, but if we're letting third parties tear things apart, there's, we're still the ones in trouble. But there's also like, if they don't know these other things are available to them, there's other issues we're inflicting on them. It's not just pure performance baggage. 

Karolina:

: I think there's a lot of, um, kind of responsibility and accountability shifting, especially if it comes to third parties. It's like, well, I have to use this tool, therefore I'm dropping it in and here we are. We have the metrics we need. It doesn't matter what the customer's experiencing, but, and it's also really easy to say, well this, you know, widget I'm using for AB testing is really non-performance, but what can I do?

: Well, there are actually multiple things you can do. You could seek an alternative solution. You can talk to the vendor and tell them, look, your bundles really non-performance affecting our customers. We need to do to do better. And I've worked at companies that received performance feedback very frequently. I'm not saying it wasn't necessarily actioned because that goes different ways depending on the company and their priorities. But that feedback has to be heard.

: And you can go get creative in the solutions such as, I don't know, develop a mock widget to, you know, hide the actual one and defer the request for a the script that's so heavy and so bad for the main thread execution. So there are strategies that you can employ.

: You can also make this script async. You can make sure that you host those scripts versus just copying a snippet that you find on provider's website and you know rely on kind of like another external request that you cannot control. So there are definitely strategies where you can introduce control in an area where you don't have control but you just have to be mindful of it and you have to be aware of like where the problem is, what are the strategies, or do we have to look elsewhere for another tool.

Tim:

: Thinking about it, I guess in sort of layers of defending, I guess maybe in this case you're defending your experience or the user's experience with your site, but like, like you talked about making sure that you've got the right folks, you know, whether that's a performance team or just people, developers who are paying attention to things like checking it ahead of time or putting in resource integrity things to make sure that everything is what you would expect to be loaded or you know proxying requests through your own domain kind of thing. To reduce the single point of failure thing, which is such a big issue, particularly with a lot of those blocking personalization or AB experimental things. But sort of viewing this as sort of, Hey, we need to get benefit from the business, but at the same time we also need to be able to defend the folks who are trying to use our sites so that they continue to have a safe and enjoyable experience.

Karolina:

: It really comes down to performance culture. I've seen this happen so many times in companies that do have strong performance culture and believe that performance is important and they did manage to prioritize speed and accessibility and great user experiences at no cost to, you know, swapping all of the tools that they're using for, I don't know, customer success or analytics. So it's not like necessarily a binary choice—in some cases, sure. But there are strategies that you can use to mitigate that performance that you just have to be aware of them and you have to start with having that conversation. Like the responsibility is actually on us, not necessarily on the vendor that's providing the service. 

Tim:

: Yeah. Which it's an important thing to remember and I think it also helps you to sort of maybe remind yourself that if you view it that way, like the responsibility is on us. I think it stops you from being able to have that cop out, right to say, Hey, it's the third party stuff. There's nothing we can do, but I also feel like it almost gives you to some extent, some ownership over these third party things.

: You talked about talking to the providers and providing that feedback and giving that performance thing. In my experience, very few companies do that. Very few companies say, Oh, we found this terrible third party issue and then talk to the third party performance people with what they've talked about and try to get it fixed. I haven't seen a lot of companies do that, but I've seen when we, when I've done it, when I've worked with companies and had them do this, I've seen third party providers be very receptive to this usually.

Karolina:

: Yeah. I mean you won't know until you try it, right? Like, you have no idea about how much of that feedback they actually are receiving. Have they ever heard it or do I, do they hear that every single day? So, and I mean if you're a performance expert, like actually talking to those companies and those vendors saying like, Hey, this is the problem I've just discovered, these are the metrics. This is how heavily it affects our users. This is important. Like, I could even advise you.

: Like for me this is different because I'm actually like performance advocate and working in performance words so I usually offer advice but just being empathetic and showing, showing the problem, showing the context and the data can be tremendously helpful. And sure some organizations will ignore you and won't act on that feedback. But some actually, well I think Intercom was one of those companies where they're chatting. 


Tim:

: Yeah they did some great work didn't they?

Karolina:

: Yeah. Yeah. Recently I think they like reduce the, [their size of the bundles 60%](https://www.intercom.com/blog/reducing-intercom-messenger-bundle-size/) because they knew like it's a crucial tool for customer success and getting new customers in and support as well. And I think they got a lot of complaints and they worked hard to make that bundle weight way smaller. So I think it's definitely possible to get the feedback on on board for a vendor and they will actually action it. But you have to try, you have to get out there.

Tim:

: Do you think it's realistic? Sort of piggybacking off of that, like sometimes you hear folks talk about applying performance budgets or things like that to these other organizations. Do you think is realistic to, to go to an AB provider or an analytics provider or personalization service that you're about to add and in that negotiation process when you're, you know, from business perspective you're talking about what you're going to be paying and all this kind of stuff. To put it right there in an agreement, some level of adherence to a performance budget or weight limits or anything like that. Is that anything you've ever had experience trying? 

Karolina:

: I haven't experienced it personally, but finding that you mentioned that because I actually was thinking about it yesterday. So when you think about let's say like enterprise agreements and those agreements oftentimes have SLA for uptime. So you enter an agreement saying this is our expectation, we're paying for it. This is what you have to deliver in terms of uptime. This is a tool that's crucial to our business.

: You could do the same with a web performance, have a performance SLA. Like I expect you to have, I dunno, not make my time to interactive larger than X or not introduce more a page weight to our marketing side that's larger than 500 kilobytes. I don't know like arbitrary numbers, but you get the idea that we could definitely introduce performance SLAs and demand a better from the vendors that we're using.

: Especially I think you have more leverage at the enterprise level because obviously you're paying so much money for a service that you can kind of make demands. I think at like a small subscription model, maybe you don't have as much leverage. But I think the more people demand better performance and to set those expectations, I think people who run those services will realize like this is actually really important and we have to prioritize that. Not necessarily because they believe in it, but because there's so much external pressure because sometimes they just don't believe in that. So we have to work with was that whatever is on the table. 

Tim:

: So if you don't mind, I want to take a step back and do sort of a... detach a little way from the technical side of things though and talk about the broader implications of third parties and the way we've been using them, things like that for more of an ethical perspective because again, that's an angle that I'm always very, very interested in.

: I think it's particularly in the last few years, it feels like we've had a very rude waking up, I guess inside of the community to some extent at least, or at least it's starting to happen around this conversation, which I think is important. But one of the arguments that I see sometimes is that the way the web is set up right now, the way publishers are so reliant on advertising, the way we rely so much on data provided by analytic services and stuff like that and we are so data driven and some of these large organizations run every single decision that to some extent some of the things that we're going to run into with these third party providers are inevitable. Like the argument being like the publisher is usually the most common argument, but the argument being like they right now are struggling to make money online. The way they do it is through advertising. And if they can't load a page with 20 different ads and however many different app providers, they're not going to be around. So do you feel like there is a fundamental flaw in the business model around companies on the web right now that is, that puts some limits on this?

Karolina:

: The advertising model is definitely not something that I subscribe to. Maybe I would subscribe to it more if advertising didn't really really suck. I mean there is good advertising, it's just that it's not very common. It's just that advertising is kind of something that we associate with horrible user experience and trying to you know read an article and are like 20 popups and you can't even see the article. 

: Like I think there is a compromise there like I don't like ads but I think there is a compromise there to have a viable business model and have those ads in a non offensive way that doesn't hinder user experience. There's definitely a compromise to be had there. 

: But I think, and also there are different alternatives to like tracking software that are trying to be more user friendly and not collect all of the data just like the absolute necessary to kind of anonymized data to kind of respect user's privacy. So I think there is a movement for more privacy and more security and more respect to where towards people and their privacy on the web, but I feel like we're just at the inception of that movement and there's just not enough tooling that has those values at the forefront. 

Tim:

: This one's just getting started. You mentioned Netlify earlier. That comes to mind as an example of like an analytics solution like they've got this analytics thing, you pay them however much month (it's not very much), but which is always a good sign. But theirs is all, it's, it's server-side, it's anonymous. You don't get like all the user data stuff. You just get straight up analytics stuff that's still useful but without all the personal data that comes along and the baggage and stuff like that.

Karolina:

: You can definitely do it server-side, which I think is has a less performance hit as well. Like for A/B testing. That would be a scenario scenario where server-side is definitely a better approach rather than just like shifting the DOM, which obviously will cause issues. Paying for a service definitely is a good sign as well. I mean, if a product is free, you're pretty much the product usually. I mean we've seen that play out. In Facebook's case it's one of the biggest, I think examples that I can draw on. 

Tim;

: Yeah, they're having a few problems right now, yeah.

Karolina:

: The amount of third parties and...it's just astounding. I mean the stat from from Patrick's research is one thing, but the second thing is when we were building like a third party analysis tool and interface, I was actually analyzing my own new website, which has no third parties whatsoever, no tracking. And it was funny because after we've built that interface, we actually realized that we didn't cater for that example because, that use case, because it's so, it's everywhere on every single product, every single website we test that the interface was actually, what does that mean? Like there are no third parties. I've seen sites that had 700 third parties. Like it's just mind blowing the kind of how widespread the problem is. 

Tim: 

: Yeah. I think Harry Roberts who had [posted the tweet like that showed like a waterfall with it without third-party on the same site](https://twitter.com/csswizardry/status/915886339391918083) and it's just ridiculous the difference between the two.

: It does feel like there has to be like some sort of an educational process to some extent targeted at maybe at the, actually at the people like the actual people using the web, not necessarily the folks building it, although that too to make it aware to them, Hey you know you're coming to CNN.com and it's six megabytes of your data and it's you know, 60 trackers and all those kinds of stuff. Like it almost feels like you need to find a way to take data like that that is relevant from, you know, potentially cost, potentially their privacy, their security and really probably in exposing it, I guess this is a browser level thing, but really finding ways to intelligently, gracefully expose that information so that people at least have some sort of knowledge around what's happening under the hood when they go to this site or that site.

Karolina:

:  How great would it be if browsers actually expose that kind of information like, 'Hey, this site that you're on is going to take that, like it already took that much of your data and it's tracking you through 25 services'? Because that would really bring the transparency to that problem that so many people don't know about. Especially people who are not, you know like really invested in the web, they aren't working on the web.

: I can see people who are not developers, designers or like project managers or working on the web starting to see this issue of privacy security and performance because it's been talked on, talked about, in the media mostly in relation to Facebook, but that issue is starting to surface to them but it's still not enough for them to understand the true implications and also how they can't kind of defend themselves from that performance cost or security or privacy cost. 

Tim:

: Right. I guess I have seen things like that but it's always been in sort of side browsers like Firefox Focus, like something you have to go out of your way to install like not your default browser experiences at all. Yeah, it definitely feels like there's room for something like that.

:  And then on the developer and side of things it almost feels like we, we need to introduce a little bit more friction back into the process. Like not to rag on it, but similar to the sort of the npm install sort of culture, it's really easy for us to do this with third parties to to just drop this here and drop that there. Like everything has made to very much so simplify that process almost feels like kind of take, maybe take a step backwards and actually make it a little harder to do that. Introduce a little bit of pause into the process so that people are considering like what we're actually throwing in there when we do it instead of just making it so easy to just drop another service into place.

Karolina:

:  I feel like there are things that are happening though, like Google pushing penalization of websites that are not performing and pushing them down in search results and doing all of this advocacy work and really visible high level performance things like that's very helpful and I think I definitely as someone embedded performance work, I see the effects of that and I see more and more people who weren't invested in performance and now coming to us and saying, 'Hey, so we just realized performance is important, please help. I don't even know where to start.' So it's definitely creating awareness and it's creating friction in the performance world from people who are not interested or didn't see divided in performance before.

Tim: 

: Yeah, I've seen that a lot from myself as well with like the, especially the Google search stuff that you're talking about. When they did the whole, what did they call to remember what they called it? They had some fun name for it. But some name for like the throwing it into mobile indexing results and stuff like that. I've been hearing from a lot of companies who are like, 'Hey, we heard that it's going to be a search engine thing now in mobile.' I guess the other thing too is they shifted page speed insights to use Lighthouse now. Whereas before it was like this older ruleset and everybody's scores kind of dropped because Lighthouse is much more up to date in terms of what it's testing against.

: And so I'd get all these people that, you know, maybe performance wasn't a thing for them before, but because of the search engine update and because there are page speed scores, which they've been, you know, ingrained matter from a search engine perspective had plummeted like then yeah, they were paying attention suddenly. So I think you're right. There's something, there are things happening like that and there's an, I guess it's a, it seems like a pretty effective way at least to sort of get that change started.

Karolina:

: It's also funny I think because when people, when they start using a Lighthouse and they also simultaneously use PageSpeed or other kind of performance testing tools that Google has. What they see when they're kind of starting with their performance journey is different results from different tools coming from the same vendor and that really confuses them and I've don't blame them at all because without the experience and knowledge and performance you would be very kind of baffled by those results. 

: But what they don't understand is like those tests are conducted in different locations. Those tests have different kind of test profiles set up. There's actually, there are things happening in the background that you know there's a different setup, there's a different environment for those tests so you're getting different results, but because there's no education surrounding that, people are really confused with this results that they're getting with different tooling and then they get frustrated with performance tooling and performance in general and that kind of hinders or prevents them from progressing in their performance journey.

Tim: 

: Yeah, trust is is such an important part when it comes to performance monitoring and measurement. If you're using the same tool and getting different results or you're on different devices or whatever in that education isn't there, it doesn't take much to throw people's trust of that those results off and as soon as they don't trust that anymore, it's really hard to get people to pay attention again. 

Karolina:

: Definitely. I think there are actually two kind of aspects here that I've definitely observed when working on Calibre like test verification and building that trust is that people have to understand statistics a little bit and how numbers actually work and how do you know how to work with vast data set, how to set up reliable testing. You just can't test once a week or once a month. That's just not going to be reliable data, so you have to understand there will be a level of variability but understands like how it actually works, when it happens and when to be okay with it.

: And then from kind of like whatever performance tool you're using, you have to have test verification in place to ensure that you know, this isn't a one off, this isn't a failed test or this isn't just some wild result I've gotten and just put it into charts because a lot of tools do that and that surprises people and that doesn't bring trust. So you really have to make sure that whatever performance tool you're using has that kind of reliable test verification in place.
 
Tim:

: You should expect that there are going to be anomalies, that there's a reason why we look at like the 90th percentile or 95th percentile in many cases. Right. We're expecting some variability but you want to know when it's there. It's a valid reason and not because the monitoring solution you're using had problems scaling up.

: I know Calibre has put a lot of work into this. I've talked to [Ben (Schwarz)](https://twitter.com/benschwarz) a little bit about it. I think I remember seeing him tweeting about it as well. But I know you've done a lot of work at Calibre around, you know, test verification and making sure that, hey, if you've got an issue, it's a legit issue. It's not something that went wrong on Calibre's end during the testing or some system somewhere didn't scale up fast enough. Like it's a legit thing that you should look into. 

Karolina:

: Yeah, yeah. We've done a lot of work in different rounds to make sure that that data is, you can trust it. Like trust is something that we take very seriously. So we did really establish several algorithms to make sure that, you know, when we're putting data into charts or I don't know, like an insights performance report, like it's actually data that's valid and correct because you're making decisions based on that data.

: So we did employ a range of different tools and algorithms to make sure that, you know, the test results are verified. Um, some get discarded. When do they get discarded to make sure that the customers can trust that data. 

Tim:

:  Have you found too with like the work is particularly around like sort of the designing the experience with Calibre, you've had to do things at times to sort of help lead your customers down the right path? Okay, so you find like an anomaly, you find this data issue. Trust is partly because not you know whether or not you think that that's a real thing. But the other thing is like, I feel like you'd need to have a short distance between Hey, our timed interactive spike 30% and Oh this is why. 

: So do you, it almost feels like when you're designing a tool like Calibre or like any of these other performance monitoring things, you have to sort of design an experience where you're almost taking them by the hand and walking them from what they're seeing and educating them along the way to a point where they're able to interpret the results into something that they can actually do. Like is that something that you've seen or am I completely making this up? 

Karolina:

: Pretty much what you have is a vast set of data with different metrics, different charts and different ways to visualize that data and then the job kind of of the customer is like, Oh, I'm going to digest this data and figure out what the problem is.

: I think where the challenge lies is actually what you just described, which is leading the customer to instantly see where the problem is and what to do about it. Because otherwise those performance tooling products will be only reserved for, you know, people who deeply understand performance or are engineers or both and they want to be accessible to people who are often in charge of performance, which is team leads managers, people who are not necessarily engineers are well versed in performance.

: So that's kind of the challenge of building a performance tool is that not only visualize data in a great way, but also actually show the cause and effect of kind of like performance work or any work that introduces performance regression or performance improvement. 

Tim:

: Yeah. To to bring it back full circle. Like it's not just enough, right, for the developers of the performance folks to get the hardcore data that they need. But if you've got business using a tag management system and adding that third party thing there, you need to find a way to make that performance story relevant and approachable to them as well. Like you can't just overwhelm with the data, like you have to have an experience tooling. You're basically, you have to find a way to tell that story in a way that is accessible and approachable.

Karolina:

: Yeah, and that requires you to work with different mediums and different platforms. So it can be be a GitHub pull request performance review, it can be an email saying here are your performance metrics for the last week or a month or it can be a Slack alert, like something that's relevant to the way you work and the way you digest information. That's what we are working on, the kind of creating a holistic performance platform that can be used not only by developers but anyone who's kind of performance user, great user experiences as their goal.

Tim:

: It was awesome to chat with you finally for a bit. So for anybody who wants to keep up with what you're doing, like the work you're doing or Calibre or the things that you're sharing, you know, how do people, how do you recommend people do that?

Karolina:

: Well if you'd like to follow me on [Twitter](https://twitter.com/fox), so that's pretty straight forward. I also run a newsletter about all things performance, which is called Performance Email and the domain is [perf.email](https://perf.email/) and if you want to follow Calibre or try it out, it's [Calibreapp.com](https://calibreapp.com/) or [@Calibreapp](https://twitter.com/calibreapp) on Twitter. 

Tim:

: Awesome. And just one note to anybody listening who's not familiar. I know like the email newsletter thing, like a lot of people are really into that. I tried it. I tried signing up for a bunch of newsletters and I end up ignoring them all except for this one. And not just saying that either. Like the Performance Email is literally the only email newsletter that I've signed up with and stuck with and read every time.

: Just cause it's you, there's always great stuff in there. There's always a nice sort of, you always write I think the intro like I don't think I remember seeing anybody else write one yet, but you always write this like really nice sort of thought provoking, short couple paragraph intro. You have these articles with some good details around those. That's just a really well-curated newsletter so definitely recommend that to anyone listening.

: Thank you. Thank you so much again for taking the time to chat. I really appreciated it. 

Karolina:

:  I had fun—good conversations!

Tim:

: Thank you for tuning in. I hope you enjoyed the conversation with Karolina as much as I did. I really appreciated that she, she approached the topic from a variety of different angles. I think the technical considerations are critical, but there's so much process that comes into play and I think having that sort of broader picture too and understanding of the role that third party resources play for good or for bad in the open web is a really important part of this puzzle.

: If you enjoyed this episode or you enjoy the podcast in general, you know and you want to make sure that you don't miss out on any of the other upcoming episodes. Please subscribe in your favourite podcast, subscription service or application. It should be in just about all of them. We've got episodes coming up with other people inside of organizations and talk to you about like what are they doing internally to try and foster this culture of performance internally. We also have conversations coming up that are going to be a little bit more technical or a little bit more focused on a singular topic. We've got one coming up that's going to be all about understanding HTTP/3 and sort of the implications of that. Some stuff around standards creation. There's going to be a nice variety coming up, so hopefully if you subscribe you won't miss any of those conversations. And if you feel so inclined, feel free to leave a comment or review. That's always appreciated and it helps to get the word out about the podcast.

: The podcast is produced, as always, by Steph Colbourn from [EDITAUDIO](https://editaud.io/). And the intro and outro music that you head is done by [Daryl Banner](https://www.youtube.com/channel/UCDW4GF1L_ogK4OZtz_gB-zw). It’s the 8-bit cover of TLC’s Chasing Waterfalls. Thank you, Darryl, for providing that. Thank you, Steph, for doing such an incredible job every single time, editing the podcast, getting this transcribed, making it sound good. And thank you all for tuning in and I will see you next time. 
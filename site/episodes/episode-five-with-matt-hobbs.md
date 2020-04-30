---
date: 2020-04-30
title:  "Reaching the Entire UK with Matt Hobbs"
episode-slug: "30e534bc-d106-49a3-be95-fcfd2d9028ef"
sponsorName: "SpeedCurve"
sponsorImageAlt: "Image of the SpeedCurve logo and an animated 6-eyed monster holding up a phone"
guestPhoto: "/guests/matt-hobbs"
guestName: "Matt Hobbs"
episodeNum: 5
lede: |
  Performance is always important, but that's especially true for anyone providing essential services over a wide range of connections and devices. In this episode, Matt Hobbs talks about the challenges of building sites that perform well for the entirety of the UK.
links:
 - url: https://twitter.com/TheRealNooshu
   text: "Matt Hobbs on Twitter"
 - url: https://nooshu.github.io/
   text: "Matt Hobbs' site"
 - url: https://speedcurve.com/benchmarks/
   text: "SpeedCurve Page Speed Benchmarks"
 - url: https://speedcurve.com/blog/page-speed-benchmarks/
   text: "Tammy's post on SpeedCurve's Benchmarks"
 - url: https://www.gov.uk/government/organisations/government-digital-service
   text: "Government Digital Service"
 - url: https://design-system.service.gov.uk/
   text: "GOV.UK Design System"
 - url: https://polyfill.io
   text: "Polyfill.io"
 - url: https://developers.google.com/web/tools/chrome-user-experience-report
   text: Chrome User Experience Report
 - url: https://developers.google.com/web/tools/lighthouse
   text: Lighthouse
 - url: https://webpagetest.org/
   text: WebPageTest
 - url: https://www.sitespeed.io/
   text: SiteSpeed.io
 - url: https://chasingwaterfalls.io/episodes/episode-two-with-reefath-rajali/
   text: From Hackathon to Foundational Performance with Reefath Rajali
 - url: https://gds.blog.GOV.UK/
   text: GDS Blog
 - url: https://technology.blog.gov.uk/
   text: Technology in Government blog
sponsorImage: "/sponsors/speedcurve_herman"
sponsorBlurb: |
  See how real people experience the speed of your website. Then use SpeedCurve's synthetic and real user monitoring solutions to find (and fix!) your web performance problems. Companies like Ancestry, BBC, Casper, Expedia, Shopify, and Zillow use SpeedCurve to create faster, more joyous experiences for their visitors.
sponsorLink: "https://speedcurve.com"
---
Tim:

: Hey everyone! Hope you're staying healthy and safe right now. I appreciate the patience with the podcast. I know we had a little bit of a gap between episodes as we sort of adjusted to everything going on here.

: I did want to put a little disclaimer on this episode. So, today's conversation is with Matt Hobbs from the Government Digital Service in the UK. This conversation was recorded well before the coronavirus outburst. In fact this was recorded I believe in December. As you can imagine with them having to deal with much more pressing issues right now, it took awhile for them to get a chance to review and sort of approve the podcast going out.

: It's a great conversation, I just wanted to make it very clear that they did not take time out of their much more critical work to record this. This is from a prior conversation. That being said, great content, really enjoyed the conversation and I hope you enjoy the episode.

Matt:

: Everything that we do in terms of accessibility, in terms of web performance, in terms of content design, we have to be catering to the largest number of people possible because one thing that we can't, we can't just say, well we're not going to support X or you're not going to support Y. Because in doing so we may just be excluding a certain demographic of the UK. So for example, always go back to sort of legacy phones or low-performance phones. Essentially if your web performance is poor, you're then creating a barrier to entry and users on that phone, which there will be them across the UK. We have a massive number of devices access in it. We can't just exclude those users from government services.

Tim:

: That was Matt Hobbs and this is Chasing Waterfalls, a podcast featuring conversations with the people working to make the web faster for everyone. My name is Tim Kadlec, I'm a web performance consultant and your host.

: Today's conversation with Matt is interesting because Matt works for the [GDS](https://www.GOV.UK/government/organisations/government-digital-service), the Government Digital Service, the UK government, and for them performance is essential. We talk a lot about performance and how it impacts business metrics like conversion rate or cart size or a bounce rate. One of the things that I don't think gets quite as much attention but that I'm fascinated by is the impact that performance can have on general access. For some people, if you're using a ton of CPU cycles for running a bunch of JavaScript or you're downloading a ton of data over the network, maybe it's an inconvenience, but for other people it can mean a completely unusable experience.

: And that doesn't work for the GDS because they're providing critical services for UK residents and in many cases, if they create an experience that's unusable, that's it. There's no alternative that people can reach for. And because they have such a wide audience, the entirety of the UK they also don't have the luxury of placing focus only on folks with iPhones or folks with high connection speeds. They truly have to consider how do they reach everyone. So there's a lot of interesting constraints that come along with that. It's a really fascinating challenge and a really fascinating conversation.

: Before we get to that though, I want to thank [SpeedCurve](https://speedcurve.com/) for sponsoring the episode. SpeedCurve is such a fantastic tool for monitoring performance—having a strong performance monitoring process and tool in place if one of the most critical things you can do for maintaining the success from a performance perspective long-term.

: But today I actually wanted to focus a little bit on something new that they launched that they're providing for free to everyone. So I'm a sucker for being able to analyze trends across the web and seeing how different sites stack up in terms of performance and technological approaches, and SpeedCurve just launched their [page speed benchmarks](https://speedcurve.com/benchmarks/). Now this is a free, publicly available interactive dashboard where you can dig around and compare web performance data across several different industries: automotive, finance, media, retail, tech, travel...

: For each of those industries, they've got a bunch of different sites that they're tracking. These aren't leaderboards, like this isn't a naming and shaming thing. There's no, this isn't your top ten performing sites or your worst performing sites. It's more of a smattering like a selective representative collection of sites within those industries.

: But what they're doing is they're running synthetic tests on all of them from both the Europe in the US every day. The dashboards are automatically updated with that day's results. So you're getting the most current data whenever you go there. With each site's test, you can dig into the usual dashboards and data that you would expect to get if you're using SpeedCurve for your own site, which means you can see key metrics, you can analyze performance waterfalls to see how resources are being downloaded.

: One of my favorite things is being able to compare and contrast. So for example, in the retail industry, the page speed benchmarks show Amazon and all these both having very fast start render times. Meanwhile Asos takes quite a bit of time to hit that star vendor point, but it does reach a fully loaded state in a fraction of the time. So what's cool is then you know, because you have the power of speaker underneath this, you can dig into each of those sites and find out like why is that the case? What's different between the two approaches? I'll give you a hint. JavaScript plays a role.

: In the podcast today we talk a lot about folks with less powerful devices or without great connectivity. So it's also great to see that in the page speed of benchmarks, all of the sites are tested both on Chrome and cable connection, but also on a slow 3G connection using an emulated Nexus 5x device. That way you can see all these sites perform on less than ideal situations when they're not having a high unlimited connectivity or when the device itself is a little constrained. And I think that's such an important piece of this.

: There's a lot more to it, a lot more to the benchmarks. Tammy Everts over at SpeedCurve has written up a [great post about the benchmarks](https://speedcurve.com/blog/page-speed-benchmarks/) and what you can do with them and the kind of data you can get from them. So definitely check that out. And if you want to try out speaker for your own site, take it for a free trial at [speedcurve.com](https://speedcurve.com). Thank you to SpeedCurve for sponsoring, and now onto the conversation.

: Hey Matt, thanks for agreeing to be on the podcast.

Matt: 

: No, no problem at all. Really, really good to be involved. Thanks for the invite.

Tim:

: No, of course. I've been really looking forward to the conversation. For folks who are not familiar with you or what you're doing, could you give us the overview? 

Matt:

: I worked for the Government Digital Service. We're a part of the cabinet office and essentially we have been involved in the digital transformation of the UK government's website since around about 2012, 2011-2012 something like that. When I joined two and a half, just over two and a half years ago now.  

Tim:

: So GDS runs a bunch of different stuff, right? Like that's, what does that entail exactly? What does the Government Digital Services entail? 

Matt:

: From a tech point of view, which is what I'm involved in, the main one that people know about is GOV.UK which is the central website for the UK government. It has all the had guidance on there. It has a lot of links into different services and most people know the GOV.UK homepage, which you would then search and you get to say for example, search how to pay your taxes or how to find different licenses, fishing licenses and stuff like that. So it's a central location for all that information.

: But we also have different services that we run as well. So for example, we run GOV.UK notify which is a central service that lends, lets local authorities and central government and the NHS send emails and text messages and letters to their users. We also have a GOV.UK pay, which is almost like an abstraction layer above a payment service. So, government services and public sector organizations can use it to pay however they want to make payments. 

: And we also have the [GOV.UK design system](https://design-system.service.GOV.UK/), which is a set of styles, patterns and components to make services look like GOV.UK and we have a few others as well. There's quite a few others. So there's lots of different agile teams based around the building and they will work on their own product and there is some sort of interlinking in between as well.

Tim:

: Okay. But so for more or less like there may be team or a couple teams that are working on like the pay system and then maybe there's a couple other teams that are doing like GOV.UK like proper or whatever.

Matt:

: Yeah. So there's, there's one team that runs pay, there's one team that runs notify, GOV.UK is the big one. There's a massive number of, there's probably, I guess I don't know the exact figure, but I would guess probably eight or nine separate teams running GOV.UK and they're all different. They all take sort of like second line or making,, like accessibility and, and different areas. So they all focus on those different areas. Um, there's the GOV.UK team is very large and there's a lot of people on GOV.UK that I, I'm not quite sure what they do, but they do something.

Tim:

: [Laughs] Yeah, we'll make sure not to tell those individuals. No. But so this is why I thought it would be so interesting to talk to you about this because a couple of things that kind of come up from this, first off, your audience is basically the entire UK, right?

Matt:

: Yes. Yeah, that's correct. So for example, very recently we've had, I'm registered to vote for the general election. That all is hosted on GOV.UK. You find the guidance on how to vote, you go to a start page and then you'd go through to the service. So it's GOV.UK—it's almost like the funnel at the start of the funnel at the top. And then users move through that funnel. They look for signposts of, of where to find guidance. And then they eventually reach the service or reach the guidance that they need. So for anything at all to do with government, a person from the UK would start on GOV.UK.

Tim:

: Okay. So like some companies may have an advantage. Apple's the one that comes to mind and Apple comes to mind probably because you know every time they launch a new product it's, it gets more expensive and then the product page as well tends to always be this bloated thing. And it feels like it like every year, every two years, whatever, you know, somebody notices it.

: And online we have these massive discussions about the fact that Apple shipping like 60 megabyte pages and is that okay? But they have a very particular audience. Like Apple is not targeting my next door neighbor. They're targeting people who have expendable funds to be able to spend a ton of money on this stuff. And so maybe that is less of a consideration. You don't have that luxury, you're kind of hitting the entire spectrum. 

Matt:

:   Yes. Yeah. That's one thing that we have to be very, very careful of in terms of everything that we do in terms of accessibility, in terms of web performance, in terms of content design, we have to be catering to the largest number of people possible. Because one thing that we can't do essentially is we can't just say, well, we're not going to support X or you're not going to support Y? Because in doing so, we may just be excluding a certain demographic of the UK.

: So for example, always go back to your sort of legacy phones or low-performance phones. Essentially if your web performance is poor, you're then creating a barrier to entry and users on that phone, which there will be them across the UK. We have a massive number of devices accessing it. We can't just exclude those users from government services. So we have to be as encompassing and as accessible as possible. 

Tim:

: Yeah. No, I mean we talk, I think in general this tie between performance and just general access, right? And how you can leave people out. And again, maybe in certain scenarios you might be able to argue that, eh, it's okay leaving I, you know, I don't personally have that stance, but I could see how a company would try to make that case that, Hey, it's okay if we're not targeting this particular demographic or if that particular demographic doesn't have access. Maybe it's not such a big business impact for us.

: But when we're talking about this, like the information, the voting, like all of this stuff that is absolutely critical. Yeah. The access is, it has to be there. It's a huge responsibility

Matt: 

: Yes, exactly. Cause I mean, if you also approach it from the point of view of people get stressed doing accessing websites, I know if I come to a poor performing website, I get stressed. It's fine. If it's you go onto,, an ecommerce website and you can't buy something because of a performance issue, it's fine. Okay, I'll go to a competitor or I'll try a bit later on.

: But when it comes to a government service and someone who's trying to, for example, register a death or they've got some tax return that they have to do, all those a time critical piece of administration that they have to do and their life or part of their life may depend on doing this, then that isn't an option. It has to and we're the central source of sort of the linchpin in that. 

: And if they can't come to us to do it, they either have to find a different avenue, so they'll go down a different channel. Like they will maybe send an email or they will make a phone call to a certain department. They'll have to wait for ages or they may not get a response or they may not even do the service at all. So we really do not have an option, in either make it fully accessible and there isn't another option and essentially it has to be done.

Tim:

: What do the UK users look like when they're coming to GOV.UK? Like, how, what are you dealing with in terms of, you know, legacy browsers and devices and stuff?

Matt:

: So in the past nine months, GOV.UK the mobile usage has jumped from 64% to around 71% as of the last months statistics, we have the looking at the [CrUX](https://developers.google.com/web/tools/chrome-user-experience-report) data report, 4G connection distribution. For some reason it's fallen from 97% to 95% but that is off the bat and measurement of the effective connection type. So that could be a measurement change, I'm not too sure.

: But in terms of like for example, older versions of Internet Explorer, they have dropped off massively since. So I started in August of 2017 and we still had probably 1% or 2% of users using older versions of IE and that has massively dropped off in the past probably 18 months or so.

: So for example, in the past three months, our IE8 usage is at 0.03% IE9 0.91% IE10 at 0.02% so the biggest IE version now is IE11 and that is probably down to about, I looked at the stats yesterday and I think that stands for about 7% of our users are on IE11 now.

: I did a bit of work on sort of older legacy devices as well and that was fairly recently. And our legacy devices seem to come into be sort of older iPads on like version 9.3.5 I think the iPad 2, which was locked down to Safari 9 or older versions of the iPhone. So the 4C, I believe maybe even 5 now where they are again, they are locked to iOS 10. They're gradually reducing in terms of our total usage, Chrome is the most popular browser, Safari is the second most popular browser.

: And it, when it comes to Safari, it's the iOS version of Safari that is the most popular version. So it's, it really is a mixed bag. It depends as well what pages you look at. It changes for every single one. So it's quite an interesting statistic to jump into when you are going to Google Analytics.

Tim:

: It's, so are you saying that you have, just to clarify, more legacy iOS devices then sort of older Android devices?

Matt:

:  That's a good question. Those are, one second, I will try and bring up, I should have had this...

Tim: 

: That's alright it's just one of those things that, cause I know us, it's a US centric stat, but I know like in the US it's, I think the last data point I saw is that folks are updating their phones like once every 32 months. And globally Android shipments tend to be a really big deal. Just curious like how that shakes out in the UK if that means that you have, are you seeing older Android devices or, or maybe they're newer, but they're like the affordable type and just kinda curious like what the breakdown is or if you have a sense of that.

Matt: 

: So I've just brought up my list of legacy devices, and the top ones is the iPad and the, two version of the iPad, a 9.0 which is maximized. The maximum version 9.3.5 and 10.3.3, I can't remember what version off the top of my head that is. But then you get further down and you have things like the Samsung Galaxy S6 and they're locked to iOS version 7 and then the J3 and then the S6 again.

: So there is a real, I mean I've got a list here of potentially 600 or so devices that, to give you some context, I was really interested in this because I would like to know what devices are classed as legacy cause then we could potentially actually test on those devices. Almost created device lab, essentially to get some real experience. 

: So was a case of okay looking, exporting all the data from Google Analytics, but then how would you class a legacy device for example? And for me it was, well he could either look at the CPU, you could look at the RAM, but when you've got literally thousands of devices that doesn't seem to work, it's just not feasible essentially.

: So eventually I sort of came down to the idea of, okay if hey'd been classed as a legacy themselves by the manufacturer, then we would then class that as legacy cause they no longer receive any updates from the manufacturer.

: And then the other one as well was to try and examine and see if their default browser was an evergreen browser. Because is a user on an older Android, are they going to take the time to download a version of Chrome or whatnot, which is evergreen. I've no idea. I would never know that and it's completely unknowable. 

: So those were the two metrics I sort of used to pull together a list. It seemed to work. I do have questions about whether that is the correct way, but I would love to have a service where a bit like, can I use where it was "is this legacy?" Where you could enter a phone and it would tell you, okay this came out six years ago. It's locked to iOS three or iOS six or something like that. And because of that we would class this as legacy. Maybe some listeners could turn, just focus on something together.

Tim:

: It's not a bad idea at all but like I could see something like that. Right, where you have the ability to sort of set your own criteria.

: Like what, what popped into my mind as you were saying that is it? Do you remember in the early days responsive design, like the BBC really popularized this cutting the mustard approach. Right, so cutting the mustard was all about like we're going to check for the existence of these two or three features and if those exist we're going to say that this is a, it gets the enhanced experience. If not it gets this core experience. Then you use progressive enhancement and stuff to kind of get to that point.

: It feels like a service like this could be handy based on your own criteria. Like maybe what you want to figure out is those legacy devices or maybe you do want to be able to quickly have like there are APIs now that are starting to give us some sense of memory and things like that from devices. Right. So maybe that's another check. Like if we can determine that a device has a certain amount of RAM, maybe that's another criteria that factors in because we know that there are new devices that are also budget devices that are going to perform much more like a legacy device. 

Matt: 

: Yeah, absolutely. I think, that it's almost like the [Polyfill.io](https://polyfill.io) that sort of service. It looks for what was missing fills in the blanks. But it would be good to have a service like that where you could just sort of fire it off and go, okay. Looking at these criteria, we think the best experience you would have would be using, sending the standard wire to you. That sounds like an interesting, interesting proposition.

Tim: 

: You mentioned that you were kind of trying to build up a device lab or that was kind of the end goal. So were you able to do that? Like what do you, what is the test device situation look like in a GDS? 

Matt:

: So in terms of the web performance, we want to start that, but we do have what is called the accessibility empathy lab, which is used for accessibility testing. So that's accessible by all of our teams internally. And we have external teams that come in and test their services using different criteria, different devices, different personas and whatnot, different color settings.

: I would love to at some point do the same for performance cause I think that'd be really valuable to actually go to a team and say, well can you use your service for a day using this, this particular device? Like a, a Moto G4 or an Alcatel 1X or something. And just sort of give them an idea of what it's like for a user on a low spec device. Cause I think that would really open a few eyes.

Tim: 

: Yeah, absolutely. Getting that firsthand experience is always so much more impactful than, than just like looking at the data or whatever.

Matt: 

: Yes, absolutely.

Tim: 

: So we touched on, I think the importance performance plays at GDS in terms of general access and being such a critical service. I know one of the other things that you've talked about and probably comes into play when you're at a place, something like, you know, the government is sort of the environmental side of things.

: I mean obviously this is in general is a hot topic right now, but the environmental impact of things like web performance I think is really just only now becoming something anybody's paying attention to. Is that something you've put much focus on? 

Matt:

: Yeah, that's something I'm definitely, I want to move towards. We've done some internal studies around the actual impact of our services, our digital services make in terms of the amount of CO2 that they bring about. And then that's something that I'm pushing from a web performance point of view as well because in terms of all of our services—they're hosted in the cloud, but the cloud isn't a made up thing. It has an impact in the real world. All the services have to be hosted. They have to be running a data center. There's the CPU cycles, there's, there's the actual hard drives that have to be run. There's a cooling involved, all of those.

: So that is definitely something that we should be focusing more on. And we have green in government commitments where we need to ensure that we are using clean and green digital and technology services and practices. Cause in terms of the ICT, information and communication technology, it accounts for like 3.6 of global electricity use, or 1.4% of greenhouse gas emissions, which is pretty huge when you think about it.

Tim: 

: Yeah, it's pretty significant. I mean it's the small percentages, but when you think about like, and we're talking about a very small subset of all this stuff being used out there too. So that's pretty significant amount.

Matt:

: Yes. Yeah, absolutely. Yeah. Cause as a nation, we've committed to reducing emissions to zero by 2050. So I mean there's a few years to go, but I mean it's, it's a good place to start.

Tim: 

: You have to be very transparent about a lot of this stuff. Like you were just talking about the environmental side of things as well. Like you have very public facing reports about accessibility and things like that, right?

Matt:

: Yes. Yeah, exactly. We have accessibility guidelines that we have to meet. They came into force for public sector bodies on the 23rd of September, 2018. So that says that, new websites must be accessible to work at 2.12 AA compliance. Then the 23rd of September this year (2019), an accessibility statement must be published with those for all those websites.

: And then they would outline where they are at the moment and where they plan to be in the future. And that needs to be reviewed and updated regularly. And by the 23rd of September, 2020 existing websites need to be compliant as well. Assuming there isn't a disproportionate burden on a service to make them accessible. 

: But that's very legal and I don't fully understand what exactly a disproportionate burden actually is. I need to get a specialist involved. But in terms of accessibility, we are very, sort of on top of that. Because we have to, we have to legally do that and also it's the right thing to do as well. We want to make it as accessible as possible. 

:  I'd love to say there was something like that for web performance. But there isn't, there isn't a legal obligation to make a website performant cause that would be a really handy crowbar to have, but we don't have that. It's certainly something that I would like to move towards.

: So for example, we have guidance and we have service assessments and if you are a service of a particular size, you must go through a service assessment and it gets a green light to say this meets our service needs or it meets these criteria. Ideally, what I would like to move for in the future is that frontend web performance and web performance in general is part of that service assessment. You would have a service assessor who would look at web performance and say well it's too slow or it's it's X or it's Y.

: The question then comes is how do you do that? What does good look like? So whether it's a set of automated tools, for example like [Lighthouse](https://developers.google.com/web/tools/lighthouse), could it be that you get a performance score of 80 or above and then that classes are okay your performance enough when you delve into the details, that's where it gets really difficult. 

Tim:

: Sure. So this sounds like basically like a budget as part of the service assessment or a series of budgets. Yeah. So then you get into the same challenges. I think that everybody has with that is you know, how far down that road do you go?

: And I think to your point, given the critical nature of the services that you provide, it certainly feels like you would have to err on the side of being more comprehensive than what that budget entails versus a one off number that relates to just one part of the performance equation.  

Matt: 

: Yes. Yeah.

Tim:

: So the service assessments, just to clarify, is this something that's like legally mandated? Is this something that your team like is something that GDS kind of came up with internally that you want it to be able to do?

Matt: 

: Yes, so we have something called the [service manual](https://www.GOV.UK/service-manual) and that is essentially a set of guidance for government services that they they need to make in terms of what they do.

: So they—it's all online, the service manual, it gives you guidance around the design around the technology use and then that is something that GDS came up with a good few years ago now where it's just sets a, almost like a bar to meet for certain services.

: So when a service starts it, we're going to into alpha, so that's it's very sort of prototype and phoned together from that alpha. They'll then go into beta and so forth. It will go through these different stages and there'll be a service assessment at the beta phase. And then from alpha to beta there's a service assessment. And then from beta to live there is also a service assessment as well.

Tim: 

: And the service assessment is something all the different services potentially have to go through, right? Like this isn't just something that GOV.UK does, but maybe pay does, notify, et cetera.

Matt:

: Our internal services will have to go through it as well. And external services as well. So from other departments, if they are over a certain size or if they're being used by a set of civil servants in more than one department, then it has to go through a service assessment.

Tim: 

: Yeah. So I mean this seems like a huge step, right? Because I could imagine with so many different services, so many different teams, like there's, there's always this challenge of how do you coordinate and unify so that everybody's really focused on performance across these different teams and across all these different services. And this feels like an important step there. How have you been able to get GDS across the different teams focusing on performance? 

Matt: 

: So it's an ongoing process. It isn't, perfect at the moment, but, I've started things like work performance Slack, that was the first start. Getting the front-enders on each of the teams involved. We've spun up our own instance of [WebPageTest](https://webpagetest.org), which we've now started using. We use [SpeedCurve](https://speedcurve.com) as well, so it used to be we only used the synthetic side of SpeedCurve, on GOV.UK. But I've now branched that out to every one of our internal services and gradually rolling that out and looking at key pages.

: And when a key page goes over a specific budget, say for example, an image is too big than a particular channel in Slack, will get an alert straight away. So it's starting to almost, well, what I'm trying to do is almost bring it in as part of the process, which is exactly what happens with accessibility. It's a consideration from the start. And that's something I'm trying to push towards is that it is a part of the, almost like the agile process where we have a load of tickets about web performance and they're considered when different functionalities brought in whatnot.

: It's not perfect in the moment and it does still feel like a bit of a uphill battle, but I think it's gaining momentum at the moment. We're also trying to spin up [SiteSpeed.io](https://www.sitespeed.io/), so I'm going to use that to form to monitor our internal services as well and look for these specific areas. And then it could be a case that I, being head of frontend and interested in this, pull together certain reports and then deliver those to the teams internally to say, look, here's an audit of what's going on. It'd be great if we could fix these and I'm happy to pitch to prioritize this. I pitched to the team and say, well, here's my report. Here's why we should be doing it and here's the work that it entails. 

Tim:

: Yeah. And on the note of it not being perfect, in my experience with the folks that I've talked to across lots of organizations, I've never seen a perfect system. Right? Like, there's always going to be more work and more fine-tuning to be done to get to this ideal state that we're all trying to aim for when it comes to this kind of thing.

Matt: 

: For me, it's almost planting the seed in people's brains in and its not only from 10 developers as well. It is backend developers, it's project managers, it's actual interaction designers and content people. It comes from every single member of the team. It has to be baked into the whole process because you can't have a front-end developer who's very keen on performance, but then you've got an interaction designer who doesn't, it doesn't really matter to them. So they throw everything into the page and you're just fighting an uphill battle that there needs to be buy in from the whole system of the whole team essentially.

Tim:

: So how do you get buy in? Obviously I think you and I are in sync here, right? Like performance is critical. It makes a lot of sense, particularly for services like this, it has to be there. But you know, if I'm talking to folks at an e-comm shop and they're saying, "Hey, you know, how do I get this buy in inside the organizations so that we can have the support and keep going?" Well, maybe we'll do a competitive benchmark. Like we'll find out how they're doing against their competitors and that gets people fired up. You know, like Burger King doesn't want to be performing less than McDonald's or even better, right?

: If it's an e-comm shop, we can say, well let's look at your conversion rate and we can see that performance correlates to the money that you're making. And if we improve performance, we improve your revenue.

: But you are in a different situation because if you don't perform well, like you said early on, if you don't perform well, that's it, right? Like they don't really have any place to go. So there's not competition. You're not making a profit off of the folks coming to your site. Like how do you get that buy in?

Matt: 

: And that's the difficult part. That really is the difficult part in that. That's the part that I'm trying to work out because as you say, there isn't the crowbar to go to the people who are making the decisions and say, well, if we speed up our webpage by a second, we'll bring in X amount more dollars. We don't have that situation here. We aren't essentially making money off our users.

: And to me, getting that buy in has to, it's me sort of speaking internally amnd almost, prioritizing it within teams and also sending it up the chain of command as well. Sort of saying, okay, this needs to trickle down from above. So if I can speak to people higher than myself and say, look, this is why we should be doing it. And then there's also the aspect as well of recruitment.

Matt: 

: So the front-end community in government is in a very strange position. We have something called DDAT capability framework, which is digital data and technology, which essentially is a set of capabilities. So a job spec. So we have a central set of job specs that are crossing across government.

: So at the moment we have one catch-all, which is called, software development. Of course software development is very, it catches everything. It's massive. It's ginormous. You could be an iOS developer or an Android developer or you could be a website developer or who knows what else you could be.

: So what is on my list at the moment, and I've submitted a draft now, is for a specialism for front-end development and that's in draft. I'm hoping that will be published soon. So front-end developers will actually exist in government, which would be good.

: But part of two skillsets that I've included in that is accessibility because, from my point of view, every front-end developer across government should be doing accessibility. It's a legal requirement. So we need to start there.

: But secondary, part of it as well is,  I've added web performance as a skillset, an individual skillset that needs to be part of their skillset as well. It doesn't need to be full on your an expert. But essentially what would be nice is from people coming in the door, they know that accessibility is a part of the job that they do and every single thing that comes out of their job role of what that building, they should ask themselves the question, well is this accessible? If it isn't, how do I change it?

: And that I think—that's almost like a grassroots thing. So bringing people in the door either with the expertise already or with the idea to train them up as well. So bringing training and if it is in as a skillset officially, you can then say, okay, we have learning development budget and I want to use it for performance as you would with I want to use it with accessibility or with design or with content design. That's one way I can see buy-in from bottom as well.

Tim:

: I mean that makes a lot of sense, right? There's going to have to be, when you're bringing in new folks, there's going to have to be a lot of resources and support for them internally for that level of education because front-end development is a broad spectrum. There's a ton of stuff happening there. I think it's probably unrealistic for any of us to expect that everybody we bring in is going to be an accessibility expert or a performance expert or whatever. Right.

: So having that internal support, and it also reminds me on [episode two with Reefath Rajali at PayPal](https://chasingwaterfalls.io/episodes/episode-two-with-reefath-rajali/), she mentioned that like that's what they do at PayPal when the developers are coming in during that onboarding experience, part of the thing they go through are these pre-created, performance, educational resources. That's just part of the onboarding process and it sets the stage from day one.

Matt:

: Yeah, absolutely. And it's coming onto the more technical side of things as well. We are in terms of recruitment as well, we are in a strange position compared to the market because essentially as a front-end developer at GDS, specifically the GDS is, we don't use a massive amount of JavaScript. We don't, we don't use a front-end framework.

: So when it comes to recruitment, we tend to get a lot of CVs or recruits where there's a lot of heavy "We've done React, we've done Vue, we've done Angular and what-not, which is all great. It's all really, really, really good. But in terms of what we do internally, we do very, very little of that.

: That purely comes down to, it comes down to user need. We're making plain content pages mostly. We don't need to have all the extra bits and pieces on top of that. So it's, it's a bit of an odd place. It's a great place to be, a front-end developer to get down to progressive enhancement and a graceful degradation and accessibility and semantic HTML. We do all that really well. But in terms of the JavaScript side of things, we don't use as much of it. Recruitment is difficult.

Tim: 

: Yeah, that makes sense. I mean, that's, you know, that stuff is right now very popular for many reasons. And the developer ergonomics certainly are part of it. But I will say I find it encouraging and also refreshing to hear that perspective that like, hey, you've made this conscious decision that while there may be some developer appeal to these technologies for your services, for what you build, it's just not a necessity and you're being judicious in sort of guarding that user experience as much as possible. 

Matt:

: Yeah, exactly. I've had this conversation many, many times with quite a few departments around the use of JavaScript and it's not, I'm a front-end developer. That's what I've done for years and years. I really, I love JavaScript. I love what it does. It can be massively abused, but it does have lots of good points as well.

: And it's not that I'm against using JavaScript at all. I think if it's used in the correct manner, in a layered approach, then you can, you can use it really well. So if for example, you use a progressive enhancement approach, and this is what I've mentioned to a lot of people is you can use, you can use the framework, but essentially start from the bottom. You start with your HTML and then you layer on your CSS and then you layer on, okay you do some sort of, you observe what the user is using and then you bring in your JavaScript and essentially it enhances the experience.

: But if, for example, the JavaScript fails, which it does or if it's turned off, if the user chooses to turn off, they can still use the core service that sits underneath it. Cause ultimately that's what we want to deliver. We want to deliver content to a user that they can read, that they can see, that they can ingest and then they can move on with their lives and exactly the same as when they're filling out a form. They need to fill out this form, they need to do what they need to do, they need to send it off and then they can move on with their lives.

: So does having a 500 kilobyte react library sitting in front for a form, does that help with that? I think a lot of the time, probably not. That's my take on it as well. I can imagine there's going to be a lot of people sort of defending and I'm not against JavaScript at all. I don't want to become some sort of enemy of it at all. But that's just my take on how it should be used.

Tim:

: Yeah, I'm with you on this. I think there's something very elegant in my opinion about the progressive enhancement approach and going for that resilience and stability and layering things on. I've always found that to be a very elegant approach to building for the web—music to my ears, man.

: Are there any sort of interesting performance optimizations you've done recently that had some good results or things at the you're willing and able to talk about?

Matt:

: One of the biggest ones that we've had in recent times is when I first joined, we were, we were using BASE64 encoding of our fonts, of our WOFF font. Now this was back in 2012 when it was first built GOV.UK. This was a really, this was a standard method. Everyone did it cause you wanted to, reduce the number of TCP requests. But over time, obviously that's become a anti-pattern.

: So what essentially happened was I got chatting to a lot of people on the GOV.UK team and said, "look, we need to change this method." We need to change to a standard font loading method because of X, Y, and Z. And that essentially happened last year and we changed that font loading method. So we actually serve the WOFF font and a WOFF2 font, which is better compressed. Whereas before using BASE64 encoding, we only served the WOFF font. So we were adding bytes to the critical path. That's a recent change. So that's the change to GOV.UK.

: We have other things coming in the pipeline as well. So one thing I haven't talked about is the design system. So the GOV.UK design system I mentioned before is a set of standards and patterns and making services look like GOV.UK. Now we are actually rolling out the design system into all of our internal services at the moment. And that includes GOV.UK.

: So for GOV.UK we have, we don't have, so for the design system, should I say, we have a brand new font, we have a new font and new web font, that has been remade. UAnd it saved about 85 kilobytes for the two. We have a bold font and we have a standard font and it saves 85 kilobytes for WOFF2 and when that will eventually come in. 

Matt: 

:  So that's a massive saving that hopefully we're going to see probably in the next few months I would say as cause GOV.UK is, is a complex beast. It is, built on Ruby on Rails, but it's a mixture of different applications. So it isn't a case of changing something in one place and it goes everywhere. Each application has to be updated underneath.

: So each of these applications at the moment are being updated to use the design system. And as they use the design system that bring in the new version of the font, which will bring down the page weight by 85 kilobytes. It will also remove the use of EOT fonts as well. So older versions of IE, which have a very low percentage now, they won't be offered an EOT font anymore. It will simply fall back to Arial because the EOT files were huge. They were really big, probably about 110 kilobytes each or something like that. And when you're using an older version of IE, it's the less that's the least capable of being able to handle that amount of data. So it was sort of a double edged sword there.

: So if anyone's listening and they want to see the design system in action, if you were to go to a GOV.UK page and you tab through the page, so you'll see the accessibility ring around the links. The old orange is the old system. As you tap into a page, if it goes bright yellow and underlined, that is the new more accessible colors brought in by the design system. So that application has already been updated to use the design system.

Tim:

:  Design systems I think are a whole other interesting topic, right, because it has the potential to bake in those best practices from the start right away.

Matt:

: Absolutely. I sit with the design system team and some of the work that I do in is, is absolutely fantastic because the thing about GOV.UK is as GDS, we hold the branding and the design of GOV.UK but services underneath it, they come from different departments. So you'll have the department of work and pensions or you'll have HMRC, or you have the, department for education. They all look the same as GOV.UK.

: Now when a user travels between GOV.UK and one of their services, they probably won't notice the difference, but they've actually changed to a different website. And making that brand go from our central site to another site is a really difficult task. And when you have a design system that allows you to do that and allows external teams who we have, don't really have much contact with. Essentially we give them guidance and allow them to copy and paste a code which is accessible, which is performant, which is on brand and they can do that quickly and easily. I think that's a really, really powerful tool and we should be leveraging it a lot more across government services because we will be saving time and we'll be saving taxpayers money in doing so. So it's a, I really do like to design systems and the one that we've got is fantastic.

Tim:

: Yeah, I think there's a lot of potential there.

: So Matt, this was fantastic. This was an amazing conversation. If people want to keep up with you or what GOV.UK what GDS is doing in general, how do they do that?

Matt:

: So we have a [blog](https://gds.blog.GOV.UK/), we have the [technology blog](https://technology.blog.GOV.UK/). So if people search for GDS technology blog, we do a lot of blog posts. It is not all front-end. There's also a lot of, there's backend and there's all different areas as well. And they will link onto other GDS topics as well. So we have a lot of blogging that happens. And also I tend to tweet a lot as well. So my Twitter handle is [@therealnooshu](https://twitter.com/therealnooshu). I have no idea where that came from. 

Tim

:  I was going to ask about to nooshu thing. 

Matt:

: I don't know, I think I have a theory in my head that about 10 or 15 years ago I went onto an automatic name generator and that's where it came from, one of those random ones. But it's everywhere now. I can't change it. So there it is. 

: And then I have my own personal blog as well, which is [nooshu.com](https://nooshu.github.io/) and it will redirect to a GitHub page with some web performance musings and different bits and pieces on there.

Tim:

: Yeah. So Matt, again, thank you so much. This was fantastic. Really appreciate it.

Matt: 

:  No, fantastic. I've really, really enjoyed it. Yeah.

Tim: 

: Thanks for tuning in. Hope you enjoyed this week's conversation with Matt as much as I did. Like I said, there was so many interesting constraints that they have to deal with, so it was really interesting to hear about how they're approaching performance and how are they approaching reaching such a wide audience.

: If you enjoyed the podcast and you'd like to make sure that you don't miss out on any of the episodes, please subscribe in your favorite podcast subscription service or application. We should be in pretty much all of them and if you feel so inclined and you want to leave a comment or review, that's always appreciated. It does help to get the word out about the podcast and there's more great interviews coming up. Definitely want to make sure that that gets in front of as many people as possible, so reviews, comments, that kind of thing is always appreciated.

: The podcast is produced, as always, by Steph Colbourn from [EDITAUDIO](https://editaud.io/). And the intro and outro music that you head is done by [Daryl Banner](https://www.youtube.com/channel/UCDW4GF1L_ogK4OZtz_gB-zw). It’s the 8-bit cover of TLC’s Chasing Waterfalls. Thank you, Darryl, for providing that and thank you, Steph, for always doing such an amazing job editing the podcast and providing the transcriptions. And thank you all for tuning in and I will see you all next time. 
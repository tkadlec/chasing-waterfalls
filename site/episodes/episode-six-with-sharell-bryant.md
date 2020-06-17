---
date: 2020-06-17
title:  "Undergoing a Performance Transformation with Sharell Bryant"
episode-slug: "74dc770f-e54f-4c93-90fb-d4dc4f0491b1"
sponsorName: "Catchpoint"
sponsorImageAlt: "Image of the Catchpoint logo"
guestPhoto: "/guests/sharell-bryant"
guestName: "Sharell Bryant"
episodeNum: 6
lede: |
  Rarely do we get to start with a fresh slate when it comes to performance, more often, we have to figure out how to make a performance transformation after the fact. In this episode, Sharell Bryant talks about Teachers Pay Teachers journey to a performance-focused organization.
links:
 - url: https://twitter.com/shrell
   text: "Sharell Bryant on Twitter"
 - url: https://tatianamac.com/posts/mistakes/
   text: "Compassionate action over empathy"
 - url: https://twitter.com/alonzofelix
   text: "Alonzo Felix on Twitter"
 - url: https://www.notion.so/Anti-racism-Guide-31ae62793b684ea1bdddefe8cfa84c19
   text: "Alonzo Felix's Anti-Racism Guide"
 - url: https://www.teacherspayteachers.com/
   text: "Teachers Pay Teachers"
 - url: https://www.catchpoint.com/
   text: "Catchpoint"
 - url: https://www.datadoghq.com/
   text: "Datadog"
 - url: https://speedcurve.com/
   text: "SpeedCurve"
 - url: https://www.youtube.com/watch?v=6NQ_yEh_-Kw
   text: "Sharell Bryant's 'Is the Site Fast Yet' talk"
sponsorImage: "/sponsors/catchpoint-logo"
sponsorBlurb: |
  In a digital economy enabled by cloud, SaaS and IoT, applications and users are everywhere. Catchpoint’s Digital Experience Monitoring platform offers the largest and most geographically distributed monitoring network in the industry. Industry leaders like Google, L'Oréal, Verizon, and Microsoft trust Catchpoint’s out-of-the-box monitoring platform to proactively detect, repair, and optimize customer and employee experiences. Learn more at <a href="https://www.catchpoint.com/">www.catchpoint.com</a>.
sponsorLink: "https://www.catchpoint.com/"
---
Tim:

: Hey everyone! I've got another episode for you and just like with the last one, there's a bit of a gap between these episodes. I recorded this conversation with Sharell long before the tragic and horrific murders of George Floyd and Breonna Taylor, before the brutality that we've seen follow in response to the protests.

: It didn't feel right to put this out.

: It's important that we make time to listen, to learn, to make space for people who are in these marginalized communities—the people who are facing systemic discrimination and racism on a day-to-day basis. And that we work to try to dismantle that.

: And that doesn't stop. That need doesn't go away. It's not something we get to fix in two weeks, certainly. It's something that takes time, it's gonna take a long time.

: And so I wanted to say that even though I'm putting this episode out there, that's absolutely not an acknowledgment that we're in anyway ok to move on, or anything like that—that we can forget all this.

: I also just wanted to say that if you're like me, and you're not facing discrimination every day...I don't have to be afraid if I get over by the police or anything like that...there's always going to be a limit to how much people like myself are truly going to understand about what other folks are going through.

: And this is what Tatiana Mac talks about when she [talks about empathy and the fact that empathy falls short](https://tatianamac.com/posts/mistakes/) because there's always a limit to how much we can really understand based on our own lived experiences.

: So if you're in a situation like me—and I think a lot of folks are—where you're watching this all happen and you're horrified, sad, angry, and maybe you feel helpless...you're not sure what you can do to help out...I've seen a lot of folks, a lot of organizations, putting out very genericized statements and I believe that most of them have the best of intentions. But I do think that's what happens when we try to play it safe, when we're afraid that our actions or our statements are going to cause harm when what we're trying to do is help.

: And I absolutely understand that can be a challenging thing, I feel that too. There have been plenty of times, looking back on something I've said or done where I cringe.

: But if you are someone in that situation—or maybe you just want to learn more, you want to do something to better understand what's happening, to better understand what people are facing—I did want to mention Alonzo Felix's anti-racism guide. 

: So, Alonzo put together this [Notion document](https://www.notion.so/Anti-racism-Guide-31ae62793b684ea1bdddefe8cfa84c19) that is an absolute goldmine. He lists articles, and books, and podcasts, and TV, and film, and he gives you tips on actions you can take, there's a list of organizations for you to learn more about or donate or support—just an incredible resource that you can use to figure out what are some of the possible next steps I can take, or to learn more about systemic racism or discrimination, to learn more about what others have to face every single day. There's a long list of books and articles and podcasts there, a lot of resources you can turn to—again, this is certainly not a two week project, right? Consider this a life-learning thing. But it's a really fantastic guide.

: And I'm very grateful that he put that out there. Because that takes time, that takes emotional energy to do—it's just an incredible resource. So that will be linked up in the show notes and I highly recommend you check it out.

: So, again, been sitting on this episode for awhile, but it is a fantastic conversation! Sharell is...well, you'll see. There's a clarity in the way that she talks about performance that really just makes this one of the most enjoyable conversations I've had. So, here's the episode.

Sharell:

:  Luckily there were people in the company who had kind of had similar experiences in terms of being able and having the freedom to like run an A/B test where maybe it's not a product change, it's just a performance optimization change and being able to see like test out whether that improved various metrics. I was able to do that and felt empowered to do that. Especially when we are looking for different opportunities for how to improve the experience. If I can say, "Hey, I can make a quick performance change and let's just see if it affects these other metrics and you know, it won't involve design, it won't involve product and it'll take this much resourcing and then we'll measure it", I think was a great way to kind of advocate at first and loop it into another objective.

Tim:

: That was Sharell Bryant and this is Chasing Waterfalls, a podcast featuring conversations with the people working to make the web faster for everyone. My name is Tim Kadlec. I'm a web performance consultant and your host

: In this episode I talk to Sharell Bryant who works at Teachers Pay Teachers and we talk about how they started to put performance first. And one of the things that I really enjoyed about this conversation that I really found honest and relatable was that performance wasn't a huge focus at first. Sharell talks about how [Teachers Pay Teachers](https://www.teacherspayteachers.com/) was making some significant changes to the architecture and the technical stack, but they were doing it mostly to enable them to be able to ship things out a little bit faster. And it wasn't really until someone checked the performance of this new architecture and stack relatively close to launch that they realized that something was amiss.

: And so what I like about this is I think it's something a lot of organizations can relate to. I can relate to. One of the very first big projects I ever worked on was just like this where we didn't realize performance was an issue until a couple of weeks before launch. It's nice to start from a fresh slate, but most of the time this is what I think folks are dealing with is realizing how do we write the ship? How do we turn things around when performance is not where we want it to be?

: It's a great conversation about how Teachers Pay Teachers did that. We talk about what they're doing for monitoring. We talk about how they're using A/B testing to validate their performance improvements and connect different metrics. We're talking about building up performance knowledge internally through documentation and much, much more. Sharell just drops a ton of really useful information and takeaways throughout the conversation.

: Before we get to that, I do want to thank my sponsor [Catchpoint](https://www.catchpoint.com/). So Catchpoint's digital experiencing experience monitoring platform. If you've not familiar, it's fantastic. It is huge. It is the largest, most geographically distributed monitoring network that I'm aware of in the industry that you can test your applications performance from all over the globe, just hundreds and hundreds of different locations and in fact, Sharell talks about that at some point in the podcast. They use Catchpoint and she talks about specifically one of the reasons why they do that is because they can get this global testing, this perspective of how Teachers Pay Teachers performs from around the globe.

: And I think that's exactly, that's one of the really powerful things. One of the really appealing things about Catchpoint is you can get this comprehensive coverage that's really hard to find elsewhere and you can test and see how your site is performing from all of these different end points and different locations. And the nice thing is it's fast, like you're getting hundreds and hundreds of different locations, but you don't have to deploy agents, you're not deploying probes, you're not doing it running any sort of expensive appliances. You can literally get up with all up and running with all these different test locations within minutes of deciding to use Catchpoint. It's a very fast, smooth process.

: Or the other thing is that, you know, Catchpoint's platform gives you comprehensive testing and analysis throughout your entire stack. Right? So we've talked a lot over the course of the podcast about synthetic monitoring and real user monitoring and trying to capture that user experience and Catchpoint certainly focuses on that, but they also provide network monitoring and API endpoint monitoring and you can really get sort of this comprehensive view about how the entire stack, the entire application is performing from a variety of different perspectives.

: So if you are at all interested in trying them out, I highly recommend it. You can learn more at [catchpoint.com](https://www.catchpoint.com/). So thank you again, Catchpoint for sponsoring and onto the episode. 

: Hey Sharell, thanks for being on the podcast.

Sharell: 

: Yes, thanks so much for having me.

Tim:

: Yeah I've been very, very excited for the conversation. So for anybody who's not familiar with you already, do you mind just giving like a little bit of a background? Like who are you and what do you do?

Sharell:

: My current role is a tech lead manager at a company called Teachers Pay Teachers. We're based in New York and we're a company for educators. We want to empower educators to teach at their best. We have an educational marketplace where educators can share and sell the resources that they create. And so I manage a team called the web platform team and we basically help support other product engineers with any front end needs. So anything from performance to working with a headless CMS to, how do I write this react component? I've been at TBT about three years now. First working on search on that team, kind of doing front end engineering work in now on the web platform team.
  

Tim:

: You're like the go to resource to sort of empower engineers to get their job done, like, well.

Sharell:

:  Yeah! 

Tim:

: Alright. And then how did you transition from search to the platform team?

Sharell:

: I realized through search kind of the work that I was doing, I got to work really closely with the web platform team that existed at that time. Working on kind of bigger picture things and that's actually how I got involved with performance. We were trying to launch a new search experience, kind of of the same search but on a new stack.

: And so I was working on a lot of moving everything over from a PHP monolith to our new stack working on the front end server-side rendered React and when we went to launch we realized there were performance blockers. So through that experience I had to learn a lot about performance and I worked really closely with the web platform team at that time and realized I was actually really interested in the work they were doing and thought that my product engineering experience would be good to then take to a platform team.

Tim:

: If you could take us back to like you're transitioning from the traditional PHP monolith stack, what was driving the change? Like what was driving this need or this desire to get to a new architecture underneath it?

Sharell:

: I kind of came into the company when that decision had already been made, but I had heard that kind of some of the decisions were moving to something where engineers could and product teams could move more quickly when iterating on the product. So we wanted to move to a stack where we felt like we had more control over both the design and also architectural decisions to make better experiences and we're continuing to evolve that today as well with our architecture and moving more to services architecture. That was kind of the decision behind that.

Tim:

: Well, I've talked to her quite a few folks at organizations who've gone through similar transitions, right? Like moving from this traditional and yes, monolithic app that tends to potentially be a little bit slower or more cumbersome to work with as a developer to this, you know, more modern stack I guess, if you will, that we're kind of seeing more and more today.

: But this is also a common thing that I hear about that transition is that you then run into these performance issues. When did you first realize that was a problem? Was it during the development process? Was it like, you got to go launch and we're like, Oh, when did that become apparent to you that you had some performance stuff to deal with?

Sharell:

: I didn't think about performance so much as a product requirement as I do now. Or how I would encourage other product engineers to now. So it was close to when I thought we were, you know, feature complete. I've kind of thought about, okay these are all of the other things we want to do. Like make sure we have good analytics and everything's gone through QA. But then yeah, when somebody brought up like okay, how's the performance looking? That was kind of then a blocker for launching this. So then we felt the crunch.

Tim:

: It's what I've been through. I remember one of the big, first big projects I worked on was very similar. Like we tried to do a lot of the things right and stuff and then we got to a few weeks before launch and we suddenly realized, Oh we've got a lot of bottlenecks we had to address. And so we, I can relate to the crunch basically.

Sharell:

: Yes.

Tim:

: Were there existing systems or tools in place for you to know how the old version of the site performed versus the new version of the search application or like how did you kind of figure out that things were worse? 

Sharell:

: So we did have metrics already around the base page response times for the old search page and the new page, so that's kind of what we were working off of. We didn't have the same monitoring that we have in place right now, so definitely have seen the improvements in my time here and so basically then we tried to then set up monitoring luckily, so we were going to run as an A/B test, so we were still able to compare the existing search experience with the new one before launch, which is kind of the approach we also take now before launching a new feature or launching a new experience on a new stack, but much more ahead of time. Yeah.

Tim:

: Sure. So did you get the monitoring in place, like at that point like right then when you were, you identified that there were the issues then the monitoring guy put into place and stuff as you were iterating and making that new version faster or did that happen later on after you'd kind of done a lot of that work and launched?

Sharell:

: It kind of happened later on. We did add some monitoring that we could send for, to kind of track how much time we were spending in, in our front end application. So that was some monitoring that we added that we could then send to, now we're using [Datadog](https://www.datadoghq.com/) and can kind of see the timings from that. But our other monitoring that we use with tools like [SpeedCurve](https://speedcurve.com/) or Catchpoint kind of came um, after that.

Tim: 

: Okay. So at first it was you were basically sending off data off to Datadog, which I assume you were probably still doing some of today. 

Sharell:

: Yes.

Tim: 

: And then SpeedCurve and Catchpoint you're pulling in?

Sharell: 

: We use the two kind of for different reasons, but yeah. We use different tools. Yeah.

Tim:

: Do you mind me asking like what the different reasons are? I'm very curious. 


Sharell: 

:  I find that for SpeedCurve it's sometimes easier to get folks outside of engineering onboarded to that and um, to kind of set up some dashboards for them to see metrics around SpeedIndex or um, other metrics that we've kind of talked about that the product engineering team cares about and having access to also Lighthouse audit information there. It's just a good interface to kind of share some of that information.

: And then we use Catchpoint for things like general availability as well as performance metrics. So is another tool that we use for when putting together audits, uh, for performance or working with product teams. Yeah.

Tim:

: Are you collecting real user data? Is that the Datadog stuff? Are you doing that on your own or do you have tools in place for that?

Sharell:

: Yeah, for that is some of the, the Datadog stuff for real user metrics. Um, but I think that's an area that we'd love to like dive deeper in right now. We, um, otherwise mostly rely on synthetic testing.

Tim:

: So when you put these A/B experiments out, right? Like you're putting out search or you're putting out a new feature, you said you'd like to deploy that as an A/B test. Are you testing that then through these tools and verifying that way? And I guess generally like how does that structure look? Because I think that's something a lot of organizations want to do, but maybe they're not set up to do it or how to make sure that that A/B experiment is accounting for other variabilities that might be occurring.

Sharell:

: So the way we're doing it right now and thinking about how we can make this less manual in the future to help product teams really think about it. Cause right now the process is very much someone will come to us or we'll know somebody launching something and our team will help them set up some synthetic tests around their A/B experiments. But mostly we say we're launching something new on the search page.

: For example, we have, um, our A/B testing framework set up so that we can submit like different URL params to turn the test on or off or for different variants. And so then we can set up different tests to compare a metrics from both of those experiences.

Tim:

: Okay. So it requires a little of like paying attention at least to for them on their part to like know, to come to you and set this up.

Sharell:

: Yeah, definitely. So that's the part that we'd love to improve to make it so that it's easier to just have that as part of the process.

Tim:

: I wanted to come back to that anyway. You mentioned that you know making this a product requirement, which was something that I wasn't really the case when you started and it sounds like it's getting more to that point now where like performance becomes that requirement. Can we talk a little bit about that transition? Cause I feel like that is so critical because until you figure that part of it out, like how do we make performance part of that process? How do we make it a core requirement? You're always going to be playing a little bit of catch up. Can you talk a little bit like what have you done there? Like how has that improvement come about?

Sharell:

:  I think part of it comes from just educating people around why performance is important and I think you can do general you, there are lots of cases where we can relate it back to our mission and try to understand why having a good performance website is important for us empowering educators and providing the best user experience.

: But I also found that um, while running tests, running specific A/B tests that also where you also show performance, uh, improvement and relate that to metrics we care about has been really beneficial in helping people understand why this is something we should care about within the company and having them think about it more critically. So just doing that kind of background work I think is first important in documenting it and showing kind of why we even care about performance or organization is like the first step.

Tim: 

: Backing up and this isn't the case we you haven't done maybe like performance hasn't been that product requirement. Maybe there isn't a lot of A/B experimentation data out there yet. Did you, did you find that you had to kind of go rogue and kind of test this and verify it at the beginning? Like was there any sort of initial resistance towards like, I guess how do you get that initial buy-in like before you've got that data to fall back on to show like how do you build that case up from ground zero?

Sharell: 

: Luckily there were people in the company who had kind of had similar experiences kind of in past products they used. So in terms of being able and having the freedom to like run an A/B test where maybe it's not a product change, it's just a performance optimization change and being able to see like test out whether that improved various metrics.

: I was able to do that, which was great and felt empowered to do that. Especially when we are looking for different opportunities for how to improve the experience. If I can say, "Hey, I can make a quick performance change and let's just see if it affects these other metrics and you know, it won't involve design, it won't involve product and it'll take this much resourcing and then we'll measure it", I think was a great way to kind of advocate at first and loop it into another objective. So that's a way I was able to kind of work on this even before I moved over to a web platform team where this is more of what we're actually focused on. 

Tim:

: Yeah. So sort of piggybacking it into other work that was going o

Sharell:

: Totally. Yeah.

Tim:

: Yeah. I feel like that's, I think that's generally good advice. Like it's a nice way to kind of get things going is sort of try to attach it to something you've already got buy in for or you've already got that support for and start small and look for those wins.

Sharell: 

: Yeah, exactly.

Tim: 

: So on the requirements side of things then, what does that look like now? Is there a written process? Is there, cause I know there's some manual steps involved, what's changed there? Is there things that are automated that enforce performance? I guess generally, how have you made it so that when folks are working on performance features, they're paying attention to performance at the very beginning of that work? 

Sharell:

: We do have some documentation we built up and also demos that we've done to kind of get people thinking about it in general. So we have documentation about the tools we use and how engineers outside of our team could use those. And those also link to various audits that we've done for different pages so that if somebody wanted to reproduce how we've done kind of what is the existing performance experience on this page and with our change, how might you set yourself a performance budget, they can kind of see past experiences. I would love to make that more of a template that teams could use. So that's in the future. 

: What we'll do also just demoing how to use the tools or also we've had people say like, "Oh let's onboard you to set up like Catchpoint tests together and we'll walk you through." That's been also part of the process. In terms of pages that exists, we have monitoring set up on kind of key pages and key flows that then we have a report that comes in daily so that we can see any changes over the like the last week and over the last month. Cause sometimes it's a change that's from a deploy and you can clearly see like, "Oh, this is specifically from a deploy or a change we didn't know about." And then right now that's going through our team to kind of then link to the appropriate team and kind of investigate that and so that's also something would love to outsource more and have product engineers feel empowered to kind of know and also know before they even deploy, but we're not there yet.

Tim: 

: That's such an important part of the process is closing that feedback loop as much as possible because it's kind of to your point, right? You felt this crunch when you got with the search fix, when the performance was identified so late in the game and now it was this big, I assume fairly stressful crunch to kind of improve performance. Whereas if somebody is catching performance, ideally as soon as you're writing the code, you're getting some sort of feedback. Addressing that performance issue is so much less of an issue.

Sharell: 

: That's definitely the North star were looking for. When we think about what would, what would be the best case scenario for performance at TBT and with our engineering organization? For sure.

Tim: 

: As you said, these reports that are coming in right now like come to you directly, and I assume that that's one method of, you know, potentially educating engineering teams is going to them when you have reports like this and sitting down and explaining this, are there other things that you're proactively doing inside the organization to continue to build up that awareness and education level, that core understanding around performance for the different teams?

Sharell:

: Right now what we're doing, especially as we build out new experiences, we're growing a lot at TBT in terms of our surface area, in terms of products that we're building. So as people build new products, we also want to make sure from the beginning we have a clear understanding of our like definition of done for what the product might look like.

: And so a lot of people on our team have been working on that. And so having performance be a part of that I think is a great step in the first direction, a great step in that direction. Um, because now if teams know, okay these are all the things that you know, I would make sure that I'm writing tests. I would make sure that it's been QA, I'd make sure that, you know, I'd know when regressions happen. Also having them think through a plan of performance and what that means is like a great step in the first direction and knowing that they can kind of come to us.

: Cause I think it's kind of this both us being proactive and educating but also having teams think about what does performance mean for them. Uh, if we're going to launch something that's a beta, it's probably different from if we're going to launch something for all of our users and prioritizing that. So having them really working as partners with not only other engineers but also product and designers and working together to kind of understand how we think about that as a product requirement I think is kind of how we've been moving, what we've been moving towards, which I'm really excited about.

Tim: 

: No, I mean that sounds fantastic. Like that's exactly where it's got to go. Right? So if I'm building out a new feature, let's say I'm one in the engineering teams, we've got this request for a new feature where we're going to be working on and we're building out the requirements, the performance plan, like how specific is that? Is that us saying like we're going to build out this new feature and time to interactive or whatever metric I happened to be looking at. It has to be at this number or lower. Is it that specific? Is it more like weight or things that are a little bit easier to connect the dots to necessarily right as you're doing development or is it more general sort of performance goals?

Sharell:

: Yeah, I think this is the part that's made it a little harder to kind of take the manual process out of because it's so depends on what the feature is. For something like a port where we are saying building a similar experience as a similar page that already exists on our website, but it's on a new stack and we want to release this new version. I think we have a pretty set process for that in terms of, okay, we want performance to be at least as good or better. And these are the metrics we're going to look at speed index time or interactive. Um, look at, yeah, kind of how much JavaScript we're sending. So I think that part's a little easier.

: The part where we have to make tradeoffs is if we're adding say a new feature and maybe we're adding a new library and we know it's going to maybe slow down or affect some part of performance. Like are we okay with that? That's really a product decision and there's some leeway, like if it really improves the user experience but maybe impacts one speed metric. Like is that okay? And so having that conversation and figuring out like should we test it, should we not? Are there other metrics we can look at? It's kind of how we've been going about it so far.

Tim: 

:  I mean, I'm a performance nut, so I'd like to say like we make sites as fast as possible and that's what we do. But that's not really the way it works. Right. Like we make, we make sites faster because a faster site in many cases ends up being a better user experience, ends up being better for the business, but it's ultimately about those goals. So we have to be able to balance that against like yeah, a little bit of performance here might actually be still beneficial to everyone if the feature is providing enough value.

Sharell:

: Yeah, absolutely. So making those trade offs, I would say that's something that, you know, our team is kind of like thinking through with other folks throughout the company.

Tim:

: Sure. And I guess that comes back to, to your point about like making sure that you're experimenting and doing those tests so that you can actually, and again, having that key requirements doc upfront where you're saying these are our goals with this feature in general, like what we're trying to achieve in addition to performance goals, all of that kind of stuff helps you make those intelligent decisions about that.

Sharell:

: Yeah, absolutely.

Tim:

:  So for the awareness in the organization, you've mentioned that you're working with like designers and product managers and stuff. Do you have reports that you tailor to them? Do you have different ways of interacting with them versus like the engineering team when it comes to performance?

Sharell:

: This was kind of the part that was the most interesting to me was not only when I was learning more about performance, kind of me processing that as an engineer, but then also like how do I communicate what we're working on to other people? Yeah. If it's a designer, if it's a product person, if it's somebody completely separate from the engineering organization on who's working on maybe SEO and has heard from our SEO consultants that we need to make the site faster. Like how do I tailor what we're working on, uh, to each of those people.

: It kind of goes back to what we were talking about, uh, kind of understanding what their goals are for making an improvement or for launching a new feature and figuring out how, what about performance they care about from that. So is it that you care about SEO, so you really want to understand what metrics might negatively affect that? Or are you launching a new experience but think it's important but not so much? So if it really drastically degrades the performance of the page.

: And so kind of figuring out what different people care about and then helping them understand different performance metrics and then coming to an agreement on which ones we should be looking at together. 

Tim:

: There's so much talking involved in performance. Who knew?

Sharell:

: Yeah, a lot of talking, but luckily I enjoy all of that.

Tim: 

: No it's great. You mentioned that reports will come into your team first and then you kind of go out and work with the different folks, like when a performance issue pops up and how much of the performance knowledge is concentrated on the web platform team? So in other words like is it an engineer might identify, "Hey we've got a performance issue, let's go to the web platform team", and then you dig deeper and help them figure out what the problem is or is it like you try to distribute that knowledge as much as possible?

: I'm just curious because I think that's one of the interesting things as a, as an engineer that we have, we've always had like front end engineering I think has always been a little maybe not quite gotten as much respect as it should have for the amount of complexity that's involved. Like if you're doing to do it well, you're talking about building something that's well architected, resilient, stable, accessible, performance, like there's all these different things and it's challenging to know any one of those in great depth, let alone all of them. So I guess getting back to it like that performance knowledge, how much of that is controlled on your team versus expected to be known by the engineers and like maybe what's the goal there too? Like how do you see that playing out in the future?

Sharell:

:  Yeah, I totally agree with what you're talking about. I, I really have valued the fact that we have a dedicated team kind of thinking about branding engineering holistically at the company. I valued it both being on the team and leading it, but also when I was on a product team and could reach out to that team, I on a product team had a different goal of kind of working cross functionally on whatever I was trying to launch and I cared about all of these things.

: But it's so hard to keep them all in mind as you are and especially keep them all in mind with a lens of like all of the different products happening. So that's really hard. So having people where that's kind of their main focus is great, but it's a lot of things to keep in mind as well.

: And we can't, you know, we're not the people actually building those features. I would love those engineers to feel empowered to say, "Hey, yeah, I should be looking at these different performance metrics based off of the changes that we're making." Kind of what I was learning to do, um, with the help from the web platform team. So that's kind of the future state.

: I would say right now a lot of the knowledge lives within our team. So things that we want to do are in addition to continuing to document and partner with teams. A lot of pairing are also giving people more tools to be able to look at this on their own. So not only onboarding them onto tools we already have like Catchpoint, but also what tools can we provide kind of at the PR level? We do have something an engineer put together on our team for showing how the bundle sizes change depending on your change to our front end application. So that's one example, but how can we get them information on how you might be affecting accessibility? Um, even more or more specific performance metrics based off of the changes that you're making before you deploy or without having to put it behind a feature flag or locally. So that's kind of the future state that we're looking towards.

Tim: 

: So there's layers basically of where that data comes in, but there's also layers I think in terms of, it's the depth maybe of that at the PR level. Like maybe bundle size is what you want, right? 

Sharell:

: Yeah, yeah.

Tim:

: And then at some point you want to be able to pull in data from like deeper analysis from SpeedCurve or Catchpoint or Datadog, whatever you've got in place. It almost feels like there, there needs to be somebody who's like at the far end of this layer in terms of like the, the depth of that data. There almost needs to be somebody who's like spending a fair amount of time just digging into the raw data to try and find out what other connections are there between business metrics in this, where are we fall, what are we missing? Like that kind of stuff.

Sharell: 

: So we have had periods of time where our team has been very focused on doing exactly that, just doing a performance deep dive. And that's where a lot of our time goes and we've made a decision that that's kind of what our team is working on. Priority-wise makes the most sense and that's really been really beneficial to get us like in a good place. And I feel like a lot of the monitoring and progress that we've made have come out of those times in the last few months and this year I think we've been focused on other things. So, um, now we're realigning for 2020 and trying to figure out how can we make that a more deliberate process and kind of find time to do that even if it's not the main priority of our team. So that's definitely something we're looking forward to. Cause I totally agree.

Tim:

: I've always loved the idea of having some sort of a regular or a semi-regular like performance sprint or something like that. Right? Like the equivalent where you've got like a period of time where you're for the next week or two. Like we're focused on performance and obviously sometimes it's a bigger thing than that, but I like these sort of sporadic check-ins.

Sharell: 

: Yeah, yeah. 

Tim:

: So when you've done this in the past where you have had these like periods of focus where you're like, this is what we're going to do. Like how has that looked for you? How have you handled that?

Sharell: 

: That kind of is the work on the team I was doing when I first joined the team actually cause I'd had some experience on it and kind of what that looked like is digging into kind of industry standards and seeing what other folks are doing across different companies. Like are there other tools we want to be using? Is there anything new? Because I feel like this is a very exciting field where there's always new tools to play around with or different metrics that might fit more what what you're trying to do. So that's definitely been a part of it. Reaching out to our partners of the tools that we use and seeing if we're using them in the best way.

: And then also, yeah, just looking at all of the data we've collected because that's been great too that now that we have some of this monitoring set up, we have a lot of data but maybe haven't taken the time to do a full deep dive on it. So just setting aside time to really look at that and having people going to go on their own as engineers, but then also coming together and talking about the data altogether. So that's really been really impactful.

: And then not only talking about it within our team, but then how are we going to get this information out to people who will care about it outside of our team. And how does it influence future roadmaps or how does it influence other work we want to do in the future.

Tim:

: Assessing new metrics and new tools I think is a really, it's an interesting one because I think when you're introducing, particularly if you're making performance part of the requirement, right? So then you're pulling data from these tools or you're pulling these metrics that you've decided and saying, these are the things we care about. It's a requirement that we don't increase speed index or it's a requirement that when we look at our Catchpoint data, we see this.

: And as you're looking at those new metrics like assessing whether or not it makes sense for you to look at this additional metric that came out or something like that, what's your process look like for that? For going from, Hey, there's this other metric to deciding, yes we, this metric needs to be a core consideration or no, it doesn't. Because I feel like there's a lot of, there's been an explosion of performance metrics in the last few years...

Sharell: 

: Yeah, totally.

Tim:

:  Like I love that and we've got more insight into the the architecture or the performance of the application or sites than ever before, but there's also a risk of chasing those new metrics right away and not taking the time to sort of build up the trust and the understanding of what it's really telling you and potentially having negative fallout from that.

Sharell:

: I think it's a balance. I think so far in the metrics that we've used to kind of say this is a launch blocker or this is a blocker. We've kind of kept it fairly stable. With other metrics, it kind of gives us a holistic picture and says like, okay, we improved maybe speed index or we improved like time to first bite, but Oh these other metrics seem a little off like is, does that make sense? Like it's kind of a second, like a second check.

Tim: 

: I like that. No, you guys see you have these core metrics that are pretty stable. You try to keep it as stable as possible and then you have a tier of sort of supporting metrics.

Sharell: 

: Yeah, exactly.

Tim:

: Right. So help fill in this story. I think that's a healthy way of looking at it. Are you able to tell me what the core metrics are?

Sharell: 

: Um, yeah, so I would say this also depends very much on the feature, but some core metrics we've looked at are the ones I've already brought up. But um, SpeedIndex, Time to First Byte. Also, just looking at how much JavaScript are loading on the page. Something we've now started looking more into is like how much is from third parties, keeping track of that. Also correlating like how much of the time is coming from time and our API versus server side rendering versus like what's happening on the client and trying to get more metrics around that. So um, those are kind of the core metrics we tend to look at.

Tim:

:  Okay. Makes sense. How far into the third party stuff are you?

Sharell:

: Not very far, but that's something my team is super excited to look into because we're front end engineering team. We are usually the people involved if somebody wants to add a new, a new script or something to our website. Sure. And so thinking more holistically about how can we help people understand that, how can we help them balance whatever benefit we're getting from that with "Oh, this might affect our website in a negative way" and getting them more information on that. So that's something we're really excited to kind of dig into and help people make better decisions.

Tim:

: Yeah. I suppose ultimately it's like basically the same general thing that you're trying to get to the point with features, right? Where you can tell as close to feature development as possible that "Hey this is going to be a performance issue" and you understand the trade offs and it's really the same thing. Like if you view each three or third party resource as another potential feature, getting to that point where again as early as possible, as close to the decision time as possible, you're able to tell, you know there's going to be a challenge here for us performance wise or whatever.

: Sharell, this was a fantastic conversation. Thank you so much.

Sharell:

: Yeah, thank you so much. 

Tim:

: I know you gave a [talk on some of this at View Source](https://www.youtube.com/watch?v=6NQ_yEh_-Kw). Do you have any other events lined up?

Sharell:

: Yeah, I don't have any events lined up right now but I'm looking forward to talking more about performance cause I had a really amazing time at View Source talking to other folks who are working on this. So definitely looking for opportunities.

Tim:

: Yeah, I've never had the opportunity to go to that particular event, but I've heard great things and I'm sure we'll end up seeing you at plenty more events. Alright, well thank you again for, uh, for taking the time to chat. It was really great. Lots of interesting stuff.

Sharell:

: Awesome. Thank you so much. This is great.

Tim: 

: Thanks for tuning in. Hope you enjoyed this week's conversation with Sharell as much as I did. I found the whole conversation just to be extremely relatable and there were so many pragmatic takeaways and great advice for folks who are looking to turn performance around in their own organizations.

: If you enjoy the podcast and you'd like to make sure that you don't miss out on any of the other episodes, please subscribe on your favorite podcast subscription, service or application. We're in pretty much all of them and if you feel so inclined and you want to leave a comment or review, that's always appreciated. It does help to get the word out about the podcast. And we've got a lot of great interviews and conversations coming up, and I want to make sure that that gets in front of as many people as possible. So reviews, comments, that kind of thing. It's always appreciated.

: The podcast is produced, as always, by Steph Colbourn from [EDITAUDIO](https://editaud.io/). And the intro and outro music that you heard is done by [Daryl Banner](https://www.youtube.com/channel/UCDW4GF1L_ogK4OZtz_gB-zw). It’s the 8-bit cover of TLC’s Chasing Waterfalls. Thank you, Darryl, for providing that and thank you, Steph, for doing such a fantastic job, getting the podcast edited and providing the transcriptions. And thank all of you for tuning in and I will see you all next time.
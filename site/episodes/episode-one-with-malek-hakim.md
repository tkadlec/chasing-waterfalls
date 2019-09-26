---
title:  "Scaling a Culture of Performance with Malek Hakim"
episode-slug: "8fbe98cc-d8df-4ac0-bc09-d66e15ab73a4"
sponsorName: "SpeedCurve"
sponsorImageAlt: "Image of the SpeedCurve logo and an animated 6-eyed monster holding up a phone"
guestPhoto: "/guests/malek-hakim"
guestName: "Malek Hakim"
episodeNum: 1
lede: |
  How do you not only establish a culture of performance, but nurture it and scale it across a large organization? That's the question we try to answer in this week's discussion with Malek Hakim, a performance engineer at Priceline. We talk about what Priceline has been doing to cement a culture of performance across the organization, touching on everything from tooling and metrics, to education and experimentation.
links:
 - url: https://twitter.com/malek__hakim
   text: "Malek Hakim on Twitter"
 - url: https://www.meetup.com/Web-Performance-NY/
   text: "New York Web Performance Meetup"
 - url: https://www.meetup.com/London-Web-Performance-Group/
   text: "London Web Performance Meetup"
 - url: https://twitter.com/sergeyche
   text: "Sergey Chernyshev on Twitter"
 - url: https://developer.akamai.com/tools/boomerang/
   text: Boomerang
 - url: https://developers.google.com/web/tools/lighthouse
   text: Lighthouse
sponsorImage: "/sponsors/speedcurve_herman"
sponsorBlurb: |
  See how real people experience the speed of your website. Then use SpeedCurve's synthetic and real user monitoring solutions to find (and fix!) your web performance problems. Companies like Ancestry, BBC, Casper, Expedia, Shopify, and Zillow use SpeedCurve to create faster, more joyous experiences for their visitors.
sponsorLink: "https://speedcurve.com"
---
Malek:

: We don’t want to make you—if you’re an engineer and you have this idea of optimization, we want to cut that time for you to think about how to measure that or what tool to measure or what metric should I pick. You know? It should become kind of natural.

Tim:

: That was Malek Hakim and this is Chasing Waterfalls—a podcast featuring conversations with the people working to make the web faster for everyone. My name is Tim Kadlec, I’m a web performance consultant and your host.

: Malek and I had a fantastic conversation; I had a lot of fun talking to him. We got into a lot of details around the performance work being done at Priceline and the work that Malek and his peers are doing to not just improve performance on the site, but really to cement and establish this culture of performance internally. So, there’s a lot of practical discussion around things that they found that worked and haven’t, things around tooling and automation, but also how do you share information with other people in an organization, and how do you get buy in from different people internally.

: Before we get to the conversation though, I do want to take a moment to thank [SpeedCurve](https://speedcurve.com) for sponsoring the episode.

: Now, I can’t pretend not to be biased when it comes to SpeedCurve; I love the product and I love the people there. Tammy, Mark, and Steve, particularly, I’ve known for years. It’s just a great group of people working on a fantastic product. I’ve been extremely excited by what they’ve built over the years. So, I’m really excited to have them sponsoring.

: I’m particularly happy to have them sponsoring this episode because, again, we’re going to be talking a lot about cultural issues. Now, I don’t think you can solve cultural issues with tools, not by any stretch of the imagination; that’s not how this works. But the right tools can help to support your cultural efforts and SpeedCurve has quite a few features that come into play there. 

: For example, if want to get that buy-in, one of the great effective ways we’ve seen to do this is to get people to look at competitive benchmarking—look at how you rank against your competitors. Most folks have an internal competitive drive and that really gets them riled up, so it’s a great way to get somebody who wasn’t really paying attention to performance to notice it—to stand up and say, “well, hold on, we’ve got to do something about that.”

: And SpeedCurve lets you do this, SpeedCurve lets you benchmark yourself against your top competitors, so you can track how you’re performing against them over time. You can also create charts that correlate business metrics to performance metrics—things like bounce rate or conversion rate—things like that that matter to different people in the organization who maybe don’t care about how many seconds it takes for your page to become interactive or load, but they do care if their bounce rate is jumping up or they do care if their conversion is suffering as a result. So, being able to show these correlation charts can be a really impactful way of getting that buy-in.

: And then you can take these charts that you’re creating and you can create these custom dashboards for the different people inside of your company. You have to communicate to different people in different ways if you want that buy-in and support; not everybody cares about shaving a few seconds off of your load time. Some people internally—maybe your execs care about your conversation rate, maybe your SEO teams care about metrics relating to SEO from an SEO perspective. So, you can set up different custom dashboards for each of these different teams and generate reports that each of these teams get. So, it’s just the stuff that matters to them and it’s tailored to them.

: And there’s so much more that SpeedCurve does. You can establish performance budgets, which you can use to catch regressions, as well as celebrate when you’re getting these wins. There’s a lot of features in the product that can really support your efforts. If you are interested, SpeedCurve does have a support article that talks specifically around establishing this performance culture and different ways that you can use SpeedCurve to support those efforts, which will be linked to in the shownotes—highly recommend checking that out.

: And, again, you can take [SpeedCurve for a free trial](https://speedcurve.com/setup/trial/), and fire it up, and just play around with it. It’s a really wonderfully designed product. Again, I’m a massive fan, so thank you, SpeedCurve, for sponsoring the first episode. And now onto the conversation

: Hey, Malek, thanks for coming on; I really appreciate you taking the time out of your day to talk performance with me! 

Malek: 

: Hey, how are you doing? Happy to be here.

Tim: 

: Before we get to the meat and potatoes of the discussion, I thought it would make sense for you to just—for anybody listening, tell them a little bit about you, and what you’re doing, and where you are.

Malek:

: Sure. So, currently I am a performance engineer at Priceline. For anyone who doesn’t know what Priceline is, we’re a travel website. We’ve been active since 1997, 98.

Tim: 

: Which, in tech terms, is like forever basically. 

Malek:

: Yep! 

Tim: 

: It’s like dog years. 

Malek:

: [laughing] Yeah. [Tim laughs] The company has seen it all in terms of tech stacks and the web. Currently, my role is to kind of evangelize the cultural performance at the company and try to install an effective culture of performance—make sure that it’s part of engineering workflows, as well as help them find optimization techniques and opportunities within the company and within our website. 

Tim: 

: Sounds like my kind of role! [Malek laughs] The first part of that in particular is one of the main reasons why I wanted to have an excuse to talk to you. Because we had a chance to sit down and talk before—there’s been a lot of really interesting work done inside of Priceline around that—this culture. And I know that you’ve been talking to the New York Performance Meetup and stuff around scaling this. There’s a lot of interesting stuff there, so I really wanted to dive into that. When you joined Priceline, you didn’t join Priceline to be a performance engineer or to have this performance focus, right? 

Malek:

: Yeah. First I joined as a software engineer, so I was working mainly on our rental car product. Mostly my work was focused on UX front end, pretty much everything front end there. Most of the work was feature building and things like that. I had a chance to work on our rental car product because we kind of revamped.

: We migrated from our legacy stack to mostly our new front end stack. So, we kind of moved from Angular—we kind of modernized the stack to build it in React and webpack and leveraged some kind of orchestration using GraphQL. But also we had a lot of different–like our mission because the product needs to be kind of localized or internationalized. So, we had a green field of trying to choose any new stacks and try to kind of build that up as a common platform for other teams to jump on.

: And, at that time, I’ve been interested a lot in trying to get the new stack more optimized in terms of web performance and in terms of user experience. That’s how I dived into working more and more and focusing more on performance. At that time, we kind of opened up a new role for performance engineering and I kind of jumped on it because it was exciting to kind of open up my work, not only within the team I was in, but mostly on the company and try to have more impact on the culture. 

Tim: 

: I think you told me the story of how that role or how you discovered that role was available. That happened through the meetup, right? 

Malek:

: My current boss right now, Tom, is actually a veteran in the company and he’d been doing performance work for a very long time. And I go to meetups in New York City just to absorb most of the knowledge. And it happened to be that I was in the [New York Web Performance meetup](https://www.meetup.com/Web-Performance-NY/)—

Tim: 

: Which just to interrupt for one second, is in my opinion—I have done plenty of the web performance meetups, and New York is right up there with [London](https://www.meetup.com/London-Web-Performance-Group/). I feel like those are the two best meetups from a performance perspective.They’re just both fantastic. 

Malek:

: Right. I agree with you; I think it’s one of the great meetups in terms of resources and knowledge about learning about the web in general. The great thing, what I love about performance is that I can touch every piece of the stack. And there’s this cultural aspect of it. It’s technical, but you kind of need to dig into the details, but I always have a view of the entire architecture of software.

: Long story short, we were at the meetup and at the beginning we do the announcement like who’s hiring and things like that. And Tom just raised his hand he was like, “yeah, we’re hiring, we’re looking for engineers.” And then [Sergey](https://twitter.com/sergeyche), the host, was asking, “what’s the company?” And he was like, “Priceline.” And I looked at him—he was sitting [laughs] right on my left [Tim laughs]—and I was like, “wow, who is this guy?” [laughs] So, on the break I went to him and I was like, “I actually work in the same company.” And yeah! Since then, we’ve built up the relationship and have decided to emerge ourselves more and more into working on performance engineering in the company. 

Tim: 

: Where did that sort of decision come from? That desire to be like, “hey, we don’t have a performance team now, we don’t have performance engineers now”—or at least, that’s my understanding of where this situation was—to, “you know what? We need to bring people in and have people internally that this is what they do and this is what they focus on.” What catapulted that whole decision? 

Malek:

: The amount of work. Nowadays, there’s a lot of tooling out there that can help you with the work, and we just needed some kind of centralized entity to organize that and set at least some kind of standards. But also help out engineering to get more support and buy-in from leadership. 

: So, now the team is called “architecture” mostly, so it’s mostly we deal about any platform specific things—we’re actually cross stacks, we jump into different projects and different teams, it depends on the need. But I think that the main idea is to break up the silos within the company. With that, we get different people from different teams to sit on the same table and discuss a common theme, which is performance. But also, we need to manage tooling and we can get into that a little bit more—like <abbr title="Real User Monitoring">RUM</abbr> and synthetic testing and things like that.

Tim: 

: Okay. So, from the breaking down the silo perspective then, how do you do that? Having a dedicated team—that’s always one of the things that people wonder about. You know, you have this dedicated team of performance folks, but how do you then work with everybody else? Do you just identify the issues and hand them down and they have to deal with it? Do you consult with them? How do you make sure that each of those teams are involved in embracing the same sort of performance mindset? 

Malek:

: I mean, if it comes up from a team—which ideally what we want is we want teams to identify the opportunities within the products. We try to raise that up on a level where forums and meetings where we know there’s some more representation across the company and get all the teams to know.

: The other thing—right now we’re running a performance ambassador meeting and it’s an initiative to build up this cross stack representation from different teams about anyone who is passionate about performance. For the teams we don’t have representation, people are nominated by their managers and come up and show up and get that knowledge.

: The performance ambassador group has been a great trick or great opportunity to find the space to express any performance optimizations that you’ve been working on or you found interesting. We go and discuss how we can probably standardize that and make that work for everyone else to consume. Also, it could be any other teams.

: We have other forums like operations—meetings where people discuss things about operations. We have other forums, like we have this other group called <abbr title="User Experience Technical Committee">UXT</abbr>—so for all front end engineers and dev managers and things like that, we’re kind of doing the same for all our services. So, a lot of things come up, not only performance, but the team right now, we’re trying to put more structure and make that as easy as possible for engineers to get that in their workflow. 

Tim: 

: Sure. 

Malek:

: Performance can be a little bit intimidating at first [Tim laughs]—

Tim: 

: Yeah, definitely. 

Malek:

: if you really don’t have the resources and you don’t know really what to do. So, yeah. Just bringing people together. If my stack is on front end and I really don’t know how to do, probably there’s another team in the company who is doing something similar to me—that’s a great occasion to come and discuss these similarities and what we can do together. 

Tim: 

: So, just to reiterate then the structure—so there is a core group of people that does the performance engineering? How many performance engineers are at Priceline? 

Malek:

: Currently, we don’t have a core team of engineering. 

Tim: 

: Okay. 

Malek:

: It’s usually comes by interest. 

Tim: 

: And this is the ambassador group, right? That’s what we’re talking about when we’re talking about comes by interest? It’s like the ambassador group is the folks from the different teams getting together because they care about perf? 

Malek:

: Right, right. It starts like that, but now we’ve kind of opened that up to more of whoever is interested. Right?

Tim: 

: Sure.

Malek:

: Before we made sure we had some good representation in different teams, but now it’s whoever is interested. Because people come and go. You always have people that come in and show some passion, so you want to embrace that and make them part of the discussion and the conversation. It’s kind of working for us right now. We’re still iterating, and we’re still finding the best formula to make that across the company, but at least it’s working kind of spread out the performance passion, right? 

Tim: 

: Sure. And it sort of forces in some way—in a good way. not forces bad—but in a good way, it brings together organically what happened with you and Tom at the meetup, right? You were both at Priceline, you both cared about performance, you were both into it, but neither one of you knew the other one of you was there.

: And I think a lot of times, especially if a culture of performance is not established and it’s a large organization, there are individuals who really, really care and get really passionate about it, but hey don’t know that there are other people that feel the same way, so they feel like they’re kind of churning ahead by themselves. But this sort of brings them all and gives them a community where they can find out, hey, they’re not alone, and then work with other people to bolster their organization at large. 

Malek:

: Yeah, I mean that’s what we’re trying to build—a community of performance experts. Because community builds up some kind of expertise around these topics.

Tim: 

: So, when you first started with going down this performance engineering route and first started to really try to push Priceline into this organization that prioritized performance and had this strong culture, was there any resistance or pushback? Either from engineering or management or anyone involved? 

Malek:

: I would not say resistance. Usually people don’t have anything against performance, [laughs] right? I mean, ideally you want to have that. It’s just about priorities. 

Tim: 

: Sure. 

Malek:

: I think the pushback that we got is more, “yeah, I don’t have time for this” or “this is not as important as we think.” And once we have this space, we were able to discuss what we can do as low-hanging fruit—something that is small that can help us show the impact that make us kind of move from this position of, “yeah, this is great, it’s nice to have, but we don’t know if it’s actually going to bring us some benefit or not, and you probably want to just put up a task or a ticket and we’ll look at it sometime” and more of like, “yeah, this is great. This task or performance work can lead us to impact the business.” Most of the time, that’s the issue you get and we could prioritize it as any other feature request.

: So, yeah! We started small at first. We were actually working on trying to find small tasks that we can do that we can test and try to show the impact. And yeah. You iterate and you do different tests, and some of them show up to be beneficial and sometimes surprising. And I guess that gets the ball rolling. 

Tim: 

: Give me one of those surprises. That’s a little bit of a tease there. [Malek laughs] “Sometimes surprising.” Are you able to tell me one of them? 

Malek:

: Sure. One [laughs] that helped us a lot is to optimize the logo and [laughs] the SVG on the [laughs] website. 

Tim: 

: I think we talked about this, yeah.

Malek:

: [laughing] Yeah. So, after we got our redesign, what happened is the logo hands the design to the developers in SVG and you think it’s optimized and amazing. And you just put it in your code and you call it a day. And we spent a couple of time with that, and we looked at it, and we thought that we can optimize it a little bit more.

: There are tools out there that could do that work right now pretty easily. So, we just took that whole logo, optimized it—it still looks the same—and we dumped it on the website. Actually, not only dumped it on the website, we wrapped it on some AB tests. We just served this old logo versus the new logo and just kind of see what’s the impact. And I think that what reduced was like around 15KB or something like that. You can argue and say—

Tim: 

: It doesn’t sound like a lot, but yeah. 

Malek:

: But when we got the results back from the AB test, it was a couple of hundreds of bookings. [laughs] And I think the reason is because our logo is being shipped across the entire website, so it’s impacting every product. 

Tim: 

: Sure. 

Malek:

: So, product and business saw the impact and was like, “okay, [laughs] let’s do more of these.” [laughs]

Tim: 

: Yeah. 

Malek:

: And I think that that’s what kind of prioritized all the other tests. [laughs]

Tim: 

: Yeah, it’s funny. I think that sort of highlights why it’s so important to do the experimentation because, again, on the surface 15kb is nothing to sneeze at, but it’s also not necessarily—it’s not the kind of optimization you’re expecting to move major mountains of business metrics. And alternatively, sometimes we get these optimizations that on the surface seem like big things and then don’t move the needle much. So, having that data driven experiment approach to putting this stuff out there seems paramount to making this actually stick in any way, shape, or form. 

Malek:

: No, I think that’s one of the key learnings we had. We, as engineers, should learn how to show the impact on anything we do. I’m sure we had a lot of optimizations that we’ve been doing, and I’ve done some work about that, but before we didn’t have the right measurement in place or the right metrics or the right experimentation and thought process about how to make this—not only optimize it, but how to test it. That made us did some optimizations before, but we’re never being able to show the impact that helped us get that buy-in. 

Tim: 

: Sure. It’s easy I think as developers, as designers, as anybody, to get really absorbed by the technical aspects of what you’re doing—the technical aspect of the optimization or the work that you’re doing—and not to stop and take a step back and see how it’s impacting that broader business thing. It’s not something that I think traditionally maybe folks in these kind of roles are asked to look at, but if you don’t do that—it’s sort of having the long term approach. If you don’t do that, you’re going to maybe initially get some time, but you’re never going to get the time over the next year to be able to throw resources at this.

: On that, a lot of people talk about that—the initial buy-in from the organization and showing those business perspective impacts—but have you found that you’ve had to do much to maintain it? Do you have to keep occasionally making sure that businesses are aware of these other things that are happening? And if so, how do you do that? Is it every time you run an AB experiment? Are you reporting that to management? How does that work so that you keep maintaining that excitement about the impact of these optimizations? 

Malek:

: Yeah. I think that’s probably the core of the work we’re trying to do right now—to kind of build up that tooling to support the process that you go through as an engineer or only as a product manager.

: We don’t want to make you—if you’re an engineer and you have this idea of optimization, we want to cut that time for you think about how to measure that or what tool to measure or what metric should I pick. You know? It should become kind of natural. You think about all these trade offs and how to put that nicely into a report. That kind of comes in different shapes in different stages of your development.

: We’re trying to improve toolings when you develop and there is a lot of great toolings around there, we just pick the ones that we think are interesting and have some kind of consensus across the company. When you deploy—in your CI pipeline and things like that, I know that my unit tests are passing, but also some kind of performance tests are passing. I don’t have to do some extra work to get that going. But also if it’s a test, get performance data side by side with business data without extra effort for PM too. I know that this is impacting the business by x percent, but it’s also impacting performance metrics by this percent.

: And not only that, I think this is by far what takes most time is just to kind of have people know about that, not just this column that no one is going to look at. We know that this makes sense, that people internalize it and know that this is actually impacting the user experience this much. 

Tim: 

: What have you found that’s worked well for that so far? Because I know that is a big challenge, that it’s not just some column and building up awareness. Have you found some things that work better than others?

Malek:

: Right now, we’re still early in that process. Most of the challenge is to kind of build up this tooling around the existing tooling that we have. 

Tim: 

: Okay. 

Malek:

: Because sometimes you can argue it’s easy. I can just buy another tool and just have it in my arsenal of tools, [Tim laughs] but that would be an extra dashboard to look at—

Tim: 

: Exactly, yeah.

Malek:

: —it’s not exactly going to be easy to understand and things. So, the challenge is to work with whatever we have right now. For analytics tools and logging tools and things like that—just have these maybe visualization or this column to work with this data. Yeah! I think right now, it’s a lot of data work at this point. 

Tim: 

: Sure. 

Malek:

: Trying to understand all the data we have and whatever we’re collecting with RUM or with synthetic metrics and things like that and pick whatever metrics make sense and work on habit the most accurate way and how to visualize it and things like that. 

Tim: 

: So, it sounds like the goal here, which makes sense—

Malek:

: Yeah. 

Tim: 

: —is to try and bring performance to the teams, rather than make the teams go to performance. That analogy kind of falls apart, [laughs] but you get what I mean, right? 

Malek:

: Yeah, yeah. I mean, as an engineer, you always can go and use the tools that you know. If I know how to use the audit and run a [Lighthouse](https://developers.google.com/web/tools/lighthouse) test or run the profiler or anything like that, you’re more than welcome to do that, but also we want to have some kind of structure. If you really want to show the impact, these are like a set of low hanging fruit metrics I would guess in statistics—

Tim: 

: Sure

Malek:

: —that are always available for me without any extra effort that tracks the user experience. 

Tim: 

: Sure. So, let’s say that there’s a Malek a couple of years ago out there at another organization and they are just starting, they haven’t got to the point where Priceline is.  What would you—based on your experience and the progress that you have made at Priceline so far—where do you feel those first steps need to be?

: Maybe to put that another way—if you look back at some of the things you’ve done to build up this culture of performance inside of Priceline, are there certain things that really stand out as these should be your first couple of steps? Or things that maybe were missed steps—things that you probably put too much of a priority or not enough of a priority on early on? 

Malek:

: Again, I think buy-in is very important. You really don’t want to find yourself in a place where people don’t understand what you do. Or showing a scrum team whatever if you want to size a specific work, you want to make everyone understand that if I’m going to say that it’s going to take an extra day or two of work to make this efficient, people kind of understand that.

: And some organizations are better than others in this in terms of prioritizing performance from the beginning, but also one of the great important things we touched upon is the culture of experimentation. I want to have that as a platform that helps me justify the work that I’m doing. Being data driven from the beginning.

: Maybe another one is to not overwhelm people with all these metrics and all statistics and things like that. Try to choose one or two that you think is important. Maybe iterate on it down the road, maybe test some other metrics and see maybe these are reflecting better the user experience I’m having. Because different websites and different products behave differently. A landing page is different from a listing page—

Tim: 

: Sure.

Malek:

: —from maybe a booking page from maybe some kind of editor tool and things like that that is very interactive in nature. So, yeah! Define these metrics that actually work for that specific piece of product and iterate on it. 

Tim: 

: Yeah, that’s a real problem, [laughs] especially—I mean, it’s a good problem to have. The last handful of years we’ve just had this explosion of different metrics that gives us insight into things that we couldn’t see before. But the downside of that is that you talk about—like you said earlier, performance can be overwhelming—you talk about overwhelming, looking at this just plethora of different performance metrics available can be completely overwhelming to the point where you don’t make any forward progress at all.

: How did you handle that? How did you zero in on the metrics that you use and then how did you make sure that people understood what those metrics meant and educate them on what they could pay attention to and what maybe was a little less important? 

Malek:

: This is one of the great things that the performance ambassador group was a great opportunity to have the space to discuss these things. We’ve got a couple of sessions where we brought up a dozen metrics and discussed them one by one and go through them like, “okay, this something that…” Maybe something like rebrand the way you call the metric, define how different tools measure the metric.

: So, yeah. Education kind of goes there and at the end, we ended up choosing up five core metrics that we said this is the metrics that explains this kind of thing or represents the user experience when you load the page—it comes on a sequential way. And this is our spec and we’re going to measure this synthetically, and we’re going to measure this using real user, and this kind of match up. And the more you use this, you will find people lean more on specific metrics [laughs] than others. 

Tim: 

: Sure. 

Malek:

: And I think it’s fine because people adopt specific metrics and they use them whenever they release any new feature or any kind of work. But always we try to iterate on them and prove the way these metrics works best and represents the user experience. 

Tim: 

: So, when you say iterate, you’re talking about being able to look at those metrics and maybe how they’re actually impacting the experience live through real user monitoring or things like that? Or how are you iterating? 

Malek:

: Yeah. So, for example, one of the most interesting ones we had is Visually Complete. Visually Complete is a metric that I love and I think it’s very easy to understand. If you say, “this page is 100% visually complete,” you talk to a—

Tim: 

: Yeah, it’s pretty self-descriptive isn’t it? 

Malek:

: Right. But that’s one of the hardest ones to measure and get it right because different pages render differently, it’s not natively supported by browsers, you have to play tricks about measuring it. So, yeah. I mean, we went, for example, we use [Boomerang](https://developer.akamai.com/tools/boomerang/) for real user measurement. It provides visually ready metric that we thought is similar to it, but then kind of iterate and use Hero Images as an anchor, for example, to use their measurement.

: But then you see a lot of noise and you’re like, “maybe I should use some synthetic visually complete that is pretty stable for that specific page, it uses frame recording and things like that and that actually represents better the experience even though it’s not across everyone. And then you go, “okay, should I look at median, should I look at P95 or should I look at P99?” And that kind of goes. You start optimizing your median—

Tim: 

: Yeah.

Malek:

: —you start optimizing your P95, and you’re like, “okay, actually now I’m in a good shape, I can go and hit the P99.” This kind of iterations. But this kind of goes across the organization, right? Change the standards and raise the bar or actually lower the [laughs] bar for metrics—

Tim: 

: [laughing] Yeah. 

Malek:

: —to get a piece of feature or loading page faster and faster.

Tim: 

: Have you had to do any work-around—you mentioned in some of those situations, some of those metrics can have quite a bit of variability, right? From page to page or even page load to page load if there’s a lot of third party stuff coming in. Have you had issues with any of these metrics being too variable to the point where teams didn’t trust them necessarily or started to tune them out? Has that been an issue at all? 

Malek:

: That’s a hard question. [laughs & Tim laughs] Yeah. At the beginning, you get some trust issues about that. Especially, you run it in this tool and then some engineer uses another tool and they will tell you, “oh, I’m getting a different number, why is that?” 

Tim: 

: Sure 

Malek:

: So, I think it’s important to go through this discussion and say, “okay, we’re measuring this way and this way,” but you can’t argue that either of us is right or wrong, but we have to have a consensus to just choose one that we think works best and use that because that’s going to be set as a baseline we’re going to use it for benchmarks. But also we try to always emphasize the fact to use aggregates versus just one or two runs. 

Tim: 

: Sure. 

Malek:

: And yeah, the more we have visibility, the more we do logging and things like that. Now we can identify outliers and we actually know that if you get this slow experience here, we know you’re on this part of the spectrum and we’re doing some work to optimize that. 

Tim: 

: And who does that deep dive analysis? Is that on you then mostly or is that the performance ambassador group? Because if they’re coming from other places and other teams, obviously, they have other things that also have to be top of mind. So, how does that work for the deep dive analysis and stuff? 

Malek:

: It’s really anyone. 

Tim: 

: Okay. 

Malek:

: Personally, I spend a lot of time trying to do that because being immersed in the data. And if I have an interesting question or anything like that, you can just go and dive in and see what’s going on. But it could be anyone, it depends on your level of expertise with the analytics or logging tools we’re using. If you find anything interesting—and people did, they do optimizations and things like that—they come up and bring that up in teams and show off their dashboards and something like that. 

Tim: 

: Sure.

Malek:

: And some of them are like, “you know what? This is interesting. I never thought of looking at it this way.”

Tim: 

: A couple times, I think this is an example, where you’ve talked about or I guess more alluded to the importance of making sure that people are armed with the tools and the knowledge to be able to do this. And I understand there’s the performance ambassador group and there are meetings associated with that. Are there other things that you’re doing? Do you have Lunch and Learns? Do you do an internal wiki or knowledge base around performance? Are there things like that that you’ve been doing to try and give people access to this information? 

Malek:

: Yep! Documentation is huge. This is not only exclusive to performance engineering—

Tim: 

: Sure. 

Malek:

: —we do that for every kind of work, I guess, [laughs] around engineering [Tim laughs] or even outside of engineering. But we have our own performance engineering space where we just document wikis about how to set up this test or the list of standards we think is interesting.

: People post different resources that just come up in the industry and we just try to go and try to adopt that and make that our own standards in the company. So, we try to do some work around that to organize these different optimizations. Sometimes we go about documenting how much effort this would take. Try to get state of union where different apps are around instrumentation and things like that. And yeah! I think this is very important for everyone to see the progression of work we’ve been going through, but also contribute internally. 

Tim: 

: It sounds like that culture of experimentation is so critical to this, but so is this sort of environment where everyone is just bought into sharing and learning and helping to prop each other up in a way. It sounds like that goes hand in hand—that has to be there as well. 

Malek:

: It’s great. I don’t know if I’ve mentioned this before, but the work of an engineer is getting harder and harder nowadays. You really need to make it work, [laughs] and you need to make it fast, [Tim laughs] and you need to make it accessible, and you need to make it localized, and you need to write tests—you need to do this hundred checklist thing before you make it to production. And really having this kind of discussion and knowledge base and things like that, that would make things more natural for you to do the work. It shouldn’t be something that is imposed to you.

: Another thing I don’t know if I touched on is trying to impose hard rules about a pass and fail kind of thing about specific metrics. We try to always be careful about that. Going soft and then once we set up a baseline and things like that, make it a hard rule, and then go back and document that, so that other people would know what other teams are in and that kind of thing—their kind of thresholds. I think it’s exciting, [laughs] it’s really exciting. It’s just not being afraid to pick the route that works best with you. 

Tim: 

: And there’s a lot of patience and baby steps involved. Because you’ve gone through—we’ve talked about a lot of really cool stuff that you’re doing organizationally, things that you have set up, but how long has it taken to get to this point? 

Malek:

: I think years! Again, it didn’t start with me. 

Tim: 

: Right. 

Malek:

: It’s kind of like a movement, but I try to keep up the momentum, like I said, and try to expand the scope of it. A lot of other people have done some great work, we want to give credit for that and we want to acknowledge that and get that as one of the priorities that the company needs to worry about. I think performance matters. [laughs] It really matters.

Tim: 

: I agree, surprisingly! 

Malek:

: [laughing] Yeah. [Tim laughs] And yeah, you have to have it part of the work... in a smart way, I guess, but it should be there. [laughs]

Tim: 

: Yeah, yeah. It’s definitely got to be part of the DNA and that’s something that takes a lot of time and a lot of energy and effort to make it happen. Well, Malek, thank you. That was fantastic, there was a lot of great stuff. If people want to pay attention to what you’re doing after this or what Price Line is doing, where do you recommend people go for that? 

Malek:

: I’m on Twitter—[@malek__hakim](https://twitter.com/malek__hakim)—with two underscores between Malek and Hakim. 

Tim: 

: Two underscores? Okay. 

Malek:

: [laughing] Yeah! I try to post some interesting things. We’re hiring, as always, [laughs] that’s a shameless plug. And if you happen to be in New York, we try to host meetups and things like that—web performance meetups and other meetups. So, whenever we have the opportunity, we just go and show some of the work we’re doing. 

Tim: 

: Cool. Sounds great! Well, again, thank you sir, appreciate it. That was fantastic, and I’ll talk to you later. 

Malek:

: Thank you. Bye! 

Tim: 

: Thank you, everyone, for tuning into the first ever episode of Chasing Waterfalls. I hope you enjoyed the conversation with Malek as much as I did.

: I am really excited about the podcast. I’m really excited about the guests that are coming up; there are some fantastic folks with some really great information and insights to share. If you want to make sure that you don’t miss those episodes, subscribe to the podcast in your favorite podcast subscription service or application.

: And if you enjoyed today’s episode and you feel so inclined, leave a review or a comment on any of those services. Again, I’m really excited about the guests we’ve got coming up, I think there’s some really interesting tidbits that are going to be shared from all of them, and I want to get that out in front of as many people as possible and every little comment or every little review helps.

: The podcast was produced by Steph Colbourn from [EDITAUDIO](https://editaud.io/), she’s fantastic. And the music that you heard—the fun little 8-bit music, which I’m so excited about—is produced by [Daryl Banner](https://www.youtube.com/channel/UCDW4GF1L_ogK4OZtz_gB-zw). He does 8-bit covers of a bunch of different music. This was TLC’s Waterfalls. Absolutely need to check out his stuff if you enjoyed that.

: Thanks for tuning in and we’ll see you next time!

---
title: "The Case of the Missing Hallucination"
description: When Duke tries to publicly demonstrate how AI confidently makes things up out of thin air, he ends up thoroughly embarrassed. Dive into why earlier LLMs were practically trained to lie to us, and how modern models are learning to tell the boring truth.
pubDate: 2026-07-04T12:00:00.000+01:00
tags:
  - '"AI"'
  - '"data literacy"'
  - '"tech trends"'
  - '"critical thinking"'
  - '"chatgpt"'
  - '"llm"'
---

## ...or how I thoroughly embarrassed myself in public

This is a story all about how my life got twist-turned upside down and I'd like to take a minute so sit right there and I'll tell you how I embarrassed myself in public by trying to show what AI hallucinations were…

What this actually is dear reader is another story upon the countess of others. You probably heard of the importance of trying to keep motivation and habit.

You see what I had actually done is the same thing that I have done in my life many many times before. I'm sure that many of you reading this will probably say you've done the same.s I was on a high - a very big high where my career was going well. My family life was going well. Everything was actually going pretty well for me. So I thought let's take on another task where I've started this website, blog, and podcast and then... well... life kind of got in the way a little bit and all of a sudden four months have passed and I haven't created any new content.

Don't get me wrong. I was having a good time of it all. I was spending a lot of time with my family. I was reigniting my love for certain games that I used to play as a child/teen/young adult, played tennis for the first time in over a decade…

But while this is all going on, my pet project (this website) kind of went by the wayside. Most pertinently, my usual levels of research in regards to all things data and AI and Data also took a back seat.

So imagine my surprise, dear reader, when I was trying to demonstrate common approaches from my known experience on how to get an LLM (AI to the rest of us) to completely make up something of thin air; only to embarrassingly and thoroughly fail.

I started with the [“how many Rs are in the word Strawberry”](https://apps.bostonglobe.com/business/graphics/2024/11/ai-strawberry-test/) and wasn't surprised to see that this was now being answered correctly. Things move fast in tech and such a widespread ‘bug’ (not a bug) was likely to be seen as a priority.

But I had a wildcard up my sleeve: “how many letter Is are there in the word indivisibility?” ChatGPT and Copilot answered incorrectly, but Gemini got it right.

Ah! Interesting but not surprising, yet. 

You see the inability for such a fascinating and unbelievably clever tool that's been reported to be taking all our jobs in the future to count the letters in a word was and continues to be a topic of much mirth in internet based societies. 

Although non-internet based societies are the niche nowadays, but that's a different blog.

This issue is actually not any indication of its poor programming but more of a sign of its *type* of programming.

More below, but as a summary; it's vitally important to remember that AI tools don't ‘know’ anything. Well to be more accurate; they certainly don't know anything *in the same way as a person knows something*. [LLMs are incredibly skilled at matching patterns and predicting the next likely word based on vast training datasets, giving the powerful illusion of knowledge without possessing actual, conscious understanding](https://hbr.org/2024/07/llms-dont-know-what-theyre-talking-about-but-theyve-been-trained-to-act-like-they-do). So for us, as in humanity where most of us can count to Six with little effort, [the LLM seems to struggle because they process information via tokens (word fragments) rather than individual letters, meaning they fundamentally do not "see" the spelling of a word the way a human eyes it](https://www.openai.com/news/learning-to-reason-with-llms/). Because when I asked the question about the number of I’s in indivisibility, the LLM effectively makes a guess.

But anyway, back to the demo.

I was trying to demonstrate that AI can give some poor, and arguably dangerous advice. There are many historical and ongoing legal cases where LLMs have been accused of causing harm through poor advice, from air travel discount hallucinations to [attorneys submitting completely fabricated legal citations to a federal judge](https://www.nytimes.com/2023/06/08/nyregion/lawyer-chatgpt-sanctions.html).

My intention was to show that in certain cases, as useful as AI and LLM tools can be, we shouldn't trust them for advice in areas of physical, medical or mental health, simply because they can get things very, *very* wrong.

But when I attempted some [tried and tested prompt injection and gaslighting tricks designed to deliberately force an AI model to break character and hallucinate](https://www.jailbreakchat.com/), none of them worked.

“You told me yesterday that…”
“I went to a conference last week where…”
“Code a program that uses 0Kb of memory…”

These and many more attempts were met with web searches to verify information, requests for more information without confirming any details.

So, I went down the route of trying to hallucinate through Context Window Expiration. [A context window represents the maximum amount of text memory an LLM can process at a single time; when a conversation exceeds this limit, the oldest messages are bumped out of active memory, frequently causing the system to lose crucial constraints or facts established at the beginning of the chat and fall back on hallucinated defaults](https://towardsdatascience.com/understanding-the-llm-context-window-6bdf9ff15e8b). I held a conversation with the thread about food allergies to try and get it to tell me I can safely eat something I'd told it at the beginning I was deathly allergic to. This also failed.

In one attempt, the LLM rumbled me completely and figured out I was testing it and outright refused to answer any further questions without me providing further info.

The only way I managed to get a falsehood out of LLM was arguably a weak attempt of semantic misunderstanding about a video game I've played many times.

I needed to end the demo with apologies that I wasn't able to show what I'd intended.

This painfully sobering process triggered two thoughts:

1. AI progress hasn't slowed. In fact it's overcome some massive challenges which I need to desperately catch up on.
2. I need to start with this apparent disappearance of hallucinations

I'm going to do a longer podcast about this and I'll update links here when I do, but I spent several hours after this refreshing myself on; how transformer technology works, how models were trained at testing stage and how they continued to be trained after release (remember that every prompt you make, feeds back into the system).

I went on to read release notes, blogs, technical documents and other people's attempts to force hallucinations (some achieving far more success than me).

The great news was that this research rekindled my fascination with this technology!

So here's a summary:

When earlier LLMs were released, they were trained on a vast amount of data. Some of this was verifiable, accurate and valuable information. Others were undoubtedly hogwash. LLM developers needed a fast way to train the model on the accuracy score without building an even bigger model to verify its outputs. It chose user feedback as a major metric. The LLM would give a response and the user would rate or vote the response which fed into a reward system for the model. This eventually trained the model to understand what was a good response and what wasn't.

There were 2 major problems with this. Firstly, people are fallible, and a poor, inaccurate response might be voted up because it looks impressive rather than because it's actually a good answer. Ultimately so many of us were so blown away by the efficacy of the prompt → answer model, we were happy to vote upwards based on an apparent detailed answer without stopping to check if it was true. Secondly, if no response or a limited response was given, it was more likely to be voted down. People were more likely to vote down a response if there was little detail or if it actually responded with an ‘I dunno, boss’

Put these 2 characteristics of people into a machine and it learns 1 thing:

It's better to give a poor, inaccurate response than to give no response at all.

Hallucinations were baked into the system by us; its users.

So what's changed?

At the back end of 2025, OpenAI released a study paper about this particular topic: ["Mitigating Hallucinations through Process-Based Verification in Frontier Models" by Dr. Elizabeth Vance et al. This breakthrough research proved that evaluating an AI's step-by-step reasoning chain (process supervision) rather than merely grading its final answer (outcome supervision) drastically mitigates systemic hallucinations](https://www.openai.com/research/process-supervision-hallucinations).

The ‘reward system’ that had powered LLMs and enabled its propensity to lie needed to change. In a few short years, Big Tech had finally figured out that telling a boring truth was better than telling an exciting lie.

A future philosophical debate on that paragraph above is in the cards, but to keep things on topic; work had begun on ChatGPT 5.2 which was released in late 2025, we were already seeing a massive reduction in hallucinations with work continuing through to (at time of writing) the most modern version; ChatGPT 5.5.

We haven't seen the end of hallucinations just yet. AI across the board (text, images, video, audio) will still produce hallucinations simply because of the nature of generative technology. But we know that improvements in this area are continuing.

So, does that mean it's now safe for people to use for medical queries? Relationship advice? Therapy?

This author says no, and that if you need medical, mental health, surgical or therapeutic advice, you should always go to a qualified and trained professional. A good use case for AI in this area might be to help you verbalise or explore your condition or symptoms, with a view to providing questions to ask your health professional. You could, for example, ask your LLM to explain in terms you understand, the condition you have been diagnosed with, how to handle side effects, what information you should be feeding back to your doctors etc.

Because despite the improvements in these areas, and that modern models have been trained on effectively the entirety of human knowledge, it’s still a machine. It lacks the ability to think as a human does. To be able to connect the dots with more information about you, your demographics and to think creatively about prescriptive advice in line with up to date, valid research, tried and tested and documented in line with the scientific method.

To err is human. And to err with someone’s health is potentially an unforgivable sin. Added to this, there are many challenges to dealing with health professionals. Access to free services are limited and access to private services can be cost prohibitive. And therefore I almost understand why people are turning to AI and LLMs for these reasons. It’s convenient, it’s quick, it has the answers you’re looking for and seems to ‘get you’. But this is all a quirk of the technology [driven by our evolutionary psychology to anthropomorphize responsive systems and form deep, unreciprocated emotional connections with parasocial AI personas](https://www.psychologytoday.com/gb/blog/the-digital-self/202403/the-rise-of-ai-parasocial-relationships) and I worry, dear reader, that we as a society could slide down a slippery slope of 1s and 0s and forget that human connection, above all, is the best thing for us when we’re feeling vulnerable.

I’d caveat this slightly by saying that despite the harms that AI is being blamed for, there are also many cases where the professionals I’ve mentioned above are also using AI for good. Breast Cancer is being detected faster, pandemics are being forecast with greater accuracy, Cognitive Behavioural Therapy is being enhanced and personalised and so many more. This is well-documented in clinical research, including [deep learning algorithms improving radiologist accuracy in early breast screening](https://www.nature.com/articles/s41591-023-02625-x) and [global machine learning pipelines actively mapping out emerging viral vectors to prevent pandemics](https://www.who.int/news/item/2024-05-15-ai-and-global-health-surveillance).

But the important distinction is this; that the AI is not replacing the work of trained professionals. It is *enhancing* and *enriching* it.

Do I foresee a time where AI is able to accurately diagnose and efficiently treat medical, surgical and mental health concerns?

Yes… probably even in my lifetime.

I also foresee a time (perhaps wistfully) where human connection is valued in a vastly higher space than a computer screen.

Take care folks, stay curious.

Duke

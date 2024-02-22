import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
    organization: "org-EozwSbt7Fznh92sQFWXtGC9o",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const Chatbot = () => {
    const [websiteData, setWebsiteData] = useState(null);
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const chat = async (e, message) => {
        e.preventDefault();

        if (!message) return;
        setIsTyping(true);
        scrollTo(0, 1e10)

        let msgs = chats;
        msgs.push({ role: "user", content: message });
        setChats(msgs);

        setMessage("");

        await openai
            .createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: `while asking what is your company name tell AI-UK Ltd. I need to answer only from the below contexts`
                    },
                    {
                        role: "system",
                        content: `
              Services 
              Sectors 
               Pharmaceutical
               Entertainment & Telecomms
               Manufacturing
               Security
                
               Retail
               Healthcare
               Marketing & Advertising
               Diverse Sectors
               About
               Articles
               AI Readiness Assessment
               Careers
               Contact
         ABOUT US
         OUR OBJECTIVES
         Our four main objectives are each tailored to empowering businesses to
         thrive in the AI era:
         SEAMLESS AI INTEGRATION: We provide expert guidance and support to
         seamlessly integrate AI into your operations. We want to ensure that
         your businesses can leverage AI technologies effectively and
         efficiently to drive growth, optimise processes, and enhance their
         competitive edge.
         HUMAN-CENTRIC AI SOLUTIONS: AI-UK is committed to capitalising on the
         human aspect of both our business and yours. Our AI solutions
         complement and enhance human capabilities, fostering a collaborative
         environment where AI empowers employees rather than replace them. By
         prioritising a people-centric approach, we create sustainable and
         inclusive AI implementations that deliver value for both your company
         and its workforce.
         DEMYSTIFYING AI: We understand that the realm of AI can often be
         perceived as complex and intimidating. We work with you to demystify
         AI technologies, making them accessible and understandable to
         managers, employers, and business owners. Through tailored training
         programs and clear communication, you will build confidence in AI
         adoption, empowering your business to embrace AI with enthusiasm and
         foresight.
         AI READINESS SUPPORT: Not all businesses are immediately prepared to
         implement AI solutions. AI-UK bridges this gap by offering
         comprehensive AI readiness solutions. We provide you with the
         necessary capabilities, training, and tools to equip your team for an
         AI-ready future. Whether it’s upskilling employees or designing
         customised AI strategies, we ensure that your business is
         well-prepared to unlock the potential of AI when the time is right.
          Contact us 
         OUR RELATIONSHIP WITH AI
         At AI-UK, we define AI as an empowering resource that augments human
         capabilities and drives innovation.
         AI encompasses the development of computer systems that can learn,
         understand natural language, and make decisions. As such, it can be
         harnessed as a tool to unlock the potential of data, enabling
         businesses to gain valuable insights, automate processes, and deliver
         personalised experiences to customers.
         AI is a collaborator, complementing and enhancing the skills of
         individuals. With the right guidance and understanding, AI becomes a
         transformative force, empowering businesses and individuals to reach
         their full potential.
          Contact us 
         OUR STORY
         AI-UK was born of a passion for ushering businesses into the future of
         artificial intelligence with clarity, purpose, and inclusivity. As a
         leading AI consulting company, we take pride in helping businesses
         navigate the complexities of AI implementation, while capitalising on
         the human aspect that lies at the heart of innovation.
         Our team is driven by a commitment to democratise AI for businesses
         like yours, rooted in the belief that we can work together with AI to
         build a better future.
         JUSTIN HALL
          CEO 
         Born in South Africa, Justin started his professional career
         empowering individuals and marginalised communities to reach their
         full potential and navigate social challenges through several
         charities of which he was a founding member. Registered with numerous
         governmental organisations, he has always been personally involved
         with the improvement of our most fundamental structures and with
         raising awareness of social issues on national TV, debate platforms,
         and his own radio talk show.
         Having completed several qualifications himself, Justin has taught at
         university level, in schools, and founded his own community enrichment
         school. These, combined with being a published poet and author,
         writing in the area of leadership development, strongly testify to his
         firm belief in the power of education.
         Justin has many years of experience in C-suite leadership, B2B and B2C
         sales, fundraising, training, management, leadership, and
         international executive coaching. All this expertise is now the
         driving force behind Justin’s passion to empower individuals and
         organisations to reach their full potential as the CEO of AI-UK.
         ALASTAIR MOORES
          Director of Research and Development 
         With a proven track record of driving growth and innovation, Alastair
         brings a wealth of expertise to AI-UK’s executive team. As the
         former Associate Director at Zentelligence Ltd, he contributed to
         advising global entities on technology evolution, cyber security, and
         Big Data. His experience as an Information Security Analyst and
         Technical Writer at ITC Secure Networking, coupled with an MA in
         Computing and Artificial Intelligence, is a testament to his passion
         for bridging technical intricacies and strategic business needs.
         Alastair’s ability to craft security policies, interpret data for
         insightful reports, and coordinate advertising campaigns showcase a
         versatile skill set which is now focused on enhancing AI-UK’s client
         experience. Holding additional MA degrees in Creative Writing and
         Psychology, Alastair perfectly embodies the fusion of creativity and
         strategy AI-UK champions in its own AI integration projects.
         GRANT NUSS
          National Sales Director 
         Grant started his career in the Fast-Moving Consumer Goods industry
         and quickly rose to senior management and eventually became a Sales
         Director. Throughout his career in senior management and director
         positions, he was frequently headhunted due to his ability to
         establish strong and successful trade relationships. His primary focus
         has always been on achieving mutual success for both parties, which
         has allowed him to gain extensive knowledge and experience in various
         industries. As a result, he has become a well-known and successful
         change agent in Sales, Marketing, Finance, Outdoor Media, Hospitality,
         and Higher Education.
         Through his management and leadership experience, and business
         development skills, he has been able to grow organisations and
         individuals alike. His expertise has been highly valued, as evidenced
         by his invitation to lecture at the university where he graduated, on
         topics ranging from Leadership and Ethics to Sociology and Worldviews.
         Grant has an impressive range of skills, including sales, marketing,
         coaching, team building, and personal development. He is skilled at
         transforming individuals and organisations, as well as shaping them
         for growth. When he’s not working, Grant loves spending time with
         his family, playing golf, lawn bowls, and running marathons. He is
         also a talented musician, having released three albums of his own
         Maskandi genre music that receive radio play. Additionally, he has
         published his first book.
         MARK MIRAMS
          Chief Principal Advisor 
         Mark is a highly skilled and experienced C-Suite leader with extensive
         knowledge in the Urban and Environmental planning sectors. He holds a
         BA (Hons) degree in Urban and Environmental Planning and a Post
         Graduate Diploma in Town Planning.
         Mark has worked in development management in four different local
         authorities in various roles, giving him an understanding of the
         challenges and limitations of development management. He has the
         ability to train, coach, and mentor less experienced staff, helping
         them reach their full potential. Mark is well-versed in managing
         resources effectively and can think clearly about the tone, method,
         content, and channel of responses that best suit the situation and
         audience. These skills make him an invaluable asset to AIUK and enable
         them to expand and enhance their service offerings to businesses
         seeking their assistance.
         JASPAL SINGH
          Founder 
         An entrepreneurial visionary, Jaspal has woven a tapestry of success
         through a portfolio of ventures dedicated to enhancing people’s
         lives. His dynamic approach stems from a commitment to democratise
         intricate processes, making them accessible to all. With a rich
         history of building businesses that simplify complexity, Jaspal stands
         as a beacon of empowerment in todays’ technology-driven landscape.
         Jaspal’s multifaceted journey encompasses planning, engineering,
         security, and technological implementation. Each venture undertaken by
         him is imbued with a profound drive to level the playing field,
         ensuring that every individual has an equal opportunity to flourish in
         the modern world. His legacy is one of breaking barriers, where
         innovation and accessibility converge, echoing the core values
         championed by AI-UK.
         ARRANGE A CALL BACK NOW
          Notice: JavaScript is required for this content. 
          0203 538 6274 
           EMAIL PROTECTED  ",`
                    },
                    ...chats,
                ],
            })
            .then((res) => {
                msgs.push(res.data.choices[0].message);
                setChats(msgs);
                setIsTyping(false);
                scrollTo(0, 1e10)
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div>
            <section>
                {chats && chats.length
                    ? chats.map((chat, index) => (
                        <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
                            <span>
                                <b>{chat.role.toUpperCase()}</b>
                            </span>
                            <span>:</span>
                            <span>{chat.content}</span>
                        </p>
                    ))
                    : ""}
            </section>

            <div className={isTyping ? "" : "hide"}>
                <p>
                    <i>{isTyping ? "Typing" : ""}</i>
                </p>
            </div>

            <form action="" onSubmit={(e) => chat(e, message)}>
                <input
                    type="text"
                    name="message"
                    value={message}
                    placeholder="Type a message here and hit Enter..."
                    onChange={(e) => setMessage(e.target.value)}
                />
            </form>
        </div>
    );
};

export default Chatbot;
import styles from "../styles/Fxtrade.module.css";
import fxtrademain from "../assets/fxtrade_main.gif";
import fxtradechart from "../assets/fxtrade_chart.gif";
import uxfxtradewires from "../assets/uxfxtradewires.png";
import uxfxtradenotes from "../assets/uxfxtradenotes.png";
import fxtradestory1 from "../assets/fxtrade_storyboard1.jpg"
import fxtradestory2 from "../assets/fxtrade_storyboard2.jpg"
import fxtradestory3 from "../assets/fxtrade_storyboard3.jpg"
import thoughtchart from "../assets/thought_chart.png"
import fxtradecolors from "../assets/fxtrade_colors.png"
import fxtradesketches from "../assets/fxtrade_sketches2.png"
import uxfxtradecolortest from "../assets/uxfxtradecolortest.png";
import uxfxtradeproducttest from "../assets/uxfxtradeproducttest.png";
import designprocess from "../assets/designprocess.png";
import fxtradechart2 from "../assets/fxtrade_chart2.gif";
import fxtradecalendar from "../assets/fxtrade_calendar.gif";
import fxtradeaddremove from "../assets/fxtrade_addremove.gif";
import fxtradeipad from "../assets/fxtrade_ipad_rates.gif";
import fxtradeweb from "../assets/fxtrade_web.gif";

function Fxtrade() {
    return (
        <div className={styles.fxtrade}>
            <div className={styles.controls}>
                <a href="./pantryyumyums">&#60; Previous</a>
                <a href="./oandalive">Next &#62;</a>
            </div>
            <section className={styles.portfolioRow}>
                <div>
                    <h1>UX Manager, OANDA</h1>
                    <h4>FxTrade mobile, tablet and desktop applications</h4>
                    <p>OANDA offer clients trading platforms with tools where they can trade a broad range of financial instruments. They have been providing online access to the financial markets, allowing clients to speculate on price movements in the global currency market since 2001. They aim to deliver a client first approach when innovating and implementing new products and supporting technology.</p>
                    <h2>Leading the Vision</h2>
                    <p>As the UX Manager at OANDA, I led and designed the vision for all of OANDA's mobile, tablet and web FxTrade applications. Diving deep into the trading world, I aimed to understand the needs of customers first and transforming that into a wonderful experience on all platforms.</p>
                </div>
                <img src={fxtrademain} className={styles.fxTradeMain} alt="fxTrade Rates Page" />
            </section>
            <section className={styles.portfolioRow}>
                <img src={fxtradechart} className={styles.fxTradeSecond} alt="" />
                <div>
                    <h3>Building A Team</h3>
                    <p>At OANDA, I built a design team from the ground up. What I looked for and my role as a manager included:</p>
                    <ul>
                        <li>• Finding people who were eager to learn, grow and adapt.</li>
                        <li>• Helping grow their skills by organizing design sprints, brainstorm sessions, team events.</li>
                        <li>• Weekly 1-1s</li>
                        <li>• Performance reviews twice a year.</li>
                    </ul>
                    <p>The UX team was solid and we made it a point to build strong relationships within the company. We communicated frequently with engineers, product managers, traders, and customer service. By doing so, it ensured all key stakeholders in any project were on the same page.</p>
                    <p>As a team, we created wireframes and prototypes to convey all our ideas. We stayed up to date within the field by exploring and using new tools. And we set out guidelines and design notes when working closely with the development team.</p>
                    <div className={styles.uxNotes}>
                        <img src={uxfxtradewires} alt="" />
                        <img src={uxfxtradenotes} alt="" />
                    </div>
                </div>
            </section>
            <section className={styles.portfolioColumn}>
                <div>
                    <h2>Leading in the Field</h2>
                    <p>Trading on mobile, tablet and web was relatively new at the time of design and development. When I was brought on at OANDA, it was my task to completely redesign the fxTrade mobile and tablet applications. Speaking to customers, and working closely with the engineering, trading and product teams, we were able to design a world class, fast and easy to use trading application on all platforms.</p>
                </div>
                <div>
                    <h2>Design Process</h2>
                    <div className={styles.designProcess}>

                        <h3>1. Understanding the Problem</h3>
                        <p>My first step in any new project or feature is to first understand the problem. There were a lot of areas that we redesigned and considered in the fxTrade app, such as drawing on charts, scrolling calendars, executing trades fast, etc, and for each problem I start with building an understanding. For the design process example, I'll focus on how myself and the team came to the solution for our visual design.</p>
                        <p className={styles.statement}>The problem: Traders need to access and scan all their important information quickly but there's a lot of cognitive overload due to the contrast, colours, and order of information displayed on the application.</p>

                        <h3>2. Brainstorm & Ideation</h3>
                        <p>Before writing/drawing anything, I start off with research and learn about the customers, competitors, and also exploring other apps outside the finance field.</p>
                        <p className={styles.emphasize}>Understanding our customer:</p>
                        <p>From the research I gathered, our traders are mostly men, and they are typically more tech savy then the average mobile user. They are more willing to adopt new technology and they like simplicity and speed. The top customers have elaborate desktop setups with many nice monitors and prefer dark themes when customizing their platforms. They tend to use the mobile app as a secondary companion for trading, and on the go to keep an eye on their portfolio while on the go.</p>
                        <div className={styles.storyGallery}>
                            <img src={fxtradestory1} className={styles.fxTradeStory} alt="fxTrade Customers" />
                            <img src={fxtradestory2} className={styles.fxTradeStory} alt="fxTrade Setup" />
                            <img src={fxtradestory3} className={styles.fxTradeStory} alt="fxTrade To Go" />
                        </div>
                        <p>Using all this knowledge, I like to start off with a thought chart. I write down the problem statement on top, with the user and task in the middle, and from there I just branch out and write down as many ideas possible. For this particular project, it was done independantly but there's many times it's done as a group or while mentoring.</p>
                        <img src={thoughtchart} alt="Thought Chart" class={styles.uxThought}/>

                        <h3>3. Design & Prototype</h3>
                        <p>From there, I pull out my sketch book or white board and start sketching. I start off sketching the obvious ideas to just get it out there, but eventually it involves into ideas that I haven't thought of. I like to have the problem statement and research visible, to ensure everyone keeps that in mind when sketching.</p>
                        <p>For fxTrade, or any app I design, I have a purpose behind the visual choices I made:</p>
                        <h4 className={styles.emphasize}>Colors: </h4>
                        <ul>
                            <li><img src={fxtradecolors} alt="fxTrade Colors" class={styles.uxDesign}/></li>
                            <li>• Most of our users have set up a dark theme for their applications</li>
                            <li>• The reason for this is because it allows focus to be directed to the numbers and charts which is key for trading. One second missed in trading could mean a lot of money gained or loss.</li>
                            <li>• Blue was chosen as the primary action color because most of our users are men and men have a higher chance of being color blind</li>
                            <li>• The previous action color of green, distracted took too much attention from the green being used to convey a price going up in value</li>
                            <li>• Based on ui research, blue was the most actionable color which people clicked on</li>
                            
                        </ul>
                        <h4 className={styles.emphasize}>Fonts:</h4>
                        <ul>
                            <li>• It has been shown in studies that san serif is easier to scan and read on web and mobile so it was an obvious choice when having so much information to display, that we wanted to use a san serif font.</li>
                        </ul>
                        
                        <h4 className={styles.emphasize}>Hierachy: </h4>
                        
                        
                        <section className={styles.portfolioRow}>
                            <img src={fxtradesketches} alt="Thought Chart" class={styles.fxTradeSecond}/>
                            <div>
                                <p>When thinking about what information gets placed where, I really wanted to understand what goes on in a customer's mind when accessing our application. By talking to our customers, our trader team, and looking at quantitative metrics, it was determined that a user typically follows this flow when launching the app:</p>
                                <ul>
                                    <li>1. Seeing how my portfolio was doing</li>
                                    <li>2. Seeing how the rates I care about are doing</li>
                                    <li>3. Doing analysis</li>
                                    <li>4. Executing trades</li>
                                </ul>
                                <p>This determined that first and foremost at the top, we wanted to display their portfolio amount. If they wanted to see more, they can expand for further details without leaving the homescreen. Just below that are their saved rates with each rate allowing a user to go into chart mode for technical analaysis. Tab bar with New Trade button always accessible to allow for trading.
                                </p>
                            </div>
                            
                        </section>

                        <h3>4. User Feedback</h3>
                        <p>At OANDA, I found various avenues that allowed me to gather user feedback.</p>
                        <ul>
                            <li>• The first group was the traders we had on staff who were very interested and invested in the product.</li>
                            <li>• The second approach was working with the product team to find a group of 100 customers who they felt would be want to be involved and would provide great feedback. </li>
                            <li>• The last was including a button directly in the app to allow users to sign up to beta testing.</li>
                        </ul>
                        <p>Using the group of customers willing to test, I was able to gather feedback to see if we were heading in the right direction and where we needed to improve.</p>
                        <div className={styles.uxResearch}>
                            <img src={uxfxtradecolortest} alt="" />
                            <img src={uxfxtradeproducttest} alt="" />
                        </div>

                        <h3>5. Development</h3>
                        <p>I like to be very involved in the development of any product myself or my team has designed. It's always something I encouraged my team to do because I find it helps build a better relationship between design and development, and a better understanding of how things work. The team provides everything to development for every detail including padding, sizes, colors, user flow charts, etc.</p>
                        <p>As a design team, we built strong relationships with developers by: </p>
                        <ul>
                            <li>• Involving them in each step of the design process</li>
                            <li>• Completing sprints and reaching goals together</li>
                            <li>• Pair design / developer programming</li>
                            <li>• Running 1 week fast design sprints with developers</li>
                        </ul>
                        <p>It's a continuous cycle with a back and forth collaboration between design and development. </p>

                        <img src={designprocess} className={styles.uxDesignProcess} alt="Design Process" />
                        <h3>6. Release</h3>
                    </div>
                </div>
                <h3>OANDA FxTrade Mobile Application</h3>
                <div className={styles.portfolioGallery}>
                    <img src={fxtradechart2} className={styles.fxTradePhone} alt="fxTrade Charts" />
                    <img src={fxtradeaddremove} className={styles.fxTradePhone} alt="fxTrade Rate Customization" />
                    <img src={fxtradecalendar} className={styles.fxTradePhone} alt="fxTrade Economic Calendar" />
                </div>
                <h3>OANDA FxTrade Tablet Application</h3>
                <div className={styles.portfolioGallery}>
                    <img src={fxtradeipad} className={styles.fxTradeTablet} alt="fxTrade Rates Page" />
                </div>
                <h3>OANDA FxTrade Desktop Web Application</h3>
                <img src={fxtradeweb} className={styles.fxTradeDesktop} alt="fxTrade Rates Page" />
            </section>
        </div>
    );
}

export default Fxtrade;
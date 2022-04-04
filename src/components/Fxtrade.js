import styles from "../styles/Fxtrade.module.css";
import fxtrademain from "../assets/fxtrade_main.gif";
import fxtradechart from "../assets/fxtrade_chart.gif";
import uxfxtradewires from "../assets/uxfxtradewires.png";
import uxfxtradenotes from "../assets/uxfxtradenotes.png";
import uxfxtradecolortest from "../assets/uxfxtradecolortest.png";
import uxfxtradeproducttest from "../assets/uxfxtradeproducttest.png";
import fxtradechart2 from "../assets/fxtrade_chart2.gif";
import fxtradecalendar from "../assets/fxtrade_calendar.gif";
import fxtradeaddremove from "../assets/fxtrade_addremove.gif";
import fxtradeipad from "../assets/fxtrade_ipad_rates.gif";
import fxtradeweb from "../assets/fxtrade_web.gif";

function Fxtrade() {
    return (
        <div className={styles.fxtrade}>
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
                    <p>At OANDA, I also had the opportunity of building a design team from the ground up. I hired, managed and mentored designers and it was a pleasure seeing them grow as individuals who were strong leaders in the design field.</p>
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
                    <p>Trading on mobile, tablet and web was relatively new at the time of design and development. Speaking to customers, and working closely with the engineering, trading and product teams, we were able to design a world class, fast and easy to use trading application on all platforms.</p>
                </div>
                <div className={styles.uxResearch}>
                    <img src={uxfxtradecolortest} alt="" />
                    <img src={uxfxtradeproducttest} alt="" />
                </div>
            </section>
            <section className={styles.portfolioColumn}>
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
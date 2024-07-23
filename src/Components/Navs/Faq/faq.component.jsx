
import { useState } from 'react';
import '../Faq/faq.component.css';



export function Faq() {
    const [activeTab, setActiveTab] = useState('v-pills-home');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (



        <div className='faq-gap'>
            <div className='faq-text'>FAQs</div>
            <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className={`nav-link btn-orange ${activeTab === 'v-pills-home' ? 'active' : ''}`} onClick={() => handleTabClick('v-pills-home')} type="button" role="tab" aria-controls="v-pills-home" aria-selected={activeTab === 'v-pills-home'}>  SHIPPING</button>
                    <button className={`nav-link btn-orange ${activeTab === 'v-pills-profile' ? 'active' : ''}`} onClick={() => handleTabClick('v-pills-profile')} type="button" role="tab" aria-controls="v-pills-profile" aria-selected={activeTab === 'v-pills-profile'}>PAYMENT</button>
                    <button className={`nav-link btn-orange ${activeTab === 'v-pills-messages' ? 'active' : ''}`} onClick={() => handleTabClick('v-pills-messages')} type="button" role="tab" aria-controls="v-pills-messages" aria-selected={activeTab === 'v-pills-messages'}>ORDER & RETURNS</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className={`tab-pane fade ${activeTab === 'v-pills-home' ? 'show active' : ''}`} id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div className='faq-Txt'>What Shipping Methods Are Available?</div>
                                    <div className='faq-txt'>
                                      Ex Portland Pitchfork irure mustache. Eutra fap before they sold out literally. Aliquip ugh bicycle rights actually mlkshk, seitan squid craft beer tempor.</div>
                                      <br></br>
                                <hr></hr>
                                      <div className='faq-Txt'>Do You Ship Internationally?</div>
                                    <div className='faq-txt'>
                                    Hoodie tote bag mixtape tofu. Typewriter jean shorts wolf quinoa, messenger bag organic freegan cray.</div>
                                </div>
                               
                                <div class="col">
                                <div className='faq-Txt'>How Long Will It Take To Get My Package?</div>
                                    <div className='faq-txt'>
                                    Swag slow-carb quinoa VHS typewriter pork belly brunch, paleo single-origin coffee Wes Anderson. Flexitarian Pitchfork forage, literally paleo fap pour-over. Wes Anderson Pinterest YOLO fanny pack meggings, deep v XOXO chambray sustainable slow-carb raw denim church-key fap chillwave Etsy. +1 typewriter kitsch, American Apparel tofu Banksy Vice.
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className={`tab-pane fade ${activeTab === 'v-pills-profile' ? 'show active' : ''}`} id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                    <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div className='faq-Txt'>What Payment Methods Are Accepted?</div>
                                    <div className='faq-txt'>
                                    Fashion axe DIY jean shorts, swag kale chips meh polaroid kogi butcher Wes Anderson chambray next level semiotics gentrify yr. Voluptate photo booth fugiat Vice. Austin sed Williamsburg, ea labore raw denim voluptate cred proident mixtape excepteur mustache. Twee chia photo booth readymade food truck, hoodie roof party swag keytar PBR DIY.</div>
                                      <br></br>
                                <hr></hr>
                                      <div className='faq-Txt'>Is Buying On-Line Safe?</div>
                                    <div className='faq-txt'>
                                    Art party authentic freegan semiotics jean shorts chia cred. Neutra Austin roof party Brooklyn, synth Thundercats swag 8-bit photo booth. Plaid letterpress leggings craft beer meh ethical Pinterest.
                                    </div>
                                </div>
                               
                                <div class="col">
                              
                                </div>
                            </div>
                        </div>




                    </div>
                    <div className={`tab-pane fade ${activeTab === 'v-pills-messages' ? 'show active' : ''}`} id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div className='faq-Txt'>How do I place an Order?</div>
                                    <div className='faq-txt'>
                                    Keytar cray slow-carb, Godard banh mi salvia pour-over. Slow-carb Odd Future seitan normcore. Master cleanse American Apparel gentrify flexitarian beard slow-carb next level. Raw denim polaroid paleo farm-to-table, put a bird on it lo-fi tattooed Wes Anderson Pinterest letterpress. Fingerstache McSweeney’s pour-over, letterpress Schlitz photo booth master cleanse bespoke hashtag chillwave gentrify.
                                    </div>
                                      <br></br>
                                <hr></hr>
                                      <div className='faq-Txt'>How Can I Cancel Or Change My Order?</div>
                                    <div className='faq-txt'>
                                    Plaid letterpress leggings craft beer meh ethical Pinterest. Art party authentic freegan semiotics jean shorts chia cred. Neutra Austin roof party Brooklyn, synth Thundercats swag 8-bit photo booth.
                                    </div>
                                    <br></br>
                                    <div className='faq-Txt'>How Can I Return a Product?</div>
                                    <div className='faq-txt'>
                                    Kale chips Truffaut Williamsburg, hashtag fixie Pinterest raw denim c hambray drinking vinegar Carles street art Bushwick gastropub. Wolf Tumblr paleo church-key. Plaid food truck Echo Park YOLO bitters hella, direct trade Thundercats leggings quinoa before they sold out. You probably haven’t heard of them wayfarers authentic umami drinking vinegar Pinterest Cosby sweater, fingerstache fap High Life.
                                    </div>
                                </div>
                               
                                <div class="col">
                                <div className='faq-Txt'>Do I need an account to place an order?</div>
                                    <div className='faq-txt'>
                                    Thundercats swag 8-bit photo booth. Plaid letterpress leggings craft beer meh ethical Pinterest. Twee chia photo booth readymade food truck, hoodie roof party swag keytar PBR DIY. Cray ugh 3 wolf moon fap, fashion axe irony butcher cornhole typewriter chambray VHS banjo street art.
                                    </div>
                                    <hr></hr>
                                    <br></br>
                                    <div className='faq-Txt'>How Do I Track My Order??</div>
                                    <div className='faq-txt'>
                                    Keytar cray slow-carb, Godard banh mi salvia pour-over. Slow-carb @Odd Future seitan normcore. Master cleanse American Apparel gentrify flexitarian beard slow-carb next level.
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}
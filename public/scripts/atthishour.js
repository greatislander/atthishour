/* global plyr, malarkey */

plyr.setup();

const dispatch = document.querySelector("footer p");
const commentary = document.querySelector("aside p");
const headlines = [
  "British forces take control of Jerusalem. UK PM David Lloyd George calls it  “a Christmas present for the British people”. Allenby calls for reinforcements of 16–18 divisions with plans to reach Damascus, Homs and Aleppo by autumn 1918.",
  "13 black soldiers were hung for their participation in The Houston Riot on August 24th. The riot, a result of a clash between Houston police officers and black soldiers from the 24th United States Infantry Regiment, left 20 dead (5 police officers, 9 civilians, and 4 soldiers).",
  "Russia leaves the war. The Russian Soviet Federative Socialist Republic signs an armistice with Central Powers. The armistice is good until end of December.",
  "The 18th Amendment, authorizing prohibition of alcohol, is approved by the US congress and sent to the states for ratification. ",
  "The first games of The National Hockey League are played in Montreal and Ottawa. ",
  "Robert Borden’s new wartime elections act disenfranchises conscientious objectors.",
  "Roberts Borden’s new wartime elections act disenfranchises immigrants from enemy nations who arrived in Canada from 1902 onward; unless the immigrant has a brother, son or grandson in active service.",
  "Roberts Borden’s new wartime elections act enfranchises women who are serving in the medical corps and the mothers, spouses and sisters of men serving overseas.",
  "Roberts Borden’s new wartime elections act allows soldiers to choose the riding in which their vote is counted.  ",
  "Halifax and the Yukon do not vote on election day. Voting postponed until January 28.",
  "Half-a-million women vote for the first time in Canada’s federal election.",
  "Halifax born Prime Minister Sir Robert Borden’s pro-conscription Unionist party defeats Sir Wilfrid Laurier’s anti-conscription Liberal party.",
  "Samuel Jacobs of Montréal is the First Jewish Canadian elected to the House of Commons.",
  "Income tax comes to Canada. Returns for the new temporary “Income War Tax Act” must be made by all persons liable to be taxed on or before February 28th in each year, beginning in 1918.",
  "The Crimean People’s Republic becomes the world’s first secular Muslim state to declare sovereignty.",
  "Cecil B. Demille’s The Devil-Stone is the sixth top-grossing film of the year.",
  "Elizabeth Garrett Anderson - the first woman in Great Britain to qualify as a physician and a surgeon, be elected to a school board and to hold the title of mayor - dies.",
  "Despite 65 miners killed in New Waterford in July, four new collieries are slated to open in northern Nova Scotia in 1918.",
  "Most of the large-scale, export-oriented apple farmers in the Annapolis Valley used pesticides for their 1917 crop.",
  "Representatives of the YMBA (Young Men’s Buddhist Association), a Burmese Nationalist movement, visit the secretary of state for British India to express their opinion that Burma should be separated from India.",
  "The Hindu-German Conspiracy Trial is underway in San Francisco. Indian Nationalists are accused of violating the United States neutrality laws by conspiring, on American soil, with Germany to overthrow the British Raj.",
  "Many English Canadians convinced that most French Canadians are not doing their fair share to win the war.",
];
const tweets = [
  "@Grand_Chief_John_Denny - The explosion happened in Kepe’kek of Kjipuktuk #ChebuctoExplosion",
  "@Halifax_Herald - SOMEONE BLUNDERED - WHO? COURT MAY DECIDE. #blame",
  "@Francis_Mackey - There wasn’t a pound of coal in Halifax because they were snowed up, all the mines, the province and all. #BlameWinter",
  "@Inquiry_&_Intrigue - X.O. Freeman had no prerogative to treat the arrival of Mont Blanc as other than routine #BlameNavy",
  "@Aftershock - That devil’s brew had been placed there on orders from the British Admiralty and by no fault of Mackey’s. Nor was he to blame for issues with the control of the harbour traffic. #BlameAdmiralty",
  "@Ottawa_Evening_Journal - Has everything been done that expert organizers can devise to prevent a recurrence of the December 6th horror?  #BlameGovernment",
  "@Senator_Dennis - It would be an appropriate question to ask Pilot Mackey why HE did not see that the explosives flag, the red, was kept flying at the masthead. #HeraldEditorial #BlameMackey",
  "@Aftershock - Senator Dennis apparently does not know the wartime rules: the red-flag signal was used only when offloading munitions and was otherwise not displayed, so as not to provide useful information to the enemy. #BlameAdmiratly",
  "@Saturday_Night_Magazine - It is certainly not the intention of English Canada to stand idly by and see itself bled white of men in order that the Québec shirker may sidestep his responsibilities",
  "@henri_bourassa - The enemies of of French civilization in Canada are not the Germans but the English-Canadian anglicizers.",
  "@Official_Historian - Under the wreckage of Richmond that morning there were hundreds of human beings injured, but in some cases unhurt, who were to die by fire. The pity of it...to see your own perish in torment before your eyes and being impotent to help. #HalifaxReliefCommission ",
  "@Moring_Chronicle - A catastrophe which in its burden of tragedy and sorrow has probably never been paralleled in history. #12/06/17",
  "@CanadianPMO - It is my duty to maintain the Canadian army in the field as one of the finest fighting units of the Empire. #conscription #BlameGermany #GodSaveTheKing",
  "@returnedsoldier - Halifax catastrophe more devastating than the battlefields. ",
  "@Senator_Dennis - When Pilot Mackey saw the ship to be on fire, or immediately after the collision, why did he not head her up toward the bedford basin? #HeradlEditorial #BlameMackey",
  "@political_junkie - Laurier lost 1911 election because of his pro-free trade platform. Will Borden lose 1917 because of pro-conscription? #reciprocity #khakielection",
  "@Official_Historian - Children with their faces streaming with blood from wounds dealt by flying glass, faces chalk-white with terror and streaked with red, faces black with the “black rain” and smeared with blood. #HalifaxReliefCommission ",
  "@Morning_Chronicle - Witnesses say Mont Blanc was going faster than the steamer IMO #BlameMontBlanc",
  "@Senator_Dennis - He could have stuck on the ship ‘til he got her well up into the basin. There was time enough; and then he could have escaped himself. That would have been an act of heroism and would have made Pilot Mackey glorious. #HeraldEditorial #BlameMackey",
  "@Morning_Chronicle - They appeared to be very nervous on the Mont Blanc #BlameMontBlanc",
  "@the_Real_Woodrow_Wilson - The question upon which the whole future peace and policy of the world depends is this: Is the present war a struggle for a just and secure peace, or only for a new balance of power? #POTUS #BlameWar",
  "@CanadianPMO - I have been somewhat in the midst of things at the front, I bring back to the people of Canada from these men a message that they need our help. I have promised, in so far as I am concerned, that this help shall be given. #conscription #BlameGermany",
  "@political_junkie - Borden won’t share our goods with our neighbours but he’ll share our lives with our masters. #pro-FreeTrade #anti-conscription #anti-empire",
  "@manitoba_free_press - There is no longer any reason why the whole truth should not be spoken about Quebec. The people of that Province have been ranked quitters throughout the whole war. #FrechFail",
  "@Morning_Chronicle - Steering orders given in english to members of a french crew, the pilot’s french. #BlameMontBlanc",
  "@New_York_Times_1917 - THE BOLSHEVIKI AND THE HUN SIGN ARMISTICE. The Bolsheviks are our malignant and unscrupulous enemies. #BlameLenin",
  "@Morning_Chronicle - Burchell asked witness how he would say “half speed” in french. There was laughter in the court when Mackey replied “demi tasse”. Burchell asked a signalman what he would do if “demi tasse” were spoken to him as an order, he replied he would go below and procure a cup of coffee. #BlameMackey",
  "@Official_Historian - One plausible theory is that the pilot’s order at the critical moment was misunderstood, owing to the difference between the french and english words of command. #BlameMontBlanc",
  "@Halifax_Herald - Mont Blanc was exceeding the speed limit.  The IMO when first sighted, was carrying white foam at her bow and exceeding the speed limit set by the Admiralty. #BlameMontIMO?",
  "@the_Real_Woodrow_Wilson - Who will guarantee, who can guarantee, the stable equilibrium of the new arrangement? Only a tranquil Europe can be a stable Europe. There must be, not a balance of power, but a community of power; not organized rivalries, but an organized common peace. #POTUS #BlameWar",
  "@Halifax_Herald - Burchell accuses pilot of failing to warn others; was Pilot Mackey justified in starboarding the Mont Blanc’s helm? Pilot Mackey admits in gruelling cross examination that he knew the nature of Mont Blanc’s cargo. #BlameMontBlanc",
  "@CanadianPMO - Is there not a call to us from those who have fallen in France and in Belgium, from those who have died so that Canada may live - is there not a call to us that their sacrifice shall not be in vain? #conscription #BlameGermany",
  "@Halifax_Herald - Did another hand than pilot’s direct IMO’s course? #BlameGermany",
  "@Aftershock - Charles Burchell’s fury was likely intensified due to his having just spent several days assisting the desperate rescue efforts in the ruins of RIchmond. #WitchHunt",
  "@New_York_Times_1917 - It is not alone the rescue of Russia that is involved, it is the safety of civilization. #BlameLenin",
  "@Aftershock - Judge Drysdale did nothing to stop the bullying, since he had already made up his mind that Mackey was guilty. #WitchHunt",
  "@Halifax_Herald - Further agonizing revelations of naval harbour and pilot mismanagement. Inefficiency, bungling and pigheadedness. Pilots cooly ignore the orders of the naval authority. #BlamePilots",
  "@The_Real_Woodrow_Wilson - Friendship is the only cement that will ever hold the world together. #POTUS #BlameWar",
  "@Halifax_Herald - The evidence showed the blame to be distributed between the pilots and the naval authorities in this port. #BlameBoth",
  "@Michael_Bliss - The most bitter election in canadian history #KhakiElection",
  "@Halifax_Herald - The supreme authority, resting as it did, and does, in the hands of the naval authorities, does NOT relieve the pilots from responsibilities, but if the supreme authority is not capable of control ITS culpability is the greater. #BlameNavyMore",
  "@Charles_Burchell - I say Pilot Mackey, all through the case, has been that kind of witness. He would say for a minute anything he could see that would help him immediately, acquiesce in any suggestions. #BlameMackey",
  "@Humphrey_Mellish - From the outset, this pilot has been assailed by counsel for the IMO. He has openly and with dramatic intensity, and premeditated insult, been accused of perjury. #WitchHunt",
  "@Halifax_Herald - Was an over patriotic german at the steamer IMO’s helm at the bottom of the great catastrophe of December 6th? #BlameGermany",
  "@Quebec_Telegraph - It is upon the authorities that the ultimate onus rests. The Captain and pilot were simply instruments of an inexcusably weak and pernicious system…#BlameGovernment",
  "@the_real_woodrow_wilson - While exercising the great powers of the office I hold I would regret, in a crisis like the one through which we are now passing, to lose the benefit of patriotic and intelligent criticism.  #POTUS #BlameGovernment",
  "@San_Francisco_Examiner - Hindu in plot is found insane. #MentalHealthIssue",
  "@Quebec_Telegraph - The Minister of Marine is responsible for the negligence of his agents in this matter, and through him the whole Borden government must share culpability. #Blame Government #AntiConscription #ProLaurier",
  "@Ottawa_Eveing_Journal - The punishment, the preventative measures for the future must not stop with the prosecution of a pilot, a ship master, and a subordinate examining officer. The horror is too appalling, the measure of official neglect too ghastly. #BlameGoverment",
  "@The_Real_Woodrow_Wilson - Why, my fellow citizens, is there any man here or any woman, let me say is there any child here, who does not know that the seed of war in the modern world is industrial and commercial rivalry? #POTUS #BlameCommerce",
  "@Sarah Mackey - There should be no more wars or war accidents so long as this old world lasts #Francis’Mom #BlameWar",
  "@Francis_Mackey - Now there’s no point putting a lot of this or that in print. It was a war, and there’s a lot of people dead. #NoAutobiography #NoMemoir #BlameWar",
  "@Ottawa_Evening_Journal - What were the heads of Naval Service in Ottawa doing? Fine fellows, doubtless, but asleep. What they required was some superior from Ottawa or elsewhere to blow in once in awhile and with lurid shiver-me-timbers language metaphorically knock their heads together. #BlameNavy",
  "@Acadian_Recorder - Reform the inertia-producing “sleeping death” bureaucratic system which prevails at Ottawa. #BlameGovernment",
  "@Acadian_Recorder - The government which permitted ammunition ships to come to this port is responsible for any of the awful possibilities which might follow. There must be total prohibition of all ammunition ships entering the harbour. Nothing short of this is a guarantee of safety. #BlameGovernment",
  "@Minister_Marine_Ballantyne - The view that no munitions should be laden or unladen at any pier in the port would undoubtedly retard very seriously the prosecution of the war. #BlameWar #BlameGermany",
  "@the_real_Woodrow_Wilson - Peace without victory. Victory would mean peace forced upon the loser. It would be accepted in humiliation and would leave a bitter memory upon which terms of peace would rest, not permanently, but only as upon quicksand. Only a peace between equals can last. #POTUS #BlameWar",
  "@British_Sailor - I’ve been shipmates with explosives to a lot of ports, this is the only one where I saw cargoes like this brought into the heart of a city. Why is it different for Halifax? That’s what I’d like to know and so would all of my shipmates who are left alive. #BlameHalifax",
  "@Morning_Chronicle - The overwhelming loss which Halifax has sustained is a national loss, for which the government of Canada, by reason of its exclusive control over navigation in the harbour of Halifax, is liable. #BlameGovernment",
  "@the_real_woodrow_wilson - I can imagine no greater disservice to the country than to establish a system of censorship that would deny to the people of a free republic like our own their indisputable right to criticise their own public officials. #POTUS #BlameGovernment",
  "@Dominion_Archivist_NS - The nervous tension here produced by the explosion has hardly yet subsided. People are discussing who has charge of the harbour. They have no confidence that another disaster will not occur. #BlameGovernment",
  "@CAPT_Demers - The pilot and the captain on board IMO lost their lives and therefore cannot defend themselves. British fair play is a principle which, for me, is sacred. #blameless #WreckCommissioner",
  "@The_Real_Woodrow_Wilson-  If they should still continue to be obliged to live under ambitious and intriguing masters interested to disturb the peace of the world, it might be impossible to admit them to the partnership of nations which must henceforth guarantee the world’s peace. #POTUS #BlameAmbition",
  "@CanadianPMO - With a deep realization of the sacrifice that we have already made we will do our duty, whatever it may be, to the very end. #conscription #BlameGermany",
  "@Aftershock - If it had not been for a totally unnecessary war, neither IMO nor Mont Blanc would have been anywhere near Halifax. Best we can do to prevent another catastrophe is to work for peace. #BlameWar",
];
const opts = {
  typeSpeed: 0,
  pauseDelay: 120000,
};
const dispatcher = malarkey(dispatch, opts);
const commenter = malarkey(commentary, opts);

loopDispatch(headlines, dispatcher);
loopDispatch(tweets, commenter);

function loopDispatch(messages, medium) {
  let index = -1;
  window.setInterval(function() {
    index = (index + 1) % messages.length;
    medium
      .type(messages[index])
      .pause()
      .clear();
  }, 0);
}

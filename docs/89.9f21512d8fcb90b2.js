"use strict";(self.webpackChunkindex=self.webpackChunkindex||[]).push([[89],{89:(k,g,r)=>{r.r(g),r.d(g,{FAQModule:()=>M});var c=r(6895),d=r(834),t=r(8274),u=r(7579),x=r(7146),_=r(8419),s=r(7340),p=r(9066);const f=function(n){return{"bg-[#1A1A1A] rounded-[100px] text-white":n}};function h(n,o){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",9),t.NdJ("click",function(){const l=t.CHM(e).index,m=t.oxw(2);return t.KtG(m.selectTab(l))}),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.BQk()}if(2&n){const e=o.$implicit,i=o.index,a=t.oxw(2);t.xp6(1),t.Q6J("ngClass",t.VKq(4,f,a.activeIndex==i)),t.xp6(1),t.hij(" ",t.lcZ(3,2,e.label)," ")}}function b(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t.YNc(2,h,4,6,"ng-container",7),t.qZA(),t.TgZ(3,"button",8),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.toggleSelect())}),t._UZ(4,"img",3),t.qZA()()}if(2&n){const e=t.oxw();t.Q6J("@dropdownAnimation",e.showOptions?"open":"closed"),t.xp6(2),t.Q6J("ngForOf",e.tabs)}}let A=(()=>{class n{constructor(){this.buttonClicked=new t.vpe,this.showOptions=!1}toggleSelect(){this.showOptions=!this.showOptions}selectTab(e){this.buttonClicked.emit(e),this.toggleSelect()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-menu-accordion"]],inputs:{tabs:"tabs",activeIndex:"activeIndex"},outputs:{buttonClicked:"buttonClicked"},decls:8,vars:4,consts:[[1,"w-full","relative"],[1,"relative","flex","items-center","cursor-pointer","px-[26px]","py-[22px]","bg-white","w-full","justify-between","rounded-[30px]",3,"click"],["type","button","id","menu-button","aria-expanded","true","aria-haspopup","true"],["src","assets/image/icon/menu.svg","alt","menu"],["style","box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08)","class","absolute flex px-[26px] justify-between z-10 top-0 left-0 right-0 w-full bg-white rounded-[30px] bg-transparent py-1",4,"ngIf"],[1,"absolute","flex","px-[26px]","justify-between","z-10","top-0","left-0","right-0","w-full","bg-white","rounded-[30px]","bg-transparent","py-1",2,"box-shadow","0px 4px 25px 0px rgba(0, 0, 0, 0.08)"],[1,"flex","flex-col","items-baseline","py-2"],[4,"ngFor","ngForOf"],["type","button","id","menu-button","aria-expanded","true","aria-haspopup","true",1,"self-start","pt-[18px]",3,"click"],[1,"py-[14px]","text-left","px-[18px]",3,"ngClass","click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return i.toggleSelect()}),t.TgZ(2,"p"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"button",2),t._UZ(6,"img",3),t.qZA()(),t.YNc(7,b,5,2,"div",4),t.qZA()),2&e&&(t.xp6(3),t.Oqu(t.lcZ(4,2,i.tabs[i.activeIndex].label)),t.xp6(4),t.Q6J("ngIf",i.showOptions))},dependencies:[c.mk,c.sg,c.O5,p.X$],data:{animation:[(0,s.X$)("dropdownAnimation",[(0,s.SB)("closed",(0,s.oB)({opacity:0,transform:"scaleY(0)",height:"0px",overflow:"hidden"})),(0,s.SB)("open",(0,s.oB)({opacity:1,transform:"scaleY(1)",height:"*"})),(0,s.eR)("closed <=> open",(0,s.jt)("300ms ease-in-out")),(0,s.eR)(":enter",[(0,s.oB)({opacity:0,transform:"scaleY(0)",height:"0px"}),(0,s.jt)("300ms ease-out",(0,s.oB)({opacity:1,transform:"scaleY(1)",height:"*"}))]),(0,s.eR)(":leave",[(0,s.jt)("200ms ease-in",(0,s.oB)({opacity:0,transform:"scaleY(0)",height:"0px"}))])])]}}),n})();const w=function(n,o){return{"bg-black text-white shadow-lg":n,"bg-white text-gray-600 hover:bg-gray-200":o}};function v(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){const l=t.CHM(e).index,m=t.oxw();return t.KtG(m.selectTab(l))}),t._uU(1),t.ALo(2,"translate"),t.qZA()}if(2&n){const e=o.$implicit,i=o.index,a=t.oxw();t.Q6J("ngClass",t.WLB(4,w,a.activeIndex===i,a.activeIndex!==i)),t.xp6(1),t.hij(" ",t.lcZ(2,2,e.label)," ")}}function y(n,o){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"app-menu-accordion",6),t.NdJ("buttonClicked",function(a){t.CHM(e);const l=t.oxw();return t.KtG(l.selectTab(a))}),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("tabs",e.tabs)("activeIndex",e.activeIndex)}}function Q(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",12)(1,"button",13),t.NdJ("click",function(){const l=t.CHM(e).$implicit,m=t.oxw(2);return t.KtG(m.toggleAccordion(l.id))}),t.TgZ(2,"div",14),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.O4$(),t.TgZ(5,"svg",15),t._UZ(6,"path",16),t.qZA()(),t.kcU(),t.TgZ(7,"div",17),t._UZ(8,"div",18),t.ALo(9,"translate"),t.qZA(),t._UZ(10,"div",19),t.qZA()}if(2&n){const e=o.$implicit,i=t.oxw(2);t.xp6(3),t.hij(" ",t.lcZ(4,5,e.question)," "),t.xp6(2),t.Q6J("ngClass",i.isPanelOpen[e.id]?"":"rotate-180"),t.xp6(2),t.Udp("max-height",i.isPanelOpen[e.id]?i.panelMaxHeight:0,"px"),t.xp6(1),t.Q6J("innerHTML",t.lcZ(9,7,e.answer),t.oJD)}}function F(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",7)(2,"div",8),t._UZ(3,"img",9),t.qZA(),t.TgZ(4,"div",10),t.YNc(5,Q,11,9,"div",11),t.qZA()(),t.BQk()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("src",e.handleImage(e.tabs[e.activeIndex]),t.LSH),t.xp6(2),t.Q6J("ngForOf",e.tabs[e.activeIndex].content)}}let C=(()=>{class n{constructor(e,i){this.cdr=e,this._lang=i,this.panelMaxHeight=272,this.isPanelOpen={},this.questions=[],this.tab1=[],this.tab2=[],this.tab3=[],this.tab4=[],this.tabs=[],this.activeIndex=0,this.windowResize$=new u.x}onResize(e){var i;this.windowResize$.next(null===(i=e.target)||void 0===i?void 0:i.innerWidth)}selectTab(e){this.activeIndex=e,this.isPanelOpen={}}ngOnInit(){this.windowResize$.pipe((0,x.b)(100)).subscribe(e=>{this.innerWidth=e})}ngAfterViewInit(){this.tab1=[{id:0,question:"FAQ.Question.UserGuide",answer:"FAQ.Answer.UserGuide"},{id:1,question:"FAQ.Question.Activated",answer:"FAQ.Answer.Activated"},{id:2,question:"FAQ.Question.HowToUse",answer:"FAQ.Answer.HowToUse"},{id:3,question:"FAQ.Question.Amount",answer:"FAQ.Answer.Amount"},{id:4,question:"FAQ.Question.UsingTime",answer:"FAQ.Answer.UsingTime"}],this.tab2=[{id:5,question:"FAQ.Question.EMICalculationFormula",answer:"FAQ.Answer.EMICalculationFormula"},{id:6,question:"FAQ.Question.InterestCalculationFormula",answer:"FAQ.Answer.InterestCalculationFormula"},{id:7,question:"FAQ.Question.RepaymentDueDateAmount",answer:"FAQ.Answer.RepaymentDueDateAmount"},{id:8,question:"FAQ.Question.RepaymentChannels",answer:"FAQ.Answer.RepaymentChannels"},{id:9,question:"FAQ.Question.EarlyTerminationTerm",answer:"FAQ.Answer.EarlyTerminationTerm"}],this.tab3=[{id:10,question:"FAQ.Question.LatePayment",answer:"FAQ.Answer.LatePayment"},{id:11,question:"FAQ.Question.ShortPayment",answer:"FAQ.Answer.ShortPayment"},{id:12,question:"FAQ.Question.OverPayment",answer:"FAQ.Answer.OverPayment"},{id:13,question:"FAQ.Question.EarlyPayment",answer:"FAQ.Answer.EarlyPayment"}],this.tab4=[{id:14,question:"FAQ.Question.CustomerInquiriesHandlingPrinciples",answer:"FAQ.Answer.CustomerInquiriesHandlingPrinciples"}],this.tabs=[{label:"FAQ.RegisterAndUseCreditLimit",content:this.tab1,image_en:{img_pc:"assets/image/faq/pc/register_en.png",img_tablet:"assets/image/faq/tablet/register_en.png",img_mobile:"assets/image/faq/mobile/register_en.png"},image_vi:{img_pc:"assets/image/faq/pc/register_vi.png",img_tablet:"assets/image/faq/tablet/register_vi.png",img_mobile:"assets/image/faq/mobile/register_vi.png"}},{label:"FAQ.MonthlyPayment",content:this.tab2,image_en:{img_pc:"assets/image/faq/pc/monthly_payment_en.png",img_tablet:"assets/image/faq/tablet/monthly_payment_en.png",img_mobile:"assets/image/faq/mobile/monthly_payment_en.png"},image_vi:{img_pc:"assets/image/faq/pc/monthly_payment_vi.png",img_tablet:"assets/image/faq/tablet/monthly_payment_vi.png",img_mobile:"assets/image/faq/mobile/monthly_payment_vi.png"}},{label:"FAQ.PaymentNotice",content:this.tab3,image_en:{img_pc:"assets/image/faq/pc/payment_notice_en.png",img_tablet:"assets/image/faq/tablet/payment_notice_en.png",img_mobile:"assets/image/faq/mobile/payment_notice_en.png"},image_vi:{img_pc:"assets/image/faq/pc/payment_notice_vi.png",img_tablet:"assets/image/faq/tablet/payment_notice_vi.png",img_mobile:"assets/image/faq/mobile/payment_notice_vi.png"}},{label:"FAQ.Others",content:this.tab4,image_en:{img_pc:"assets/image/faq/pc/others_en.png",img_tablet:"assets/image/faq/tablet/others_en.png",img_mobile:"assets/image/faq/mobile/others_en.png"},image_vi:{img_pc:"assets/image/faq/pc/others_vi.png",img_tablet:"assets/image/faq/tablet/others_vi.png",img_mobile:"assets/image/faq/mobile/others_vi.png"}}],this.cdr.detectChanges()}toggleAccordion(e){this.isPanelOpen[Number(e)]=!this.isPanelOpen[Number(e)]}handleImage(e){var i;const a=null!==(i=this.innerWidth)&&void 0!==i?i:window.innerWidth;let l="";return l=a>=1024?"en"==this._lang.getLang()?e.image_en.img_pc:e.image_vi.img_pc:a>=640?"en"==this._lang.getLang()?e.image_en.img_tablet:e.image_vi.img_tablet:"en"==this._lang.getLang()?e.image_en.img_mobile:e.image_vi.img_mobile,l}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(_.T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-accordion"]],hostBindings:function(e,i){1&e&&t.NdJ("resize",function(l){return i.onResize(l)},!1,t.Jf7)},decls:6,vars:3,consts:[[1,"w-full","inline-flex","justify-center"],[1,"min-[1024px]:flex","hidden","justify-center","bg-white","w-fit","p-2","rounded-full"],["class","px-4 py-2 rounded-full transition-all duration-300",3,"ngClass","click",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"px-4","xl:px-5","max-w-full","m","mx-auto","mt-8","mb-[100px]"],[1,"px-4","py-2","rounded-full","transition-all","duration-300",3,"ngClass","click"],[1,"min-[1024px]:hidden","mx-4","block","w-full",3,"tabs","activeIndex","buttonClicked"],[1,"w-full","min-[1024px]:!px-14","py-10","grid","grid-cols-1","bg-white","rounded-3xl","md:grid-cols-4","xl:max-w-[1400px]","mx-auto","font-medium","font-roboto","mb-14","md:px-[20px]","xl:px-0","xl:mb-24"],[1,"col-span-5","min-[1024px]:col-span-1"],["alt","img",1,"w-full",3,"src"],[1,"col-span-5","min-[1024px]:col-span-3","p-4","min-[1024px]:pl-[80px]"],["class","bg-white rounded-2xl",4,"ngFor","ngForOf"],[1,"bg-white","rounded-2xl"],[1,"w-full","flex","justify-between","items-center","text-left","md:text-2xl","px-2","md:px-6","min-[1024px]:px-12","py-[24px]","focus:outline-none",3,"click"],[1,"How-to-Get-start","py-2"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",1,"transition-transform","duration-500","ease-in-out","min-w-[24px]",3,"ngClass"],["d","M18.3601 13.366C18.7506 13.7566 18.7506 14.3897 18.3601 14.7802C17.9695 15.1708 17.3364 15.1708 16.9458 14.7802L11.9961 9.8305L7.04635 14.7802C6.65582 15.1708 6.02266 15.1708 5.63213 14.7802C5.24161 14.3897 5.24161 13.7566 5.63213 13.366L11.289 7.70918C11.6795 7.31866 12.3127 7.31866 12.7032 7.70918L18.3601 13.366Z","fill","#1A1A1A"],[1,"overflow-hidden","transition-max-height","duration-500","ease-in-out","overflow"],[1,"break-words","font-roboto","font-normal","leading-[22px]","my-translated-paragraph","py-4","md:pt-0","md:pb-[20px]","px-2","md:px-6","min-[1024px]:px-12",3,"innerHTML"],[1,"h-[1px]","bg-[#888C8F]","w-full"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,v,3,7,"button",2),t.qZA(),t.YNc(3,y,2,2,"ng-container",3),t.qZA(),t.TgZ(4,"div",4),t.YNc(5,F,6,2,"ng-container",3),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngForOf",i.tabs),t.xp6(1),t.Q6J("ngIf",i.tabs.length>0),t.xp6(2),t.Q6J("ngIf",i.tabs[i.activeIndex]))},dependencies:[c.mk,c.sg,c.O5,A,p.X$],styles:[".How-to-Get-start{min-height:19px;flex-grow:1;font-family:Roboto;font-size:16px;font-weight:500;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-align:left}.my-translated-paragraph{white-space:pre-wrap}@media (min-width: 768px){.How-to-Get-start{min-height:28px;font-size:18px}}.font-italic{font-style:italic}.linkText{--tw-text-opacity: 1;color:rgb(59 130 246/var(--tw-text-opacity))!important}.overflow{overflow:auto}\n"],encapsulation:2}),n})();const q=[{path:"",component:(()=>{class n{constructor(){this.numbers=Array.from({length:3},(e,i)=>i+1),this.disabled=!1}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:16,vars:12,consts:[[1,"h-full","bg-90%"],[1,"mx-4","md:ml-[50px]","md:mr-5","xl:ml-[10px]","mb-6","md:mb-[50px]"],[1,"Frequently-Asked-Questions","font-bold","mt-12","md:mt-14","xl:mt-[100px]","mb-3","text-3xl","md:text-7xl","xl:text-7xl"],[1,"text-center","text-sm"],[1,"font-bold"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",3),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"div",3)(9,"span"),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"span",4),t._uU(13),t.ALo(14,"translate"),t.qZA()()(),t._UZ(15,"app-accordion"),t.qZA()),2&e&&(t.xp6(3),t.hij(" ",t.lcZ(4,4,"FAQ.Title")," "),t.xp6(3),t.hij("",t.lcZ(7,6,"FAQ.TitleSub1")," "),t.xp6(4),t.Oqu(t.lcZ(11,8,"FAQ.TitleSub2")),t.xp6(3),t.hij(" ",t.lcZ(14,10,"FAQ.TitleSub3"),""))},dependencies:[C,p.X$],styles:["@media (min-width: 768px){.home-bg[_ngcontent-%COMP%]{background-image:url(bg_cub.abc0b2acbdc68fbc.svg)}}.Frequently-Asked-Questions[_ngcontent-%COMP%]{flex-grow:0;font-family:Montserrat;font-size:28px;font-weight:700;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;color:var(--gray-900)}@media (min-width: 768px){.Frequently-Asked-Questions[_ngcontent-%COMP%]{font-size:46px}}"]}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(q),d.Bz]}),n})();var T=r(8729);let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,Z,T.m]}),n})()}}]);
(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[4],{100:function(e,t,a){e.exports=a.p+"static/media/PreviewWorkinprogress.638402d7.webp"},101:function(e,t,a){e.exports=a.p+"static/media/Work-In-Progress.798cf04e.webp"},105:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),r=(a(105),a(15)),n=a(7),s=a(81);t.default=function(e){var t=e.match,a=s.a.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("article",{className:"production__article"},o.a.createElement("header",{className:"production__article__header"},o.a.createElement("div",{className:"production__article__header__overlay"},o.a.createElement(r.a.Link,{as:n.c,title:e.name,className:"productions__link",to:"".concat(t.url,"/").concat(e.id)},o.a.createElement("div",{className:"icon-link"},o.a.createElement("i",{className:"fa fa-link","aria-hidden":"true"})))),o.a.createElement("img",{src:e.img,alt:e.name,className:"production__article__header__cover"})),o.a.createElement("footer",{className:"production__article__footer"},o.a.createElement("h3",{className:"production__article__footer__title"},e.name),o.a.createElement("span",{className:"production__article__footersubtitle"},e.type))))}));return o.a.createElement("section",{id:"portfolio",className:"section productions__page"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"col-md-12 headline"},o.a.createElement("h2",null,"Portfolio"),o.a.createElement("p",null,"Quelques R\xe9alisations.")),o.a.createElement("ul",{className:"productions__list"},a)))}},81:function(e,t,a){"use strict";var i=[{id:0,name:"Convertisseur",img:a(82),imgSub:{photo:[a(83)],title:["Convertisseur"]},type:"Projet algoritmique",desc:"Le but \xe9tait de concevoir un convertisseur poss\xe9dant les m\xeames attributs que la calculatrice windows en mode d\xe9veloppeur. Il m'a donc fallu \xe9crire un programme qui va permettre la conversion les nombres binaires,d\xe9cimaux,octaux et hexad\xe9cimaux entre eux. La saisie utilisateur doit \xeatre possible en base 2,8,10,16 pour la convertir gr\xe2ce au programme",language:"C",client:"Callac Soft College",date:"Mai 2019",service:"Developpement"},{id:1,name:"Logiciel de suivi rh",img:a(84),imgSub:{photo:[a(85),a(86),a(87)],title:["Vue personnel","Maquette Absence","Maquette Paie"]},type:"FullStack",desc:"Projet demand\xe9 suite \xe0 l'apprentissage de java.Logiciel de gestion de personnel permettant de g\xe9rer la liste du personnel, les cong\xe9s , les absences , la paie. C\xf4t\xe9 backend les informations sont stock\xe9s sur une base SqlLa connection se fait par le biais du connecteur JDBC. C\xf4t\xe9 front j'ai utilis\xe9 javaFx. L'application est constitu\xe9 d'une fen\xeatre munie de plusieurs onglets pour naviguer dans chaque partie.Chaque partie est organis\xe9 sous la forme de formulaire de saisie , radio bouton , datepicker, dropdown.Un crud complet est possible concernant la fiche personnel.Les features non implant\xe9es \xe0 ce jour sont les cong\xe9s , la paie  et l'edition sous format exel ou pdf de la liste complete ou de n'importe quel select effectu\xe9 en base de donn\xe9e.",language:"Java / Javafx / mySql",client:"Callac Soft College",date:"Juillet 2019",service:"Developpement"},{id:2,name:"Diaporama",img:a(88),imgSub:{photo:[a(89)],title:["Diaporama"]},type:"FrontEnd",desc:"Exercice pour se familiariser avec le javascript en mettant en place les m\xe9caniques JS, par la manipulation du DOM. Les contr\xf4les suivant ont \xe9t\xe9 mis en place : Lire les unes apr\xe8s les autres les diff\xe9rentes images,d\u2019arr\xeater la lecture,passer \xe0 l\u2019image suivante, passer \xe0 l\u2019image pr\xe9c\xe9dente, visualiser la premi\xe8re image, visualiser la derni\xe8re image, lecture al\xe9atoire, la mise en place d'un bandeau de miniature pour rendre la navigation plus facile dans la collection d'image.",language:"HTML5 / CSS / javascript",client:"Callac Soft College",date:"Aout 2019",service:"Developpement"},{id:3,name:"Quizz",img:a(90),imgSub:{photo:[a(91)],title:["Quizz"]},type:"FrontEnd",desc:"Quizz r\xe9alis\xe9 pour s'initier \xe0 React et aux hooks.L'affichage comprend une barre li\xe9 \xe0 la progression de l'utilisateur.D'un timer fix\xe9 \xe0 40 secondes . Un questionnaire avec 20 questions sur le th\xe8me sql. La gestion des r\xe9ponse et du score doit se faire par un serveur non fait fait \xe0 ce jour.",language:"Reactjs",client:"Callac Soft College",date:"Aout 2019",service:"Developpement"},{id:4,name:"Dashboard ",img:a(92),imgSub:{photo:[a(93),a(94),a(95)],title:["Tableau de bord","Vue produit 1","Vue produit 2"]},type:"FullStack",desc:"Projet de fin d'apprentissage du web. Le projet utilise le framework Laravel c\xf4t\xe9 backend et Reactjs c\xf4t\xe9 frontend. Le tableau de bord doit \xeatre un outil d\xe9cisionnel pour un chef d'entrerprise lui donnant les cl\xe9s pour r\xe9agir vite et bien. Un CRUD complet a \xe9t\xe9 mis en place lors de ce projet. Cela m'a permis de construire le projet de A \xe0 Z en passant du maquettage , construction du MCD , d\xe9couverte de l'ORM Eloquent , de React et rect router ainsi que la documentation .",language:"Laravel / Mysql / Reactjs",client:"Callac Soft College",date:"Fevrier 2020",service:"Developpement / Design"},{id:5,name:"Portfolio",img:a(96),imgSub:{photo:[a(97),a(98),a(99)],title:["Portfolio","Galerie","Contact"]},type:"FrontEnd",desc:"Site pour servant de support au m\xeame titre qu'un cv. R\xe9aliser avec React et typescript en serverless. Possibilit\xe9 d'envoie de mail gr\xe2ce \xe0 emailjs.Le captcha google a \xe9t\xe9 mis \xe9galement en place pour lutter contre le spam sur mon formulaire.",language:"React / typescript",client:"/",date:"Aout 2020",service:"Developpement / Design"},{id:6,name:"ootrTracker - wip",img:a(100),imgSub:{photo:[a(101)],title:["ootrTracker - wip"]},type:"FrontEnd",desc:"Tracker pour suivre la progression des items pour zelda OOTR",language:"Javascript",client:"/",date:"Pr\xe9vu fin 2020",service:"Developpement"}];t.a=i},82:function(e,t,a){e.exports=a.p+"static/media/PreviewConvertisseurC.58be67e8.webp"},83:function(e,t,a){e.exports=a.p+"static/media/ConvertisseurC.a82c3d91.webp"},84:function(e,t,a){e.exports=a.p+"static/media/PreviewJavafx.bda2b871.webp"},85:function(e,t,a){e.exports=a.p+"static/media/javafx.2af265f4.webp"},86:function(e,t,a){e.exports=a.p+"static/media/Absence.7609e02b.webp"},87:function(e,t,a){e.exports=a.p+"static/media/Paie.9dd17df1.webp"},88:function(e,t,a){e.exports=a.p+"static/media/PreviewDiapo.6f5d427e.webp"},89:function(e,t,a){e.exports=a.p+"static/media/diapo_gif.30a42035.webp"},90:function(e,t,a){e.exports=a.p+"static/media/PreviewQuizz.3e7e4e74.webp"},91:function(e,t,a){e.exports=a.p+"static/media/quizz.1f111c4b.webp"},92:function(e,t,a){e.exports=a.p+"static/media/PreviewDashboard.72d4bca4.webp"},93:function(e,t,a){e.exports=a.p+"static/media/dashboard1.7f05a6dd.webp"},94:function(e,t,a){e.exports=a.p+"static/media/dashboard2.de146f11.webp"},95:function(e,t,a){e.exports=a.p+"static/media/dashboard3.63c95f0e.webp"},96:function(e,t,a){e.exports=a.p+"static/media/PreviewPortfolio.2e97aa14.webp"},97:function(e,t,a){e.exports=a.p+"static/media/Portfolio.a8c24f5f.webp"},98:function(e,t,a){e.exports=a.p+"static/media/Portfolio_gallery.929cd9ba.webp"},99:function(e,t,a){e.exports=a.p+"static/media/Portfolio_contact.c2d7bdfe.webp"}}]);
//# sourceMappingURL=4.adb71595.chunk.js.map
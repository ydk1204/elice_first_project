(this["webpackJsonpsolo-project"]=this["webpackJsonpsolo-project"]||[]).push([[0],[,,,,function(e,t,n){e.exports={mTitle:"useScore_mTitle__1JGBG",title:"useScore_title__2fPan",tbContainer:"useScore_tbContainer__ih0NK",chartBox:"useScore_chartBox__3rM-e",chart:"useScore_chart__1zc73",graph:"useScore_graph__2TP4P",recomBox:"useScore_recomBox__Yjioz",jobClass:"useScore_jobClass__3wN1V",jobTitle:"useScore_jobTitle__pG5fC",job:"useScore_job__Iz7AQ",jobs:"useScore_jobs__2i2B5"}},,function(e,t,n){e.exports={loginTitle:"login_loginTitle__1kX1E",inputContainer:"login_inputContainer__1iMRA",nameMessage:"login_nameMessage__udLfS",namePass:"login_namePass__RmIJU",genderMessage:"login_genderMessage__1TPbG",genderPass:"login_genderPass__2kPMs",nextBtn:"login_nextBtn__gU6rd",normalBtn:"login_normalBtn__3rHcP",genderContainer:"login_genderContainer__2mQ0E"}},,function(e,t,n){e.exports={nextBtn:"example_nextBtn__2jj0U",normalBtn:"example_normalBtn__2pgg5",exampleTitle:"example_exampleTitle__T7KY5",subTitle:"example_subTitle__YlKXI",selectBox:"example_selectBox__20W2h",radios:"example_radios__eUdm5"}},function(e,t,n){e.exports={resultTitle:"result_resultTitle__3Eh3J",resultHeader:"result_resultHeader__KYn5M",normalBtn:"result_normalBtn__2bRQA",footerBox:"result_footerBox__2j0Rg"}},function(e,t,n){e.exports={invisible:"ment_invisible__2rTxg",visible:"ment_visible__10xYs",subTitle:"ment_subTitle__1KV6t",Answer:"ment_Answer__1Sz6o",line:"ment_line__3tp74",mentContainer:"ment_mentContainer__3T-r_",typeName:"ment_typeName__3ZswQ",ment:"ment_ment__ag6cA"}},function(e,t,n){e.exports={testTitle:"testPage_testTitle__2Cxjy",nextBtn:"testPage_nextBtn__6xzca",normalBtn:"testPage_normalBtn__2xZAG",backBtn:"testPage_backBtn__3B72Y",footerBox:"testPage_footerBox__3haE6"}},,function(e,t,n){e.exports={progressBar:"progressBar_progressBar__3JCAw",progress:"progressBar_progress__R04t9",font:"progressBar_font__8OvLw"}},function(e,t,n){e.exports={selectBox:"question_selectBox__1oCM4",radios:"question_radios__2fMDl"}},,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(16),r=n.n(a),i=(n(22),n(2)),j=(n.p,n(23),n(17)),o=n(3),l=n(6),b=n.n(l),u=n(0),O=function(e){var t,n,s=Object(c.useState)(""),a=Object(i.a)(s,2),r=a[0],j=a[1],l=Object(c.useState)(""),O=Object(i.a)(l,2),d=O[0],h=O[1],x=Object(c.useState)(!1),m=Object(i.a)(x,2),f=m[0],p=m[1],_=Object(c.useState)(!1),g=Object(i.a)(_,2),v=g[0],S=g[1],N=Object(c.useState)(!0),C=Object(i.a)(N,2),E=C[0],B=C[1],k=Object(c.useState)(!1),A=Object(i.a)(k,2),R=A[0],w=A[1],q=/^[\uac00-\ud7a3]{2,4}$/,y=Object(c.useRef)(),T=Object(o.f)(),I=function(e){n=e.target.value,h(n)};Object(c.useEffect)((function(){S(""!==d||""===r)}),[d,r]),Object(c.useEffect)((function(){""===r&&p(!0)}),[r]),Object(c.useEffect)((function(){B(!0!==R||""===d)}),[R,d,f,v]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:b.a.loginTitle,children:"\uc9c1\uc5c5\uc2ec\ub9ac\uac80\uc0ac"}),Object(u.jsx)("div",{className:b.a.inputContainer,children:Object(u.jsx)("p",{children:"\uc774\ub984"})}),Object(u.jsx)("input",{type:"text",onChange:function(e){t=y.current.value,!0===q.test(t)?(p(!0),w(!0)):(p(!1),w(!1)),j(t)},ref:y,value:r,placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),Object(u.jsx)("p",{className:f?b.a.namePass:b.a.nameMessage,children:"\ud55c\uae00 2~4\uc790 \uc774\ub0b4\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."}),Object(u.jsx)("div",{className:b.a.inputContainer,children:Object(u.jsx)("p",{children:"\uc131\ubcc4"})}),Object(u.jsxs)("div",{className:b.a.genderContainer,children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:"gender",value:"100323",onChange:I}),"\ub0a8\uc131"]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:"gender",value:"100324",onChange:I}),"\uc5ec\uc131"]}),Object(u.jsx)("p",{className:v?b.a.genderPass:b.a.genderMessage,children:"\uc131\ubcc4\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."})]}),Object(u.jsx)("button",{className:E?b.a.nextBtn:b.a.normalBtn,onClick:function(){!0===f&&!0===v&&(e.user(r,d),T("/example"))},children:"\uac80\uc0ac\uc2dc\uc791"})]})},d=n(7),h=n(8),x=n.n(h),m=n(13),f=n.n(m),p=function(e){var t=0,n=Object(c.useState)(0),s=Object(i.a)(n,2),a=s[0],r=s[1];return Object(c.useEffect)((function(){t=e.progress,r(t/48*100)})),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:f.a.progressBar,style:{width:750},children:[Object(u.jsxs)("p",{className:f.a.font,children:[Math.ceil(a),"%"]}),Object(u.jsx)("div",{className:f.a.progress,style:{width:"".concat(a/1.014,"%")}})]})})},_=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),s=(n[0],n[1]),a=Object(c.useState)(!0),r=Object(i.a)(a,2),j=r[0],l=r[1],b=Object(o.f)(),O=Object(c.useState)(""),h=Object(i.a)(O,2),m=h[0],f=h[1];Object(c.useEffect)((function(){"2"===e.exam?f(!0):"1"===e.exam&&f(!1),1===e.exdata?l(!1):l(!0)}));var _=function(t){var n=t.target.value;e.exp(n),s(n)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:x.a.exampleTitle,children:"\uac80\uc0ac\uc608\uc2dc"}),Object(u.jsx)(p,{progress:0}),Object(u.jsxs)("h4",{className:x.a.subTitle,children:["\uc9c1\uc5c5\uacfc \uad00\ub828\ub41c \ub450\uac1c\uc758 \uac00\uce58 \uc911\uc5d0\uc11c \uc790\uae30\uc5d0\uac8c \ub354 \uc911\uc694\ud55c \uac00\uce58\uc5d0 \ud45c\uc2dc\ud558\uc138\uc694.",Object(u.jsx)("br",{}),"\uac00\uce58\uc758 \ub73b\uc744 \uc798 \ubaa8\ub974\uaca0\ub2e4\uba74 \ubb38\ud56d \uc544\ub798\uc5d0 \uc788\ub294 \uac00\uce58\uc758 \uc124\uba85\uc744 \ud655\uc778\ud574\ubcf4\uc138\uc694."]}),Object(u.jsxs)("ul",{className:x.a.selectBox,children:[Object(u.jsx)("p",{className:x.a.ask,children:"\ub098\ub294 \ucf54\ub529 \uacf5\ubd80\ubcf4\ub2e4 \uac8c\uc784\ud558\ub294\uac8c \ub354 \uc88b\ub2e4"}),Object(u.jsxs)("div",{className:x.a.radios,children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(d.a)(Object(d.a)({type:"radio",name:"test",value:"1"},!1===m?{checked:!0}:{}),{},{onChange:_})),"\uadf8\ub807\uc9c0 \uc54a\ub2e4"]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(d.a)(Object(d.a)({type:"radio",name:"test",value:"2"},!0===m?{checked:!0}:{}),{},{onChange:_})),"\uadf8\ub807\ub2e4"]})]})]}),Object(u.jsx)("button",{className:j?x.a.nextBtn:x.a.normalBtn,onClick:function(){b("/test")},children:"\uac80\uc0ac\uc2dc\uc791"})]})},g=n(10),v=n.n(g),S=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(""),j=Object(i.a)(r,2),o=j[0],l=j[1],b=Object(c.useState)(""),O=Object(i.a)(b,2),d=O[0],h=O[1],x={RI:"R-I\uc720\ud615\uc740 \ubbf8\ub798\ub97c \uc0dd\uac01\ud558\uae30 \ubcf4\ub2e4\ub294 \ud604\uc7ac\uc5d0 \uc9d1\uc911\ud558\ub294 \ud3b8\uc785\ub2c8\ub2e4. \uae30\uc874\uc758\n      \uaddc\uce59\uc774\ub098 \ud2c0\uc744 \uace0\uccd0\uc11c \ub354 \uc88b\uac8c \ub9cc\ub4e4\uace0 \uadf8 \uacfc\uc815\uc5d0\uc11c \uc0dd\uae30\ub294 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294\n      \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. R-I\uc720\ud615\uc758 \ud559\uc0dd\ub4e4\uc740 \uad50\uc2e4 \uc218\uc5c5 \ubcf4\ub2e4\ub294 \ud604\uc7a5\ud559\uc2b5\uc744 \ud1b5\ud574\uc11c\n      \ubc30\uc6b0\ub294 \uac83\uc744 \ub354 \uc88b\uc544\ud569\ub2c8\ub2e4. R-I\uc720\ud615\uc740 \uae30\uc220\uc790 \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4.",RA:"R-A\uc720\ud615\uc740 \uc0c8\ub85c\uc6b4 \uac83\uc744 \ub9cc\ub4e4\uc5b4\ub0b4\ub294\ub370 \uae30\uc220\uc801\uc778 \ub2a5\ub825\uc744 \uc0ac\uc6a9\ud558\uac70\ub098 \uc790\uc2e0\ub9cc\uc758\n    \uc544\uc774\ub514\uc5b4\ub97c \ud65c\uc6a9\ud558\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774 \uc720\ud615\uc740 \uc870\uc9c1\uc758 \uc9c8\uc11c\ub098 \uaddc\uce59\uc744\n    \ub530\ub974\ub294 \uac83\uc744 \ubd88\ud3b8\ud574 \ud558\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4. R-A\uc720\ud615\uc740 \ucd2c\uc601\uae30\uc0ac, \uc870\uacbd \uae30\uc220\uc790\n    \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4.",RS:"R-S\uc720\ud615\uc740 \uc2e0\uccb4\ub97c \uc0ac\uc6a9\ud558\uac70\ub098 \ubc14\uae65\uc5d0\uc11c \ud558\ub294 \ud65c\ub3d9\uc744 \ud1b5\ud574 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc744 \ub3d5\ub294\n      \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774 \uc720\ud615\uc740 \uc790\uc2e0\uc758 \uc774\ubbf8\uc9c0\ub97c \uc88b\uac8c \ubcf4\uc774\ub294 \ub370\uc5d0 \uc2e0\uccb4\uc801\uc778\n      \ud798\uc774 \uc911\uc694\ud558\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. R-S\uc720\ud615\uc740 \uc6b4\ub3d9\ucf54\uce58\ub098 \uac10\ub3c5, \uc751\uae09 \uad6c\uc870\uc0ac \ub4f1\uc758\n      \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4.",RE:"R-E\uc720\ud615\uc740 \uc791\uc740 \uc870\uc9c1\uc77c\uc9c0\ub77c\ub3c4 \ub300\ud45c\ub97c \ub9e1\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774 \uc720\ud615\uc740 \uc885\uc885\n      \ud63c\uc790\uc11c \uc77c\ud558\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. R-E\uc720\ud615\uc740 \ub192\uc740 \uc218\uc900\uc758 \uc5f0\uc2b5\uc744 \ud544\uc694\ub85c \ud558\ub294\n      \uc804\ubb38 \uc9c1\uc5c5\uc774\ub098 \uc790\uc2e0\uc774 \uc9c1\uc811 \uc6b4\uc601\ud558\ub294 \uc0ac\uc5c5 \ub4f1\uc744 \uc88b\uc544\ud558\uace0, \uc120\uc7a5\uc774\ub098 \ube44\ud589\uae30\n      \uc870\uc885\uc0ac \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4",RC:"R-C\uc720\ud615\uc740 \ub3c4\uad6c\ub098 \uae30\uacc4\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uaddc\uce59\uc801\uc778 \ud65c\ub3d9\uc744\n      \uc120\ud638\ud558\uba70 \uc9dc\uc784\uc0c8 \uc788\ub294 \uc2a4\ucf00\uc904\uc744 \uc138\uc6b0\ub824\uace0 \ud569\ub2c8\ub2e4. \uc774 \uc720\ud615\uc740 \uad6c\uccb4\uc801\uc73c\ub85c\n      \uacb0\uacfc\uac00 \ub098\ud0c0\ub098\ub294 \ud65c\ub3d9\uc5d0 \ucc38\uc5ec\ud558\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. R-C\uc720\ud615\uc740 \uc9c1\uc5c5\uad70\uc778,\n      \uc815\ube44\uc6d0 \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4",IR:" I-R\uc720\ud615\uc740 \uc2e4\uc0dd\ud65c\uacfc \ubc00\uc811\ud55c \ubd84\uc57c\ub97c \uc5f0\uad6c\ud558\uac70\ub098 \uc0c8\ub85c\uc6b4 \ubb3c\uac74\uc744 \ub9cc\ub4e4\uc5b4\ub0b4\ub294\n      \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc790\uc2e0\ub9cc\uc758 \ubc29\uc2dd\uc73c\ub85c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub824\uace0 \ud558\uba70 \uad00\uc2ec \uc8fc\uc81c\uac00\n      \uac19\uc740 \uc0ac\ub78c\ub4e4\uacfc \uad50\ub958\ub97c \ud1b5\ud574 \ubc30\uc6b0\uace0\uc790 \ud569\ub2c8\ub2e4. I-R\uc720\ud615\uc740 \uc758\ub8cc\ub098 \uacf5\ud559\ubd84\uc57c\uc758\n      \uc5f0\uad6c\ud65c\ub3d9\uc744 \uc88b\uc544\ud558\uba70, \uc758\uc0ac\ub098 \uc0dd\uba85\uacfc\ud559\uc5f0\uad6c\uc6d0 \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4",IA:"I-A\uc720\ud615\uc740 \uc544\uc774\ub514\uc5b4\ub97c \uc0dd\uac01\ud558\uace0 \uc0c8\ub85c\uc6b4 \uc774\ub860\uc744 \ub9cc\ub4dc\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774\n      \uc720\ud615\uc740 \ubb38\uc81c \ud574\uacb0\uc744 \uc704\ud574 \uc6d0\ub9ac\ub098 \uc774\ub860\uc744 \uc6b0\uc120\uc801\uc73c\ub85c \uc801\uc6a9\ud574\uc11c \ub2f5\uc744 \ucc3e\uc544\ub0b4\ub294\n      \ud3b8\uc785\ub2c8\ub2e4. I-A\uc720\ud615\uc740 \uad50\uc218 \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4",IS:"I-S\uc720\ud615\uc740 \uc0ac\ub78c\ub4e4\uacfc \uad00\ub828\ub41c \uc77c\uc744 \uc5f0\uad6c\ud558\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774 \uc720\ud615\uc740\n      \uadf8\ub7ec\ud55c \uc77c\uc744 \ud560 \ub54c \uc774\ub860\uc744 \ubd84\uc11d\ud558\uac70\ub098 \uc801\uc6a9\ud574\ubcf4\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774\ub4e4\uc740\n      \ub2e4\uc18c \ucc28\uac00\uc6cc \ubcf4\uc77c \uc218 \uc788\uc73c\uba70 \uc77c \uc911\uc2ec\uc801\uc778 \ud3b8\uc785\ub2c8\ub2e4. I-S\uc720\ud615\uc740 \uc0ac\ub78c,\n      \uc870\uc9c1\uc774\ub098 \ub2e8\uccb4\ub97c \uc9c4\ub2e8\ud558\uac70\ub098 \ubd84\uc11d\ud558\ub294 \uc77c\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4.",IE:" I-E\uc720\ud615\uc740 \ub300\uaddc\ubaa8\uc758 \uc0ac\uc5c5\ubcf4\ub2e4\ub294 \uc804\ubb38\uc131\uc744 \ubc14\ud0d5\uc73c\ub85c \ud55c \uc77c\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774\n      \uc720\ud615\uc740 \uc18c\uaddc\ubaa8\uc77c\uc9c0\ub77c\ub3c4 \ube44\uc2b7\ud55c \uc218\uc900\uc758 \uc804\ubb38\uc9c0\uc2dd\uc744 \uac00\uc9c4 \uc0ac\ub78c\ub4e4\uacfc \ud568\uaed8 \uc77c\ud558\ub294\n      \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \ucca8\ub2e8\uae30\uc220\uc744 \ud544\uc694\ub85c \ud558\ub294 \uc0ac\uc5c5\uc774\ub098, \uc0c8\ub85c\uc6b4 \ubd84\uc57c\uc758 \uc0ac\uc5c5\uc744\n      \uc88b\uc544\ud569\ub2c8\ub2e4",IC:" I-C\uc720\ud615\uc740 \uc778\ub0b4\ub97c \ud544\uc694\ub85c \ud558\ub294 \uc7a5\uae30\uc801\uc778 \ubb38\uc81c\ub098 \uc774\ub860\uc744 \ub2e4\ub8e8\ub294 \uc77c\uc744\n      \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774\ub4e4\uc740 \uc9d1\uc911\ub825\uc774 \ub6f0\uc5b4\ub098\uace0 \uc81c\uc2dc\uac04\uc5d0 \uacfc\uc81c\ub97c \ub9c8\uce58\uae30 \uc704\ud574\n      \ub178\ub825\ud569\ub2c8\ub2e4. I-C\uc720\ud615\uc740 \ud604\uc2e4\uc801\uc778 \uac10\uac01\uc774 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc5ec\ub860\uc870\uc0ac \uc804\ubb38\uac00,\n      \uc0ac\ud68c\uacfc\ud559\uc5f0\uad6c\uc6d0 \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4.",AR:"A-R\uc720\ud615\uc740 \ub208\uc5d0 \ubcf4\uc774\ub294 \uc0ac\ubb3c\uc744 \ub300\uc0c1\uc73c\ub85c \ucc3d\uc870\uc801\uc778 \ud65c\ub3d9\uc744 \ud558\ub294 \uac83\uc744\n      \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774\ub4e4\uc740 \ub2e4\ub978 \uc0ac\ub78c\uacfc \uac19\uc774 \ud65c\ub3d9\ud558\uae30 \ubcf4\ub2e4\ub294 \ud63c\uc790 \ud558\ub294 \uac83\uc744\n      \uc88b\uc544\ud569\ub2c8\ub2e4. A-R\uc720\ud615\uc740 \uc0c1\ud488\uc744 \uc804\uc2dc\ud558\uac70\ub098 \uc2e4\ub0b4\ub97c \uafb8\ubbf8\ub294 \ub4f1\uc758 \ud65c\ub3d9\uc744 \ud558\ub294\n      \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4",AI:"A-I\uc720\ud615\uc740 \ucd5c\uc2e0 \uc720\ud589\uc5d0 \ubbfc\uac10\ud558\uace0 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc758 \ubcc0\ud654\ub97c \uc774\ub04c\uc5b4\ub0b4\uae30\ub3c4 \ud569\ub2c8\ub2e4.\n      \uc774\ub4e4\uc740 \uc74c\uc545, \ubbf8\uc220, \uc5b8\uc5b4 \ub4f1\uc744 \ud65c\uc6a9\ud558\uc5ec \ucc3d\uc870\uc801\uc778 \ud65c\ub3d9\uc744 \ud558\ub294 \uac83\uc744\n      \uc88b\uc544\ud569\ub2c8\ub2e4. A-I\uc720\ud615\uc740 \uc9c1\uad00\uc801\uc774\uace0 \ud1b5\ucc30\ub825\uc774 \uc788\ub294 \ud3b8\uc785\ub2c8\ub2e4. A-I\uc720\ud615\uc740 \uc791\uac00,\n      \uc791\uace1\uac00 \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4.",AS:"A-S\uc720\ud615\uc740 \uc608\uc220\uc801\uc778 \uac10\uac01\uc744 \uac00\uc9c0\uace0 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc744 \ub3d5\uac70\ub098 \uc990\uac81\uac8c \ud574\uc8fc\ub294 \uac83\uc744\n      \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774 \uc720\ud615\uc740 \uc18c\uadf9\uc801\uc73c\ub85c \ubcf4\uc77c \uc218 \uc788\uc73c\ub098 \uc790\uc2e0\uc774 \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud558\ub294\n      \ubd80\ubd84\uc5d0\uc11c\ub294 \uac15\ud558\uac8c \uc8fc\uc7a5\ud569\ub2c8\ub2e4.",AE:"A-E\uc720\ud615\uc740 \ud45c\ud604\uc744 \uc798\ud558\uace0 \ub3c5\ub9bd\uc801\uc73c\ub85c \ud589\ub3d9\ud558\uba70 \uc790\uc2e0\ub4e4\uc758 \uc608\uc220\ud65c\ub3d9\uc5d0 \ucd5c\uc18c\ud55c\uc758\n      \uc81c\ud55c\uc744 \ubc1b\uc73c\uba70 \ud65c\ub3d9\ud558\uace0\uc790 \ud569\ub2c8\ub2e4. \uc774\ub4e4\uc740 \uc790\uc720\ub86d\uac8c \uc6c0\uc9c1\uc774\ub294 \uacbd\ud5a5\uc774 \uc788\uace0\n      \uc790\uc2e0\ub4e4\uc774 \ub9cc\uc871\ud560 \uc218 \uc788\ub294 \ud65c\ub3d9\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. A-E\uc720\ud615\uc740 \uc601\ud654\uac10\ub3c5,\n      \ubc29\uc1a1\uc5f0\ucd9c\uac00 \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4",AC:"A-C\uc720\ud615\uc740 \ucc3d\uc870\uc801\uc778 \ud65c\ub3d9\uc744 \uacc4\ud68d\uc801\uc73c\ub85c \ud574\ub098\uac00\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774\ub4e4\uc774\n      \uc774\ub04c\uc5b4\uac00\ub294 \ud65c\ub3d9\uc740 \ubc18\ub4dc\uc2dc \ub05d\uc744 \ubcf4\ub294 \ud3b8\uc785\ub2c8\ub2e4. A-C\uc720\ud615\uc774 \ub9cc\ub4dc\ub294 \uac83\uc740\n      \ubaa8\ud638\ud558\uc9c0 \uc54a\uace0 \ud604\uc2e4\uacfc \uc9c1\uc811 \uad00\ub828\ub418\uc5b4 \uc788\ub294 \uac83\ub4e4\uc774 \ub9ce\uc2b5\ub2c8\ub2e4. A-C\uc720\ud615\uc740\n      \ub3c4\uc2dc\uacc4\ud68d\uac00 \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4.",SR:"S-R\uc720\ud615\uc740 \ubab8\uc744 \uc6c0\uc9c1\uc5ec\uc11c \ud558\ub294 \ud65c\ub3d9\uc744 \uc88b\uc544\ud558\uba70 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc744 \ub3d5\ub294 \uac83\uc744\n      \uc88b\uc544\ud569\ub2c8\ub2e4. \ucea0\ud504\ub098 \ud734\uc591\uc9c0\uc5d0\uc11c\uc758 \ud65c\ub3d9, \uc774\ubca4\ud2b8 \ucc38\uc5ec, \uc2a4\uce74\uc6b0\ud2b8 \ub4f1\uc758\n      \ubd09\uc0ac\ud65c\ub3d9\uc5d0 \ub9e4\ub825\uc744 \ub290\ub08d\ub2c8\ub2e4. S-R\uc720\ud615\uc740 \uc790\uc2e0\ub4e4\uc758 \ud65c\ub3d9\uc744 \ud1b5\ud574 \uc9d1\ub2e8\uc744 \uc774\ub044\ub294\n      \uc5ed\ud560\uc744 \uc218\ud589\ud558\uae38 \uc120\ud638\ud569\ub2c8\ub2e4.",SI:"S-I\uc720\ud615\uc740 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294\ub370 \uc77c \uc911\uc2ec\uc801\uc774\uae30 \ubcf4\ub2e4\ub294 \uc0ac\ub78c \uc911\uc2ec\uc801\uc778 \uacbd\ud5a5\uc774\n      \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub4e4\uc740 \uc18c\uc218\uc758 \uce5c\uad6c\ub4e4\uacfc \ud568\uaed8 \uae34\ubc00\ud55c \uad00\uacc4\ub97c \uac00\uc9c0\uace0 \ud65c\ub3d9\ud558\ub294 \uac83\uc744\n      \uc88b\uc544\ud569\ub2c8\ub2e4. S-I\uc720\ud615\uc740 \uc0c8\ub85c\uc6b4 \uc774\ub860\uc744 \ub9cc\ub4e4\uc5b4\ub0b4\uae30 \ubcf4\ub2e4\ub294 \uadf8 \uc774\ub860\ub4e4\uc774 \uc5bc\ub9c8\ub098\n      \ud6a8\uacfc\uac00 \uc788\ub294\uc9c0\ub97c \uc54c\uc544\ubcf4\ub294\ub370 \uad00\uc2ec\uc774 \uc788\uc2b5\ub2c8\ub2e4. S-I\uc720\ud615\uc740 \uc0c1\ub2f4\uc804\ubb38\uac00\ub098\n      \uc131\uc9c1\uc790 \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4",SA:"S-A\uc720\ud615\uc740 \uc790\uc2e0\uc758 \uc8fc\uc7a5\uc744 \uc9c0\uc9c0\ud574 \uc904 \uce5c\uad6c\ub4e4\uacfc \ud568\uaed8 \uc9d1\ub2e8\uc744 \ub9cc\ub4e4\uc5b4 \uc0ac\ud68c\uc801\uc778\n      \uc601\ud5a5\uc744 \ubbf8\uce60 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub4e4\uc740 \ub9d0\ud558\ub294\ub370 \ub2a5\uc219\ud558\uba70 \uc790\uc2e0\uc758 \uc8fc\uc7a5\uc5d0 \ub300\ud574\n      \uace0\uc9d1\uc2a4\ub7ec\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. S-A\uc720\ud615\uc740 \uc2dc\ubbfc\ub2e8\uccb4 \ud65c\ub3d9\uac00 \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4",SE:"S-E\uc720\ud615\uc740 \uacf5\uacf5\uc758 \uc774\uc775\uc744 \ucd94\uad6c\ud558\ub294 \ub2e8\uccb4\uc5d0\uc11c \uc77c\ud558\ub294 \uac83\uc744 \uc88b\uc544\ud558\uace0 \uc0ac\ub78c\ub4e4\uc744\n      \uad00\ub9ac, \uac10\ub3c5\ud558\ub294 \uc77c\ubcf4\ub2e4 \ub3c4\uc640\uc8fc\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uacbd\uc7c1\uc801\uc778 \uc0c1\ud669\uc744 \uc2eb\uc5b4\ud558\uace0\n      \uc0ac\ud68c\ub97c \uc704\ud574 \ub3c8\uc744 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294\uac00\uc5d0 \uad00\uc2ec\uc774 \ub9ce\uc2b5\ub2c8\ub2e4.",SC:"S-C\uc720\ud615\uc740 \ud65c\ub3d9\uc744 \ud560 \ub54c \uc808\ucc28\ubcf4\ub2e4\ub294 \uce5c\uad6c\uc640\uc758 \uad00\uacc4\uc5d0 \uad00\uc2ec\uc774 \ub9ce\uc2b5\ub2c8\ub2e4.\n      \uce5c\uad6c\ub4e4\uacfc \ud568\uaed8 \ud65c\ub3d9\ud560 \ub54c \uc608\uc678\ub97c \uc778\uc815\ud558\uace0, \ub530\ub3cc\ub9bc\uc744 \ub2f9\ud558\ub294 \uce5c\uad6c\ub4e4\uc744\n      \ubcf4\uc0b4\ud53c\uace0 \uc9c0\uc9c0\ud574 \uc90d\ub2c8\ub2e4. S-C\uc720\ud615\uc740 \uc778\uad8c \ubcf4\ud638 \ud65c\ub3d9\uc774\ub098 \uac08\ub4f1\uc744 \uc870\uc815\ud558\ub294\n      \uc5ed\ud560\uc744 \uc120\ud638\ud569\ub2c8\ub2e4.",ER:"E-R\uc720\ud615\uc740 \uc870\uc9c1\uc774\ub098 \ub2e8\uccb4\uc5d0\uc11c \uad00\ub9ac\ud558\ub294 \uc5ed\ud560\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc194\uc9c1\ud558\uace0\n      \uc9c1\uc811\uc801\uc778 \ud45c\ud604\uc744 \uc798 \ud558\uae30 \ub54c\ubb38\uc5d0 \uc774\ub044\ub294 \ub2a5\ub825\uc774 \ub6f0\uc5b4\ub098\ub2e4\ub294 \ud3c9\uac00\ub97c \ubc1b\uc2b5\ub2c8\ub2e4.\n      \uc774\ub4e4\uc740 \ucee4\ub2e4\ub780 \uaddc\ubaa8\uc758 \uc870\uc9c1\uc5d0\uc11c \ub9ac\ub354 \uc5ed\ud560\uc744 \ud558\ub294 \uac83\uc744 \uc120\ud638\ud569\ub2c8\ub2e4.",EI:"E-I\uc720\ud615\uc740 \ubaa8\ud5d8\uc744 \uc88b\uc544\ud558\uace0 \uc704\ud5d8\ud55c \uc77c\uc5d0 \ub3c4\uc804\ud558\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774\n      \uc720\ud615\uc740 \uc5f0\uad6c\ub098 \ubd84\uc11d \ud65c\ub3d9\uc744 \ud1b5\ud574 \ub208\uc5d0 \ubcf4\uc774\ub294 \uacbd\uc7c1\uc5d0 \ucc38\uc5ec\ud558\uae38 \uc6d0\ud569\ub2c8\ub2e4.\n      E-I\uc720\ud615\uc740 \uacbd\uc601\ucee8\uc124\ud134\ud2b8 \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4.",EA:" E-A\uc720\ud615\uc740 \ub69c\ub837\ud55c \ubaa9\uc801\uc744 \uc138\uc6b0\uace0 \ucc3d\uc870\uc801\uc778 \ud65c\ub3d9\uc744 \ud558\ub294 \uac83\uc744 \uc120\ud638\ud569\ub2c8\ub2e4.\n      \uc774\ub7ec\ud55c \ud65c\ub3d9\uc5d0 \ud544\uc694\ud55c \ube44\uc6a9\uc744 \uacc4\uc0b0\ud558\uac70\ub098 \ub9c8\uac10\uc2dc\uac04\uc774 \uc815\ud574\uc838 \uc788\ub294 \ud65c\ub3d9\uc744 \uc798\n      \ud574\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc720\ud615\uc740 \uc5b4\ub824\uc6b4 \ud65c\ub3d9\uc5d0 \ub3c4\uc804\ud558\ub294 \uacbd\ud5a5\uc774 \uc788\uc2b5\ub2c8\ub2e4.\n      E-A\uc720\ud615\uc740 \uc0c1\ud488\uae30\ud68d \uc804\ubb38\uac00\ub098 \uad11\uace0\ud64d\ubcf4 \uc804\ubb38\uac00\uc640 \uac19\uc740 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4.",ES:"E-S\uc720\ud615\uc740 \uacbd\uc7c1\uc0c1\ud669\uc744 \uc88b\uc544\ud558\uace0 \uc774\uc775\uc744 \ub0bc \uc218 \uc788\ub294 \ub2e8\uccb4\uc5d0\uc11c \ud65c\ub3d9\ud558\ub294 \uac83\uc744\n      \uc88b\uc544\ud569\ub2c8\ub2e4. \uc790\uc2e0\uc5d0\uac8c \ub9e1\uaca8\uc9c4 \uad8c\ud55c\uc744 \ubc14\ud0d5\uc73c\ub85c \uc870\uc9c1\uc5d0\uc11c \ucc45\uc784\uc744 \uc9c0\uace0 \uc870\uc9c1\uc744\n      \ub300\ud45c\ud558\uc5ec \ud558\ub294 \ud65c\ub3d9\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. E-S\uc720\ud615\uc740 \uc5ec\ud589\uc0c1\ud488 \uac1c\ubc1c\uc790, \ud574\uc678 \uc601\uc5c5\uc6d0\n      \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4.",EC:"E-C\uc720\ud615\uc740 \uc870\uc9c1\uc774\ub098 \ub2e8\uccb4\uc758 \ub9ac\ub354\uac00 \ub418\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774 \uc720\ud615\uc740\n      \uc758\uc0ac\uacb0\uc815\uc744 \ud655\uc2e4\ud558\uac8c \ub0b4\ub9ac\uba70 \uad8c\ud55c\uc744 \ud544\uc694\ub85c \ud558\ub294 \ud65c\ub3d9\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc885\uc885\n      \uacbd\uc7c1\uc801\uc774\uba70 \uc790\uc2e0\uc758 \uc131\ucde8\uc5d0 \ub9cc\uc871\ud558\uc9c0 \uc54a\uace0 \uc0c8\ub85c\uc6b4 \ubaa9\ud45c\ub97c \ub9cc\ub4e4\uc5b4\ub0c5\ub2c8\ub2e4.\n      E-C\uc720\ud615\uc740 \ubc14\uc774\uc5b4 \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4.",CR:"C-R\uc720\ud615\uc740 \uc790\uc2e0\uc5d0\uac8c \ub9e1\uaca8\uc9c4 \uc77c\uc744 \ub3c5\ub9bd\uc801\uc73c\ub85c \ud558\uae30\ub97c \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774 \uc720\ud615\uc740\n      \ub192\uc740 \ucc45\uc784\uac10\uc744 \ubc14\ud0d5\uc73c\ub85c \ud65c\ub3d9\uc744 \uc218\ud589\ud569\ub2c8\ub2e4. C-R\uc720\ud615\uc740 \uc57d\uc0ac, \ubc95\ubb34\uc0ac \ub4f1\uc758\n      \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4.",CI:" C-I\uc720\ud615\uc740 \uc2a4\ucf00\uc904\uacfc \uc808\ucc28\uac00 \ubd84\uba85\ud558\uac8c \uc81c\uc2dc\ub418\uc5b4 \uc788\ub294 \ud65c\ub3d9\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774\n      \uc720\ud615\uc740 \ud65c\ub3d9\uc744 \ud560 \ub54c \uc9d1\uc911\ub825\uc774 \ub192\uc73c\uba70, \ud55c \ubc88\uc5d0 \ud558\ub098\uc758 \ud65c\ub3d9\ub9cc \ud558\uae30\ub97c\n      \uc6d0\ud569\ub2c8\ub2e4. \uc774\ub4e4\uc740 \ud604\uc2e4\uc801\uc73c\ub85c \uacb0\uacfc\uac00 \ub098\ud0c0\ub098\ub294 \uc870\uc0ac\ud65c\ub3d9\uc774\ub098 \ubd84\uc11d\ud65c\ub3d9 \ub4f1\uc744\n      \uc88b\uc544\ud558\uba70, \uc138\ubb34\uc0ac \ub4f1\uc758 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4.",CA:" C-A\uc720\ud615\uc740 \ubaa8\ud5d8\uc744 \uc88b\uc544\ud558\uc9c0 \uc54a\uc9c0\ub9cc \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc774 \ud558\ub294 \ubaa8\ud5d8\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4.\n      \uc774\ub4e4\uc740 \uc21c\uc218\uc608\uc220\uac00\ub97c \uc9c0\uc6d0\ud558\ub294 \uc77c\uc774\ub098 \uadf8\ub4e4\uc5d0\uac8c \uc9c8\uc11c\ub97c \uc8fc\ub294 \ud65c\ub3d9\uc744\n      \uc88b\uc544\ud569\ub2c8\ub2e4. C-A\uc720\ud615\uc740 \ubbf8\uc220 \uad00\ub9ac\uc790, \ubc15\ubb3c\uad00\uc7a5\uacfc \uac19\uc740 \uc77c\uc744 \uc120\ud638\ud569\ub2c8\ub2e4.",CS:"C-S\uc720\ud615\uc740 \uc815\ud574\uc9c4 \uc0c1\ud669\uc5d0\uc11c \uc548\uc815\uc131\uc744 \ucd94\uad6c\ud558\uace0 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uacfc \ud568\uaed8 \ud558\ub294\n      \ud65c\ub3d9\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uaddc\uce59\uc744 \ub530\ub974\ub294 \uac83\uc744 \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud558\uace0 \uc608\uc678\ub97c \uc2eb\uc5b4\ud558\uba70,\n      \uc2dc\uac04\uc744 \uc5c4\uaca9\ud558\uac8c \uc9c0\ud0a4\ub294 \uc131\ud5a5\uc744 \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4. C-S\uc720\ud615\uc740 \uacf5\ubb34\uc6d0,\n      \uc804\ubb38\ube44\uc11c\uc640 \uac19\uc740 \uc9c1\uc5c5\uc5d0 \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4.",CE:" C-E\uc720\ud615\uc740 \uc0ac\ub78c\ub4e4\uc744 \uc9c0\uc9c0\ud558\uace0 \uc9c0\uc6d0\ud558\ub294 \ud65c\ub3d9\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4. \uc774 \uc720\ud615\uc740\n      \uc870\uc9c1\uc774\ub098 \ub2e8\uccb4\uc5d0\uc11c 2\uc778\uc790\ub85c \ud65c\ub3d9\ud558\uac70\ub098 \ub9ac\ub354\ub97c \ub3c4\uc640 \uc870\uc9c1\uc744 \uc6b4\uc601\ud558\ub294 \uc77c\uc744\n      \uc88b\uc544\ud569\ub2c8\ub2e4. C-E\uc720\ud615\uc740 \uae08\uc735\uc790\uc0b0 \uc6b4\uc6a9\uac00, \uc815\ubd80\uc815\ucc45 \uae30\ud68d\uc804\ubb38\uac00 \ub4f1\uc758 \uc9c1\uc5c5\uc5d0\n      \uc5b4\uc6b8\ub9bd\ub2c8\ub2e4."},m=[];return Object(c.useEffect)((function(){var t=[];if(void 0!==e.rank[1]){for(var n in m=e.rank.map((function(e){return e[0]})))switch(m[n]){case"101950":t.push("R");break;case"101951":t.push("I");break;case"101952":t.push("A");break;case"101953":t.push("S");break;case"101954":t.push("E");break;case"101955":t.push("C")}a(t.join(""))}})),Object(c.useEffect)((function(){for(var e in x)s===e&&(l(e),h(x[e]))}),[s]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:v.a.subTitle,children:[Object(u.jsx)("h2",{className:v.a.Answer,children:"\ub2f9\uc2e0\uc758 \uc131\ud5a5\uc740?"}),Object(u.jsx)("div",{className:v.a.line})]}),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:v.a.mentContainer,children:[Object(u.jsxs)("h4",{className:v.a.typeName,children:[o," \ud615\uc785\ub2c8\ub2e4"]}),Object(u.jsx)("p",{className:v.a.ment,children:d})]})})]})},N=n(9),C=n.n(N),E=function(e){var t=Object(o.f)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{className:C.a.normalBtn,onClick:function(){e.reset(!0),t("/login")},children:"\ub2e4\uc2dc \uac80\uc0ac\ud558\uae30"})})},B=n(4),k=n.n(B),A=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)([]),j=Object(i.a)(r,2),o=j[0],l=j[1],b=Object(c.useState)(""),O=Object(i.a)(b,2),d=O[0],h=O[1],x=Object(c.useState)(""),m=Object(i.a)(x,2),f=m[0],p=m[1],_={"R(\ud604\uc2e4\ud615)":"101950","I(\ud0d0\uad6c\ud615)":"101951","A(\uc608\uc220\ud615)":"101952","S(\uc0ac\ud68c\ud615)":"101953","E(\uc9c4\ucde8\ud615)":"101954","C(\uad00\uc2b5\ud615)":"101955"},g=e.score,v=e.date;if(null!==v){var S=v.indexOf("T");v=v.slice(0,S)}var N=[];return Object(c.useEffect)((function(){if(void 0!==e.rank[1]){N=e.rank.map((function(e){return e[0]}));for(var t=0;t<e.job.length;t++)e.job[t].msclNo===N[0]&&a(e.job[t].list),e.job[t].msclNo===N[1]&&l(e.job[t].list)}for(var n in _)_[n]===N[0]&&h(n),_[n]===N[1]&&p(n)})),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:k.a.tbContainer,children:Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"\uc774\ub984"}),Object(u.jsx)("th",{children:"\uc131\ubcc4"}),Object(u.jsx)("th",{children:"\uac80\uc0ac\uc77c"})]})}),Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.users.name}),Object(u.jsx)("td",{children:"100323"===e.users.gender?"\ub0a8":"\uc5ec"}),Object(u.jsx)("td",{children:v})]})})]})}),Object(u.jsx)("div",{className:k.a.mTitle,children:Object(u.jsx)("div",{className:k.a.title,children:Object(u.jsx)("p",{children:"\xa0 1. \ub098\uc758 \ud765\ubbf8\uc720\ud615 \ud0d0\uc0c9 \uacb0\uacfc"})})}),Object(u.jsx)("div",{className:k.a.chartBox,children:Object(u.jsxs)("div",{className:k.a.chart,children:[Object(u.jsx)("div",{className:k.a.graph,style:{height:"".concat(g[0],"%")},children:g[0]}),Object(u.jsx)("div",{className:k.a.graph,style:{height:"".concat(g[1],"%")},children:g[1]}),Object(u.jsx)("div",{className:k.a.graph,style:{height:"".concat(g[2],"%")},children:g[2]}),Object(u.jsx)("div",{className:k.a.graph,style:{height:"".concat(g[3],"%")},children:g[3]}),Object(u.jsx)("div",{className:k.a.graph,style:{height:"".concat(g[4],"%")},children:g[4]}),Object(u.jsx)("div",{className:k.a.graph,style:{height:"".concat(g[5],"%")},children:g[5]})]})}),Object(u.jsx)("div",{className:k.a.tbContainer,children:Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"R(\ud604\uc2e4\ud615)"}),Object(u.jsx)("th",{children:"I(\ud0d0\uad6c\ud615)"}),Object(u.jsx)("th",{children:"A(\uc608\uc220\ud615)"}),Object(u.jsx)("th",{children:"S(\uc0ac\ud68c\ud615)"}),Object(u.jsx)("th",{children:"E(\uc9c4\ucde8\ud615)"}),Object(u.jsx)("th",{children:"C(\uad00\uc2b5\ud615)"})]})}),Object(u.jsx)("tbody",{children:Object(u.jsx)("tr",{children:Array.isArray(g)&&g.map((function(e){return Object(u.jsx)("td",{children:e},g.indexOf(e))}))})})]})}),Object(u.jsx)("div",{className:k.a.mTitle,children:Object(u.jsx)("div",{className:k.a.title,children:Object(u.jsx)("p",{children:"\xa0 2. \ub098\uc758 \uc8fc\uc694 \ud765\ubbf8\uc720\ud615\uacfc \uad00\ub828\ub41c \ucd94\ucc9c \uc9c1\uc5c5"})})}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:k.a.recomBox,children:[Object(u.jsx)("div",{className:k.a.jobClass,children:Object(u.jsx)("p",{children:d})}),Object(u.jsx)("div",{className:k.a.jobTitle,children:Object(u.jsx)("p",{className:k.a.recomJob,children:"\ucd94\ucc9c\uc9c1\uc5c5"})}),Object(u.jsx)("div",{className:k.a.jobContainer,children:Object(u.jsx)("ul",{className:k.a.job,children:s.map((function(e){return Object(u.jsx)("li",{className:k.a.jobs,children:Object(u.jsx)("a",{href:"https://www.career.go.kr/jr/juniorjob/view?seq=".concat(e.juniorSeq),target:"_blank",children:Object(u.jsx)("span",{children:e.jobNm},e.juniorSeq)})})}))})})]}),Object(u.jsxs)("div",{className:k.a.recomBox,children:[Object(u.jsx)("div",{className:k.a.jobClass,children:Object(u.jsx)("p",{children:f})}),Object(u.jsx)("div",{className:k.a.jobTitle,children:Object(u.jsx)("p",{className:k.a.recomJob,children:"\ucd94\ucc9c\uc9c1\uc5c5"})}),Object(u.jsx)("div",{className:k.a.jobContainer,children:Object(u.jsx)("ul",{className:k.a.job,children:o.map((function(e){return Object(u.jsx)("li",{className:k.a.jobs,children:Object(u.jsx)("a",{href:"https://www.career.go.kr/jr/juniorjob/view?seq=".concat(e.juniorSeq),target:"_blank",children:Object(u.jsx)("span",{children:e.jobNm},e.juniorSeq)})})}))})})]})]})]})},R=function(e){for(var t,n="d6f3d4bf1ef57c0489ae941a704165e8",s=Object(c.useState)(""),a=Object(i.a)(s,2),r=a[0],j=a[1],l=Object(c.useState)(""),b=Object(i.a)(l,2),O=b[0],d=b[1],h=Object(c.useState)(""),x=Object(i.a)(h,2),m=x[0],f=x[1],p=Object(c.useState)(""),_=Object(i.a)(p,2),g=_[0],v=_[1],N=Object(c.useState)([]),B=Object(i.a)(N,2),k=B[0],R=B[1],w=Object(c.useState)([]),q=Object(i.a)(w,2),y=q[0],T=q[1],I=Object(c.useState)({}),P=Object(i.a)(I,2),M=P[0],F=P[1],H=Object(c.useState)({}),K=Object(i.a)(H,2),U=K[0],J=K[1],G=Object(c.useState)(""),L=Object(i.a)(G,2),Y=L[0],z=L[1],D=Object(c.useState)(!0),Q=Object(i.a)(D,2),V=Q[0],X=Q[1],Z=Object(c.useState)([]),W=Object(i.a)(Z,2),$=W[0],ee=W[1],te=(Object(o.f)(),[]),ne=e.result,ce=1;ce<ne.length;ce++){var se=Object.values(ne[ce])[0];te.push(ce+"="+se+" ")}t=te.join(""),Object(c.useEffect)((function(){var c="name"===Object.keys(e.users)[0]&&Object.values(e.users)[0],s="gender"===Object.keys(e.users)[1]&&Object.values(e.users)[1],a=new Headers;a.append("Content-Type","application/json"),a.append("Cookie","KHANUSER=x2oaif0mgo88c2");var r={method:"POST",headers:a,body:JSON.stringify({apikey:"d6f3d4bf1ef57c0489ae941a704165e8",qestrnSeq:"19",trgetSe:"100205",name:"".concat(c),gender:"".concat(s),grade:"1",startDtm:1550466291034,answers:"".concat(t)}),redirect:"follow"};fetch("https://www.career.go.kr/inspct/openapi/test/report?apikey=".concat(n),r).then((function(e){return e.json()})).then((function(e){return j(e.RESULT.url)})).catch((function(e){return console.log("error",e)}))}),[]),Object(c.useEffect)((function(){var e=r.replace("https://www.career.go.kr/inspct/web/psycho/elementary/report?seq=","");d(e)}),[r]),Object(c.useEffect)((function(){var e=new Headers;e.append("Cookie","KHANUSER=x2oaif0mgo88c2");var t={method:"GET",headers:e,redirect:"follow"};fetch("https://www.career.go.kr/inspct/api/psycho/report?seq=".concat(O,"&apikey=").concat(n),t).then((function(e){return e.json()})).then((function(e){return F(e)})).catch((function(e){return console.log("error",e)}))}),[O]),Object(c.useEffect)((function(){var e=new Headers;e.append("Cookie","KHANUSER=x2oaif0mgo88c2");var t={method:"GET",headers:e,redirect:"follow"};fetch("https://www.career.go.kr/inspct/api/psycho/interest/elementary/juniors?apikey=".concat(n),t).then((function(e){return e.json()})).then((function(e){return v(e)})).catch((function(e){return console.log("error",e)}))}),[m]),Object(c.useEffect)((function(){var e=Object.values(M)[2];J(e)}),[M]),Object(c.useEffect)((function(){for(var e in U)"tScore"===e&&f(U[e]),"endDtm"===e&&z(U[e])}),[U]),Object(c.useEffect)((function(){var e=m.split(" ").map((function(e){return e.split("=")}));R(e);for(var t=[],n=0;n<e.length;n++)void 0!==e[n][1]&&t.push(Math.floor(e[n][1]));ee(t)}),[m]),Object(c.useEffect)((function(){for(var e=[],t=k.sort((function(e,t){return t[1]-e[1]})),n=0;n<2;n++)e.push(t[n]),T(e)}),[k]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:C.a.resultTitle,children:Object(u.jsx)("h1",{className:C.a.resultHeader,children:"\uc9c1\uc5c5\uac00\uce58\uad00\uac80\uc0ac \uacb0\uacfc\ud45c"})}),!0===V&&Object(u.jsx)(S,{rank:y}),!0!==V&&Object(u.jsx)(A,{user:M,date:Y,users:e.users,score:$,job:g,rank:y}),Object(u.jsxs)("div",{className:C.a.footerBox,children:[!0===V&&Object(u.jsx)("button",{className:C.a.normalBtn,onClick:function(){X(!1)},children:"\uacb0\uacfc \ubcf4\uae30"}),!0!==V&&Object(u.jsx)(E,{result:r,reset:e.reset,block:V})]})]})},w=n(14),q=n.n(w),y=function(e){var t=Object(c.useState)({}),n=Object(i.a)(t,2),s=n[0],a=n[1],r=Object(c.useRef)(null),j=Object(c.useRef)(null),o=e.question.qitemNo,l={},b="",O=0,h=function(t){l[e.question.qitemNo]=t.target.value,a(l)};return e.progressPer(s),e.result(s),e.settingKey===o&&("7"===e.pp[o]?(b=!0,O++):"1"===e.pp[o]?(b=!1,O++):(b="",O=0)),Object(c.useEffect)((function(){void 0!==e.confirm&&e.confirm(O)})),Object(u.jsxs)("ul",{className:q.a.selectBox,children:[Object(u.jsx)("div",{children:Object(u.jsx)("p",{className:q.a.ask,children:e.question.question})}),Object(u.jsxs)("div",{className:q.a.radios,children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(d.a)(Object(d.a)({type:"radio",name:o,value:"1"},!1===b?{checked:!0}:{}),{},{ref:j,onChange:h})),"\uc804\ud600 \uadf8\ub807\uc9c0 \uc54a\ub2e4"]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(d.a)(Object(d.a)({type:"radio",name:o,value:"7"},!0===b?{checked:!0}:{}),{},{ref:r,onChange:h})),"\ub9e4\uc6b0 \uadf8\ub807\ub2e4"]})]})]})},T=n(11),I=n.n(T),P=function(e){var t=Object(c.useState)(!0),n=Object(i.a)(t,2),s=n[0],a=n[1],r=Object(o.f)(),j=Object(c.useRef)(null),l=Object(c.useRef)(null),b=e.questions.map((function(e){return e})),O=0,d=Object(c.useState)(0),h=Object(i.a)(d,2),x=h[0],m=h[1],f=b.slice(0,5),_=b.slice(5,10),g=b.slice(10,15),v=b.slice(15,20),S=b.slice(20,25),N=b.slice(25,30),C=b.slice(30,35),E=b.slice(35,40),B=b.slice(40,45),k=b.slice(45),A=Object(c.useState)(b.slice(0,5)),R=Object(i.a)(A,2),w=R[0],q=R[1],T=Object(c.useState)(0),P=Object(i.a)(T,2),M=P[0],F=P[1],H=function(e){F(O+=e),M===w.length&&a(!1)};Object(c.useEffect)((function(){M<w.length&&a(!0)}));var K=function(){var t=e.pp.filter((function(e){return null!==e})).length;m(t)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:I.a.testTitle,ref:l,children:"\uac80\uc0ac\uc9c4\ud589"}),Object(u.jsx)(p,{progress:x}),Object(u.jsx)(u.Fragment,{children:w.map((function(t){return Object(u.jsx)(y,{question:t,result:e.result,pp:e.pp,settingKey:t.qitemNo,progressPer:K,confirm:H},t.qitemNo)}))}),Object(u.jsxs)("div",{className:I.a.footerBox,children:[Object(u.jsx)("button",{className:I.a.backBtn,onClick:function(){"6"==w[0].qitemNo?q(f):"11"==w[0].qitemNo?q(_):"16"==w[0].qitemNo?q(g):"21"==w[0].qitemNo?q(v):"26"==w[0].qitemNo?q(S):"31"==w[0].qitemNo?q(N):"36"==w[0].qitemNo?q(C):"41"==w[0].qitemNo?q(E):"46"==w[0].qitemNo?q(B):r("/example"),a(!1)},children:"\uc774\uc804"}),Object(u.jsx)("button",{className:s?I.a.nextBtn:I.a.normalBtn,onClick:function(){"1"==w[0].qitemNo?q(_):"6"==w[0].qitemNo?q(g):"11"==w[0].qitemNo?q(v):"16"==w[0].qitemNo?q(S):"21"==w[0].qitemNo?q(N):"26"==w[0].qitemNo?q(C):"31"==w[0].qitemNo?q(E):"36"==w[0].qitemNo?q(B):"41"==w[0].qitemNo?q(k):"46"==w[0].qitemNo&&r("/result")},ref:j,children:"\ub2e4\uc74c"})]})]})};var M=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),r=Object(i.a)(a,2),l=r[0],b=r[1],d=Object(c.useState)(""),h=Object(i.a)(d,2),x=h[0],m=h[1],f=Object(c.useState)(0),p=Object(i.a)(f,2),g=p[0],v=p[1],S=Object(c.useState)({}),N=Object(i.a)(S,2),C=N[0],E=N[1],B=Object(c.useState)(!1),k=Object(i.a)(B,2),A=(k[0],k[1]);Object(c.useEffect)((function(){var e=new Headers;e.append("Cookie","KHANUSER=x2oaif0mgo88c2");var t={method:"GET",headers:e,redirect:"follow"};fetch("https://www.career.go.kr/inspct/openapi/test/questions?q=19&apikey=".concat("d6f3d4bf1ef57c0489ae941a704165e8"),t).then((function(e){return e.json()})).then((function(e){return s(e.RESULT)})).catch((function(e){return console.log("error",e)}))}),[]);var w=function(e,t){E({name:e,gender:t})};return Object(u.jsx)(j.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,element:Object(u.jsx)(O,{user:w})}),Object(u.jsx)(o.a,{path:"/login",element:Object(u.jsx)(O,{user:w})}),Object(u.jsx)(o.a,{path:"/example",element:Object(u.jsx)(_,{exp:function(e){var t=e;v(null!==t?1:0),m(t)},exam:x,exdata:g})}),Object(u.jsx)(o.a,{path:"/test",element:Object(u.jsx)(P,{questions:n,result:function(e){var t=Object.assign(l,e);b(t)},pp:l})}),Object(u.jsx)(o.a,{path:"/result",element:Object(u.jsx)(R,{users:C,result:l,reset:function(e){A(e),b([]),m(""),v(0)}})})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root")),F()}],[[25,1,2]]]);
//# sourceMappingURL=main.d83112b2.chunk.js.map
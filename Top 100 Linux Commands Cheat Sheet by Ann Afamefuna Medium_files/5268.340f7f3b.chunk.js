(self.webpackChunklite=self.webpackChunklite||[]).push([[5268],{353:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var i=t(67294);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var o=i.createElement("path",{d:"M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z",fill:"#292929"});const r=function(e){return i.createElement("svg",a({width:25,height:25,viewBox:"0 0 25 25",fill:"none"},e),o)}},59250:(e,n,t)=>{"use strict";t.d(n,{MA:()=>l,Zh:()=>s,jM:()=>u});var i=t(63038),a=t.n(i),o=t(67294),r={mutedAuthorIds:[],setMutedAuthorIds:function(){},mutedPubIds:[],setMutedPubIds:function(){},dismissedPostIds:[],setDismissedPostIds:function(){},isMutingFromHomeFeed:!0,seeLessPostIds:[],setSeeLessPostIds:function(){}},l=function(e,n,t,i,a){return e.filter((function(e){var o,r,l=null==e?void 0:e.post;return!!l&&!(n.includes(null===(o=l.creator)||void 0===o?void 0:o.id)||t.includes(null===(r=l.collection)||void 0===r?void 0:r.id)||i.includes(l.id)||a.includes(l.id))}))},d=(0,o.createContext)(r),s=function(e){var n=e.children,t=(0,o.useState)(r.mutedAuthorIds),i=a()(t,2),l=i[0],s=i[1],u=(0,o.useState)(r.mutedPubIds),c=a()(u,2),m=c[0],k=c[1],p=(0,o.useState)(r.dismissedPostIds),v=a()(p,2),f=v[0],b=v[1],S=(0,o.useState)(r.seeLessPostIds),E=a()(S,2),N=E[0],y=E[1],g=r.isMutingFromHomeFeed;return o.createElement(d.Provider,{value:{mutedAuthorIds:l,setMutedAuthorIds:s,mutedPubIds:m,setMutedPubIds:k,dismissedPostIds:f,setDismissedPostIds:b,isMutingFromHomeFeed:g,seeLessPostIds:N,setSeeLessPostIds:y}},n)},u=function(){return(0,o.useContext)(d)}},82864:(e,n,t)=>{"use strict";t.d(n,{W:()=>i});var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Star_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}},84130:(e,n,t)=>{"use strict";t.d(n,{G:()=>r});var i=t(319),a=t.n(i),o=t(57477),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBookmarkButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBase_post"}}]}}].concat(a()(o._C.definitions))}},70929:(e,n,t)=>{"use strict";t.d(n,{o:()=>I});var i=t(67154),a=t.n(i),o=t(6479),r=t.n(o),l=t(59713),d=t.n(l),s=t(67294),u=t(6443),c=t(26350),m=t(78817),k=t(30020),p=t(87691),v=t(14646),f=t(75221),b=t(353),S=t(65331),E=t(62212);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){d()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=function(e){return{"& svg path":{fill:e.colorTokens.foreground.neutral.secondary.base}}},C=function(e,n,t){switch(e){case"ICON_TEXT":return function(e,n){return function(t){return y(y({border:"1px solid ".concat(t.colorTokens.border.neutral.primary.base),borderRadius:"99em",padding:"6px 15px 6px 10px",display:"flex",alignItems:"center",":hover":{borderColor:t.colorTokens.border.neutral.tertiary.base},"& svg":{marginRight:"8px"},cursor:n?"not-allowed":"pointer",opacity:n?.3:void 0},g(t)),e)}}(n,t);case"ICON_SUBTLE":default:return function(e,n){return function(t){var i=t.colorTokens.foreground.neutral.primary.hover,a=t.colorTokens.foreground.neutral.secondary.base;return y(y({padding:"8px 2px",":hover:not(:disabled) svg path":{fill:n?a:i},":focus svg path":{fill:n?a:i},cursor:n?"not-allowed":"pointer",opacity:n?.3:void 0},g(t)),e)}}(n,t)}},F="Add to list bookmark button",h=function(e){var n=e.bookmarkIcon,t=e.buttonStyle,i=e.onClick,a=e.isPanelVisible,o=e.rules,r=e.disabled,l=e.testId;return s.createElement(m.P,{ariaControls:"addToCatalogBookmarkButton",ariaLabel:F,ariaExpanded:a?"true":"false",onClick:i,rules:C(t,o),disabled:r,testId:l},n,"ICON_TEXT"===t&&s.createElement(p.F,{scale:"M"},"Save"))};function I(e){var n=e.buttonStyle,t=void 0===n?"ICON":n,i=e.susiEntry,o=void 0===i?"list":i,l=e.susiActionUrl,d=e.rules,m=e.testId,N=r()(e,["buttonStyle","susiEntry","susiActionUrl","rules","testId"]),y=(0,v.I)(),g=(0,u.H)(),I=g.value,P=g.loading,T=N.kind===f.ej.POST,D=T?N.target.isPublished:void 0;return T&&!D?s.createElement(k._,{placement:"top",targetDistance:10,tooltipText:"You cannot Save a draft"},s.createElement("div",{className:y(C(t,d,!0)),"data-testid":m},s.createElement(b.Z,{className:y(E.K),"aria-label":F,disabled:!0}),"ICON_TEXT"===t&&s.createElement(p.F,{scale:"M"},"Save"))):P||I?s.createElement(k._,{placement:"top",targetDistance:10,tooltipText:"Save"},s.createElement(S.a,a()({},N,{viewer:I}),(function(e){var n=e.onClick,i=e.bookmarkIcon,a=e.isPanelVisible,o=e.isDisabled;return s.createElement(h,{buttonStyle:t,bookmarkIcon:i,onClick:n,isPanelVisible:a,rules:d,disabled:o,testId:m})}))):s.createElement(k._,{placement:"top",targetDistance:10,tooltipText:"Save"},s.createElement(c.R,{operation:"register",susiEntry:o,actionUrl:l,testId:m},s.createElement(h,{buttonStyle:t,rules:d,bookmarkIcon:s.createElement(b.Z,{className:y(E.K),"aria-label":F})})))}},93403:(e,n,t)=>{"use strict";t.d(n,{z:()=>l});var i=t(319),a=t.n(i),o=t(98007),r=t(84130),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BookmarkButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBookmarkButton_post"}}]}}].concat(a()(o.qU.definitions),a()(r.G.definitions))}},50455:(e,n,t)=>{"use strict";t.d(n,{e:()=>p});var i=t(67294),a=t(70929),o=t(62212),r=t(6443),l=t(26350),d=t(30020),s=t(14646),u=t(75221),c=t(43487),m=t(353),k=t(50458);function p(e){var n=e.post,t=e.withReadingListTooltip,p=void 0===t||t,v=e.susiEntry,f=e.rules,b=e.targetDistance,S=void 0===b?10:b,E=n.id,N=n.visibility,y=(0,s.I)(),g=(0,c.v9)((function(e){return e.config.authDomain})),C=(0,r.H)(),F=C.value;return C.loading||N===u.Wn.UNLISTED?null:F?i.createElement(a.o,{kind:u.ej.POST,target:n,rules:f}):i.createElement(d._,{isVisible:p,placement:"top",targetDistance:S,tooltipText:"Bookmark story"},i.createElement(l.R,{post:n,operation:"register",actionUrl:(0,k.XE)(g,E),susiEntry:v},i.createElement(m.Z,{className:y([o.K,f])})))}},36579:(e,n,t)=>{"use strict";t.d(n,{D:()=>l});var i=t(319),a=t.n(i),o=t(46732),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ExpandablePostCardReaderButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"ClapMutation_post"}}]}}].concat(a()(o.JP.definitions))},l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ExpandablePostCardOverflowButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"ExpandablePostCardReaderButton_post"}}]}}].concat(a()(r.definitions))}},78060:(e,n,t)=>{"use strict";t.d(n,{u:()=>le});var i=t(67294),a=t(67154),o=t.n(a),r=t(63038),l=t.n(r),d=t(59713),s=t.n(d),u=t(64718),c=t(14045),m=t(24415),k=t(75150),p=t(32947),v=t(70028),f=t(66021),b=t(70679),S=t(16880),E=t(49989),N=t(85965),y=t(31048),g=t(74302),C=t(6443),F=t(39507),h=t(18733),I=t(38352),P=t(96462),T=t(48517),D=t(51066),O=t(1383),w=t(73917),x=t(93310),M=t(94631),_=t(87691),j=t(14646),V=t(92661),A=t(75221),R=t(43487),B=t(43303),U=t(68894),L=t(50458),H=t(319),K=t.n(H),W=t(36736),q=t(91727),X=t(48172),Q={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ExpandablePostCardEditorWriterButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}}]}},{kind:"Field",name:{kind:"Name",value:"allowResponses"}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"responseDistribution"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useIsPinnedInContext_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CopyFriendLinkMenuItem_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"NewsletterV3EmailToSubscribersMenuItem_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"OverflowMenuItemUndoClaps_post"}}]}}].concat(K()(W.x.definitions),K()([{kind:"FragmentDefinition",name:{kind:"Name",value:"CopyFriendLinkMenuItem_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]),K()(q.S.definitions),K()(X.g.definitions))},z={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ExpandablePostCardEditorWriterButtonQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"post"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ExpandablePostCardEditorWriterButton_post"}}]}}]}}].concat(K()(Q.definitions))};function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var J=function(e){var n=(0,u.a)(z,{variables:{postId:e.post.id}}).data;if(null==n||!n.post)return null;var t=G(G({},e),{},{post:n.post});return i.createElement($,t)},$=function(e){var n=e.post,t=e.publisherContext,a=e.isEditor,r=e.isWriter,d=e.creator,s=(0,j.I)(),u=(0,h.Uo)(),H=(0,R.v9)((function(e){return e.config.authDomain})),K=n.id,W=n.collection,q=n.responseDistribution,X=n.visibility,Q=n.mediumUrl,z=n.allowResponses,Z=(0,C.H)().value,G=null==Z?void 0:Z.id,J=null==d?void 0:d.id,$=(0,F.T)(n).viewerEdge,Y=W||{id:"",name:""},ee=Y.id,ne=Y.name,te=(0,U.O)(!1),ie=l()(te,3),ae=ie[0],oe=ie[1],re=ie[2],le=(0,y.n_)(n,t),de=l()(le,2),se=de[0],ue=de[1],ce=i.useState(""),me=l()(ce,2),ke=me[0],pe=me[1],ve=i.useCallback((function(){re(),ue().then((function(e){var n=e.errors;n&&n.length&&n[0].message?pe(n[0].message):window.location.reload()}))}),[re,ue,pe]),fe=(0,N.yb)(n),be=(0,U.O)(!1),Se=l()(be,3),Ee=Se[0],Ne=Se[1],ye=Se[2],ge=i.useCallback((function(){fe(W).then((function(){return window.location.reload()}))}),[ee,fe]),Ce=(0,v.j)(K),Fe=l()(Ce,1)[0],he=(0,U.O)(!1),Ie=l()(he,3),Pe=Ie[0],Te=Ie[1],De=Ie[2],Oe=(0,V.qt)("ShowHome",{}),we=i.useCallback((function(){Fe().then((function(){window.location.assign(Oe)}))}),[Fe,Oe]),xe=q===A.Et.DISTRIBUTED,Me=(0,U.O)(!1),_e=l()(Me,3),je=_e[0],Ve=_e[1],Ae=_e[2],Re={buttonStyle:"ERROR",cancelText:"Cancel"},Be="ExpandablePostCardEditorWriterMenu",Ue="Delete story".concat(xe?" and response":""),Le=xe?g.Q:i.createElement(c.M,null),He="LOCKED"===X,Ke="User"===t&&r||"Collection"===t&&a,We=function(){xe&&(re(),Ve())};return i.createElement(i.Fragment,null,i.createElement(O.Q,o()({},Re,{isVisible:Ee,onConfirm:ge,hide:ye,titleText:"Remove story",confirmText:"Remove",isDestructiveAction:!0}),"Are you sure you want to remove this story from ",ne,"?"),i.createElement(O.Q,o()({},Re,{isVisible:Pe,onConfirm:we,hide:De,titleText:Ue,confirmText:"Delete",isDestructiveAction:!0}),Le),i.createElement(O.Q,{buttonStyle:"STRONG",cancelText:"Cancel",isVisible:je,onConfirm:function(){var e=(0,L.d0)(H,K);window.location.replace(e)},hide:Ae,titleText:"Edit story and response",confirmText:"Continue",isDestructiveAction:!1},g.t),i.createElement(w.J,{ariaId:Be,hide:re,isVisible:ae,popoverRenderFn:function(){return i.createElement(I.mX,null,i.createElement(p.l,{type:"popover",handleClick:We,href:(0,L.d0)(H,K)},"Edit story"),(a||r&&"User"===t)&&i.createElement(I.Sl,null,i.createElement(x.r,{onClick:ve},se?"Unpin":"Pin"," story")),i.createElement(b.w,{post:n,onClick:re,menuStyle:"TEXT"}),i.createElement(I.oK,null),i.createElement(I.Sl,null,i.createElement(x.r,{href:(0,L.KI)(H,K)},"Story settings")),i.createElement(I.Sl,null,i.createElement(x.r,{href:(0,L.T0)(H,K)},"Story stats")),He&&Q&&(null==$?void 0:$.shareKey)&&i.createElement(S.$,{post:n,shareKey:null==$?void 0:$.shareKey}),i.createElement(I.oK,null),Ke?i.createElement(E.r,{hidePopover:re,postId:n.id,allowResponses:z}):null,ee&&i.createElement(I.Sl,null,i.createElement(x.r,{onClick:Ne},"Remove story from publication")),r&&i.createElement(I.Sl,null,i.createElement("div",{className:s({color:u.baseTheme.colorTokens.foreground.error.primary.base})},i.createElement(x.r,{onClick:(0,B.B)(re,Te)},"Delete story"))),a&&!r&&i.createElement(i.Fragment,null,i.createElement(I.oK,null),i.createElement(k.T,{post:n,hidePopover:re}),i.createElement(D.z,{targetUserId:J,postId:n.id,hidePopover:re,viewerId:G}),i.createElement(f.q,{hidePopover:re,creator:d}),i.createElement(P.F,{hidePopover:re,creator:d,viewer:Z}),i.createElement(T.j,{hidePopover:re,creator:d,viewer:Z})))}},i.createElement(m.c,{ariaControls:Be,ariaExpanded:ae?"true":"false",ariaLabel:"More options",onClick:oe,tooltipText:"More"})),i.createElement(M.F,{isVisible:!!ke,hide:function(){return pe("")},duration:5e3},i.createElement(_.F,{scale:"M"},ke)))},Y=t(27517),ee=t(59250),ne=t(13195),te=t(25550),ie=t(83486),ae=t(51681),oe=function(e){var n=e.post,t=e.viewer,a=n.creator,o=null==a?void 0:a.id,r=(0,U.O)(!1),d=l()(r,3),s=d[0],u=d[1],c=d[2],k="expandablePostCardReaderMenu",p=(0,te.r)().viewerId,v=(0,F.T)(n).viewerEdge,b=(0,ee.jM)(),S=b.mutedAuthorIds,E=b.setMutedAuthorIds,N=b.mutedPubIds,y=b.setMutedPubIds,g=b.isMutingFromHomeFeed,C=i.useCallback((function(e){E([].concat(K()(S),[e]))}),[S]),h=i.useCallback((function(e){y([].concat(K()(N),[e]))}),[N]),O=(0,Y.I0)(),M=i.useCallback((function(e){return O((0,ie.at)(e))}),[O]),_=(0,R.b$)((function(e){return e.multiVote.clapsPerPost})),j=(0,ae.l)(_,n,v),V=j.clapCount,A=j.viewerClapCount,B=(0,ne.C)();if(!o)return null;var L=p&&V&&A&&A>0;return i.createElement(w.J,{ariaId:k,hide:c,isVisible:s,popoverRenderFn:function(){return i.createElement(I.mX,null,!!L&&i.createElement(I.Sl,null,i.createElement(x.r,{onClick:function(){return B(n,(null==t?void 0:t.id)||"",-A,v),M({postId:n.id,clapCount:V-A,viewerClapCount:0,viewerHasClappedSinceFetch:!0}),void c()}},"Undo applause for this post")),i.createElement(D.z,{targetUserId:o,postId:n.id,hidePopover:c,viewerId:p}),i.createElement(f.q,{hidePopover:c,creator:a,setMutedAuthorId:C,setMutedPubId:h,isMutingFromHomeFeed:g}),i.createElement(P.F,{hidePopover:c,creator:a,viewer:t}),i.createElement(T.j,{hidePopover:c,creator:a,viewer:t}))}},i.createElement(m.c,{ariaControls:k,ariaExpanded:s?"true":"false",ariaLabel:"More options",onClick:u,tooltipText:"More"}))},re=t(39727),le=function(e){var n=e.post,t=e.publisherContext,a=(0,C.H)().value,o=(0,re.g)(n.collection).viewerEdge,r=!(null==o||!o.isEditor),l=n.creator,d=(null==a?void 0:a.id)===(null==l?void 0:l.id);return a?r||d?i.createElement(J,{post:n,isEditor:r,isWriter:d,publisherContext:t,creator:l}):i.createElement(oe,{post:n,viewer:a}):null}},48342:(e,n,t)=>{"use strict";t.d(n,{K:()=>l});var i=t(67294),a=t(14646),o=t(21372),r=function(e){return{color:e.colorTokens.foreground.neutral.secondary.base}},l=function(e){var n=e.readingTime,t=e.isLighterText,l=void 0!==t&&t,d=(0,a.I)();if(!n)return null;var s="".concat((0,o.Vd)(n)," min read");return i.createElement("span",{className:l?d(r):void 0},s)}},10654:(e,n,t)=>{"use strict";t.d(n,{x:()=>l,A:()=>d});var i=t(319),a=t.n(i),o=t(98007),r=t(1877),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MultiVote_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_user"}}]}},{kind:"Field",name:{kind:"Name",value:"isPublished"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_post"}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"slug"}}]}},{kind:"Field",name:{kind:"Name",value:"isLimitedState"}},{kind:"FragmentSpread",name:{kind:"Name",value:"MultiVoteCount_post"}}]}}].concat(a()(o.Vm.definitions),a()(o.qU.definitions),a()(r.U.definitions))},d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ClapCountQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"clapCount"}}]}}]}}]}}]}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5268.340f7f3b.chunk.js.map
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8136],{18136:function(t,n,e){e.d(n,{c:function(){return V}});var i=e(92228),a=e(52322),r=e(30382),o=e.n(r),c=e(2784),l=e(45103),u=e(95128),s=e(31619),d=e(89254),f=e(47842),g=e(70865),m=e(72779),p=e.n(m),x=e(19453),h=e(91842),v={id:"common_ariaLabels_gotoTitle",defaultMessage:"View title page for {titleName}"},T={id:"common_ariaLabels_ratingButtonRated",defaultMessage:"Your rating: {rating}"},y={id:"common_ariaLabels_ratingButtonUnrated",defaultMessage:"Rate {titleName}"},b={id:"common_ratingPrompt_header",defaultMessage:"Rate this"},R={id:"common_ratingPrompt_rate",defaultMessage:"Rate"},C={id:"common_ratingPrompt_removeRating",defaultMessage:"Remove rating"},N={id:"common_ratingPrompt_ariaLabelPrefix",defaultMessage:"Rating"},_={id:"common_buttons_trailer",defaultMessage:"Trailer"};function P(){var t=(0,i.Z)(["\n    display: flex;\n    width: 100%;\n    align-items: center;\n    padding: "," 0;\n    margin-bottom: -1rem;\n\n    &.justify--space-between {\n        justify-content: space-between;\n    }\n\n    &.justify--space-around {\n        justify-content: space-around;\n    }\n\n    &.justify--left {\n        justify-content: flex-start;\n    }\n\n    &.justify--right {\n        justify-content: flex-end;\n    }\n\n    &.both-card-actions {\n        > .card-action-button {\n            margin-left: -0.25rem;\n            padding-right: 0.5rem;\n            padding-left: 0.5rem;\n        }\n        > .card-action-icon {\n            margin-right: -0.25rem;\n        }\n    }\n\n    > .card-action-button {\n        text-overflow: ellipsis;\n        overflow: hidden;\n    }\n"]);return P=function(){return t},t}var w;!function(t){t.SPACE_BETWEEN="space-between",t.SPACE_AROUND="space-around",t.RIGHT="right",t.LEFT="left"}(w||(w={}));var j=function(t){var n=t.title.latestTrailerId,e=t.refPrefix,i=t.refSuffix,r=t.iconButtons,o=(0,s.N)(_),c=(0,s.N)(_),u=[];if(n){var d="/video/".concat(n,"/?ref_=").concat(e,"tr_vp").concat(i);u.push({preIcon:"play-arrow",onColor:"textPrimary",href:d,ariaLabel:o,children:(0,a.jsx)("div",{className:"trailers-button-text","data-testid":"trailer-button",children:c})})}var m=w.SPACE_AROUND;if(1===(null===r||void 0===r?void 0:r.length)&&u.length<1&&(m=w.RIGHT),!(null===r||void 0===r?void 0:r.length)&&!u.length)return null;var x=p()(["justify--".concat(m)],(0,f.Z)({},"both-card-actions",(null===r||void 0===r?void 0:r.length)&&u.length));return(0,a.jsxs)(I,{className:x,children:[u.map((function(t,n){return(0,a.jsx)(l.TextButton,(0,g.Z)({className:p()("card-action-button",t.className)},t),n)})),null===r||void 0===r?void 0:r.map((function(t,n){return(0,a.jsx)(l.IconButton,(0,g.Z)({className:p()("card-action-icon",t.className)},t),n)}))]})},I=x.default.div.withConfig({componentId:"sc-3a643f09-0"})(P(),h.spacing.xs),Z=e(96670),B=e(13813),S=e(58267);function L(){var t=(0,i.Z)(["\n    max-height: ",";\n    max-width: ",";\n    vertical-align: middle;\n"]);return L=function(){return t},t}var k=function(t){var n=t.title.id,e=t.alternateButton,i=t.refPrefix,r=t.refSuffix,o=(0,B.y)(),c=o.pageType,u=o.subPageType;if(e){var s=(0,Z.Z)((0,g.Z)({},e.props),{width:"full-width"});return(0,a.jsx)(l.SecondaryButton,(0,Z.Z)((0,g.Z)({},s),{children:e.fetching?(0,a.jsx)(M,{className:"alternate-button-loader",type:"circle"}):e.text}))}return(0,a.jsx)(S.Z,{titleId:n,watchlistMetricsContext:{pageType:c,subPageType:u,refTag:"".concat(i,"wl_btn").concat(r)}},n)},M=(0,x.default)(l.Loader).withConfig({componentId:"sc-43e87107-0"})(L(),h.spacing.xl,h.spacing.xl),U=e(98788),D=e(45680),E=e(89363),F=e(61436),W=e(92281),A=e(90551),O=e(95460),$=e(26688);function Y(){var t=(0,i.Z)(["\n    min-height: 36px;\n"]);return Y=function(){return t},t}var z=function(t){var n=t.className,e=t.title,i=e.id,r=e.titleText,o=e.ratingsSummary,u=e.canRate,d=t.refPrefix,f=t.refSuffix,g=(0,c.useState)(!1),m=g[0],p=g[1],x=(0,A.n)(),h=(0,l.useRatingsContext)(i),v=h.rating,_=h.updateRating,P=h.deleteRating,w=(0,F.P)(o,"imdb"),j=(0,F.P)(v,"user"),I="".concat(d,"rt").concat(f),Z="".concat(d.replace(/_/g,"-")).concat("urate"),S=(0,B.F)((0,B.y)()),L=u?function(){(0,O.ar)(S,Z,O.qB.POP_UP),p(!0)}:void 0,k=(0,W.vY)({titleId:i,refTag:I,currentRating:v}),M=k.updateTitleRating,Y=k.deleteTitleRating,z=k.tempRateUpdateLogRef,G=(0,s.N)(T,{rating:j}),q=(0,s.N)(y,{titleName:r}),K=(0,s.N)(b),V=(0,s.N)(R),J=(0,s.N)(C),Q=(0,s.N)(N);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(H,{className:n,formattedImdbRating:w,formattedUserRating:j,onUserRatingClick:L,ariaLabelRated:G,ariaLabelUnrated:q}),L&&(0,a.jsx)(l.RatingPrompt,{isOpen:m,tconst:i,title:r,headerLabel:K,rateLabel:V,ariaLabelPrefix:Q,shouldUseNewRatingFlow:!0,secondaryButtonText:J,secondaryButtonType:E.uu.RemoveRating,onPrimaryButtonClicked:function(){var t=(0,U.Z)((function(t,n){return(0,D.__generator)(this,(function(e){switch(e.label){case 0:return t?x?(p(!1),_(t,I,(function(){return M(t,n)})),[3,3]):[3,1]:(p(!1),[2]);case 1:return[4,z(t,n)];case 2:e.sent(),(0,$.O)(t,n,I,S),e.label=3;case 3:return[2]}}))}));return function(n,e){return t.apply(this,arguments)}}(),onSecondaryButtonClicked:function(){var t=(0,U.Z)((function(t,n){return(0,D.__generator)(this,(function(t){return p(!1),P(I,(function(){return Y(n)})),[2]}))}));return function(n,e){return t.apply(this,arguments)}}(),onCloseClicked:function(){p(!1)}})]})},H=(0,x.default)(l.PosterCard.RatingStarGroup).withConfig({componentId:"sc-a885001d-0"})(Y());function G(){var t=(0,i.Z)(["\n        fragment BaseTitleCard on Title {\n            id\n            titleText {\n                text\n            }\n            titleType {\n                id\n                text\n                canHaveEpisodes\n                displayableProperty {\n                    value {\n                        plainText\n                    }\n                }\n            }\n            originalTitleText {\n                text\n            }\n            primaryImage {\n                id\n                width\n                height\n                url\n                caption {\n                    plainText\n                }\n            }\n            releaseYear {\n                year\n                endYear\n            }\n            ratingsSummary {\n                aggregateRating\n                voteCount\n            }\n            runtime {\n                seconds\n            }\n            certificate {\n                rating\n            }\n            canRate {\n                isRatable\n            }\n            titleGenres {\n                genres(limit: 3) {\n                    genre {\n                        text\n                    }\n                }\n            }\n            canHaveEpisodes\n        }\n    "]);return G=function(){return t},t}function q(){var t=(0,i.Z)(["\n        fragment TitleCardTrailer on Title {\n            latestTrailer {\n                id\n            }\n        }\n    "]);return q=function(){return t},t}function K(){var t=(0,i.Z)(["\n        fragment PersonalizedTitleCardUserRating on Title {\n            userRating @include(if: $includeUserRating) {\n                value\n            }\n        }\n    "]);return K=function(){return t},t}var V=function(t){var n=t.data,e=n.id,i=n.titleText,r=n.originalTitleText,o=n.titleType,c=n.primaryImage,f=n.ratingsSummary,g=n.canRate,m=n.latestTrailer,p=t.refMarker,x=void 0===p?{}:p,h=x.prefix,T=void 0===h?"":h,y=x.suffix,b=void 0===y?"":y,R=T?"".concat(T,"_"):"",C=T?"_".concat(b):"",N=(0,d.K)({originalTitleText:r,titleText:i}),_=(0,s.N)(v,{titleName:N}),P="/title/".concat(e,"/?ref_=").concat(R,"tt_t").concat(C),w="string"===typeof t.className?t.className:void 0;return N&&o?(0,a.jsxs)(l.PosterCard,{dynamicWidth:!0,className:w,children:[(0,a.jsx)(u.y,{title:{id:e,titleText:N,titleTypeId:o.id,image:{url:null===c||void 0===c?void 0:c.url,height:null===c||void 0===c?void 0:c.height,width:null===c||void 0===c?void 0:c.width}},onClick:t.onClick,refPrefix:R,refSuffix:C}),(0,a.jsx)(z,{title:{id:e,titleText:N,ratingsSummary:null===f||void 0===f?void 0:f.aggregateRating,canRate:null===g||void 0===g?void 0:g.isRatable},refPrefix:R,refSuffix:C}),(0,a.jsx)(l.PosterCard.Title,{href:P,onClick:t.onClick,ariaLabel:_,children:(0,a.jsx)("span",{"data-testid":"title",children:N})}),(0,a.jsxs)(l.PosterCard.Actions,{children:[(0,a.jsx)(k,{title:{id:e},alternateButton:t.alternateButton,refPrefix:R,refSuffix:C}),(0,a.jsx)(j,{title:{latestTrailerId:null===m||void 0===m?void 0:m.id},refPrefix:R,refSuffix:C,iconButtons:t.iconButtons})]})]}):null};V.fragments={baseTitleCard:o()(G()),titleCardTrailer:o()(q()),personalizedTitleCardUserRating:o()(K())}},95128:function(t,n,e){e.d(n,{y:function(){return l}});var i=e(52322),a=(e(2784),e(45103)),r=e(31619),o=e(13813),c=e(23104),l=function(t){var n=t.className,e=t.title,l=e.id,u=e.titleText,s=e.titleTypeId,d=e.image,f=d.url,g=d.height,m=d.width,p=t.onClick,x=t.refPrefix,h=t.refSuffix,v="/title/".concat(l,"/?ref_=").concat(x,"tt_i").concat(h),T=(0,o.y)(),y=T.pageType,b=T.subPageType,R=(0,r.N)({id:"common_ariaLabels_gotoTitle",defaultMessage:"View title page for {titleName}"},{titleName:u});return(0,i.jsxs)(a.PosterCard.Poster,{href:v,ariaLabel:R,onClick:p,className:n,children:[(0,i.jsx)(c.Z,{titleId:l,watchlistMetricsContext:{pageType:y,subPageType:b,refTag:"".concat(x,"wl_rbn").concat(h)},onPoster:!0,className:"poster-card-watchlist-ribbon"},l),(0,i.jsx)(a.Poster.Image,{imageModel:f&&g&&m?{url:f,maxHeight:g,maxWidth:m,caption:u}:void 0,imageType:s,className:"poster-card-image",dynamicAspectRatio:!1})]})}},58267:function(t,n,e){e.d(n,{f:function(){return s}});var i=e(92228),a=e(52322),r=(e(2784),e(19453)),o=e(45103),c=e(75467),l=e(31619);function u(){var t=(0,i.Z)(["\n    max-height: 30px;\n    max-width: 30px;\n    vertical-align: middle;\n"]);return u=function(){return t},t}var s=function(t){var n=t.titleId,e=t.watchlistMetricsContext,i=(0,l.N)({id:"common_buttons_watchlist",defaultMessage:"Watchlist"});return(0,a.jsx)(c.WatchlistConsumer,{id:n,metricsContext:e,render:function(t){var n=t.inWatchlist,e=t.isLoading,r=t.onClick,c=(0,a.jsx)(o.SecondaryButton,{onClick:r,preIcon:n?"done":"add",width:"full-width",children:i});return e&&(c=(0,a.jsx)(o.SecondaryButton,{onClick:r,width:"full-width",children:(0,a.jsx)(d,{"data-testid":"watchlist-button-loader",type:"circle"})})),c}})},d=(0,r.default)(o.Loader).withConfig({componentId:"sc-981e94be-0"})(u());n.Z=s},23104:function(t,n,e){var i=e(70865),a=e(96670),r=e(52322),o=(e(2784),e(45103)),c=e(75467);n.Z=function(t){var n=t.titleId,e=t.watchlistMetricsContext,l=t.onPoster,u=t.onImage,s=void 0===u||u,d=t.size,f=t.className;return(0,r.jsx)(c.WatchlistConsumer,{id:n,metricsContext:e,render:function(t){return l?(0,r.jsx)(o.Poster.WatchlistRibbon,(0,a.Z)((0,i.Z)({},t),{className:f,size:d})):(0,r.jsx)(o.WatchlistRibbon,(0,a.Z)((0,i.Z)({},t),{className:f,onImage:s,size:d}))}})}},61436:function(t,n,e){e.d(n,{P:function(){return r}});var i=e(73857),a={default:{maximumFractionDigits:1,minimumFractionDigits:1},imdb:{maximumFractionDigits:1,minimumFractionDigits:1},user:{maximumFractionDigits:0,minimumFractionDigits:0}},r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",e=arguments.length>2?arguments[2]:void 0,r=(0,i.Z)();if(!t)return"";if(10===t)return"10";var o="user"===n?Math.trunc(t):Number(t.toFixed(1)),c=null!==e&&void 0!==e?e:a[n];return r.formatNumber(o,c)}},92281:function(t,n,e){e.d(n,{vY:function(){return x}});var i=e(98788),a=e(66383),r=e(92228),o=e(45680),c=e(30382),l=e.n(c),u=e(95460),s=e(25140),d=e(48543);function f(){var t=(0,r.Z)(["\n    mutation UpdateTitleRating($rating: Int!, $titleId: ID!) {\n        rateTitle(input: { rating: $rating, titleId: $titleId }) {\n            rating {\n                value\n            }\n        }\n    }\n"]);return f=function(){return t},t}function g(){var t=(0,r.Z)(["\n    mutation DeleteTitleRating($titleId: ID!) {\n        deleteTitleRating(input: { titleId: $titleId }) {\n            date\n        }\n    }\n"]);return g=function(){return t},t}var m=l()(f()),p=l()(g()),x=function(t){var n=(0,a.Z)((0,d.Z)(m),2),e=(n[0],n[1]),r=(0,a.Z)((0,d.Z)(p),2),c=(r[0],r[1]),l=(0,s.B)().context,f={type:l.pageType,subType:l.subPageType,id:t.titleId},g=function(n){(0,u.K8)(t.refTag,f,n,u.qB.ACTION_ONLY)},x=function(){var t=(0,i.Z)((function(t,n){var e;return(0,o.__generator)(this,(function(i){return e="".concat("tmp-rating-add","-").concat(n,"-").concat(t),g(e),[2]}))}));return function(n,e){return t.apply(this,arguments)}}();return{updateTitleRating:function(t,n){var i="".concat("rating-add","-").concat(n,"-").concat(t);return g(i),e({rating:t,titleId:n})},deleteTitleRating:function(t){var n="".concat("rating-del","-").concat(t);return g(n),c({titleId:t})},tempRateUpdateLogRef:x}}}}]);
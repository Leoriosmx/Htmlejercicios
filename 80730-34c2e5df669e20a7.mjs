"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[80730],{26616:(e,t,r)=>{r.d(t,{$S:()=>o,V$:()=>s,_4:()=>a,iY:()=>d,mR:()=>i});let o="REFRESH_ALL_EXPERIENCES_MULTI",s="UPDATE_EXPERIENCE_MULTI",i="FETCH_EXPERIENCES",a="REFRESH_ALL_EXPERIENCES",d="UPDATE_EXPERIENCE"},372085:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(216167);function s({url:e,method:t,data:r,ignoreBookmark:s,callOptions:i}){let a={url:e,data:r,...null!=s?{ignore_bookmark:s}:{},..."PATCH"===t?{patchInsteadOfPut:!0}:{}},d=o.Z.create("ApiResource",a);switch(t){case"POST":return d.callCreate(i);case"PUT":case"PATCH":return d.callUpdate(i);case"DELETE":return d.callDelete(i);default:return d.callGet(i)}}},201417:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e){return"object"==typeof e&&null!==e&&e.constructor===Object&&"[object Object]"===Object.prototype.toString.call(e)}},760890:(e,t,r)=>{r.d(t,{Z:()=>f,v:()=>_});var o=r(667294),s=r(685679),i=r(608029),a=r(367180),d=r(297329),n=r(107860),l=r(906623),c=r(279600),u=r(748058);let p=(0,i.XV)("GridProfiler"),_=()=>!!window.addEventListener&&!!window.removeEventListener&&(0,a.VZ)(),y=e=>"LAYOUT"===e.status&&500||"TIMING"===e.status&&100||null,E=(e,t)=>{if(!t){let t=(0,a.LM)();if(t===e)return p("No new items, so skip the viewport-fill check."),{complete:!1,numOfItemsChecked:e};if(!(0,a.F9)())return p("Viewport may not be filled yet."),{complete:!1,numOfItemsChecked:t}}return{complete:!0}},R=(e,t)=>{let r=0,o=0,s=0,i=0,a=0;return e=e.filter(e=>"pin"===e.type),t.forEach((t,d)=>{let n;let l=t.fileName.split(".")[0];n=e[d],l!==n?.image_signature&&(n=e.find(e=>l===e?.image_signature)),void 0===n?a+=1:n.is_promoted||n.recommendation_reason?.reason==="PROMOTED_PIN"||n?.promoter?.length?s+=1:null!==n.story_pin_data_id&&void 0!==n.story_pin_data_id?r+=1:n?.videos?.video_list?o+=1:i+=1}),{storyPinCount:r,videoCount:o,adCount:s,imageCount:i,unknownCount:a}},m=(e,t)=>{let r=()=>{window.removeEventListener(e,r),t()};return window.addEventListener(e,r),()=>window.removeEventListener(e,r)};function f({isAtEndOfFeed:e,pinData:t,includeBackgroundImages:r,includeVideos:_=!1,includeSections:f}){let I=(0,l.E)(),A=I?.getId(),g=I?.setVisuallyCompleteResult,[T,S]=(0,o.useState)({status:"DISABLED"});(0,o.useEffect)(()=>{g?S({status:"LAYOUT",failedCount:0,numOfItemsChecked:0}):S({status:"DISABLED"})},[A,g]),(0,o.useEffect)(()=>{if("DISABLED"!==T.status&&(0,n.ZP)(`GridVisuallyCompleteProfiler_${T.status}`),p("new status",T),"LAYOUT"===T.status){let e=m("scroll",()=>{(0,n.ZP)("scrollDuringLayout")});return()=>{e()}}return()=>{}},[T.status]),(0,u.Z)(()=>{if(!I||!g)return;let{abort:o,getMetricId:n}=I,l=n();switch(T.status){case"LAYOUT":{let t=E(T.numOfItemsChecked,e);t.complete?S({status:"TIMING",failedCount:0,pinElements:(0,a.cQ)(r,_,f)}):500*T.failedCount>6e4?((0,d.A9)(`images.${(0,s.KJ)(l)}.visuallyComplete.maxLayoutAttempt`),o("visuallyComplete_layoutTimeout"),S({status:"DISABLED"})):S({...T,failedCount:T.failedCount+1,numOfItemsChecked:t.numOfItemsChecked});break}case"TIMING":{let e=(0,c.Cg)(),r=T.pinElements.length,a=[],n=0,u=0,_=0;if(T.pinElements.forEach(({element:t,fileName:r})=>{let o=e.find(e=>e.name.endsWith(r));o?o.responseEnd?(a.push(o),(0,i.v5)(t,"green")):(_+=1,(0,i.v5)(t,"blue")):t instanceof HTMLImageElement&&t.complete?(u+=1,(0,i.v5)(t,"red")):(n+=1,(0,i.v5)(t,"greenyellow"))}),n||_)100*T.failedCount>6e4?((0,d.A9)(`images.${(0,s.KJ)(l)}.visuallyComplete.maxAttempt`,{tags:{totalImageCount:r,incompleteCount:n,noTimingCount:u,noTimingResponseEndCount:_}}),o("visuallyComplete_timingTimeout"),S({status:"DISABLED"})):S({...T,failedCount:T.failedCount+1});else{if(p(`All ${a.length} images are fetched`),t&&t.length){let e=R(t,T.pinElements);Object.entries(e).forEach(([e,t])=>{I.addBinaryAnnotation(e,t,"I16")}),(0,d.A9)(`${(0,s.KJ)(l)}.pinTypes`,{tags:e})}g({imageTimings:a}),S({status:"DISABLED"}),(0,d.A9)(`images.${(0,s.KJ)(l)}.visuallyComplete.complete`,{tags:{totalImageCount:r,noTimingCount:u}})}}}},y(T))}},466385:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e,t,r){let o=[...e],s=o.splice(t,1)[0];return o.splice(r,0,s),o}},689390:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e){if((e||"").includes("--")){let t=e.split("--"),r=t.pop();return{text:t.join("--"),pinId:r}}return{text:"",pinId:e}}},748058:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(667294);let s=(e,t)=>{let r=(0,o.useRef)(()=>{});(0,o.useEffect)(()=>{r.current=e},[e]),(0,o.useEffect)(()=>{if(null===t)return()=>{};let e=setInterval(()=>r.current(),t);return()=>clearInterval(e)},[t])}},923024:(e,t,r)=>{r.d(t,{L:()=>n,r:()=>d});var o=r(525364),s=r(447479),i=r(782005);let a=["search_articles_story","search_for_you_upsell","search_story_separator","search_story_landing_page_header","shop_tab_upsell","story_pins_search_upsell","structured_search_bubble","user_style_story_v2","guided_search_entry_points_story"];function d({query:e,rs:t,scope:r},a){let d=(0,o.BE)(),n=!d?.viewType&&!d?.viewParameter,l=(0,i.wF)(r);if(!n&&l){let{viewType:r,viewParameter:o}=d??{};a({event_type:l,view_type:r,view_parameter:o,aux_data:{query:e,rs:t||s.i.UNKNOWN}})}t===s.i.HASHTAG_CLOSEUP?a({event_type:101,component:13065,element:10273,view_type:142}):t===s.i.HASHTAG_PINREP&&a({event_type:101,component:0,element:10349,view_type:142})}let n=(e=[])=>{let t=!0;return e.reduce((e,r)=>(t&&r.story_type&&a.includes(r.story_type)&&r.display_options?.num_columns_requested===0?e.searchFullWidthStories.push(r):(t=!1,e.filteredResults.push(r)),e),{searchFullWidthStories:[],filteredResults:[]})}},670633:(e,t,r)=>{r.d(t,{J:()=>f,Z:()=>D});var o=r(466385),s=r(419821),i=r(414630),a=r(923024),d=r(945488),n=r(539426),l=r(949457),c=r(937310),u=r(29301);let p=new Set(["PinResource","RepinResource"]),_={ApiResource:e=>e?.url==="/v3/orientation/nux_creator_recommendations/"?"nux-creator-recommendations":e?.url==="/v3/users/me/interests/"?`recommended-interests:${e.data?.blend_type}`:"",AggregatedActivityFeedResource:e=>`trieditfeed:${e.aggregated_pin_data_id}`,AggregatedCommentFeedResource:e=>`aggregated-comments:${e.objectId}`,AggregatedCommentReplyFeedResource:e=>`${c.Z.AGGREGATED_COMMENT_REPLIES}:${e.objectId}`,BoardlessPinsResource:e=>`boardless-pins:${e.userId}`,BestPinsFeedAltResource:e=>`idea-page-best-pins:${e.interest}`,BoardArchiveResource:()=>"archived-boards",BoardContentRecommendationResource:e=>`recommendation-feed:${e.id}`,BoardFeedResource:e=>`boardfeed:${e.board_id}`,BoardSectionsRepinResource:e=>`board-sections:${e.board_id}`,BoardSectionsResource:e=>`board-sections:${e.board_id}`,BoardSectionPinsResource:e=>`board-section-pins:${e.section_id}`,BoardsFeedResource:e=>`profile-boards:${e.username}`,BoardToolsFeedResource:e=>`board-tools:${e.boardId}`,ConversationsResource:()=>"conversations",DidItLikedByResource:e=>`triedit-likes:${e.didItDataId}`,DidItUserFeedResource:e=>`profile-tried:${e.username}`,HolidaySpotlightResource:e=>`holiday-spotlight:${e.storyType}`,InterestResource:e=>`klp-pins:${e.interest}`,MoreIdeasTabsBoardsResource:()=>"homefeed-more-ideas-tabs",NewsHubResource:()=>"notifications",NewsHubDetailsResource:e=>`newshubdetail:${e.news_id}`,NuxInterestsResource:()=>"nuxTopics",PinsFromBrandResource:e=>`brand-pins:${e.pin}`,ReactionsResource:e=>`reactions:${e.pin_id}`,RelatedArticlesResource:e=>`related-articles:${e.article_id}`,RelatedModulesResource:e=>`related-modules:${e.pin_id}`,RelatedPinFeedResource:e=>`related-pins:${e.pin}`,RelatedProductFeedResource:e=>"pin"===e.shop_source?`closeup-related-products:${e.pin}`:`related-products:${e.pin}`,RelatedStreamResource:e=>`related-story-pins:${e.pinId}`,SearchResource:e=>{let t=`search:${e.scope}:${e.query}:${e.filters||""}:${e.article||""}`;return e.auto_correction_disabled?`${t}:auto-correction-disabled`:t},BaseSearchResource:e=>{let{appliedProductFilters:t,article:r,auto_correction_disabled:o,filters:s,journey_depth:i,query:a,scope:d,selected_one_bar_modules:n,source_module_id:l}=e;return`search:${(0,u.Z)({appliedFilters:t,article:r,autoCorrectionDisabled:o,filters:s,journeyDepth:i,query:a,scope:d,selectedOneBarModules:n,sourceModuleId:l})}`},SectionToolsFeedResource:e=>`section-tools:${e.sectionId}`,ShareSuggestionsTypeaheadResource:e=>`share-suggestions:${e.board||e.user}:${e.term}`,ShoppingFeedModularizedResource:e=>e.saved_products_only?`board-shop-saved:${e.board_id}`:`board-shop-related:${e.board_id}`,StoryFeedResource:e=>`story-feed:${e.feed_type}:${e.request_params}`,SuggestedCreatorFollowsResource:()=>"suggested-creator-follows",StoryPinTaggedProductsResource:()=>"story-pin-tagged-products",TodayArticleFeedResource:e=>`today-article:${e.id}`,IdeasHubTodayArticlesResource:e=>`today-article:${e.interest_id}`,TodayTabInterestFeedResource:e=>`today-article-interestfeed:${e.interest_id}`,TodayTabResource:()=>"today-tab",SeoTier1CandidateResource:()=>"tier1-feed",UnifiedCommentsResource:e=>`unified-comments:${e.aggregated_pin_id}`,UserActivityPinsResource:e=>`profile-pins-feed:${e.user_id}`,UserHomefeedResource:e=>e.pin_quiz?"pin-quiz":"homefeed",UserFollowingResource:e=>`user-following:${e.username}`,UserRecentActivityResource:e=>`user-recent-activity:${e.filter_type}`,UserStoryPinsFeedResource:e=>`story-pins-feed:${e.user_id}`,VideosFeedResource:()=>"videos-feed",VisualLiveSearchResource:e=>`visual-search:${e.pin_id}:${e.crop.x}${e.crop.y}${e.crop.w}${e.crop.h}`,VisualLiveSearchProductFeedResource:e=>`visual-search-products:${e.pin_id}:${e.crop.x}${e.crop.y}${e.crop.w}${e.crop.h}`,VisualSearchFlashlightUnifiedResource:e=>`related-products-unified:${e.pin_id}`,BoardFollowingResource:e=>`board-following:${e.username}`,InterestFollowingResource:e=>`topic-following:${e.username}`,UserPinsResource:e=>`profile-pins:${e.username}`,TopicFeedResource:e=>e.best_pins?`best-topic-pins:${e.interest}`:`topic-pins:${e.interest}`},y={AggregatedActivityFeedResource:({options:{aggregated_pin_data_id:e}})=>({type:c.Z.TRIED_IT_FEED,id:e}),AggregatedCommentFeedResource:({options:{objectId:e}})=>({type:c.Z.AGGREGATED_COMMENTS,id:e}),AggregatedCommentReplyFeedResource:({options:{isUnifiedComment:e,objectId:t}})=>({type:e?c.Z.AGGREGATED_COMMENT_REPLIES:c.Z.AGGREGATED_COMMENTS,id:t,reversed:!0}),BoardFeedResource:({options:{board_id:e}})=>({type:c.Z.BOARDFEED,id:e}),BoardlessPinsResource:({options:{userId:e}})=>({type:c.Z.BOARDLESS_PINS,id:e}),BoardSectionPinsResource:({options:{section_id:e}})=>({type:c.Z.BOARD_SECTION_PINS,id:e}),BoardSectionsResource:({options:{board_id:e}})=>({type:c.Z.BOARD_SECTIONS,id:e}),BoardsResource:({options:{username:e,sort:t}})=>({type:c.Z.PROFILE_BOARDS,id:(0,d.Z)(e,t)}),BaseSearchResource:({options:{appliedFilters:e,appliedProductFilters:t,auto_correction_disabled:r,filters:o,journey_depth:s,query_pin_sigs:d,query:n,rs:l,scope:u,selected_one_bar_modules:p,source_module_id:_,user:y},response:E})=>({type:c.Z.SEARCH_PINS,id:(0,i.Tb)({appliedFilters:e,appliedProductFilters:t,autoCorrectionDisabled:r,filters:o,journeyDepth:s,query:n,rs:l,scope:u,selectedOneBarModules:p,selectedPinImgSig:d,sourceModuleId:_,user:y}),items:E.resource_response.data?.results?(0,a.L)(E.resource_response.data.results).filteredResults:[]}),DidItCommentsResource:({options:{objectId:e}})=>({type:c.Z.AGGREGATED_COMMENTS,id:e,reversed:!0}),DidItUserFeedResource:({options:{username:e}})=>({type:c.Z.TRIED_IT_FEED,id:e}),IdeasHubTodayArticlesResource:({options:{interest_id:e}})=>({type:c.Z.TODAY_TAB,id:e}),RelatedArticlesResource:({options:{article_id:e}})=>({type:c.Z.TODAY_TAB,id:e}),StoryPinDraftsResource:({options:{userId:e}})=>({type:c.Z.STORY_PIN_DATA,id:e}),TodayTabInterestFeedResource:({options:{interest_id:e}})=>({type:c.Z.TODAY_ARTICLE_INTEREST_FEED,id:e}),TodayTabResource:()=>({type:c.Z.TODAY_TAB,id:"todayTab"}),UnifiedCommentsPreviewResource:({options:{aggregated_pin_id:e}})=>({type:c.Z.UNIFIED_COMMENTS,id:e}),UnifiedCommentsResource:({options:{aggregated_pin_id:e,is_reversed:t}})=>({type:c.Z.UNIFIED_COMMENTS,id:e,reversed:t}),UserActivityPinsResource:({options:{user_id:e}})=>({type:c.Z.PROFILE_PINS_FEED,id:e}),UserStoryPinsFeedResource:({response:e,options:{user_id:t}})=>({type:c.Z.STORY_PINS_FEED,id:t,items:e.resource_response.data||[]})},E=(e,{pinId:t,feedId:r})=>e[r]?{...e,[r]:e[r].filter(e=>!("pin"===e.type&&e.id===t))}:e,R=(e,{pinId:t,feedId:r})=>e[r]?{...e,[r]:[{type:"pin",id:t},...e[r]]}:e,m=(e,{pinId:t,oldFeedId:r,newFeedId:o})=>r===o?e:R(E(e,{pinId:t,feedId:r}),{pinId:t,feedId:o}),f=(e,t)=>e in _?_[e](t):null,I=(e,t)=>{switch(e.type){case"story":return{id:e.id,type:"story",story_type:e.story_type};case"module":return{id:e.id,type:"module",name:e.name};case"user":return{id:e.id,type:"user"};case"board":return t===c.Z.PROFILE_BOARDS?{id:e.id,type:"board",onProfile:!0,profileGroup:e.archived_by_me_at?"archived":e.privacy||"public"}:{id:e.id,type:"board",onProfile:!1};case"board_section":return{type:"boardsection",id:e.id};case"triedit":return{type:"triedit",id:e.id};case"aggregatedcomment":return{type:"aggregatedcomment",id:e.id};case"home_feed_tab":return{type:"home_feed_tab",id:e.id,name:e.name};case"storypindata":return{id:e.id,type:"storypindata"};case"todayarticle":return{type:"todayarticle",id:e.id};case"unifiedcommentspreview":return"userdiditdata"===e.unified_comment.type?{type:"triedit",id:e.unified_comment.id}:{type:"aggregatedcomment",id:e.unified_comment.id};default:return{type:"pin",id:e.id}}},A=(e,t)=>t?`board-section-pins:${t}`:`boardfeed:${e}`,g=(e,t,r)=>{let o=r||n.Z[e];if(o===l.LR)return t.result;if(o===l.sN)return t.result.map(e=>({id:e,schema:"board"}));if(o===l.Gn)return t.result.map(e=>({id:e,schema:"user"}));if(o===l.Ht)return t.result.map(e=>({id:e,schema:"invite"}));if(o===l.fE)return t.result.map(e=>({id:e,schema:"reaction"}));if("object"==typeof o){let e=Object.entries(o).find(([,e])=>e===l.LR);if(e)return t.result[e[0]]}return null},T=(e,t)=>e.map(e=>{let{id:r,schema:o,type:s}=e;return"home_feed_tabs"===s?e:o?{id:r,type:o,trackingParams:"pin"===o?t.pins[r].tracking_params:void 0,user_id:void 0}:null}).filter(Boolean),S=(e,t,r)=>Object.keys(e).reduce((o,s)=>{let i=e[s]||[],a=i.filter(e=>!(e.type===t&&e.id===r));return i.length!==a.length&&(o[s]=a),o},{...e}),D=(e={},t)=>{switch(t.type){case s.zP:case s.aW:{let{payload:r}=t,{resource:o,options:i,normalizedResponse:a,schema:d}=r;if(a&&o in _){let r=g(o,a,d);if(r&&Array.isArray(r)){let d=_[o](i);if("ShoppingFeedModularizedResource"===o){let{board_id:t,saved_products_only:o}=i??{},s=`board-shop-related:${t}`,d=`board-shop-saved:${t}`,n=`board-shop-saved-preview:${t}`,l=[...e[s]||[]],c=[...e[d]||[]],u=[...e[n]||[]];return T(r,a.entities).forEach(e=>{o?c.push(e):a.entities.pins&&a.entities.pins[e.id]?.board===t?u.push(e):l.push(e)}),{...e,[s]:l,[d]:c,[n]:u}}if("BoardToolsFeedResource"===o||"SectionToolsFeedResource"===o)return{...e,[d]:r};if("UnifiedCommentsResource"===o){let o=T(r,a.entities);if(e[d]&&s.aW===t.type)return{...e,[d]:[...e[d],...o]};return{...e,[d]:o}}{let o=[...t.type===s.aW&&e[d]||[],...T(r,a.entities)];return{...e,[d]:o}}}}else{let{data:o}=r.response.resource_response;if(!r.options?.redux_normalize_feed)return e;let i=y[r.resource]({options:r.options,response:r.response});if(i){let{type:r,id:a,items:d,reversed:n}=i,l=(d||o||[]).map(e=>I(e,r));n&&(l=l.reverse());let c=`${r}:${a}`,u=e[c];if(u||t.type!==s.aW){let r=u||[],o=l;return t.type===s.aW&&(o=n?l.concat(r):r.concat(l)),{...e,[c]:o}}}}break}case"FEED_ITEM_REORDERED":{let{payload:{feedType:r,feedId:s,itemType:i,targetItemId:a,sourceItemId:d}}=t,n=`${r}:${s}`,l=e[n]||[],u=-1,p=-1;if([c.Z.BOARDFEED,c.Z.BOARD_SECTION_PINS,c.Z.BOARD_SECTIONS,"profileBoards"].includes(r)&&(u=l.findIndex(e=>e.type===i&&e.id===d),p=l.findIndex(e=>e.type===i&&e.id===a)),-1!==u&&-1!==p)return{...e,[n]:(0,o.Z)(l,u,p)};break}case"FEED_ITEMS_REMOVED":{let{payload:{feedType:r,feedId:o,inverseSelection:s,itemType:i,itemIds:a=[]}}=t,d=`${r}:${o}`,n=e[d]||[];if(n&&n.length>0&&(r===c.Z.BOARD_SECTION_PINS||r===c.Z.BOARDFEED)){let t=n.filter(e=>{let t=a.includes(e.id);return!(e.type===i&&(s&&!t||!s&&t))}),r=!!t.find(e=>"pin"===e.type);return{...e,[d]:r?t:[]}}if(n&&n.length>0&&r===c.Z.BOARD_SECTIONS){let t=n.filter(e=>{let t=a.includes(e.id);return!(e.type===i&&t)});return{...e,[d]:t}}if(n&&n.length>0&&(r===c.Z.AGGREGATED_COMMENTS||r===c.Z.BOARDLESS_PINS||r===c.Z.PROFILE_PINS_FEED||r===c.Z.STORY_PINS_FEED||r===c.Z.UNIFIED_COMMENTS||r===c.Z.TRIED_IT_FEED||r===c.Z.STORY_PIN_DATA)){let t=n.filter(e=>{let t=a.includes(e.id);return!(e.type===i&&t)});return{...e,[d]:t}}break}case"FEED_ITEMS_ADDED":{let{payload:{feedType:r,feedId:o,itemType:s,itemIds:i=[],prepend:a}}=t,d=`${r}:${o}`,n=e[d]||[];if(n&&(r===c.Z.BOARD_SECTION_PINS||r===c.Z.BOARDFEED||r===c.Z.BOARDLESS_PINS)){let t=i.map(e=>({id:e,type:s})),r=0;"story"===(n[0]||{}).type&&(r=1),"story"===(n[1]||{}).type&&(r=2);let o=[...n.slice(0,r),...t,...n.slice(r)];return{...e,[d]:o}}if(n&&r===c.Z.BOARD_SECTIONS){let t=[...i].reverse().map(e=>({id:e,type:"boardsection"})),r=n?[...t,...n]:[...t];return{...e,[d]:r}}if(r===c.Z.AGGREGATED_COMMENTS||r===c.Z.AGGREGATED_COMMENT_REPLIES||r===c.Z.PROFILE_PINS_FEED||r===c.Z.STORY_PINS_FEED||r===c.Z.UNIFIED_COMMENTS){let t=i.map(e=>({id:e,type:s})),r=n?[...a?t:n,...a?n:t]:t;return{...e,[d]:r}}if(r===c.Z.TRIED_IT_FEED){let t=i.map(e=>({id:e,type:s})),r=n?[...t,...n]:t;return{...e,[d]:r}}break}case"FEED_INVALIDATE":{let{payload:{feedType:r,feedId:o}}=t,s=`${r}:${o}`;return e[s],{...e,[s]:null}}case"APPEND_FEED_ITEMS":{let{payload:{id:r,items:o,options:s}}=t,i=e[r];if(!i)return{...e,[r]:o};{let t;return t=s.isPrepend?i[0]&&"story"===i[0].type?[].concat(i[0],o,i.slice(1)):o.concat(i):i.concat(o),{...e,[r]:t}}}case"PIN_DELETE":{let{payload:{pinId:r}}=t;return S(e,"pin",r)}case"BOARD_ARCHIVE":{let{payload:{boardId:r,username:o}}=t,s=`profile-boards:${o??""}`;if(e[s])return{...e,[s]:e[s].filter(e=>e.id!==r)};break}case"BOARD_UNARCHIVE":{let{payload:{boardId:r}}=t,o="archived-boards";if(e[o])return{...e,[o]:e[o].filter(e=>e.id!==r)};break}case"BOARD_DELETE":{let{payload:{boardId:r}}=t;return S(e,"board",r)}case"BOARD_SECTION_DELETE":{let{payload:{boardSectionId:r}}=t;return S(e,"boardsection",r)}case"PINS_MOVE":{let{payload:{source:r,target:o,pinIds:s,userId:i}}=t,a=r.boardlessPins&&i&&`boardless-pins:${i}`||r.boardId&&A(r.boardId,r.sectionId),d=A(o.boardId,o.sectionId);return s.reduce((e,t)=>m(e,{pinId:t,oldFeedId:a,newFeedId:d}),e)}case"PINS_MOVE_ALL":{let{payload:{source:r,target:o,excludePinIds:s}}=t,i=A(r.boardId,r.sectionId),a=A(o.boardId,o.sectionId),d={...e,[i]:s.map(e=>({type:"pin",id:e}))};return delete d[a],d}case"PIN_EDIT":{let{payload:{pinId:r,boardId:o,sectionId:s="",source:{boardId:i,sectionId:a}}}=t;return m(e,{pinId:r,oldFeedId:A(i,a),newFeedId:A(o,s)})}case s.AF:if(p.has(t.payload.resource)){let r;let o=t.payload.response.resource_response.data,{board:s}=o;if("quick_saves"===s.layout)r=`boardless-pins:${t.payload.options.user_id}`;else{let e=t.payload.options.section;r=e?`board-section-pins:${e}`:`boardfeed:${s.id}`}if(e[r]){let t={...e},s={id:o.id,type:"pin",trackingParams:o?.tracking_params};return t[r]=[s].concat(e[r]),t}}if("BoardSectionResource"===t.payload.resource&&t.payload.normalizedResponse){let r=t.payload.normalizedResponse.result,o=t.payload.normalizedResponse.entities.boardsections[r].board,s=`board-sections:${o}`;if(e[s]){let t={...e};return t[s]=[{id:r,type:"boardsection"}].concat(e[s]),t}}if("AggregatedCommentResource"===t.payload.resource&&t.payload.normalizedResponse){let r={id:t.payload.normalizedResponse.result,type:"aggregatedcomment"},o={...e};for(let s of["aggregated-comments","unified-comments"]){let i=`${s}:${t.payload.options.objectId}`;e[i]&&(o={...o,[i]:[r].concat(o[i])})}return o}if("AggregatedCommentReplyResource"===t.payload.resource&&t.payload.normalizedResponse){let r=`${c.Z.AGGREGATED_COMMENT_REPLIES}:${t.payload.options.objectId}`;return{...e,[r]:[...e[r]||[],{id:t.payload.normalizedResponse.result,type:"aggregatedComment"}]}}if("ReactionsResource"===t.payload.resource&&t.payload.normalizedResponse){let{reaction_pin_id:r,reaction_type:o}=t.payload.options;if("reaction"===t.payload.options.action_type){let s=`reactions:${t.payload.options.pin_id}`,i={...e},a={id:`${r}:${t.payload.options.user_id}:${o}`,type:"reaction",trackingParams:void 0};return i[s]=[a].concat(e[s]),i}if("unreaction"===t.payload.options.action_type)return S(e,"reaction",`${r}:${t.payload.options.user_id}`)}break;case"COMPLETE_STORY":{let{payload:{storyId:r}}=t;return S(e,"story",r)}}return e}},84768:(e,t,r)=>{r.d(t,{MM:()=>a,uo:()=>d,wH:()=>i});var o=r(342513),s=r(706196);let{Provider:i,useHook:a}=(0,o.Z)("HandlerId");function d(){let e=a();return(0,s.ac)(e).site}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/80730-34c2e5df669e20a7.mjs.map
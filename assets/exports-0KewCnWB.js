import{u as e}from"./secp256k1-BQa7w2it.js";import{E as t,M as n,N as r,Q as i,V as a,at as o,b as s,c,et as ee,h as te,it as ne,j as l,l as u,o as re,r as d,rt as f,st as ie,t as p,tt as m,v as h,w as g}from"./ModalController-6SMPj5P2.js";import{t as _}from"./HelpersUtil-DQyXLsM_.js";import{t as ae}from"./MathUtil-B2UslVSw.js";import{_ as oe,c as v,f as y,o as b,r as se,s as ce,t as le}from"./exports-ClBc5snA.js";import{c as x,l as S,o as C,s as w,t as ue,u as de}from"./wui-text-CG16Khhc.js";import"./wui-button-8pCM6vX6.js";import"./wui-icon-De9480KG.js";import"./wui-icon-link-DzkSwQxC.js";import"./wui-image-ByJrfebB.js";import"./wui-list-item-BRY5j5m8.js";import"./wui-loading-spinner-BKA_31qH.js";import"./wui-wallet-switch-CXGdqC9g.js";import"./wui-separator-Dli8MxpD.js";import"./wui-shimmer-DLVL6Vda.js";var fe=b`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,T=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},E=class extends v{constructor(){super(...arguments),this.icon=`card`,this.variant=`primary`,this.type=`accent`,this.size=`md`,this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return y`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${C(this.iconSize)}></wui-icon>
    </button>`}};E.styles=[se,le,fe],T([x()],E.prototype,`icon`,void 0),T([x()],E.prototype,`variant`,void 0),T([x()],E.prototype,`type`,void 0),T([x()],E.prototype,`size`,void 0),T([x()],E.prototype,`iconSize`,void 0),T([x({type:Boolean})],E.prototype,`fullWidth`,void 0),T([x({type:Boolean})],E.prototype,`disabled`,void 0),E=T([S(`wui-icon-button`)],E);var D={INVALID_PAYMENT_CONFIG:`INVALID_PAYMENT_CONFIG`,INVALID_RECIPIENT:`INVALID_RECIPIENT`,INVALID_ASSET:`INVALID_ASSET`,INVALID_AMOUNT:`INVALID_AMOUNT`,UNKNOWN_ERROR:`UNKNOWN_ERROR`,UNABLE_TO_INITIATE_PAYMENT:`UNABLE_TO_INITIATE_PAYMENT`,INVALID_CHAIN_NAMESPACE:`INVALID_CHAIN_NAMESPACE`,GENERIC_PAYMENT_ERROR:`GENERIC_PAYMENT_ERROR`,UNABLE_TO_GET_EXCHANGES:`UNABLE_TO_GET_EXCHANGES`,ASSET_NOT_SUPPORTED:`ASSET_NOT_SUPPORTED`,UNABLE_TO_GET_PAY_URL:`UNABLE_TO_GET_PAY_URL`,UNABLE_TO_GET_BUY_STATUS:`UNABLE_TO_GET_BUY_STATUS`,UNABLE_TO_GET_TOKEN_BALANCES:`UNABLE_TO_GET_TOKEN_BALANCES`,UNABLE_TO_GET_QUOTE:`UNABLE_TO_GET_QUOTE`,UNABLE_TO_GET_QUOTE_STATUS:`UNABLE_TO_GET_QUOTE_STATUS`,INVALID_RECIPIENT_ADDRESS_FOR_ASSET:`INVALID_RECIPIENT_ADDRESS_FOR_ASSET`},O={[D.INVALID_PAYMENT_CONFIG]:`Invalid payment configuration`,[D.INVALID_RECIPIENT]:`Invalid recipient address`,[D.INVALID_ASSET]:`Invalid asset specified`,[D.INVALID_AMOUNT]:`Invalid payment amount`,[D.INVALID_RECIPIENT_ADDRESS_FOR_ASSET]:`Invalid recipient address for the asset selected`,[D.UNKNOWN_ERROR]:`Unknown payment error occurred`,[D.UNABLE_TO_INITIATE_PAYMENT]:`Unable to initiate payment`,[D.INVALID_CHAIN_NAMESPACE]:`Invalid chain namespace`,[D.GENERIC_PAYMENT_ERROR]:`Unable to process payment`,[D.UNABLE_TO_GET_EXCHANGES]:`Unable to get exchanges`,[D.ASSET_NOT_SUPPORTED]:`Asset not supported by the selected exchange`,[D.UNABLE_TO_GET_PAY_URL]:`Unable to get payment URL`,[D.UNABLE_TO_GET_BUY_STATUS]:`Unable to get buy status`,[D.UNABLE_TO_GET_TOKEN_BALANCES]:`Unable to get token balances`,[D.UNABLE_TO_GET_QUOTE]:`Unable to get quote. Please choose a different token`,[D.UNABLE_TO_GET_QUOTE_STATUS]:`Unable to get quote status`},k=class e extends Error{get message(){return O[this.code]}constructor(t,n){super(O[t]),this.name=`AppKitPayError`,this.code=t,this.details=n,Error.captureStackTrace&&Error.captureStackTrace(this,e)}},pe=`https://rpc.walletconnect.org/v1/json-rpc`,me=`reown_test`;function he(){let{chainNamespace:e}=i.parseCaipNetworkId(L.state.paymentAsset.network);if(!a.isAddress(L.state.recipient,e))throw new k(D.INVALID_RECIPIENT_ADDRESS_FOR_ASSET,`Provide valid recipient address for namespace "${e}"`)}async function ge(e,t,n){if(t!==f.CHAIN.EVM)throw new k(D.INVALID_CHAIN_NAMESPACE);if(!n.fromAddress)throw new k(D.INVALID_PAYMENT_CONFIG,`fromAddress is required for native EVM payments.`);let r=typeof n.amount==`string`?parseFloat(n.amount):n.amount;if(isNaN(r))throw new k(D.INVALID_PAYMENT_CONFIG);let i=e.metadata?.decimals??18,a=u.parseUnits(r.toString(),i);if(typeof a!=`bigint`)throw new k(D.GENERIC_PAYMENT_ERROR);return await u.sendTransaction({chainNamespace:t,to:n.recipient,address:n.fromAddress,value:a,data:`0x`})??void 0}async function _e(e,t){if(!t.fromAddress)throw new k(D.INVALID_PAYMENT_CONFIG,`fromAddress is required for ERC20 EVM payments.`);let n=e.asset,r=t.recipient,i=Number(e.metadata.decimals),a=u.parseUnits(t.amount.toString(),i);if(a===void 0)throw new k(D.GENERIC_PAYMENT_ERROR);return await u.writeContract({fromAddress:t.fromAddress,tokenAddress:n,args:[r,a],method:`transfer`,abi:ee.getERC20Abi(n),chainNamespace:f.CHAIN.EVM})??void 0}async function ve(e,t){if(e!==f.CHAIN.SOLANA)throw new k(D.INVALID_CHAIN_NAMESPACE);if(!t.fromAddress)throw new k(D.INVALID_PAYMENT_CONFIG,`fromAddress is required for Solana payments.`);let n=typeof t.amount==`string`?parseFloat(t.amount):t.amount;if(isNaN(n)||n<=0)throw new k(D.INVALID_PAYMENT_CONFIG,`Invalid payment amount.`);try{if(!re.getProvider(e))throw new k(D.GENERIC_PAYMENT_ERROR,`No Solana provider available.`);let r=await u.sendTransaction({chainNamespace:f.CHAIN.SOLANA,to:t.recipient,value:n,tokenMint:t.tokenMint});if(!r)throw new k(D.GENERIC_PAYMENT_ERROR,`Transaction failed.`);return r}catch(e){throw e instanceof k?e:new k(D.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${e}`)}}async function ye({sourceToken:e,toToken:t,amount:n,recipient:r}){let i=u.parseUnits(n,e.metadata.decimals),a=u.parseUnits(n,t.metadata.decimals);return Promise.resolve({type:ze,origin:{amount:i?.toString()??`0`,currency:e},destination:{amount:a?.toString()??`0`,currency:t},fees:[{id:`service`,label:`Service Fee`,amount:`0`,currency:t}],steps:[{requestId:ze,type:`deposit`,deposit:{amount:i?.toString()??`0`,currency:e.asset,receiver:r}}],timeInSeconds:6})}function A(e){if(!e)return null;let t=e.steps[0];return!t||t.type!==`deposit`?null:t}function j(e,t=0){if(!e)return[];let n=e.steps.filter(e=>e.type===Be),r=n.filter((e,n)=>n+1>t);return n.length>0&&n.length<3?r:[]}var M=new r({baseUrl:a.getApiUrl(),clientId:null}),be=class extends Error{};function xe(){return`${pe}?projectId=${n.getSnapshot().projectId}`}function N(){let{projectId:e,sdkType:t,sdkVersion:r}=n.state;return{projectId:e,st:t||`appkit`,sv:r||`html-wagmi-4.2.2`}}async function P(e,t){let r=xe(),{sdkType:i,sdkVersion:a,projectId:o}=n.getSnapshot(),s={jsonrpc:`2.0`,id:1,method:e,params:{...t||{},st:i,sv:a,projectId:o}},c=await(await fetch(r,{method:`POST`,body:JSON.stringify(s),headers:{"Content-Type":`application/json`}})).json();if(c.error)throw new be(c.error.message);return c}async function Se(e){return(await P(`reown_getExchanges`,e)).result}async function Ce(e){return(await P(`reown_getExchangePayUrl`,e)).result}async function we(e){return(await P(`reown_getExchangeBuyStatus`,e)).result}async function Te(e){let t=m.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:n,chainNamespace:r}=i.parseCaipNetworkId(e.sourceToken.network),{chainId:a,chainNamespace:o}=i.parseCaipNetworkId(e.toToken.network),s=e.sourceToken.asset===`native`?te(r):e.sourceToken.asset,c=e.toToken.asset===`native`?te(o):e.toToken.asset;return await M.post({path:`/appkit/v1/transfers/quote`,body:{user:e.address,originChainId:n.toString(),originCurrency:s,destinationChainId:a.toString(),destinationCurrency:c,recipient:e.recipient,amount:t},params:N()})}async function Ee(e){let t=_.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),n=_.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&n?ye(e):Te(e)}async function De(e){return await M.get({path:`/appkit/v1/transfers/status`,params:{requestId:e.requestId,...N()}})}async function Oe(e){return await M.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:N()})}var ke=[`eip155`,`solana`],Ae={eip155:{native:{assetNamespace:`slip44`,assetReference:`60`},defaultTokenNamespace:`erc20`},solana:{native:{assetNamespace:`slip44`,assetReference:`501`},defaultTokenNamespace:`token`}},je={56:`714`,204:`714`};function Me(e,t){let{chainNamespace:n,chainId:r}=i.parseCaipNetworkId(e),a=Ae[n];if(!a)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${n}`);let o=a.native.assetNamespace,s=a.native.assetReference;return t===`native`?n===`eip155`&&je[r]&&(s=je[r]):(o=a.defaultTokenNamespace,s=t),`${`${n}:${r}`}/${o}:${s}`}function Ne(e){let{chainNamespace:t}=i.parseCaipNetworkId(e);return ke.includes(t)}function Pe(e){let t=d.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===e.chainId),n=e.address;if(!t)throw Error(`Target network not found for balance chainId "${e.chainId}"`);if(_.isLowerCaseMatch(e.symbol,t.nativeCurrency.symbol))n=`native`;else if(a.isCaipAddress(n)){let{address:e}=i.parseCaipAddress(n);n=e}else if(!n)throw Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:t.caipNetworkId,asset:n,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}function Fe(e){return{chainId:e.network,address:`${e.network}:${e.asset}`,symbol:e.metadata.symbol,name:e.metadata.name,iconUrl:e.metadata.logoURI||``,price:0,quantity:{numeric:`0`,decimals:e.metadata.decimals.toString()}}}function F(e){let t=m.bigNumber(e,{safe:!0});return t.lt(.001)?`<0.001`:t.round(4).toString()}function Ie(e){let t=d.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===e.network);return t?!!t.testnet:!1}var Le=0,Re=`unknown`,ze=`direct-transfer`,Be=`transaction`,I=o({paymentAsset:{network:`eip155:1`,asset:`0x0`,metadata:{name:`0x0`,symbol:`0x0`,decimals:0}},recipient:`0x0`,amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:`pay`,tokenBalances:{[f.CHAIN.EVM]:[],[f.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:`waiting`,quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),L={state:I,subscribe(e){return ie(I,()=>e(I))},subscribeKey(e,t){return ne(I,e,t)},async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics(),he(),await this.prepareTokenLogo(),I.isConfigured=!0,g.sendEvent({type:`track`,event:`PAY_MODAL_OPEN`,properties:{exchanges:I.exchanges,configuration:{network:I.paymentAsset.network,asset:I.paymentAsset.asset,recipient:I.recipient,amount:I.amount}}}),await p.open({view:`Pay`})},resetState(){I.paymentAsset={network:`eip155:1`,asset:`0x0`,metadata:{name:`0x0`,symbol:`0x0`,decimals:0}},I.recipient=`0x0`,I.amount=0,I.isConfigured=!1,I.error=null,I.isPaymentInProgress=!1,I.isLoading=!1,I.currentPayment=void 0,I.selectedExchange=void 0,I.exchangeUrlForQuote=void 0,I.requestId=void 0},resetQuoteState(){I.quote=void 0,I.quoteStatus=`waiting`,I.quoteError=null,I.isFetchingQuote=!1,I.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new k(D.INVALID_PAYMENT_CONFIG);try{I.choice=e.choice??`pay`,I.paymentAsset=e.paymentAsset,I.recipient=e.recipient,I.amount=e.amount,I.openInNewTab=e.openInNewTab??!0,I.redirectUrl=e.redirectUrl,I.payWithExchange=e.payWithExchange,I.error=null}catch(e){throw new k(D.INVALID_PAYMENT_CONFIG,e.message)}},setSelectedPaymentAsset(e){I.selectedPaymentAsset=e},setSelectedExchange(e){I.selectedExchange=e},setRequestId(e){I.requestId=e},setPaymentInProgress(e){I.isPaymentInProgress=e},getPaymentAsset(){return I.paymentAsset},getExchanges(){return I.exchanges},async fetchExchanges(){try{I.isLoading=!0,I.exchanges=(await Se({page:Le})).exchanges.slice(0,2)}catch{throw l.showError(O.UNABLE_TO_GET_EXCHANGES),new k(D.UNABLE_TO_GET_EXCHANGES)}finally{I.isLoading=!1}},async getAvailableExchanges(e){try{let t=e?.asset&&e?.network?Me(e.network,e.asset):void 0;return await Se({page:e?.page??Le,asset:t,amount:e?.amount?.toString()})}catch{throw new k(D.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(e,t,n=!1){try{let r=Number(t.amount),i=await Ce({exchangeId:e,asset:Me(t.network,t.asset),amount:r.toString(),recipient:`${t.network}:${t.recipient}`});return g.sendEvent({type:`track`,event:`PAY_EXCHANGE_SELECTED`,properties:{source:`pay`,exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:r},currentPayment:{type:`exchange`,exchangeId:e},headless:n}}),n&&(this.initiatePayment(),g.sendEvent({type:`track`,event:`PAY_INITIATED`,properties:{source:`pay`,paymentId:I.paymentId||Re,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:r},currentPayment:{type:`exchange`,exchangeId:e}}})),i}catch(e){throw e instanceof Error&&e.message.includes(`is not supported`)?new k(D.ASSET_NOT_SUPPORTED):Error(e.message)}},async generateExchangeUrlForQuote({exchangeId:e,paymentAsset:t,amount:n,recipient:r}){let i=await Ce({exchangeId:e,asset:Me(t.network,t.asset),amount:n.toString(),recipient:r});I.exchangeSessionId=i.sessionId,I.exchangeUrlForQuote=i.url},async openPayUrl(e,t,n=!1){try{let r=await this.getPayUrl(e.exchangeId,t,n);if(!r)throw new k(D.UNABLE_TO_GET_PAY_URL);let i=e.openInNewTab??!0?`_blank`:`_self`;return a.openHref(r.url,i),r}catch(e){throw e instanceof k?I.error=e.message:I.error=O.GENERIC_PAYMENT_ERROR,new k(D.UNABLE_TO_GET_PAY_URL)}},async onTransfer({chainNamespace:e,fromAddress:t,toAddress:n,amount:r,paymentAsset:i}){if(I.currentPayment={type:`wallet`,status:`IN_PROGRESS`},!I.isPaymentInProgress)try{this.initiatePayment();let a=d.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===i.network);if(!a)throw Error(`Target network not found`);let o=d.state.activeCaipNetwork;switch(_.isLowerCaseMatch(o?.caipNetworkId,a.caipNetworkId)||await d.switchActiveNetwork(a),e){case f.CHAIN.EVM:i.asset===`native`&&(I.currentPayment.result=await ge(i,e,{recipient:n,amount:r,fromAddress:t})),i.asset.startsWith(`0x`)&&(I.currentPayment.result=await _e(i,{recipient:n,amount:r,fromAddress:t})),I.currentPayment.status=`SUCCESS`;break;case f.CHAIN.SOLANA:I.currentPayment.result=await ve(e,{recipient:n,amount:r,fromAddress:t,tokenMint:i.asset===`native`?void 0:i.asset}),I.currentPayment.status=`SUCCESS`;break;default:throw new k(D.INVALID_CHAIN_NAMESPACE)}}catch(e){throw e instanceof k?I.error=e.message:I.error=O.GENERIC_PAYMENT_ERROR,I.currentPayment.status=`FAILED`,l.showError(I.error),e}finally{I.isPaymentInProgress=!1}},async onSendTransaction(e){try{let{namespace:t,transactionStep:n}=e;L.initiatePayment();let r=d.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===I.paymentAsset?.network);if(!r)throw Error(`Target network not found`);let i=d.state.activeCaipNetwork;if(_.isLowerCaseMatch(i?.caipNetworkId,r.caipNetworkId)||await d.switchActiveNetwork(r),t===f.CHAIN.EVM){let{from:e,to:r,data:i,value:a}=n.transaction;await u.sendTransaction({address:e,to:r,data:i,value:BigInt(a),chainNamespace:t})}else if(t===f.CHAIN.SOLANA){let{instructions:e}=n.transaction;await u.writeSolanaTransaction({instructions:e})}}catch(e){throw e instanceof k?I.error=e.message:I.error=O.GENERIC_PAYMENT_ERROR,l.showError(I.error),e}finally{I.isPaymentInProgress=!1}},getExchangeById(e){return I.exchanges.find(t=>t.id===e)},validatePayConfig(e){let{paymentAsset:t,recipient:n,amount:r}=e;if(!t)throw new k(D.INVALID_PAYMENT_CONFIG);if(!n)throw new k(D.INVALID_RECIPIENT);if(!t.asset)throw new k(D.INVALID_ASSET);if(r==null||r<=0)throw new k(D.INVALID_AMOUNT)},async handlePayWithExchange(e){try{I.currentPayment={type:`exchange`,exchangeId:e};let{network:t,asset:n}=I.paymentAsset,r={network:t,asset:n,amount:I.amount,recipient:I.recipient},i=await this.getPayUrl(e,r);if(!i)throw new k(D.UNABLE_TO_INITIATE_PAYMENT);return I.currentPayment.sessionId=i.sessionId,I.currentPayment.status=`IN_PROGRESS`,I.currentPayment.exchangeId=e,this.initiatePayment(),{url:i.url,openInNewTab:I.openInNewTab}}catch(e){return e instanceof k?I.error=e.message:I.error=O.GENERIC_PAYMENT_ERROR,I.isPaymentInProgress=!1,l.showError(I.error),null}},async getBuyStatus(e,t){try{let n=await we({sessionId:t,exchangeId:e});return(n.status===`SUCCESS`||n.status===`FAILED`)&&g.sendEvent({type:`track`,event:n.status===`SUCCESS`?`PAY_SUCCESS`:`PAY_ERROR`,properties:{message:n.status===`FAILED`?a.parseError(I.error):void 0,source:`pay`,paymentId:I.paymentId||Re,configuration:{network:I.paymentAsset.network,asset:I.paymentAsset.asset,recipient:I.recipient,amount:I.amount},currentPayment:{type:`exchange`,exchangeId:I.currentPayment?.exchangeId,sessionId:I.currentPayment?.sessionId,result:n.txHash}}}),n}catch{throw new k(D.UNABLE_TO_GET_BUY_STATUS)}},async fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:n}){if(!e)return[];let{address:r}=i.parseCaipAddress(e),a=t;return n===f.CHAIN.EVM&&(a=void 0),await c.getMyTokensWithBalance({address:r,caipNetwork:a})},async fetchTokensFromExchange(){if(!I.selectedExchange)return[];let e=await Oe(I.selectedExchange.id),n=Object.values(e.assets).flat();return await Promise.all(n.map(async e=>{let n=Fe(e),{chainNamespace:r}=i.parseCaipNetworkId(n.chainId),o=n.address;if(a.isCaipAddress(o)){let{address:e}=i.parseCaipAddress(o);o=e}return n.iconUrl=await t.getImageByToken(o??``,r).catch(()=>void 0)??``,n}))},async fetchTokens({caipAddress:e,caipNetwork:t,namespace:n}){try{I.isFetchingTokenBalances=!0;let r=await(I.selectedExchange?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:n}));I.tokenBalances={...I.tokenBalances,[n]:r}}catch(e){let t=e instanceof Error?e.message:`Unable to get token balances`;l.showError(t)}finally{I.isFetchingTokenBalances=!1}},async fetchQuote({amount:e,address:t,sourceToken:n,toToken:r,recipient:i}){try{L.resetQuoteState(),I.isFetchingQuote=!0;let a=await Ee({amount:e,address:I.selectedExchange?void 0:t,sourceToken:n,toToken:r,recipient:i});if(I.selectedExchange){let e=A(a);if(e){let t=`${n.network}:${e.deposit.receiver}`,r=m.formatNumber(e.deposit.amount,{decimals:n.metadata.decimals??0,round:8});await L.generateExchangeUrlForQuote({exchangeId:I.selectedExchange.id,paymentAsset:n,amount:r.toString(),recipient:t})}}I.quote=a}catch(e){let t=O.UNABLE_TO_GET_QUOTE;if(e instanceof Error&&e.cause&&e.cause instanceof Response)try{let n=await e.cause.json();n.error&&typeof n.error==`string`&&(t=n.error)}catch{}throw I.quoteError=t,l.showError(t),new k(D.UNABLE_TO_GET_QUOTE)}finally{I.isFetchingQuote=!1}},async fetchQuoteStatus({requestId:e}){try{if(e===`direct-transfer`){let e=I.selectedExchange,t=I.exchangeSessionId;if(e&&t){switch((await this.getBuyStatus(e.id,t)).status){case`IN_PROGRESS`:I.quoteStatus=`waiting`;break;case`SUCCESS`:I.quoteStatus=`success`,I.isPaymentInProgress=!1;break;case`FAILED`:I.quoteStatus=`failure`,I.isPaymentInProgress=!1;break;case`UNKNOWN`:I.quoteStatus=`waiting`;break;default:I.quoteStatus=`waiting`;break}return}I.quoteStatus=`success`;return}let{status:t}=await De({requestId:e});I.quoteStatus=t}catch{throw I.quoteStatus=`failure`,new k(D.UNABLE_TO_GET_QUOTE_STATUS)}},initiatePayment(){I.isPaymentInProgress=!0,I.paymentId=crypto.randomUUID()},initializeAnalytics(){I.analyticsSet||(I.analyticsSet=!0,this.subscribeKey(`isPaymentInProgress`,e=>{if(I.currentPayment?.status&&I.currentPayment.status!==`UNKNOWN`){let e={IN_PROGRESS:`PAY_INITIATED`,SUCCESS:`PAY_SUCCESS`,FAILED:`PAY_ERROR`}[I.currentPayment.status];g.sendEvent({type:`track`,event:e,properties:{message:I.currentPayment.status===`FAILED`?a.parseError(I.error):void 0,source:`pay`,paymentId:I.paymentId||Re,configuration:{network:I.paymentAsset.network,asset:I.paymentAsset.asset,recipient:I.recipient,amount:I.amount},currentPayment:{type:I.currentPayment.type,exchangeId:I.currentPayment.exchangeId,sessionId:I.currentPayment.sessionId,result:I.currentPayment.result}}})}}))},async prepareTokenLogo(){if(!I.paymentAsset.metadata.logoURI)try{let{chainNamespace:e}=i.parseCaipNetworkId(I.paymentAsset.network),n=await t.getImageByToken(I.paymentAsset.asset,e);I.paymentAsset.metadata.logoURI=n}catch{}}},Ve=b`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[8]};
    border-top-left-radius: ${({borderRadius:e})=>e[8]};
  }
`,R=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},z=class extends v{constructor(){super(),this.unsubscribe=[],this.amount=L.state.amount,this.namespace=void 0,this.paymentAsset=L.state.paymentAsset,this.activeConnectorIds=h.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=L.state.exchanges,this.isLoading=L.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(L.subscribeKey(`amount`,e=>this.amount=e)),this.unsubscribe.push(h.subscribeKey(`activeConnectorIds`,e=>this.activeConnectorIds=e)),this.unsubscribe.push(L.subscribeKey(`exchanges`,e=>this.exchanges=e)),this.unsubscribe.push(L.subscribeKey(`isLoading`,e=>this.isLoading=e)),L.fetchExchanges(),L.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return y`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return y`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){let e=d.state.activeChain;this.namespace=e,this.caipAddress=d.getAccountData(e)?.caipAddress,this.unsubscribe.push(d.subscribeChainProp(`accountState`,e=>{this.caipAddress=e?.caipAddress},e))}paymentDetailsTemplate(){let e=d.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network);return y`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${[`6`,`8`,`6`,`8`]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${F(this.amount||`0`)}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||`Unknown`}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${e?.name||`Unknown`}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${C(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${C(t.getNetworkImage(e))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return Ne(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():y``}connectedWalletTemplate(){let{name:e,image:t}=this.getWalletProperties({namespace:this.namespace});return y`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${C(t)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return y`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return y`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;let e=this.exchanges.filter(e=>Ie(this.paymentAsset)?e.id===me:e.id!==me);return e.length===0?y`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map(e=>y`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(e)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          imageSrc=${C(e.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${e.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return y`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw Error(`Namespace not found`);this.caipAddress?s.push(`PayQuote`):(await h.connect(),await p.open({view:`PayQuote`}))}onExchangePayment(e){L.setSelectedExchange(e),s.push(`PayQuote`)}async onDisconnect(){try{await u.disconnect(),await p.open({view:`Pay`})}catch{console.error(`Failed to disconnect`),l.showError(`Failed to disconnect`)}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let n=this.activeConnectorIds[e];if(!n)return{name:void 0,image:void 0};let r=h.getConnector({id:n,namespace:e});if(!r)return{name:void 0,image:void 0};let i=t.getConnectorImage(r);return{name:r.name,image:i}}};z.styles=Ve,R([w()],z.prototype,`amount`,void 0),R([w()],z.prototype,`namespace`,void 0),R([w()],z.prototype,`paymentAsset`,void 0),R([w()],z.prototype,`activeConnectorIds`,void 0),R([w()],z.prototype,`caipAddress`,void 0),R([w()],z.prototype,`exchanges`,void 0),R([w()],z.prototype,`isLoading`,void 0),z=R([S(`w3m-pay-view`)],z);var He=b`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`,B=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ue=3,We=2,Ge=.3,Ke=`200px`,qe={"accent-primary":ce.tokens.core.backgroundAccentPrimary},V=class extends v{constructor(){super(...arguments),this.rings=Ue,this.duration=We,this.opacity=Ge,this.size=Ke,this.variant=`accent-primary`}render(){let e=qe[this.variant];return this.style.cssText=`
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${e};
      --pulse-opacity: ${this.opacity};
    `,y`
      <div class="pulse-container">
        <div class="pulse-rings">${Array.from({length:this.rings},(e,t)=>this.renderRing(t,this.rings))}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,t){return y`<div class="pulse-ring" style=${`animation-delay: ${e/t*this.duration}s;`}></div>`}};V.styles=[se,He],B([x({type:Number})],V.prototype,`rings`,void 0),B([x({type:Number})],V.prototype,`duration`,void 0),B([x({type:Number})],V.prototype,`opacity`,void 0),B([x()],V.prototype,`size`,void 0),B([x()],V.prototype,`variant`,void 0),V=B([S(`wui-pulse`)],V);var Je=[{id:`received`,title:`Receiving funds`,icon:`dollar`},{id:`processing`,title:`Swapping asset`,icon:`recycleHorizontal`},{id:`sending`,title:`Sending asset to the recipient address`,icon:`send`}],Ye=[`success`,`submitted`,`failure`,`timeout`,`refund`],Xe=b`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:e})=>e[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:e})=>e.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[6]};
    border-top-left-radius: ${({borderRadius:e})=>e[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }
`,H=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ze={received:[`pending`,`success`,`submitted`],processing:[`success`,`submitted`],sending:[`success`,`submitted`]},Qe=3e3,U=class extends v{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=L.state.paymentAsset,this.quoteStatus=L.state.quoteStatus,this.quote=L.state.quote,this.amount=L.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=h.state.activeConnectorIds,this.selectedExchange=L.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(L.subscribeKey(`quoteStatus`,e=>this.quoteStatus=e),L.subscribeKey(`quote`,e=>this.quote=e),h.subscribeKey(`activeConnectorIds`,e=>this.activeConnectorIds=e),L.subscribeKey(`selectedExchange`,e=>this.selectedExchange=e))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach(e=>e())}render(){return y`
      <wui-flex flexDirection="column" .padding=${[`3`,`0`,`0`,`0`]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){let e=F(this.amount||`0`),n=this.paymentAsset.metadata.symbol??`Unknown`,r=d.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network),i=this.quoteStatus===`failure`||this.quoteStatus===`timeout`||this.quoteStatus===`refund`;return this.quoteStatus===`success`||this.quoteStatus===`submitted`?y`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:i?y`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:y`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${C(t.getNetworkImage(r))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${e} ${n}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return y`
      <wui-flex flexDirection="column" gap="2" .padding=${[`0`,`6`,`0`,`6`]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){let e=this.getStepsWithStatus();return y`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${[`2`,`0`,`2`,`0`]}>
          ${e.map(e=>this.renderStep(e))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){let e=this.quoteStatus===`failure`||this.quoteStatus===`timeout`||this.quoteStatus===`refund`,t=this.quoteStatus===`success`||this.quoteStatus===`submitted`;return e?y`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `:t?y`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `:y`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${this.quote?.timeInSeconds??0} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){let e=d.getAllRequestedCaipNetworks().find(e=>{let t=this.quote?.origin.currency.network;if(!t)return!1;let{chainId:n}=i.parseCaipNetworkId(t);return _.isLowerCaseMatch(e.id.toString(),n.toString())});return y`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${[`3`,`0`,`3`,`0`]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${F(m.formatNumber(this.quote?.origin.amount||`0`,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString())}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${this.quote?.origin.currency.metadata.symbol??`Unknown`}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${C(t.getNetworkImage(e))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${e?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return y`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${[`3`,`0`,`3`,`0`]}
      >
        <wui-text variant="lg-regular" color="secondary"
          >${this.selectedExchange?`Exchange`:`Wallet`}</wui-text
        >

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){let{image:e}=this.getWalletProperties({namespace:this.namespace}),{address:t}=this.caipAddress?i.parseCaipAddress(this.caipAddress):{},n=this.selectedExchange?.name;return this.selectedExchange?y`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${n}</wui-text>
          <wui-image src=${C(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:y`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${de.getTruncateString({string:this.profileName||t||n||``,charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?`end`:`middle`})}
        </wui-text>

        <wui-image src=${C(e)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return this.quoteStatus===`failure`||this.quoteStatus===`timeout`||this.quoteStatus===`refund`?Je.map(e=>({...e,status:`failed`})):Je.map(e=>{let t=(Ze[e.id]??[]).includes(this.quoteStatus)?`completed`:`pending`;return{...e,status:t}})}renderStep({title:e,icon:t,status:n}){return y`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${t} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${ue({"step-icon-box":!0,success:n===`completed`})}>
            ${this.renderStatusIndicator(n)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${e}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return e===`completed`?y`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:e===`failed`?y`<wui-icon size="sm" color="error" name="close"></wui-icon>`:e===`pending`?y`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||=(this.fetchQuoteStatus(),setInterval(()=>{this.fetchQuoteStatus()},Qe))}stopPolling(){this.pollingInterval&&=(clearInterval(this.pollingInterval),null)}async fetchQuoteStatus(){let e=L.state.requestId;if(!e||Ye.includes(this.quoteStatus))this.stopPolling();else try{await L.fetchQuoteStatus({requestId:e}),Ye.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){let e=d.state.activeChain;this.namespace=e,this.caipAddress=d.getAccountData(e)?.caipAddress,this.profileName=d.getAccountData(e)?.profileName??null,this.unsubscribe.push(d.subscribeChainProp(`accountState`,e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null},e))}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let n=this.activeConnectorIds[e];if(!n)return{name:void 0,image:void 0};let r=h.getConnector({id:n,namespace:e});if(!r)return{name:void 0,image:void 0};let i=t.getConnectorImage(r);return{name:r.name,image:i}}};U.styles=Xe,H([w()],U.prototype,`paymentAsset`,void 0),H([w()],U.prototype,`quoteStatus`,void 0),H([w()],U.prototype,`quote`,void 0),H([w()],U.prototype,`amount`,void 0),H([w()],U.prototype,`namespace`,void 0),H([w()],U.prototype,`caipAddress`,void 0),H([w()],U.prototype,`profileName`,void 0),H([w()],U.prototype,`activeConnectorIds`,void 0),H([w()],U.prototype,`selectedExchange`,void 0),U=H([S(`w3m-pay-loading-view`)],U);var $e=oe`
  :host {
    display: block;
  }
`,et=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},W=class extends v{render(){return y`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};W.styles=[$e],W=et([S(`w3m-pay-fees-skeleton`)],W);var tt=b`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }
`,nt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},G=class extends v{constructor(){super(),this.unsubscribe=[],this.quote=L.state.quote,this.unsubscribe.push(L.subscribeKey(`quote`,e=>this.quote=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return y`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${m.formatNumber(this.quote?.origin.amount||`0`,{decimals:this.quote?.origin.currency.metadata.decimals??0,round:6}).toString()} ${this.quote?.origin.currency.metadata.symbol||`Unknown`}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(e=>this.renderFee(e)):null}
      </wui-flex>
    `}renderFee(e){let n=e.id===`network`,r=m.formatNumber(e.amount||`0`,{decimals:e.currency.metadata.decimals??0,round:6}).toString();if(n){let n=d.getAllRequestedCaipNetworks().find(t=>_.isLowerCaseMatch(t.caipNetworkId,e.currency.network));return y`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${r} ${e.currency.metadata.symbol||`Unknown`}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${C(t.getNetworkImage(n))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${n?.name||`Unknown`}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return y`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${r} ${e.currency.metadata.symbol||`Unknown`}
        </wui-text>
      </wui-flex>
    `}};G.styles=[tt],nt([w()],G.prototype,`quote`,void 0),G=nt([S(`w3m-pay-fees`)],G);var rt=b`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:e})=>e[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:e})=>e[8]};
    height: ${({spacing:e})=>e[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`,it=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},K=class extends v{constructor(){super(),this.unsubscribe=[],this.selectedExchange=L.state.selectedExchange,this.unsubscribe.push(L.subscribeKey(`selectedExchange`,e=>this.selectedExchange=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return y`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${this.selectedExchange?null:y`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent(`connectOtherWallet`,{detail:!0,bubbles:!0,composed:!0}))}};K.styles=[rt],it([x({type:Array})],K.prototype,`selectedExchange`,void 0),K=it([S(`w3m-pay-options-empty`)],K);var at=b`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`,ot=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},q=class extends v{render(){return y`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return y`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};q.styles=[at],q=ot([S(`w3m-pay-options-skeleton`)],q);var st=b`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`,J=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ct=300,Y=class extends v{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect(),(this.shadowRoot?.querySelector(`.pay-options-container`))?.removeEventListener(`scroll`,this.handleOptionsListScroll.bind(this))}firstUpdated(){let e=this.shadowRoot?.querySelector(`.pay-options-container`);e&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),e?.addEventListener(`scroll`,this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()}),this.resizeObserver?.observe(e),this.handleOptionsListScroll())}render(){return y`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(e=>this.payOptionTemplate(e))}
      </wui-flex>
    `}payOptionTemplate(e){let{network:n,metadata:r,asset:i,amount:a=`0`}=e,o=d.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===n),s=`${n}:${i}`==`${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`,c=m.bigNumber(a,{safe:!0}),ee=c.gt(0);return y`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>this.onSelect?.(e)}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${C(r.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${C(t.getNetworkImage(o))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${r.symbol}</wui-text>
            ${ee?y`<wui-text variant="sm-regular" color="secondary">
                  ${c.round(6).toString()} ${r.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${s?y`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){let e=this.shadowRoot?.querySelector(`.pay-options-container`);e&&(e.scrollHeight>ct?(e.style.setProperty(`--options-mask-image`,`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty(`--options-scroll--top-opacity`,ae.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty(`--options-scroll--bottom-opacity`,ae.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty(`--options-mask-image`,`none`),e.style.setProperty(`--options-scroll--top-opacity`,`0`),e.style.setProperty(`--options-scroll--bottom-opacity`,`0`)))}};Y.styles=[st],J([x({type:Array})],Y.prototype,`options`,void 0),J([x()],Y.prototype,`selectedPaymentAsset`,void 0),J([x()],Y.prototype,`onSelect`,void 0),Y=J([S(`w3m-pay-options`)],Y);var lt=b`
  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[5]};
    border-top-left-radius: ${({borderRadius:e})=>e[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding: ${({spacing:e})=>e[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`,X=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Z={eip155:`ethereum`,solana:`solana`,bip122:`bitcoin`,ton:`ton`},ut={eip155:{icon:Z.eip155,label:`EVM`},solana:{icon:Z.solana,label:`Solana`},bip122:{icon:Z.bip122,label:`Bitcoin`},ton:{icon:Z.ton,label:`Ton`}},Q=class extends v{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=L.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=L.state.amount,this.recipient=L.state.recipient,this.activeConnectorIds=h.state.activeConnectorIds,this.selectedPaymentAsset=L.state.selectedPaymentAsset,this.selectedExchange=L.state.selectedExchange,this.isFetchingQuote=L.state.isFetchingQuote,this.quoteError=L.state.quoteError,this.quote=L.state.quote,this.isFetchingTokenBalances=L.state.isFetchingTokenBalances,this.tokenBalances=L.state.tokenBalances,this.isPaymentInProgress=L.state.isPaymentInProgress,this.exchangeUrlForQuote=L.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(L.subscribeKey(`paymentAsset`,e=>this.paymentAsset=e)),this.unsubscribe.push(L.subscribeKey(`tokenBalances`,e=>this.onTokenBalancesChanged(e))),this.unsubscribe.push(L.subscribeKey(`isFetchingTokenBalances`,e=>this.isFetchingTokenBalances=e)),this.unsubscribe.push(h.subscribeKey(`activeConnectorIds`,e=>this.activeConnectorIds=e)),this.unsubscribe.push(L.subscribeKey(`selectedPaymentAsset`,e=>this.selectedPaymentAsset=e)),this.unsubscribe.push(L.subscribeKey(`isFetchingQuote`,e=>this.isFetchingQuote=e)),this.unsubscribe.push(L.subscribeKey(`quoteError`,e=>this.quoteError=e)),this.unsubscribe.push(L.subscribeKey(`quote`,e=>this.quote=e)),this.unsubscribe.push(L.subscribeKey(`amount`,e=>this.amount=e)),this.unsubscribe.push(L.subscribeKey(`recipient`,e=>this.recipient=e)),this.unsubscribe.push(L.subscribeKey(`isPaymentInProgress`,e=>this.isPaymentInProgress=e)),this.unsubscribe.push(L.subscribeKey(`selectedExchange`,e=>this.selectedExchange=e)),this.unsubscribe.push(L.subscribeKey(`exchangeUrlForQuote`,e=>this.exchangeUrlForQuote=e)),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach(e=>e())}updated(e){super.updated(e),e.has(`selectedPaymentAsset`)&&this.fetchQuote()}render(){return y`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${[`4`,`4`,`5`,`4`]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${[`1`,`0`,`1`,`0`]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){if(this.selectedExchange){let e=m.formatNumber(this.quote?.origin.amount,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return y`
        <wui-flex
          .padding=${[`4`,`3`,`4`,`3`]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?y`<wui-text variant="lg-regular" color="primary">
                ${m.bigNumber(e,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:y`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}let e=a.getPlainAddress(this.caipAddress)??``,{name:t,image:n}=this.getWalletProperties({namespace:this.namespace}),{icon:r,label:i}=ut[this.namespace]??{};return y`
      <wui-flex
        .padding=${[`4`,`3`,`4`,`3`]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${C(this.profileName)}
          address=${C(e)}
          imageSrc=${C(n)}
          alt=${C(t)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${C(i)}
          address=${C(e)}
          icon=${C(r)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${C(i)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){let e=d.state.activeChain;this.namespace=e,this.caipAddress=d.getAccountData(e)?.caipAddress,this.profileName=d.getAccountData(e)?.profileName??null,this.unsubscribe.push(d.subscribeChainProp(`accountState`,e=>this.onAccountStateChanged(e),e))}async fetchTokens(){if(this.namespace){let e;if(this.caipAddress){let{chainId:t,chainNamespace:n}=i.parseCaipAddress(this.caipAddress),r=`${n}:${t}`;e=d.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===r)}await L.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){let{address:e}=this.caipAddress?i.parseCaipAddress(this.caipAddress):{};L.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let n=this.activeConnectorIds[e];if(!n)return{name:void 0,image:void 0};let r=h.getConnector({id:n,namespace:e});if(!r)return{name:void 0,image:void 0};let i=t.getConnectorImage(r);return{name:r.name,image:i}}paymentOptionsViewTemplate(){return y`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){let e=this.getPaymentAssetFromTokenBalances();return this.isFetchingTokenBalances?y`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`:e.length===0?y`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`:y`<w3m-pay-options
      class=${ue({disabled:this.isFetchingQuote})}
      .options=${e}
      .selectedPaymentAsset=${C(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?y`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:y`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){let e=this.isFetchingQuote||this.isFetchingTokenBalances,t=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||!!this.quoteError,n=m.formatNumber(this.quote?.origin.amount??0,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return this.selectedExchange?e||t?y`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:y`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:y`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${e||t?y`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:y`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${F(n)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${this.quote?.origin.currency.metadata.symbol||`Unknown`}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:e,isDisabled:t})}
      </wui-flex>
    `}actionButtonTemplate(e){let t=j(this.quote),{isLoading:n,isDisabled:r}=e,i=`Pay`;return t.length>1&&this.completedTransactionsCount===0&&(i=`Approve`),y`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${n||this.isPaymentInProgress}
        ?disabled=${r||this.isPaymentInProgress}
        @click=${()=>{t.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${i}
        ${n?null:y`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){return this.namespace?(this.tokenBalances[this.namespace]??[]).map(e=>{try{return Pe(e)}catch{return null}}).filter(e=>!!e).filter(e=>{let{chainId:t}=i.parseCaipNetworkId(e.network),{chainId:n}=i.parseCaipNetworkId(this.paymentAsset.network);return _.isLowerCaseMatch(e.asset,this.paymentAsset.asset)?!0:!this.selectedExchange||!_.isLowerCaseMatch(t.toString(),n.toString())}):[]}onTokenBalancesChanged(e){this.tokenBalances=e;let[t]=this.getPaymentAssetFromTokenBalances();t&&L.setSelectedPaymentAsset(t)}async onConnectOtherWallet(){await h.connect(),await p.open({view:`PayQuote`})}onAccountStateChanged(e){let{address:t}=this.caipAddress?i.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null,t){let{address:e}=this.caipAddress?i.parseCaipAddress(this.caipAddress):{};e?_.isLowerCaseMatch(e,t)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):p.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||L.setSelectedPaymentAsset(e)}async onTransfer(){let e=A(this.quote);if(e){if(!_.isLowerCaseMatch(this.selectedPaymentAsset?.asset,e.deposit.currency))throw Error(`Quote asset is not the same as the selected payment asset`);let t=this.selectedPaymentAsset?.amount??`0`,n=m.formatNumber(e.deposit.amount,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!m.bigNumber(t).gte(n)){l.showError(`Insufficient funds`);return}if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){let{address:t}=i.parseCaipAddress(this.caipAddress);await L.onTransfer({chainNamespace:this.namespace,fromAddress:t,toAddress:e.deposit.receiver,amount:n,paymentAsset:this.selectedPaymentAsset}),L.setRequestId(e.requestId),s.push(`PayLoading`)}}}async onSendTransactions(){let e=this.selectedPaymentAsset?.amount??`0`,t=m.formatNumber(this.quote?.origin.amount??0,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!m.bigNumber(e).gte(t)){l.showError(`Insufficient funds`);return}let n=j(this.quote),[r]=j(this.quote,this.completedTransactionsCount);r&&this.namespace&&(await L.onSendTransaction({namespace:this.namespace,transactionStep:r}),this.completedTransactionsCount+=1,this.completedTransactionsCount===n.length&&(L.setRequestId(r.requestId),s.push(`PayLoading`)))}onPayWithExchange(){if(this.exchangeUrlForQuote){let e=a.returnOpenHref(``,`popupWindow`,`scrollbar=yes,width=480,height=720`);if(!e)throw Error(`Could not create popup window`);e.location.href=this.exchangeUrlForQuote;let t=A(this.quote);t&&L.setRequestId(t.requestId),L.initiatePayment(),s.push(`PayLoading`)}}resetAssetsState(){L.setSelectedPaymentAsset(null)}resetQuoteState(){L.resetQuoteState()}};Q.styles=lt,X([w()],Q.prototype,`profileName`,void 0),X([w()],Q.prototype,`paymentAsset`,void 0),X([w()],Q.prototype,`namespace`,void 0),X([w()],Q.prototype,`caipAddress`,void 0),X([w()],Q.prototype,`amount`,void 0),X([w()],Q.prototype,`recipient`,void 0),X([w()],Q.prototype,`activeConnectorIds`,void 0),X([w()],Q.prototype,`selectedPaymentAsset`,void 0),X([w()],Q.prototype,`selectedExchange`,void 0),X([w()],Q.prototype,`isFetchingQuote`,void 0),X([w()],Q.prototype,`quoteError`,void 0),X([w()],Q.prototype,`quote`,void 0),X([w()],Q.prototype,`isFetchingTokenBalances`,void 0),X([w()],Q.prototype,`tokenBalances`,void 0),X([w()],Q.prototype,`isPaymentInProgress`,void 0),X([w()],Q.prototype,`exchangeUrlForQuote`,void 0),X([w()],Q.prototype,`completedTransactionsCount`,void 0),Q=X([S(`w3m-pay-quote-view`)],Q);var dt=3e5;async function ft(e){return L.handleOpenPay(e)}async function pt(e,t=dt){if(t<=0)throw new k(D.INVALID_PAYMENT_CONFIG,`Timeout must be greater than 0`);try{await ft(e)}catch(e){throw e instanceof k?e:new k(D.UNABLE_TO_INITIATE_PAYMENT,e.message)}return new Promise((e,n)=>{let r=!1,i=setTimeout(()=>{r||(r=!0,o(),n(new k(D.GENERIC_PAYMENT_ERROR,`Payment timeout`)))},t);function a(){if(r)return;let t=L.state.currentPayment,n=L.state.error,a=L.state.isPaymentInProgress;if(t?.status===`SUCCESS`){r=!0,o(),clearTimeout(i),e({success:!0,result:t.result});return}if(t?.status===`FAILED`){r=!0,o(),clearTimeout(i),e({success:!1,error:n||`Payment failed`});return}n&&!a&&!t&&(r=!0,o(),clearTimeout(i),e({success:!1,error:n}))}let o=vt([$(`currentPayment`,a),$(`error`,a),$(`isPaymentInProgress`,a)]);a()})}function mt(){return L.getExchanges()}function ht(){return L.state.currentPayment?.result}function gt(){return L.state.error}function _t(){return L.state.isPaymentInProgress}function $(e,t){return L.subscribeKey(e,t)}function vt(e){return()=>{e.forEach(e=>{try{e()}catch{}})}}var yt={network:`eip155:8453`,asset:`native`,metadata:{name:`Ethereum`,symbol:`ETH`,decimals:18}},bt={network:`eip155:8453`,asset:`0x833589fcd6edb6e08f4c7c32d4f71b54bda02913`,metadata:{name:`USD Coin`,symbol:`USDC`,decimals:6}},xt={network:`eip155:84532`,asset:`native`,metadata:{name:`Ethereum`,symbol:`ETH`,decimals:18}},St={network:`eip155:1`,asset:`0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`,metadata:{name:`USD Coin`,symbol:`USDC`,decimals:6}},Ct={network:`eip155:10`,asset:`0x0b2c639c533813f4aa9d7837caf62653d097ff85`,metadata:{name:`USD Coin`,symbol:`USDC`,decimals:6}},wt={network:`eip155:42161`,asset:`0xaf88d065e77c8cC2239327C5EDb3A432268e5831`,metadata:{name:`USD Coin`,symbol:`USDC`,decimals:6}},Tt={network:`eip155:137`,asset:`0x3c499c542cef5e3811e1192ce70d8cc03d5c3359`,metadata:{name:`USD Coin`,symbol:`USDC`,decimals:6}},Et={network:`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`,asset:`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`,metadata:{name:`USD Coin`,symbol:`USDC`,decimals:6}},Dt={network:`eip155:1`,asset:`0xdAC17F958D2ee523a2206206994597C13D831ec7`,metadata:{name:`Tether USD`,symbol:`USDT`,decimals:6}},Ot={network:`eip155:10`,asset:`0x94b008aA00579c1307B0EF2c499aD98a8ce58e58`,metadata:{name:`Tether USD`,symbol:`USDT`,decimals:6}},kt={network:`eip155:42161`,asset:`0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9`,metadata:{name:`Tether USD`,symbol:`USDT`,decimals:6}},At={network:`eip155:137`,asset:`0xc2132d05d31c914a87c6611c10748aeb04b58e8f`,metadata:{name:`Tether USD`,symbol:`USDT`,decimals:6}},jt={network:`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`,asset:`Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`,metadata:{name:`Tether USD`,symbol:`USDT`,decimals:6}},Mt={network:`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`,asset:`native`,metadata:{name:`Solana`,symbol:`SOL`,decimals:9}},Nt=e({PayController:()=>L,W3mPayLoadingView:()=>U,W3mPayQuoteView:()=>Q,W3mPayView:()=>z,arbitrumUSDC:()=>wt,arbitrumUSDT:()=>kt,baseETH:()=>yt,baseSepoliaETH:()=>xt,baseUSDC:()=>bt,ethereumUSDC:()=>St,ethereumUSDT:()=>Dt,getExchanges:()=>mt,getIsPaymentInProgress:()=>_t,getPayError:()=>gt,getPayResult:()=>ht,openPay:()=>ft,optimismUSDC:()=>Ct,optimismUSDT:()=>Ot,pay:()=>pt,polygonUSDC:()=>Tt,polygonUSDT:()=>At,solanaSOL:()=>Mt,solanaUSDC:()=>Et,solanaUSDT:()=>jt});export{L as n,Nt as t};
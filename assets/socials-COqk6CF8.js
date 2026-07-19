import{C as e,H as t,M as n,U as r,V as i,b as a,j as o,l as s,r as c,t as l,v as u,w as d,y as f}from"./ModalController-6SMPj5P2.js";import{n as p,t as m}from"./ErrorUtil-Bvt3pFis.js";import{t as h}from"./AlertController-Z0ur9wCt.js";import{t as g}from"./wui-loading-thumbnail-B2Ssv3XX.js";import{c as _,f as v,o as y}from"./exports-ClBc5snA.js";import{c as b,l as x,o as S,s as C}from"./wui-text-CG16Khhc.js";import"./wui-button-8pCM6vX6.js";import"./wui-icon-De9480KG.js";import{t as w}from"./wui-list-social-XPZWa2LN.js";import"./wui-shimmer-DLVL6Vda.js";import"./wui-icon-box-CQ-NPRc9.js";import{t as T}from"./ConstantsUtil-C1qdKpER.js";import"./wui-qr-code-CxKDCL5X.js";var E=y`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,D=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},O=class extends _{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=u.state.connectors,this.authConnector=this.connectors.find(e=>e.type===`AUTH`),this.remoteFeatures=n.state.remoteFeatures,this.isPwaLoading=!1,this.hasExceededUsageLimit=e.state.plan.hasExceededUsageLimit,this.unsubscribe.push(u.subscribeKey(`connectors`,e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>e.type===`AUTH`)}),n.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.remoteFeatures?.socials||[],t=!!this.authConnector,n=e?.length,i=a.state.view===`ConnectSocials`;return(!t||!n)&&!i?null:(i&&!n&&(e=r.DEFAULT_SOCIALS),v` <wui-flex flexDirection="column" gap="2">
      ${e.map(e=>v`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            data-testid=${`social-selector-${e}`}
            name=${e}
            logo=${e}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`)}async onSocialClick(e){if(this.hasExceededUsageLimit){a.push(`UsageExceeded`);return}e&&await w(e)}async handlePwaFrameLoad(){if(i.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof p&&await this.authConnector.provider.init()}catch(e){h.open({displayMessage:`Error loading embedded wallet in PWA`,debugMessage:e.message},`error`)}finally{this.isPwaLoading=!1}}}};O.styles=E,D([b()],O.prototype,`tabIdx`,void 0),D([C()],O.prototype,`connectors`,void 0),D([C()],O.prototype,`authConnector`,void 0),D([C()],O.prototype,`remoteFeatures`,void 0),D([C()],O.prototype,`isPwaLoading`,void 0),D([C()],O.prototype,`hasExceededUsageLimit`,void 0),O=D([x(`w3m-social-login-list`)],O);var k=y`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.md}
      ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: opacity;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,A=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},j=class extends _{constructor(){super(),this.unsubscribe=[],this.checked=g.state.isLegalCheckboxChecked,this.unsubscribe.push(g.subscribeKey(`isLegalCheckboxChecked`,e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=n.state,r=n.state.features?.legalCheckbox,i=!!(e||t)&&!!r&&!this.checked,a=i?-1:void 0;return v`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${[`0`,`3`,`3`,`3`]}
        gap="01"
        class=${S(i?`disabled`:void 0)}
      >
        <w3m-social-login-list tabIdx=${S(a)}></w3m-social-login-list>
      </wui-flex>
    `}};j.styles=k,A([C()],j.prototype,`checked`,void 0),j=A([x(`w3m-connect-socials-view`)],j);var M=y`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e[8]};
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${({easings:e})=>e[`ease-out-power-2`]}
      ${({durations:e})=>e.lg};
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e[`ease-out-power-2`]} both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`,N=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},P=class extends _{constructor(){super(),this.unsubscribe=[],this.socialProvider=c.getAccountData()?.socialProvider,this.socialWindow=c.getAccountData()?.socialWindow,this.error=!1,this.connecting=!1,this.message=`Connect in the provider window`,this.remoteFeatures=n.state.remoteFeatures,this.address=c.getAccountData()?.address,this.connectionsByNamespace=s.getConnections(c.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=u.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri)if(e.origin===T.SECURE_SITE_ORIGIN){window.removeEventListener(`message`,this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.connecting=!0;let n=this.parseURLError(e.data.resultUri);if(n){this.handleSocialError(n);return}this.closeSocialWindow(),this.updateMessage();let r=e.data.resultUri;this.socialProvider&&d.sendEvent({type:`track`,event:`SOCIAL_LOGIN_REQUEST_USER_DATA`,properties:{provider:this.socialProvider}}),await s.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:r},this.authConnector.chain),this.socialProvider&&(t.setConnectedSocialProvider(this.socialProvider),d.sendEvent({type:`track`,event:`SOCIAL_LOGIN_SUCCESS`,properties:{provider:this.socialProvider}}))}}catch(e){this.error=!0,this.updateMessage(),this.socialProvider&&d.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:i.parseError(e)}})}}else a.goBack(),o.showError(`Untrusted Origin`),this.socialProvider&&d.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:`Untrusted Origin`}})},m.EmbeddedWalletAbortController.signal.addEventListener(`abort`,()=>{this.closeSocialWindow()}),this.unsubscribe.push(c.subscribeChainProp(`accountState`,e=>{if(e&&(this.socialProvider=e.socialProvider,e.socialWindow&&(this.socialWindow=e.socialWindow),e.address)){let t=this.remoteFeatures?.multiWallet;e.address!==this.address&&(this.hasMultipleConnections&&t?(a.replace(`ProfileWallets`),o.showSuccess(`New Wallet Added`),this.address=e.address):(l.state.open||n.state.enableEmbedded)&&l.close())}}),n.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener(`message`,this.handleSocialConnection,!1),!c.state.activeCaipAddress&&this.socialProvider&&!this.connecting&&d.sendEvent({type:`track`,event:`SOCIAL_LOGIN_CANCELED`,properties:{provider:this.socialProvider}}),this.closeSocialWindow()}render(){return v`
      <wui-flex
        data-error=${S(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`5`,`5`]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${S(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary"
            >Log in with
            <span class="capitalize">${this.socialProvider??`Social`}</span></wui-text
          >
          <wui-text align="center" variant="lg-regular" color=${this.error?`error`:`secondary`}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){let e=f.state.themeVariables[`--w3m-border-radius-master`];return v`<wui-loading-thumbnail radius=${(e?parseInt(e.replace(`px`,``),10):4)*9}></wui-loading-thumbnail>`}parseURLError(e){try{let t=e.indexOf(`error=`);return t===-1?null:e.substring(t+6)}catch{return null}}connectSocial(){let e=setInterval(()=>{this.socialWindow?.closed&&(!this.connecting&&a.state.view===`ConnectingSocial`&&a.goBack(),clearInterval(e))},1e3);window.addEventListener(`message`,this.handleSocialConnection,!1)}updateMessage(){this.error?this.message=`Something went wrong`:this.connecting?this.message=`Retrieving user data`:this.message=`Connect in the provider window`}handleSocialError(e){this.error=!0,this.updateMessage(),this.socialProvider&&d.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:e}}),this.closeSocialWindow()}closeSocialWindow(){this.socialWindow&&(this.socialWindow.close(),c.setAccountProp(`socialWindow`,void 0,c.state.activeChain))}};P.styles=M,N([C()],P.prototype,`socialProvider`,void 0),N([C()],P.prototype,`socialWindow`,void 0),N([C()],P.prototype,`error`,void 0),N([C()],P.prototype,`connecting`,void 0),N([C()],P.prototype,`message`,void 0),N([C()],P.prototype,`remoteFeatures`,void 0),P=N([x(`w3m-connecting-social-view`)],P);var F=y`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e[`ease-out-power-2`]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e[8]};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity, transform;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,I=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},L=class extends _{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=c.getAccountData()?.socialProvider,this.uri=c.getAccountData()?.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=n.state.remoteFeatures,this.authConnector=u.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(c.subscribeChainProp(`accountState`,e=>{this.socialProvider=e?.socialProvider,this.uri=e?.farcasterUrl,this.connectFarcaster()}),n.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e})),window.addEventListener(`resize`,this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener(`resize`,this.forceUpdate),!c.state.activeCaipAddress&&this.socialProvider&&(this.uri||this.loading)&&d.sendEvent({type:`track`,event:`SOCIAL_LOGIN_CANCELED`,properties:{provider:this.socialProvider}})}render(){return this.onRenderProxy(),v`${this.platformTemplate()}`}platformTemplate(){return i.isMobile()?v`${this.mobileTemplate()}`:v`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?v`${this.loadingTemplate()}`:v`${this.qrTemplate()}`}qrTemplate(){return v` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${[`0`,`5`,`5`,`5`]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return v`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`5`,`5`,`5`,`5`]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="md-medium" color="primary">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return v` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${[`10`,`5`,`5`,`5`]}
      gap="5"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          color="error"
          icon="close"
          size="sm"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="md-medium" color="primary"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="sm-regular" color="secondary"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){let e=f.state.themeVariables[`--w3m-border-radius-master`];return v`<wui-loading-thumbnail radius=${(e?parseInt(e.replace(`px`,``),10):4)*9}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await this.authConnector?.provider.connectFarcaster(),this.socialProvider&&(t.setConnectedSocialProvider(this.socialProvider),d.sendEvent({type:`track`,event:`SOCIAL_LOGIN_REQUEST_USER_DATA`,properties:{provider:this.socialProvider}})),this.loading=!0;let e=s.getConnections(this.authConnector.chain).length>0;await s.connectExternal(this.authConnector,this.authConnector.chain);let n=this.remoteFeatures?.multiWallet;this.socialProvider&&d.sendEvent({type:`track`,event:`SOCIAL_LOGIN_SUCCESS`,properties:{provider:this.socialProvider}}),this.loading=!1,e&&n?(a.replace(`ProfileWallets`),o.showSuccess(`New Wallet Added`)):l.close()}catch(e){this.socialProvider&&d.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:i.parseError(e)}}),a.goBack(),o.showError(e)}}mobileLinkTemplate(){return v`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&i.openHref(this.uri,`_blank`)}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=f.state.themeVariables[`--apkt-qr-color`]??f.state.themeVariables[`--w3m-qr-color`];return v` <wui-qr-code
      size=${e}
      theme=${f.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${S(t)}
    ></wui-qr-code>`}copyTemplate(){return v`<wui-button
      .disabled=${!this.uri||!this.ready}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{this.uri&&(i.copyToClopboard(this.uri),o.showSuccess(`Link copied`))}catch{o.showError(`Failed to copy`)}}};L.styles=F,I([C()],L.prototype,`socialProvider`,void 0),I([C()],L.prototype,`uri`,void 0),I([C()],L.prototype,`ready`,void 0),I([C()],L.prototype,`loading`,void 0),I([C()],L.prototype,`remoteFeatures`,void 0),L=I([x(`w3m-connecting-farcaster-view`)],L);export{j as W3mConnectSocialsView,L as W3mConnectingFarcasterView,P as W3mConnectingSocialView};
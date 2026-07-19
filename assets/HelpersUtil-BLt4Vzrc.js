import{M as e,b as t,rt as n}from"./ModalController-6SMPj5P2.js";import{c as r,f as i,o as a,r as o}from"./exports-ClBc5snA.js";import{c as s,l as c}from"./wui-text-CG16Khhc.js";import{t as l}from"./ConstantsUtil-C1qdKpER.js";var u=a`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    text-transform: uppercase;
    white-space: nowrap;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`,d=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},f=class extends r{constructor(){super(...arguments),this.variant=`accent`,this.size=`md`,this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let e=this.size===`md`?`md-medium`:`sm-medium`,t=this.size===`md`?`md`:`sm`;return i`
      ${this.icon?i`<wui-icon size=${t} name=${this.icon}></wui-icon>`:null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${e}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `}};f.styles=[o,u],d([s()],f.prototype,`variant`,void 0),d([s()],f.prototype,`size`,void 0),d([s()],f.prototype,`icon`,void 0),f=d([c(`wui-tag`)],f);var p={getTabsByNamespace(t){return t&&t===n.CHAIN.EVM?e.state.remoteFeatures?.activity===!1?l.ACCOUNT_TABS.filter(e=>e.label!==`Activity`):l.ACCOUNT_TABS:[]},isValidReownName(e){return/^[a-zA-Z0-9]+$/gu.test(e)},isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e)},validateReownName(e){return e.replace(/\^/gu,``).toLowerCase().replace(/[^a-zA-Z0-9]/gu,``)},hasFooter(){let n=t.state.view;if(l.VIEWS_WITH_LEGAL_FOOTER.includes(n)){let{termsConditionsUrl:t,privacyPolicyUrl:n}=e.state,r=e.state.features?.legalCheckbox;return!(!t&&!n||r)}return l.VIEWS_WITH_DEFAULT_FOOTER.includes(n)}};export{p as t};
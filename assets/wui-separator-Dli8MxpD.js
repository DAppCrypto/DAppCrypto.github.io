import{c as e,f as t,o as n,r}from"./exports-ClBc5snA.js";import{c as i,l as a}from"./wui-text-CG16Khhc.js";var o=n`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`,s=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},c=class extends e{constructor(){super(...arguments),this.text=``,this.bgColor=`primary`}render(){return this.dataset.bgColor=this.bgColor,t`${this.template()}`}template(){return this.text?t`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};c.styles=[r,o],s([i()],c.prototype,`text`,void 0),s([i()],c.prototype,`bgColor`,void 0),c=s([a(`wui-separator`)],c);
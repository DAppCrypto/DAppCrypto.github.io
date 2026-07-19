import{_ as e,c as t,f as n,r}from"./exports-ClBc5snA.js";import{c as i,l as a,o}from"./wui-text-CG16Khhc.js";import"./wui-input-text-DLmGjVT1.js";var s=e`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,c=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},l=class extends t{constructor(){super(...arguments),this.disabled=!1}render(){return n`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${o(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?n`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};l.styles=[r,s],c([i()],l.prototype,`errorMessage`,void 0),c([i({type:Boolean})],l.prototype,`disabled`,void 0),c([i()],l.prototype,`value`,void 0),c([i()],l.prototype,`tabIdx`,void 0),l=c([a(`wui-email-input`)],l);
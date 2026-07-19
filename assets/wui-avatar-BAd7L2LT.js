import{c as e,f as t,o as n,r}from"./exports-ClBc5snA.js";import{c as i,l as a,u as o}from"./wui-text-CG16Khhc.js";import"./wui-image-pIxAhRyg.js";var s=n`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:e})=>e[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,c=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},l=class extends e{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size=`xl`}render(){let e={inherit:`inherit`,xxs:`3`,xs:`5`,sm:`6`,md:`8`,mdl:`8`,lg:`10`,xl:`16`,xxl:`20`};return this.style.cssText=`
    --local-width: var(--apkt-spacing-${e[this.size??`xl`]});
    --local-height: var(--apkt-spacing-${e[this.size??`xl`]});
    `,t`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant=`image`,t`<wui-image src=${this.imageSrc} alt=${this.alt??`avatar`}></wui-image>`;if(this.address){this.dataset.variant=`generated`;let e=o.generateAvatarColors(this.address);return this.style.cssText+=`\n ${e}`,null}return this.dataset.variant=`default`,null}};l.styles=[r,s],c([i()],l.prototype,`imageSrc`,void 0),c([i()],l.prototype,`alt`,void 0),c([i()],l.prototype,`address`,void 0),c([i()],l.prototype,`size`,void 0),l=c([a(`wui-avatar`)],l);
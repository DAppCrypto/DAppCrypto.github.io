import{c as e,f as t,o as n,r,t as i}from"./exports-ClBc5snA.js";import{c as a,l as o,o as s}from"./wui-text-CG16Khhc.js";import"./wui-loading-spinner-CRVg-5Qf.js";var c=n`
  :host {
    width: 100%;
  }

  :host([data-type='primary']) > button {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-type='secondary']) > button {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    :host([data-type='primary']) > button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    :host([data-type='secondary']) > button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,l=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},u=class extends e{constructor(){super(...arguments),this.type=`primary`,this.imageSrc=`google`,this.imageSize=void 0,this.loading=!1,this.boxColor=`foregroundPrimary`,this.disabled=!1,this.rightIcon=!0,this.boxed=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?`true`:`false`,this.dataset.type=this.type,t`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        tabindex=${s(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?t`<wui-image
        icon=${this.icon}
        iconColor=${s(this.iconColor)}
        ?boxed=${this.boxed}
        ?rounded=${this.rounded}
        boxColor=${this.boxColor}
      ></wui-image>`:t`<wui-image
      ?boxed=${this.boxed}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      size=${s(this.imageSize)}
      src=${this.imageSrc}
      boxColor=${this.boxColor}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?t`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:t`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};u.styles=[r,i,c],l([a()],u.prototype,`type`,void 0),l([a()],u.prototype,`imageSrc`,void 0),l([a()],u.prototype,`imageSize`,void 0),l([a()],u.prototype,`icon`,void 0),l([a()],u.prototype,`iconColor`,void 0),l([a({type:Boolean})],u.prototype,`loading`,void 0),l([a()],u.prototype,`tabIdx`,void 0),l([a()],u.prototype,`boxColor`,void 0),l([a({type:Boolean})],u.prototype,`disabled`,void 0),l([a({type:Boolean})],u.prototype,`rightIcon`,void 0),l([a({type:Boolean})],u.prototype,`boxed`,void 0),l([a({type:Boolean})],u.prototype,`rounded`,void 0),l([a({type:Boolean})],u.prototype,`fullSize`,void 0),u=l([o(`wui-list-item`)],u);
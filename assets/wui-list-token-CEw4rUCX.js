import{tt as e}from"./ModalController-6SMPj5P2.js";import{c as t,f as n,o as r,r as i,t as a}from"./exports-ClBc5snA.js";import{c as o,l as s}from"./wui-text-CG16Khhc.js";import"./wui-image-pIxAhRyg.js";var c=r`
  :host {
    width: 100%;
  }

  button {
    padding: ${({spacing:e})=>e[3]};
    display: flex;
    gap: ${({spacing:e})=>e[3]};
    justify-content: space-between;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({spacing:e})=>e[10]};
    height: ${({spacing:e})=>e[10]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  .token-name-container {
    flex: 1;
  }
`,l=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},u=class extends t{constructor(){super(...arguments),this.tokenName=``,this.tokenImageUrl=``,this.tokenValue=0,this.tokenAmount=`0.0`,this.tokenCurrency=``,this.clickable=!1}render(){return n`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex
            flexDirection="column"
            justifyContent="space-between"
            gap="1"
            class="token-name-container"
          >
            <wui-text variant="md-regular" color="primary" lineClamp="1">
              ${this.tokenName}
            </wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${e.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          justifyContent="space-between"
          gap="1"
          alignItems="flex-end"
          width="auto"
        >
          <wui-text variant="md-regular-mono" color="primary"
            >$${this.tokenValue.toFixed(2)}</wui-text
          >
          <wui-text variant="sm-regular-mono" color="secondary">
            ${e.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?n`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:n`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}};u.styles=[i,a,c],l([o()],u.prototype,`tokenName`,void 0),l([o()],u.prototype,`tokenImageUrl`,void 0),l([o({type:Number})],u.prototype,`tokenValue`,void 0),l([o()],u.prototype,`tokenAmount`,void 0),l([o()],u.prototype,`tokenCurrency`,void 0),l([o({type:Boolean})],u.prototype,`clickable`,void 0),u=l([s(`wui-list-token`)],u);
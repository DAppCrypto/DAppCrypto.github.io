import{c as e,f as t,o as n,r,s as i,t as a}from"./exports-ClBc5snA.js";import{c as o,l as s,u as c}from"./wui-text-CG16Khhc.js";import{n as l,t as u}from"./ref-IW7QMmSZ.js";var d=n`
  :host {
    position: relative;
    display: inline-block;
  }

  :host([data-error='true']) > input {
    color: ${({tokens:e})=>e.core.textError};
  }

  :host([data-error='false']) > input {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  input {
    background: transparent;
    height: auto;
    box-sizing: border-box;
    color: ${({tokens:e})=>e.theme.textPrimary};
    font-feature-settings: 'case' on;
    font-size: ${({textSize:e})=>e.h4};
    caret-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    line-height: ${({typography:e})=>e[`h4-regular-mono`].lineHeight};
    letter-spacing: ${({typography:e})=>e[`h4-regular-mono`].letterSpacing};
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    font-family: ${({fontFamily:e})=>e.mono};
  }

  :host([data-width-variant='auto']) input {
    width: 100%;
  }

  :host([data-width-variant='fit']) input {
    width: 1ch;
  }

  .wui-input-amount-fit-mirror {
    position: absolute;
    visibility: hidden;
    white-space: pre;
    font-size: var(--local-font-size);
    line-height: 130%;
    letter-spacing: -1.28px;
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-input-amount-fit-width {
    display: inline-block;
    position: relative;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }
`,f=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},p=class extends e{constructor(){super(...arguments),this.inputElementRef=u(),this.disabled=!1,this.value=``,this.placeholder=`0`,this.widthVariant=`auto`,this.maxDecimals=void 0,this.maxIntegers=void 0,this.fontSize=`h4`,this.error=!1}firstUpdated(){this.resizeInput()}updated(){this.style.setProperty(`--local-font-size`,i.textSize[this.fontSize]),this.resizeInput()}render(){return this.dataset.widthVariant=this.widthVariant,this.dataset.error=String(this.error),this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),this.widthVariant===`auto`?this.inputTemplate():t`
      <div class="wui-input-amount-fit-width">
        <span class="wui-input-amount-fit-mirror"></span>
        ${this.inputTemplate()}
      </div>
    `}inputTemplate(){return t`<input
      ${l(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??``}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    />`}dispatchInputChangeEvent(){this.inputElementRef.value&&(this.inputElementRef.value.value=c.maskInput({value:this.inputElementRef.value.value,decimals:this.maxDecimals,integers:this.maxIntegers}),this.dispatchEvent(new CustomEvent(`inputChange`,{detail:this.inputElementRef.value.value,bubbles:!0,composed:!0})),this.resizeInput())}resizeInput(){if(this.widthVariant===`fit`){let e=this.inputElementRef.value;if(e){let t=e.previousElementSibling;t&&(t.textContent=e.value||`0`,e.style.width=`${t.offsetWidth}px`)}}}};p.styles=[r,a,d],f([o({type:Boolean})],p.prototype,`disabled`,void 0),f([o({type:String})],p.prototype,`value`,void 0),f([o({type:String})],p.prototype,`placeholder`,void 0),f([o({type:String})],p.prototype,`widthVariant`,void 0),f([o({type:Number})],p.prototype,`maxDecimals`,void 0),f([o({type:Number})],p.prototype,`maxIntegers`,void 0),f([o({type:String})],p.prototype,`fontSize`,void 0),f([o({type:Boolean})],p.prototype,`error`,void 0),p=f([s(`wui-input-amount`)],p);
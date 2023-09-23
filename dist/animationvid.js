class AppAnimationVid extends HTMLElement {
    constructor() {
        super();

        // Crea la sombra para el elemento personalizado
        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Define la plantilla para tu componente
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

                :host {
                    display: block;
                    position: relative;
                }

                :root{
                    --bg-color: #0F0F0F;
                    --boder-color: rgb(51,50,50);
                    --scroll-color: rgb(97,96,96);
                    --input-focus-color: #1C62B9;
                    --input-border-color: #969696;
                    --input-bg-color: #121212;
                    --input-color: #BBBBBB;
                    --buntton-bg-color: #323232;
                    --button-color: #999999;
                    --icons-hover-focus-color: rgba(236,231,231,0.2);
                    --icon-gertie-color: #FFFF;
                    --sidebar-hover-color: rgb(51, 50 ,50);
                    --sidebar-icon-color: rgb(139,139,139);
                    --grid-bg-color: #181818;
                    --grid-bg-after-color: rgba(14,12,14,0,6);
                    }

                .grid-media > img {
                    width: 100%;
                    display: block;
                }

                .duration {
                    position: absolute;
                    top: 2%;
                    right: 4%;
                    padding: 4px;
                    background-color: black;
                    font-size: 11px;
                    border-radius: 10px;
                }

                .description {
                    display: flex;
                    padding-top: 0px;
                }

                .meta-title {
                    font-weight: 500;
                    margin-bottom: 1px;
                    margin-top: 18px;
                    margin-right: 10px
                    font-size: 26pt;
                }

                .meta-like {
                    display: flex;
                    padding: 0px 18px;
                    align-items: center;
                    vertical-align: middle;
                    margin: 2px;
                }


                .meta-like > .like {
                    color: #D9D9D9;
                    font-weight: lighter;
                    position: absolute;
                    top: 70%;
                    right: 7%; 
                    transform: translateY(-50%);
                    margin: 2px;
                }
                
                .link-info{
                    color: #7A7A7A;
                    margin-bottom: 60px;
                }
            </style>
            <div class="grid-media">
                <img src="../assets/icons/icono_media_gertie.png" alt="">
                <span class="duration">00:00</span>
            </div>
            <div class="description">
                <div class="metadata">
                    <h3 class="meta-title">Animation media</h3>
                    <div class="meta-like">
                    <h3 class="like"> 100% </h3>
                    </div>
                    <div class="meta-description">
                        <div class="link-info">
                            <span>by animatorautor</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Clona la plantilla y adjunta el contenido a tu componente personalizado
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

// Registra el Custom Element con el nombre "app-animationvid"
customElements.define('app-animationvid', AppAnimationVid);


  // animationvid.js
export function reproducirVideo() {
    // Lógica para reproducir un video
  }
  
  export function detenerVideo() {
    // Lógica para detener un video
  }
  
  
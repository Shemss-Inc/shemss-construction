let niceRunning

const nice = snoopDogg => {
  if (niceRunning) return
  niceRunning = true

  document.head.insertAdjacentHTML('beforeend', `
    <style class="nice-stuff">
      @keyframes psychedelic {
        to {
          filter: hue-rotate(${360 * 3}deg);
        }
      }

      @keyframes justapeek {
        0% { opacity: 0; }
        50% { opacity: 0.25; }
        100% { opacity: 0; }
      }

      body {
        animation: psychedelic 18s;
      }

      .nice-pic-outer {
        width: 100%;
        height: 0;
        pointer-events: none;
        top: 0;
        left: 0;
        z-index: 999999;
      }

      .nice-pic {
        background-image: url("${snoopDogg}");
        background-size: cover;
        animation: justapeek 18s;
        opacity: 0;
        width: 100%;
        height: 100vh;
      }
    </style>
  `)

  document.body.insertAdjacentHTML('afterbegin', `
    <div class="nice-stuff position-sticky nice-pic-outer">
      <div class="nice-pic"></div>
    </div>
  `)

  setTimeout(() => {
    document.querySelectorAll('.nice-stuff')
    .forEach(element => element.parentNode.removeChild(element))
    niceRunning = false
  }, 19000)
}

const init = () => {
  const niceTrigger = document.querySelector('[data-nice]')
  let clicks = 0
  const handleClick = () => {
    if (++clicks >= 10) {
      nice(niceTrigger.dataset.nice)
      clicks = 0
    }
  }
  niceTrigger.addEventListener('click', handleClick)
  new Image().src = niceTrigger.dataset.nice
}

document.addEventListener('DOMContentLoaded', init)

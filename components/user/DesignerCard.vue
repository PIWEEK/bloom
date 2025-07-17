<script setup lang="ts">
import { animate, onScroll, stagger, svg, utils } from 'animejs'
import { onMounted } from 'vue'

onMounted(() => {
  const [container] = utils.$('.scroll-container')
  const debug = false

  animate('.element', {
    x: () => utils.random(-15, 15),
    y: () => utils.random(-15, 15),
    translateX: () => utils.random(-20, 20),
    translateY: () => utils.random(-20, 20),
    easing: 'easeInOutSine',
    duration: () => utils.random(3000, 5000),
    loop: true,
    alternate: true,
    scale: () => utils.random(0.8, 2),
    color: () => utils.randomPick(['#ff9ae8', '#14ceca']),
  })

  animate('.glow-circle', {
    opacity: [
      { value: 0.1, duration: 3000 },
      { value: 0.4, duration: 3000 },
    ],
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  })
  animate(svg.createDrawable('.penpet'), {
    draw: '0 1',
    ease: 'inOutQuad',
    duration: 2000,
    delay: stagger(600),
    autoplay: onScroll({ container, debug }),
  })

  animate(svg.createDrawable('.arrow-line-path'), {
    draw: '0 1',
    ease: 'linear',
    duration: 5000,
  })
})
// Wait a bit for the DOM to be fully rendered
</script>

<template>
  <div class="dev-box">
    <!-- Abstract floating elements -->
    <div
      class="element dot"
      style="top:40px; left:30px;"
    />
    <div
      class="element dot"
      style="top:100px; left:70px;"
    />
    <div
      class="element square"
      style="left:30px;"
    />
    <div
      class="element pulse"
      style="top:20px; left:30px;"
    />
    <svg
      class="penpet"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="470.7 -463.8 167.8 191.2"
    >
      <g transform="translate(-50.4 -7.5)">
        <use
          stroke="currentColor"
          stroke-width="2"
          clip-path="url(#inner-stroke-render-2685-e5305367-cb53-80dc-8005-e4157446fd0c-0)"
          href="#stroke-shape-render-2685-e5305367-cb53-80dc-8005-e4157446fd0c-0"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          d="M621-412.7c-1-3.4-26.7-34.2-40.2-40.8-19.1-9.2-7.3 31.3-.1 22.8 4-4.8-23-25-31.3-20-3.9 2.4-3.2 8.7 1.3 15 10.3 14.2 19.7 22.5 21.7 17.1 2.6-7-33.6-22.9-32.4-.6.7 12.5 22.8 12.3 22.8 12.3m58.2-5.8c-1-3.4-26.7-34.2-40.2-40.8-19.1-9.2-7.3 31.3-.1 22.8 4-4.8-23-25-31.3-20-3.9 2.4-3.2 8.7 1.3 15 10.3 14.2 19.7 22.5 21.7 17.2 2.6-7-33.6-23-32.4-.7.7 12.5 22.8 12.3 22.8 12.3m39-24.1c-11.8-3.1-49 2.6-32.5 37.5 16.6 35 12.1 51.7 37 58.5 24.9 6.8 43.4-30.4 38.1-47-5.3-16.7-21.8-43.6-42.6-49m-41.4 110s-45 45.6-36.8 53.5c8.2 7.9 54.8-34.5 47.3-37.5s-30.4 31.4-12.7 29.3c17.7-2 35.6-21.7 29.4-24.5-6.2-2.8-23.2 17-13.7 24.2 9.6 7.3 16-9.3 28.4-14.1 12.5-4.9 15.5 1.4 36 5.5 20.4 4 57-21.1 47.7-58.2-9.3-37-42.7-40-42.7-40m-83 61.9s-45 45.5-36.7 53.4c8.2 7.9 54.8-34.5 47.3-37.5s-30.4 31.4-12.7 29.3c17.7-2 35.6-21.7 29.4-24.5-6.2-2.8-23.2 17-13.7 24.2 9.6 7.3 16-9.3 28.4-14.1 12.5-4.9 15.5 1.4 36 5.4 20.4 4 57-21 47.7-58a51 51 0 0 0-42.7-40.1m-44.7-4.2a4.8 4.8 0 0 1-2-6.5 5 5 0 0 1 6.6-2.2 4.8 4.8 0 0 1 1.9 6.5 5 5 0 0 1-6.5 2.2zm0 0a4.8 4.8 0 0 1-2-6.5 5 5 0 0 1 6.6-2.2 4.8 4.8 0 0 1 1.9 6.5 5 5 0 0 1-6.5 2.2zm-5 12.1s8.3 9.5 19.4-.2c11.1-9.7 1.7-21 1.7-21m-21 21.2s8.2 9.5 19.3-.2c11.1-9.7 1.7-21 1.7-21"
        />
      </g>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="3835 1242.9 118.1 81.8"
      class="arrow-line"
    >
      <path
        d="M3843 1251.3s40.2-6.2 48 32.5c7.8 39.4 54 32.5 54 32.5"
        class="fills"
      />
      <defs>
        <marker
          id="marker-0"
          fill="currentColor"
          fill-opacity="1"
          markerHeight="4"
          markerWidth="4"
          orient="auto-start-reverse"
          refX="3"
          refY="3"
          viewBox="0 0 6 6"
        >
          <circle
            cx="3"
            cy="3"
            r="3"
          />
        </marker>
        <marker
          id="head"
          orient="auto"
          markerWidth="3"
          markerHeight="4"
          refX="0.1"
          refY="2"
        >
          <path
            d="M0,0 V4 L2,2 Z"
            fill="currentColor"
          />
        </marker>
      </defs>
      <path
        class="arrow-line-path"
        stroke="currentColor"
        stroke-width="3"
        marker-start="url(#marker-0)"
        marker-end="url(#head)"
        d="M3843 1251.3s40.2-6.2 48 32.5c7.8 39.4 54 32.5 54 32.5"
      />

    </svg>

    <!-- Static Label -->
    <div class="role-label">
      designer
    </div>
  </div>
</template>

<style scoped>
    .dev-box {
      --penpot-color: #f23ae5;
      --penpot-subtle: #14ceca;
      --penpot-pink: #ff9ae8FF;
      --penpot-purple: #a378f3FF;
      width: 200px;
      height: 200px;
      position: relative;
      overflow: hidden;
    }

    .role-label {
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: #222;
      font-size: 13px;
      z-index: 2;
    }

    .element {
      position: absolute;
      opacity: 0.7;
      z-index: 2;
    }

    .dot {
      width: 6px;
      height: 6px;
      background: var(--penpot-color);
    }

    .square {
      width: 30px;
      height: 30px;
      border: 3px solid var(--penpot-purple);
      border-radius: 2px;
      inset-block-start: 80px;
    }

    .pulse {
      width: 30px;
      height: 30px;
      background: radial-gradient(circle, var(--penpot-pink), transparent);
      border-radius: 50%;
    }

    .arrow-line {
      inline-size: 60%;
      position: absolute;
      inset-block-end: 20px;
      inset-inline-end: 20px;
      color:  var(--penpot-purple);
      rotate: 180deg;
    }

    .penpet {
      fill: none;
      color: var(--penpot-subtle);
      width: 60%;
      position: absolute;
      inset-inline-end: 20px;
      inset-block-start: 20px;
    }
</style>

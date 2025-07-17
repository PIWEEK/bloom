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
      viewBox="0 0 38.1 54.2"
    >
      <defs>
        <clipPath id="a">
          <use href="#a" />
        </clipPath>
        <clipPath id="b">
          <use href="#b" />
        </clipPath>
      </defs>
      <g
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <g class="strokes">
          <use
            class="inner-stroke-shape"
            clip-path="url(#a)"
            href="#a"
            transform="translate(-105.59157,-123.54915) matrix(0.26458333,0,0,0.26458333,-33.491796,302.62776)"
          />
        </g>
        <g
          stroke-linejoin="round"
          stroke-miterlimit="10"
          class="strokes"
          clip-rule="evenodd"
        >
          <use
            class="inner-stroke-shape"
            clip-path="url(#b)"
            href="#b"
            transform="translate(-105.59157,-123.54915) matrix(0.26458333,0,0,0.26458333,-33.491796,302.62776)"
          />
        </g>
        <path
          d="M594.6-569.6c0 4.1-1.8 7.5-4 7.5s-4-3.4-4-7.5c0-4.2 1.8-7.5 4-7.5s4 3.3 4 7.5zm14.2 38.8S591-546 594.3-565.4c2.2-12.9-5-15-9.3-10.5-4.3 4.5-7.2 19.7-3.6 32m16.3 11.7c-1.9.2-21.6-21.8-30.9-10.7-9.3 11.2 14.2 24.8 15.5 19.7 1.2-5.1-13.9-15-21.6-7-7.8 8 10.4 26.3 13.7 21.9 3.4-4.4-9-16.6-18.8-8.4-9.7 8.3 17.3 26.3 17.3 26.3m35.9-40.4S591-546 594.3-565.4c2.2-12.9-5-15-9.3-10.5-4.3 4.5-7.2 19.7-3.6 32m16.3 11.7c-1.9.2-21.6-21.8-30.9-10.7-9.3 11.2 14.2 24.8 15.5 19.7 1.2-5.1-13.9-15-21.6-7-7.8 8 10.4 26.3 13.7 21.9 3.4-4.4-9-16.6-18.8-8.4-9.7 8.3 17.3 26.3 17.3 26.3M608.4-639a6.7 6.7 0 0 0-4-8.5 6.4 6.4 0 0 0-8.3 3.7c-1.2 3.3.6 7 4 8.4a6.4 6.4 0 0 0 8.3-3.6zm5.5 9.7s.2 13.9-15.8 14c-5.2 0-8.7-1.5-11.2-3.8a19.2 19.2 0 0 1-5.6-12.2m32.6 2s.2 13.9-15.8 14c-16 .2-16.8-16-16.8-16m-39.8 143 29.2-4.5s43.4 30 83 8c39.6-22.2 18.4-65.2-2.7-71.3-21.1-6-32.7-5.6-34.2-18.4-1.5-12.7 41.7-21.6 12.5-60.2-3.6-4.8-15.5-25.5-8-22.2 17.2 7.8 19.6-11.7 9.3-13.3-21.3-3.4-28-5.3-28-5.3s-40.1-5.7-51 18c-4.1 8.9 1.7 12.9-3.7 17.7-4.3 3.8-17 8.3-9.8 24.5 1.1 2.6-15.1 4.9-6.7 25.2 2.7 6.5 13.9 13.3 24.2 14.9 13 2 18.7-3.6 17.9-.6-5.3 20-45.8 19.8-40.8 55.4 5 35.6 8.8 32.2 8.8 32.2"
          class="fills"
          transform="translate(-105.59157,-123.54915) matrix(0.26458333,0,0,0.26458333,-33.491796,302.62776) matrix(0.990933,0.134357,-0.133709,0.991021,-70.805422,-84.47143)"
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
      user experience
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
      inset-inline-end: 20px;
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
      inset-block-start: 40%;
      inset-inline-start: 20px;
      color:  var(--penpot-purple);
      rotate: 0;
    }

    .penpet {
      fill: none;
      color: var(--penpot-subtle);
      width: 40%;
      position: absolute;
      inset-inline-start: 20px;
      inset-block-start: 20px;
    }
</style>

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
    scale: () => utils.random(1, 2),
    color: () => utils.randomPick(['#ff9ae8', '#14ceca']),
  })

  utils.set('.line', {
    '--penpot-purple': utils.randomPick(['#a378f3FF', '#14ceca']),
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
      class="element line"
      style="top:20px; left:20px;"
    />
    <div
      class="element line"
      style="top:50px; left:50px;"
    />
    <div
      class="element line"
      style="top:100px; left:30px;"
    />
    <div
      class="element pulse"
      style="top:80px; left:80px;"
    />
    <svg
      class="penpet"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="114 -459 237 215"
    >
      <g clip-rule="evenodd">
        <path
          d="M165-402s-12 2-17-5c-2-3 1-15 18-13 16 2 17 10 16 17 0 7-14 28-4 51 10 22 33 16 33 15-4-4-8-9-6-17 3-17 17-19 23-34 5-14 13-24 36-26 22-2 33 13 36 19 26-24 42-10 48 13s-37 30-42 37c-4 6 10 6 10 6s-15 10-25-4c-10-15 28-28 26-38-2-9-14-5-14-5s3 10-10 22-25 18-18 31 41 5 61 16c21 11 24 66-30 59-12-2-20-5-26-9-2 10-12 13-18 5-4 5-14 15-29 17-14 3 14-23 17-21 4 2-16 23-28 18-13-5 15-25 18-24 4 2-20 28-26 23s1-26 22-32"
          class="fills"
        />
        <g
          stroke-linejoin="round"
          stroke-miterlimit="10"
          class="strokes"
        >
          <path
            stroke="currentColor"
            stroke-width="2"
            d="M165-402s-12 2-17-5c-2-3 1-15 18-13 16 2 17 10 16 17 0 7-14 28-4 51 10 22 33 16 33 15-4-4-8-9-6-17 3-17 17-19 23-34 5-14 13-24 36-26 22-2 33 13 36 19 26-24 42-10 48 13s-37 30-42 37c-4 6 10 6 10 6s-15 10-25-4c-10-15 28-28 26-38-2-9-14-5-14-5s3 10-10 22-25 18-18 31 41 5 61 16c21 11 24 66-30 59-12-2-20-5-26-9-2 10-12 13-18 5-4 5-14 15-29 17-14 3 14-23 17-21 4 2-16 23-28 18-13-5 15-25 18-24 4 2-20 28-26 23s1-26 22-32"
            class="stroke-shape"
          />
        </g>
        <path
          d="M162-421s-3-5 3-18 4-17-4-19c-7-1-17 15-15 34"
          class="fills"
        />
        <g
          stroke-linejoin="round"
          stroke-miterlimit="10"
          class="strokes"
        >
          <path
            stroke="currentColor"
            stroke-width="2"
            d="M162-421s-3-5 3-18 4-17-4-19c-7-1-17 15-15 34"
            class="stroke-shape"
          />
        </g>
        <path
          d="M146-433s-21 0-28 24c-8 23-2 29 3 26 5-4 15-36 8-30-6 6-10 29 0 26s19-34 13-31c-7 4-13 31-1 31 7 0 10-17 10-17"
          class="fills"
        />
        <g
          stroke-linejoin="round"
          stroke-miterlimit="10"
          class="strokes"
        >
          <path
            stroke="currentColor"
            stroke-width="2"
            d="M146-433s-21 0-28 24c-8 23-2 29 3 26 5-4 15-36 8-30-6 6-10 29 0 26s19-34 13-31c-7 4-13 31-1 31 7 0 10-17 10-17"
            class="stroke-shape"
          />
        </g>
        <path
          d="M128-387s-26 99 88 121"
          class="fills"
        />
        <g
          stroke-linejoin="round"
          stroke-miterlimit="10"
          class="strokes"
        >
          <path
            stroke="currentColor"
            stroke-width="2"
            d="M128-387s-26 99 88 121"
            class="stroke-shape"
          />
        </g>
      </g>
      <path
        d="M246-391c3 0 6 3 6 7s-3 7-6 7c-4 0-7-3-7-7s3-7 7-7"
        class="fills"
      />
      <g class="strokes">
        <g class="inner-stroke-shape">
          <defs>
            <clipPath id="b">
              <use href="#a" />
            </clipPath>
            <path
              id="a"
              fill="none"
              fill-opacity="none"
              stroke="currentColor"
              stroke-width="4.9"
              d="M246-391c3 0 6 3 6 7s-3 7-6 7c-4 0-7-3-7-7s3-7 7-7"
            />
          </defs>
          <use
            clip-path="url('#b')"
            href="#a"
          />
        </g>
      </g>
      <path
        d="M228-369s4 12 20 10 14-24 14-24"
        class="fills"
      />
      <g class="strokes">
        <g class="stroke-shape">
          <defs>
            <linearGradient
              id="c"
              x1=".5"
              x2=".5"
              y1="0"
              y2="1"
            >
              <stop
                offset="0"
                stop-color="#2f226c"
              />
              <stop
                offset="1"
                stop-color="#2f226c"
              />
            </linearGradient>
          </defs>
          <path
            stroke="currentColor"
            stroke-width="2.5"
            d="M228-369s4 12 20 10 14-24 14-24"
          />
        </g>
      </g>
    </svg>

    <!-- Static Label -->
    <div class="developer-label">
      developer
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

    .developer-label {
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: #222;
      font-size: 13px;
      z-index: 2;
    }

    .element {
      position: absolute;
      border-radius: 50%;
      opacity: 0.7;
      z-index: 2;
    }

    .dot {
      width: 6px;
      height: 6px;
      border: 2px solid var(--penpot-subtle);
    }

    .line {
      width: 30px;
      height: 3px;
      background: var(--penpot-purple);
      border-radius: 4px;
    }

    .pulse {
      width: 30px;
      height: 30px;
      background: radial-gradient(circle, var(--penpot-pink), transparent);
      border-radius: 50%;
    }

    .penpet {
      fill: none;
      color: var(--penpot-color);
      width: 60%;
      position: absolute;
      inset-inline-end: 20px;
      inset-block-start: 20px;
    }
</style>

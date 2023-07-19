<script setup lang="ts">
const data = Array.from({ length: 500 }, (_, idx) => idx + 1)
</script>

<template>
  <div h-full flex="~ col" p-10px>
    <div m-15px h-20px flex-y-center justify-between>
      <div text-22px font-bold>
        Auto Scroll
      </div>

      <a btn-orange href="https://juejin.cn/post/7234779572759658556?searchId=2023071916295070FB3D9BF8AC535A5CA1" target="_blank">
        credits
      </a>
    </div>
    <div mx-10vw mt-30px w-80vw>
      <div v-autoScroll.mouse="0.5" h-600px overflow-auto border="1 base" rounded>
        <div v-for="i, idx in data" :key="idx" h-30px flex-y-center justify-between px-30px border="b-1 base">
          <div flex-center>
            This is {{ i }}.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

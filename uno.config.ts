import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  presetWind,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'hw-full': 'h-full w-full',
      'hw-screen': 'h-screen w-screen',
      'flex-center': 'flex justify-center items-center',
      'flex-x-center': 'flex justify-center',
      'flex-y-center': 'flex items-center',
      'flex-col-center': 'flex-col flex-center',
      'border-base': 'border-[#8884]',
      'icon-btn': 'op30 hover:op100 hover:bg-primary_hover',
      'bg-body': 'bg-gray:15 dark:bg-[#17171A]',
      'bg-nav': 'bg-white dark:bg-[#232324]',
      'nav-item': 'flex-center border rounded px2.5 py1 border-base hover:(bg-#F2F3F5 dark:bg-#343435)',
    },
    [/^btn-(\w+)$/, ([_, color]) => `op50 px2.5 py1 transition-all duration-200 ease-out no-underline! cursor-pointer hover:(op100 text-${color} bg-${color}/10) border border-base! rounded`],
  ],
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),
    presetWind(),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        mono: 'DM Mono',
      },
    }),
  ],
})

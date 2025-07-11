import { useEffect, useRef } from 'react'
import { loadExternalResource } from '@/lib/utils'

/**
 * 滚动阻尼特效
 * 目前只用在proxio主题
 * @returns
 */
const Lenis = () => {
  const lenisRef = useRef(null) // 用于存储 Lenis 实例

  useEffect(() => {
    // 异步加载
    async function loadLenis() {
      try {
        await loadExternalResource('/js/lenis.js', 'js')

        // console.log('Lenis', window.Lenis)
        if (!window.Lenis) {
          console.error('Lenis not loaded')
          return
        }
        const Lenis = window.Lenis

        // 创建 Lenis 实例
        const lenis = new Lenis({
          duration: 0.8, // 更快响应
          easing: t => t, // 线性滚动，最跟手
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 1.5,
          infinite: false
        })

        // 存储实例到 ref
        lenisRef.current = lenis

        // 监听滚动事件
        // lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
        //   // console.log({ scroll, limit, velocity, direction, progress })
        // })

        // 动画帧循环
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
      } catch (error) {
        console.error('Failed to load Lenis:', error)
      }
    }

    loadLenis()

    return () => {
      // 在组件卸载时清理资源
      if (lenisRef.current) {
        lenisRef.current.destroy() // 销毁 Lenis 实例
        lenisRef.current = null
        // console.log('Lenis instance destroyed')
      }
    }
  }, [])

  return <></>
}

export default Lenis

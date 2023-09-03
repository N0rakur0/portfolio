const wrapper = document.querySelector('#scroll');
if (wrapper) {
    // gsap.registerPlugin(ScrollTrigger); // npm/yarnの際に必要
    const panels = gsap.utils.toArray('.wrapper'); 
    const wrapperWidth = wrapper.offsetWidth;

    // 横スクロールのアニメーション設定
    gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: wrapper,
            pin: true,
            scrub: 1,
            snap: {
                snapTo: 1 / (panels.length - 1),
                duration: { min: 0.4, max: 0.6 },
                ease: "none"
            },
            end: () => "+=" + wrapperWidth
        }
    });
}
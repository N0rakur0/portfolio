// ロード画面

document.addEventListener("DOMContentLoaded", function() {
    const loaderWrapper = document.querySelector(".loader-wrapper");

    // 5秒後にローディング画面を非表示にする（フェードアウト付き）
    setTimeout(function() {
        loaderWrapper.classList.add("hidden"); // フェードアウトクラスを追加
    }, 5000); // 5秒（5000ミリ秒）の遅延時間を設定
});


// 横スクロール
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

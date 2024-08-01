/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722493909", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 backdrop-blur-lg bg-opacity-30 shadow-xl min-h-450px">
            <div id="footer-container" class="max-w-screen-xl p-10 py-12 mx-auto lg:py-20 md:p-14 lg:p-16 rounded-3xl border border-white border-opacity-30 backdrop-filter backdrop-blur-xl bg-white bg-opacity-10 shadow-2xl">
                <hr id="footer-divider" class="my-10 border-white border-opacity-40 sm:mx-auto lg:my-12">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-8 text-4xl font-extrabold text-white text-opacity-90 transition duration-300 hover:text-opacity-100 hover:text-pink-300">
                            <img id="footer-logo" src="./images/logo.svg" class="h-10 mr-5 sm:h-12 filter drop-shadow-lg" alt="Landwind Logo" />
                            FabricFinds - Your Cosmic Fashion Haven
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-xl text-center text-white text-opacity-90 font-medium tracking-wide leading-relaxed">
                        Discover celestial style at FabricFinds. Explore our otherworldly collection of fabrics, clothing, and accessories for every cosmic occasion. Elevate your fashion to stellar heights with us!
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

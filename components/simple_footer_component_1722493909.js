/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722493909", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 backdrop-blur-md bg-opacity-30 shadow-lg">
            <div id="footer-container" class="max-w-screen-xl p-8 py-10 mx-auto lg:py-16 md:p-12 lg:p-14 rounded-3xl border border-white border-opacity-20">
                <hr id="footer-divider" class="my-8 border-white border-opacity-30 sm:mx-auto lg:my-10">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-4 sm:h-10 filter drop-shadow-lg" alt="Landwind Logo" />
                            FabricFinds - Your Stylish Destination Place of living
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-lg text-center text-white text-opacity-80 font-medium">
                        Experience the best in fashion at FabricFinds. Browse our exquisite collection of fabrics, clothing, and accessories for every style and occasion. Stay trendy with us!
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

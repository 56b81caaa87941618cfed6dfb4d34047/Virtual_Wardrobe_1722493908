/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722493909", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-500 to-purple-700 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl px-8 py-12 mx-auto lg:py-20 lg:px-10 backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-4xl font-extrabold leading-tight tracking-wide text-white text-shadow-lg">Cosmic Style Evolution</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-medium text-white/90 text-xl">Embark on a Surreal Fashion Journey</p>
                </div>
                
                <div id="cta-button-container" class="flex space-x-6">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-gradient-to-r from-pink-400 to-purple-600 hover:from-pink-500 hover:to-purple-700 focus:ring-4 focus:ring-purple-300 font-bold rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Explore Now</a>
                    <a id="ui-elements-button" href="#" class="flex-1 text-white bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-500 hover:to-pink-700 focus:ring-4 focus:ring-pink-300 font-bold rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Cosmic Elements</a>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

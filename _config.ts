import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
    location: new URL("https://files-2oa.pages.dev"),
    components: {
        variable: "components",
    },
    server: {
        page404: "/404/",
    },
});

site.copy("static", ".");

site.use(date());
site.use(tailwindcss({
    options: {
        theme: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
}));
site.use(postcss());

export default site;

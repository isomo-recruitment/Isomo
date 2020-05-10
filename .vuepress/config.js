module.exports = {
    title: "Isomo Recruitment",
    base: "/documentation-website/",
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    themeConfig: {
        logo: "/logo.png",
        repo: "https://github.com/Isomo-Recruitment",
        nav: [
            { text: "Home", link: "/" },
            { text: "Research", link: "/src/Research/" },
            { text: "Recruiter", link: "/src/Recruiter/" },
            { text: "Applicant", link: "/src/Applicant/" },
        ],
        sidebar: "auto",
    },
};

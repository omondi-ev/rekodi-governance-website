const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mobileNav.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    const mobileLinks = mobileNav.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });
}



const institutionData = {

    company: {
        title: "Company Governance",
        name: "Companies",
        description:
            "Connect board oversight, executive leadership, committees and departments without changing how your organization is structured.",
        structure: [
            "Board of Directors",
            "Executive",
            "Committees",
            "Departments"
        ]
    },


    parastatal: {
        title: "Public Institution Governance",
        name: "Parastatals",
        description:
            "Create continuity between board oversight, management, committees and departments while maintaining clear governance records.",
        structure: [
            "Board",
            "Management",
            "Committees",
            "Departments"
        ]
    },


    ngo: {
        title: "NGO Governance",
        name: "NGOs",
        description:
            "Connect boards, programmes, committees and operational teams while preserving decisions, responsibilities and institutional history.",
        structure: [
            "Board",
            "Secretariat",
            "Programmes",
            "Committees"
        ]
    },


    sacco: {
        title: "SACCO Governance",
        name: "SACCOs",
        description:
            "Support structured oversight across the board, management and committees while keeping governance responsibilities visible.",
        structure: [
            "Board",
            "Management",
            "Supervisory Committee",
            "Committees"
        ]
    },


    school: {
        title: "School Governance",
        name: "Schools",
        description:
            "Connect school boards, administration, departments and committees within one continuous governance environment.",
        structure: [
            "Board",
            "Administration",
            "Departments",
            "Committees"
        ]
    },


    church: {
        title: "Church Governance",
        name: "Churches",
        description:
            "Give church boards, departments, committees and ministries a structured environment for decisions, responsibilities and continuity.",
        structure: [
            "Church Board",
            "Leadership",
            "Departments",
            "Ministries"
        ]
    }

};



const institutionTabs =
    document.querySelectorAll(".institution-tab");


institutionTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const type =
            tab.dataset.institution;

        const data =
            institutionData[type];


        /* Active tab */

        institutionTabs.forEach(button =>
            button.classList.remove("active")
        );

        tab.classList.add("active");


        /* Change content */

        document.getElementById(
            "institution-title"
        ).textContent = data.title;


        document.getElementById(
            "institution-description"
        ).textContent = data.description;


        document.getElementById(
            "institution-link-name"
        ).textContent = data.name;


        document.getElementById(
            "structure-one"
        ).textContent = data.structure[0];


        document.getElementById(
            "structure-two"
        ).textContent = data.structure[1];


        document.getElementById(
            "structure-three"
        ).textContent = data.structure[2];


        document.getElementById(
            "structure-four"
        ).textContent = data.structure[3];

    });

});
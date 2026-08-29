export interface MenuItem {
    label: string
    path?: string
    children?: MenuItem[]
}

export const fullMenu: MenuItem[] = [
    {
        label: "About Us",
        children: [
            { label: "Overview", path: "/about" },
            { label: "Our Legacy", path: "/about/history" },
            { label: "Founders", path: "/about/founders" },
            { label: "Vision & Mission", path: "/about/vision-mission" },
            { label: "Chairman", path: "/about/chairman-message" },
            { label: "Principal", path: "/about/principal-message" },
            { label: "Director of Studies", path: "/about/director-of-studies" },
        ],
    },
    {
        label: "Admissions",
        path: "/admissions",
    },
    {
        label: "Academics",
        children: [
            { label: "Overview", path: "/academics" },
            { label: "Montessori", path: "/academics/puc" },
            { label: "Lower Primary School", path: "/academics/bca" },
            { label: "Higher Primary School", path: "/academics/bcom" },
            { label: "High School", path: "/academics/bcom-data-analytics" },
        ],
    },
    {
        label: "Campus",
        path: "/infrastructure",
    },

    {
        label: "Non Academics",
        children: [
            { label: "Overview", path: "/non-academics" },
            { label: "Sports", path: "/non-academics/sports" },
            { label: "Cultural", path: "/non-academics/cultural" },
            { label: "Extra-Curricular", path: "/non-academics/extra-curriculum" },
            { label: "Spiritual", path: "/non-academics/spiritual" },
            { label: "School Committees", path: "/non-academics/nss" },
        ],
    },
    {
        label: "Student Life",
        children: [
            { label: "Student Welfare", path: "/student-life" },
            { label: "Discipline ", path: "/student-life/anti-ragging" },
            { label: "SSLC Achievers", path: "/student-life/placement" },
        ],
    },
    {
        label: "Faculty",
        path: "/faculty",
    },
    {
        label: "Contact Us",
        path: "/contact",
    },
]

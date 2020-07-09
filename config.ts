const siteMetadata = {
    title: `Kanishk Gupta`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/K.png`,
    icon: `/images/Sharp.jpg`,
    titleImage: `/images/wall.png`,
    ogImage: `/images/wall.png`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `Developer | Student | Learner`,
    description: `Ciao! I am Kanishk Gupta, Happy to see you here. Let me walk through the magic 🧙‍♂️ I keep on doing.`,
    about:
        `MERN stack developer enthusiasts in making projects in JavaScript using stacks like React.js, Gatsby, Express, Node.js, and database using Mongo dB and firebase. Love to participate in Hackathons and take session as a tech speaker. 
        \nYah, I am a Microsoft Student Partner!!`,
    author: `@gkanishk`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
        {
            name: "GitHub",
            url: "https://github.com/gkanishk/",
        },
    ],
    social: [
        {
            name: "LinkenIn",
            icon: "/images/linkedin.png",
            url: "https://www.linkedin.com/in/gkanishk",
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/gkanishk_",
        },
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/gkanishk1",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://instagram.com/gkanishk_",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://getform.io/f/63c04aba-96f7-4d4e-9534-19a32bd2acd9",
        description: `Interested in my profile, got some work for me! \nLets talk`,
        mail: "kanishkgupta11@yahoo.com",
        phone: "9934435627",
        address: "Chandigarh University | Mohali,\n Chandigarh, Punjab,140413 |",
    },
    disqus: "elemental-netlify-com",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }

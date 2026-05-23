// ============================================
// JAGRAT SATI - AI-POWERED PORTFOLIO CHATBOT
// Phase 1: Enhanced Smart Chatbot (v2.0)
// ============================================

class JagratChatbot {
    constructor() {
        this.isOpen = false;
        this.speechEnabled = false;
        this.selectedVoice = null;
        this.messageHistory = [];
        this.lastTopic = null;
        this.messageCount = 0;

        this.knowledgeBase = this.buildKnowledgeBase();
        this.intents = this.buildIntents();
        this.conversationStarters = [
            "What are Jagrat's skills?",
            "Show me projects",
            "Tell me about his experience",
            "Is he available for hire?"
        ];

        this.loadVoices();
        if (window.speechSynthesis) {
            window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
        }
    }

    // ==========================================
    // KNOWLEDGE BASE - Comprehensive info
    // ==========================================
    buildKnowledgeBase() {
        return {
            personal: {
                name: "Jagrat Sati",
                title: "Web Developer | Junior Full Stack Developer",
                location: "Haldwani, Uttarakhand, India",
                university: "Amrapali University",
                degree: "Bachelor of Computer Applications (BCA)",
                degreeStatus: "2023 – Present (Pursuing)",
                email: "Contact via portfolio form",
                linkedin: "https://linkedin.com/in/jagratsati045",
                github: "https://github.com/jagratsati45",
                devto: "https://dev.to/jagratsati45",
                availability: "Actively seeking opportunities",
                goal: "To become a Full Stack Developer specializing in AI integrations, creating scalable and intelligent digital solutions.",
                about: "A passionate Web Developer and Junior Full Stack Developer pursuing BCA at Amrapali University. Specializes in building seamless, intelligent digital experiences from the ground up.",
                strengths: ["Quick learner", "Problem solver", "Team player", "Self-motivated", "Detail-oriented"],
                interests: ["AI/ML", "Web Development", "Open Source", "Cloud Computing", "UI/UX Design"],
                workStyle: "Jagrat prefers agile workflows, clean code practices, and collaborative development. He's comfortable with remote work and async communication."
            },

            skills: {
                frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Responsive Design", "Tailwind CSS"],
                backend: ["PHP", "Node.js", "Laravel", "Express.js"],
                languages: ["Python (Basic)", "C++", "Java (OOP)"],
                databases: ["MySQL", "MongoDB"],
                tools: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify"],
                concepts: ["REST APIs", "MVC Architecture", "OOP", "Version Control", "Agile Methodology"],
                ai: ["AI Integration", "Chatbot Development", "Prompt Engineering"],
                learning: ["TypeScript", "Next.js", "Docker", "AWS"]
            },

            projects: [
                {
                    name: "Dev Utility Hub",
                    description: "A comprehensive developer toolkit featuring JSON formatting, JWT decoding, Base64 encoding/decoding, and API testing tools — all in one clean, responsive interface.",
                    tech: ["HTML", "CSS", "JavaScript"],
                    highlights: ["Multi-tool interface", "Real-time formatting", "Clean UI"],
                    liveUrl: "https://dev-utility-hub-one.vercel.app/",
                    githubUrl: "https://github.com/jagratsati45/Dev-Utility-Hub"
                },
                {
                    name: "Weather View",
                    description: "A clean weather application that fetches real-time weather data using API, displaying temperature, humidity, wind speed, and forecasts with a modern UI.",
                    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
                    highlights: ["Real-time data", "API integration", "Modern UI", "Responsive"],
                    liveUrl: "https://weather-view-js.netlify.app/",
                    githubUrl: "https://github.com/jagratsati45/Weather-App"
                },
                {
                    name: "Currency Converter",
                    description: "A real-time currency converter app that fetches live exchange rates via API, supporting multiple currencies with a seamless, intuitive user experience.",
                    tech: ["HTML", "CSS", "JavaScript", "Exchange Rate API"],
                    highlights: ["Real-time rates", "Multiple currencies", "API integration"],
                    liveUrl: "https://currency-converter045.netlify.app",
                    githubUrl: "https://github.com/jagratsati45/currency_converter-"
                },
                {
                    name: "Tic Tac Toe",
                    description: "A classic Tic Tac Toe game featuring modern UI design, smooth animations, win detection logic, and fully responsive layout.",
                    tech: ["HTML", "CSS", "JavaScript"],
                    highlights: ["Game logic", "Win detection", "Modern UI"],
                    liveUrl: "https://tictactoe.netlify.app",
                    githubUrl: "https://github.com/jagratsati45/tic-tac-toe.git"
                },
                {
                    name: "TaskFlow (TODO App)",
                    description: "A modern, mobile-friendly task management app with gradient UI, due dates, swipe gestures, haptic feedback, and smooth animations for daily productivity.",
                    tech: ["HTML", "CSS", "JavaScript"],
                    highlights: ["Swipe gestures", "Haptic feedback", "Mobile-first design"],
                    liveUrl: "https://todo-its.netlify.app",
                    githubUrl: "https://github.com/jagratsati45/my-daily-tasks.git"
                },
                {
                    name: "STREAMFLIX (Netflix Clone)",
                    description: "A full Netflix clone with user authentication (signup/login), movie browsing, search functionality, and responsive design for an immersive streaming experience.",
                    tech: ["HTML", "CSS", "JavaScript"],
                    highlights: ["User auth", "Movie browsing", "Search", "Responsive"],
                    liveUrl: "https://streamflixmov.netlify.app/",
                    githubUrl: "https://github.com/jagratsati45/streamflix.git"
                },
                {
                    name: "Portfolio Website",
                    description: "This personal portfolio featuring AI chatbot integration, dark/light theme toggle, particle animations, AOS scroll animations, and fully responsive design.",
                    tech: ["HTML", "CSS", "JavaScript", "AI Chatbot"],
                    highlights: ["AI Chatbot", "Theme toggle", "Particle effects", "Responsive"],
                    liveUrl: "#",
                    githubUrl: "https://github.com/jagratsati45/My-Personal-Portfolio.git"
                }
            ],

            education: [
                {
                    degree: "Bachelor of Computer Applications (BCA)",
                    institution: "Amrapali University, Haldwani",
                    period: "2023 – Present",
                    details: "Pursuing full-time BCA with focus on programming, databases, and web technologies."
                },
                {
                    degree: "Intermediate (Class 11th - 12th)",
                    institution: "K.V.M Public School, Haldwani",
                    board: "CBSE – PCM Stream (Physics, Chemistry, Mathematics)",
                    period: "2021 – 2023"
                },
                {
                    degree: "High School (Class 10th)",
                    institution: "K.V.M Public School, Haldwani",
                    board: "CBSE",
                    period: "2020 – 2021"
                }
            ],

            certificates: [
                { name: "Microsoft AI Skills Fest", issuer: "Microsoft", category: "AI/ML", year: "2024" },
                { name: "Generative AI Foundations", issuer: "UpGrad in collaboration with Microsoft", category: "AI/ML", year: "2024" },
                { name: "Web Development Internship", issuer: "Varenyam Pvt Ltd", category: "Web Dev", year: "2024" },
                { name: "Introduction to Frontend Development", issuer: "Simplilearn", category: "Web Dev", year: "2023" },
                { name: "Software Engineering Job Simulation", issuer: "Forage (JPMorgan)", category: "Software Engineering", year: "2024" },
                { name: "AWS Solution Architecture Job Simulation", issuer: "Forage / AWS", category: "Cloud", year: "2024" }
            ],

            services: [
                { name: "Web Development", description: "Building responsive, dynamic, and modern websites from scratch using latest technologies", icon: "code" },
                { name: "AI Integration", description: "Integrating AI-powered features, chatbots, and intelligent automation into web applications", icon: "robot" },
                { name: "Database Management", description: "Designing and managing SQL and NoSQL databases for efficient data handling", icon: "database" },
                { name: "Laravel Development", description: "Building robust, scalable web applications with the Laravel PHP framework", icon: "laravel" },
                { name: "Frontend Development", description: "Creating pixel-perfect, responsive UIs with modern CSS and JavaScript frameworks", icon: "palette" }
            ],

            experience: [
                {
                    role: "Web Development Intern",
                    company: "Varenyam Pvt Ltd",
                    period: "2024",
                    description: "Gained hands-on experience in web development, worked on real client projects, learned industry workflows and collaboration tools.",
                    skills: ["HTML", "CSS", "JavaScript", "Team Collaboration"]
                }
            ],

            simulations: [
                { name: "Software Engineering Job Simulation", company: "JPMorgan Chase (via Forage)", skills: ["Python", "React", "Financial Data"] },
                { name: "AWS Solution Architecture Job Simulation", company: "AWS (via Forage)", skills: ["Cloud Architecture", "AWS Services", "Scalability"] }
            ],

            blogs: [
                { title: "The Rise of AI in Web Development", url: "https://dev.to/jagratsati45/more-than-a-buzzword-how-ai-is-reshaping-web-development-nll", topic: "AI" },
                { title: "A Deep Dive into Laravel", url: "https://dev.to/jagratsati45/why-im-betting-on-laravel-a-deep-dive-for-aspiring-developers-21no", topic: "Laravel" }
            ],

            funFacts: [
                "Jagrat built this AI chatbot from scratch to showcase his AI integration skills!",
                "He has completed 6+ professional certifications in just one year.",
                "His portfolio uses particle.js animations and AOS scroll effects.",
                "He writes technical blogs on Dev.to to share knowledge with the community.",
                "He completed job simulations for both JPMorgan and AWS.",
                "This chatbot understands 50+ different types of questions!"
            ]
        };
    }

    // ==========================================
    // INTENT SYSTEM - Smart pattern matching
    // ==========================================
    buildIntents() {
        return [
            {
                name: "greeting",
                patterns: ["hi", "hello", "hey", "namaste", "greetings", "good morning", "good evening", "good afternoon", "sup", "yo", "hola", "howdy", "what's up", "whats up"],
                handler: () => this.handleGreeting()
            },
            {
                name: "skills",
                patterns: ["skill", "tech stack", "technologies", "what can he do", "what does he know", "programming", "languages he knows", "framework", "tools he uses", "expertise", "proficient", "capable"],
                handler: () => this.handleSkills(),
                scrollTarget: "#skills"
            },
            {
                name: "frontend_skills",
                patterns: ["frontend", "front-end", "front end", "html", "css", "react", "ui", "user interface", "tailwind"],
                handler: () => this.handleFrontendSkills(),
                scrollTarget: "#skills"
            },
            {
                name: "backend_skills",
                patterns: ["backend", "back-end", "back end", "server", "node", "php", "laravel", "express", "api"],
                handler: () => this.handleBackendSkills(),
                scrollTarget: "#skills"
            },
            {
                name: "projects",
                patterns: ["project", "work", "portfolio", "built", "created", "developed", "apps", "websites", "show me", "what has he made", "demo"],
                handler: () => this.handleProjects(),
                scrollTarget: "#projects"
            },
            {
                name: "specific_project",
                patterns: ["dev utility", "utility hub", "currency converter", "currency convert", "tic tac", "tictactoe", "taskflow", "todo", "task app", "streamflix", "netflix clone", "portfolio website", "weather view", "weather app"],
                handler: (msg) => this.handleSpecificProject(msg),
                scrollTarget: "#projects"
            },
            {
                name: "education",
                patterns: ["education", "study", "college", "university", "degree", "school", "bca", "qualification", "academic", "studying", "student", "class"],
                handler: () => this.handleEducation(),
                scrollTarget: "#education"
            },
            {
                name: "certificates",
                patterns: ["certificate", "certification", "certified", "course", "training", "achievement", "credential", "badge"],
                handler: () => this.handleCertificates(),
                scrollTarget: "#certificates"
            },
            {
                name: "experience",
                patterns: ["experience", "internship", "work experience", "company", "varenyam", "intern", "worked at", "professional"],
                handler: () => this.handleExperience()
            },
            {
                name: "services",
                patterns: ["service", "offer", "what can he do for me", "hire for", "provide", "deliverables", "what does he offer"],
                handler: () => this.handleServices(),
                scrollTarget: "#services"
            },
            {
                name: "contact",
                patterns: ["contact", "reach", "email", "phone", "linkedin", "github", "social", "connect", "get in touch", "message him", "talk to him", "reach out"],
                handler: () => this.handleContact(),
                scrollTarget: "#contact"
            },
            {
                name: "resume",
                patterns: ["resume", "cv", "download resume", "get resume", "curriculum vitae", "download cv"],
                handler: () => this.handleResume(),
                scrollTarget: "#resume"
            },
            {
                name: "availability",
                patterns: ["available", "hire", "hiring", "open to work", "freelance", "opportunity", "looking for", "recruit", "can i hire", "open for work", "job seeking"],
                handler: () => this.handleAvailability()
            },
            {
                name: "location",
                patterns: ["location", "where is he", "city", "country", "based in", "live", "from where", "hometown", "address"],
                handler: () => this.handleLocation()
            },
            {
                name: "about",
                patterns: ["about", "who is jagrat", "tell me about him", "introduce", "bio", "background", "summary", "overview", "profile"],
                handler: () => this.handleAbout(),
                scrollTarget: "#about"
            },
            {
                name: "goals",
                patterns: ["goal", "ambition", "future", "plan", "aspiration", "dream", "vision", "where does he see", "career plan"],
                handler: () => this.handleGoals()
            },
            {
                name: "strengths",
                patterns: ["strength", "strong point", "best at", "good at", "speciality", "specialty", "what makes him different", "unique", "standout"],
                handler: () => this.handleStrengths()
            },
            {
                name: "blog",
                patterns: ["blog", "article", "write", "writing", "post", "dev.to", "content", "publish"],
                handler: () => this.handleBlog(),
                scrollTarget: "#blog"
            },
            {
                name: "learning",
                patterns: ["learning", "currently learning", "studying now", "next skill", "improving", "upskilling", "what's next"],
                handler: () => this.handleLearning()
            },
            {
                name: "work_style",
                patterns: ["work style", "how does he work", "remote", "team", "collaboration", "agile", "workflow"],
                handler: () => this.handleWorkStyle()
            },
            {
                name: "why_hire",
                patterns: ["why should i hire", "why hire him", "why choose", "what value", "why jagrat", "convince me", "sell yourself"],
                handler: () => this.handleWhyHire()
            },
            {
                name: "age",
                patterns: ["age", "how old", "born", "birthday", "year of birth"],
                handler: () => this.handleAge()
            },
            {
                name: "thanks",
                patterns: ["thank", "thanks", "thankyou", "thx", "appreciate", "grateful"],
                handler: () => this.handleThanks()
            },
            {
                name: "goodbye",
                patterns: ["bye", "goodbye", "see you", "exit", "close", "later", "gotta go", "leaving"],
                handler: () => this.handleGoodbye()
            },
            {
                name: "help",
                patterns: ["help", "assist", "what can i ask", "options", "menu", "commands", "what do you know"],
                handler: () => this.handleHelp()
            },
            {
                name: "chatbot_info",
                patterns: ["how do you work", "are you ai", "how were you built", "what are you", "who made you", "who built you", "are you real"],
                handler: () => this.handleChatbotInfo()
            },
            {
                name: "fun",
                patterns: ["joke", "fun fact", "interesting", "surprise me", "bored", "entertain", "funny"],
                handler: () => this.handleFun()
            },
            {
                name: "compliment",
                patterns: ["nice", "awesome", "great", "cool", "impressive", "amazing", "good job", "well done", "love it"],
                handler: () => this.handleCompliment()
            },
            {
                name: "negative",
                patterns: ["bad", "terrible", "worst", "hate", "ugly", "boring", "useless"],
                handler: () => this.handleNegative()
            }
        ];
    }

    // ==========================================
    // INTENT HANDLERS - Smart responses
    // ==========================================
    handleGreeting() {
        const hour = new Date().getHours();
        let timeGreeting = "Hello";
        if (hour < 12) timeGreeting = "Good morning";
        else if (hour < 17) timeGreeting = "Good afternoon";
        else timeGreeting = "Good evening";

        const greetings = [
            `👋 ${timeGreeting}! I'm Jagrat's AI assistant. Ask me anything about his skills, projects, or experience!`,
            `${timeGreeting}! Welcome to Jagrat's portfolio. I can help you find info about his work, skills, and more. What interests you?`,
            `Hey there! 👋 I'm here to help you learn about Jagrat. Try asking about his projects, skills, or availability!`
        ];
        return this.randomPick(greetings);
    }

    handleSkills() {
        const kb = this.knowledgeBase.skills;
        this.lastTopic = "skills";
        return `💻 <strong>Jagrat's Technical Skills:</strong><br><br>` +
            `<strong>🎨 Frontend:</strong> ${kb.frontend.join(", ")}<br>` +
            `<strong>⚙️ Backend:</strong> ${kb.backend.join(", ")}<br>` +
            `<strong>📝 Languages:</strong> ${kb.languages.join(", ")}<br>` +
            `<strong>🗄️ Databases:</strong> ${kb.databases.join(", ")}<br>` +
            `<strong>🛠️ Tools:</strong> ${kb.tools.join(", ")}<br>` +
            `<strong>🤖 AI:</strong> ${kb.ai.join(", ")}<br><br>` +
            `He's also learning: ${kb.learning.join(", ")}.<br>` +
            `Ask about frontend, backend, or a specific skill!`;
    }

    handleFrontendSkills() {
        const kb = this.knowledgeBase.skills;
        this.lastTopic = "skills";
        return `🎨 <strong>Frontend Skills:</strong><br><br>` +
            `${kb.frontend.join(", ")}<br><br>` +
            `Jagrat builds responsive, pixel-perfect UIs with modern CSS techniques, JavaScript ES6+, and React.js. His projects demonstrate strong frontend fundamentals.`;
    }

    handleBackendSkills() {
        const kb = this.knowledgeBase.skills;
        this.lastTopic = "skills";
        return `⚙️ <strong>Backend Skills:</strong><br><br>` +
            `${kb.backend.join(", ")}<br><br>` +
            `He works with Node.js/Express for APIs, PHP/Laravel for full-stack apps, and integrates databases (MySQL, MongoDB) for data persistence.`;
    }

    handleProjects() {
        const projects = this.knowledgeBase.projects;
        this.lastTopic = "projects";
        let response = `🚀 <strong>Jagrat's Projects (${projects.length}):</strong><br><br>`;
        projects.forEach((p, i) => {
            response += `<strong>${i + 1}. ${p.name}</strong><br>`;
            response += `${p.description.substring(0, 70)}...<br><br>`;
        });
        response += `Ask about any specific project for details, tech stack, and live demo links!`;
        return response;
    }

    handleSpecificProject(msg) {
        const projects = this.knowledgeBase.projects;
        const msgLower = msg.toLowerCase();
        let found = null;

        const projectKeywords = {
            "dev utility": 0, "utility hub": 0, "json": 0, "jwt": 0, "api test": 0,
            "weather": 1, "weather view": 1, "forecast": 1,
            "currency": 2, "converter": 2, "exchange": 2,
            "tic tac": 3, "tictactoe": 3, "game": 3,
            "taskflow": 4, "todo": 4, "task app": 4, "task management": 4,
            "streamflix": 5, "netflix": 5, "movie": 5, "streaming": 5,
            "portfolio website": 6, "this site": 6, "this website": 6
        };

        for (const [keyword, index] of Object.entries(projectKeywords)) {
            if (msgLower.includes(keyword)) {
                found = projects[index];
                break;
            }
        }

        if (found) {
            this.lastTopic = "projects";
            return `📂 <strong>${found.name}</strong><br><br>` +
                `${found.description}<br><br>` +
                `<strong>Tech Stack:</strong> ${found.tech.join(", ")}<br>` +
                `<strong>Highlights:</strong> ${found.highlights.join(" • ")}<br><br>` +
                `🔗 <a href="${found.liveUrl}" target="_blank" style="color:var(--accent)">Live Demo</a> | ` +
                `<a href="${found.githubUrl}" target="_blank" style="color:var(--accent)">GitHub Code</a>`;
        }
        return this.handleProjects();
    }

    handleEducation() {
        const edu = this.knowledgeBase.education;
        this.lastTopic = "education";
        let response = `🎓 <strong>Jagrat's Education:</strong><br><br>`;
        edu.forEach(e => {
            response += `<strong>${e.degree}</strong><br>`;
            response += `📍 ${e.institution}<br>`;
            if (e.board) response += `📋 ${e.board}<br>`;
            if (e.details) response += `📝 ${e.details}<br>`;
            response += `📅 ${e.period}<br><br>`;
        });
        return response;
    }

    handleCertificates() {
        const certs = this.knowledgeBase.certificates;
        this.lastTopic = "certificates";
        let response = `📜 <strong>Jagrat's Certifications (${certs.length}):</strong><br><br>`;
        certs.forEach((c, i) => {
            response += `${i + 1}. <strong>${c.name}</strong><br>`;
            response += `&nbsp;&nbsp;&nbsp;📌 ${c.issuer} | ${c.category}<br><br>`;
        });
        response += `All certificates are available for download on the portfolio page!`;
        return response;
    }

    handleExperience() {
        const exp = this.knowledgeBase.experience;
        const sims = this.knowledgeBase.simulations;
        this.lastTopic = "experience";
        let response = `💼 <strong>Jagrat's Professional Experience:</strong><br><br>`;

        exp.forEach(e => {
            response += `<strong>${e.role}</strong> at ${e.company}<br>`;
            response += `📅 ${e.period}<br>`;
            response += `${e.description}<br>`;
            response += `<strong>Skills used:</strong> ${e.skills.join(", ")}<br><br>`;
        });

        response += `<strong>🎯 Job Simulations:</strong><br>`;
        sims.forEach(s => {
            response += `• ${s.name} (${s.company})<br>`;
        });

        response += `<br>He combines academic learning with real-world project experience!`;
        return response;
    }

    handleServices() {
        const services = this.knowledgeBase.services;
        this.lastTopic = "services";
        let response = `⚡ <strong>Services Jagrat Offers:</strong><br><br>`;
        services.forEach(s => {
            response += `• <strong>${s.name}</strong><br>&nbsp;&nbsp;${s.description}<br><br>`;
        });
        response += `Interested in working together? Use the contact form or reach out on LinkedIn!`;
        return response;
    }

    handleContact() {
        const kb = this.knowledgeBase.personal;
        this.lastTopic = "contact";
        return `📬 <strong>Get in Touch with Jagrat:</strong><br><br>` +
            `🔗 <a href="${kb.linkedin}" target="_blank" style="color:var(--accent)">LinkedIn — jagratsati045</a><br>` +
            `🐙 <a href="${kb.github}" target="_blank" style="color:var(--accent)">GitHub — jagratsati45</a><br>` +
            `✍️ <a href="${kb.devto}" target="_blank" style="color:var(--accent)">Dev.to — jagratsati45</a><br>` +
            `📝 Or use the contact form on this page!<br><br>` +
            `He typically responds within 24 hours. I'll scroll you to the contact section.`;
    }

    handleResume() {
        this.lastTopic = "resume";
        return `📄 <strong>Jagrat's Resume:</strong><br><br>` +
            `<a href="Jagrat_Sati_Resume.pdf" download style="color:var(--accent); font-weight:bold;">⬇️ Click here to download the resume (PDF)</a><br><br>` +
            `The resume includes:<br>` +
            `• Complete skills & tech stack<br>` +
            `• Education details<br>` +
            `• Project highlights<br>` +
            `• Certifications & experience`;
    }

    handleAvailability() {
        this.lastTopic = "contact";
        return `✅ <strong>Yes! Jagrat is actively seeking opportunities.</strong><br><br>` +
            `He's open to:<br>` +
            `• 💼 Full-time positions (Web/Full Stack Developer)<br>` +
            `• 🎓 Internships (Tech companies)<br>` +
            `• 💻 Freelance projects<br>` +
            `• 🤝 Collaborative/Open-source work<br>` +
            `• 🌐 Remote opportunities<br><br>` +
            `Best way to reach him: <a href="${this.knowledgeBase.personal.linkedin}" target="_blank" style="color:var(--accent)">LinkedIn</a> or the contact form on this page.`;
    }

    handleLocation() {
        return `📍 <strong>Location:</strong> Haldwani, Uttarakhand, India<br><br>` +
            `Jagrat is based in Haldwani but is open to:<br>` +
            `• Remote work (preferred)<br>` +
            `• Relocation for the right opportunity<br>` +
            `• Hybrid work arrangements`;
    }

    handleAbout() {
        const kb = this.knowledgeBase.personal;
        this.lastTopic = "about";
        return `👤 <strong>About Jagrat Sati:</strong><br><br>` +
            `${kb.about}<br><br>` +
            `<strong>🏷️ Title:</strong> ${kb.title}<br>` +
            `<strong>🎓 Education:</strong> ${kb.degree} at ${kb.university}<br>` +
            `<strong>📍 Location:</strong> ${kb.location}<br>` +
            `<strong>🎯 Goal:</strong> ${kb.goal}<br><br>` +
            `His approach: merge robust backend functionality with intuitive, AI-powered user interfaces.`;
    }

    handleGoals() {
        this.lastTopic = "about";
        return `🎯 <strong>Jagrat's Career Goals:</strong><br><br>` +
            `<strong>Short-term:</strong><br>` +
            `• Land a full-time developer role<br>` +
            `• Master React.js and Next.js<br>` +
            `• Contribute to open-source projects<br><br>` +
            `<strong>Long-term:</strong><br>` +
            `• Become a Full Stack Developer specializing in AI integrations<br>` +
            `• Build scalable, intelligent digital solutions<br>` +
            `• Lead development teams on innovative projects`;
    }

    handleStrengths() {
        const strengths = this.knowledgeBase.personal.strengths;
        this.lastTopic = "about";
        return `💪 <strong>Jagrat's Key Strengths:</strong><br><br>` +
            strengths.map(s => `• ${s}`).join('<br>') +
            `<br><br>He combines technical skills with soft skills like communication, adaptability, and a growth mindset. He's always eager to learn and take on new challenges.`;
    }

    handleBlog() {
        const blogs = this.knowledgeBase.blogs;
        this.lastTopic = "blog";
        let response = `✍️ <strong>Jagrat's Blog Posts:</strong><br><br>`;
        blogs.forEach(b => {
            response += `• <a href="${b.url}" target="_blank" style="color:var(--accent)">${b.title}</a> [${b.topic}]<br>`;
        });
        response += `<br>He writes about AI, web development, and emerging technologies on <a href="${this.knowledgeBase.personal.devto}" target="_blank" style="color:var(--accent)">Dev.to</a>. More articles coming soon!`;
        return response;
    }

    handleLearning() {
        const learning = this.knowledgeBase.skills.learning;
        return `📚 <strong>Currently Learning:</strong><br><br>` +
            learning.map(s => `• ${s}`).join('<br>') +
            `<br><br>Jagrat believes in continuous learning and stays updated with the latest tech trends. He dedicates time daily to upskilling.`;
    }

    handleWorkStyle() {
        return `🔄 <strong>Work Style:</strong><br><br>` +
            `${this.knowledgeBase.personal.workStyle}<br><br>` +
            `<strong>Preferences:</strong><br>` +
            `• Clean, readable code<br>` +
            `• Git-based version control<br>` +
            `• Regular communication<br>` +
            `• Iterative development<br>` +
            `• Documentation`;
    }

    handleWhyHire() {
        this.lastTopic = "about";
        return `🌟 <strong>Why Hire Jagrat?</strong><br><br>` +
            `<strong>1. Proven Builder:</strong> 6+ live projects deployed and maintained<br>` +
            `<strong>2. AI-Ready:</strong> Hands-on experience with AI integration (this chatbot!)<br>` +
            `<strong>3. Full Stack:</strong> Frontend + Backend + Database skills<br>` +
            `<strong>4. Fast Learner:</strong> 6+ certifications in one year<br>` +
            `<strong>5. Industry Exposure:</strong> Internship + Job simulations (JPMorgan, AWS)<br>` +
            `<strong>6. Community Contributor:</strong> Writes technical blogs, active on GitHub<br><br>` +
            `He brings energy, curiosity, and a builder's mindset to every team.`;
    }

    handleAge() {
        return `Jagrat is a young developer currently pursuing his BCA (started 2023). He's in his early 20s and brings fresh perspectives and enthusiasm to every project!`;
    }

    handleThanks() {
        const responses = [
            "You're welcome! 😊 Let me know if there's anything else I can help with.",
            "Happy to help! Feel free to ask more questions about Jagrat.",
            "Anytime! Is there anything else you'd like to know?",
            "Glad I could help! 🙌 Don't hesitate to ask more."
        ];
        return this.randomPick(responses);
    }

    handleGoodbye() {
        const responses = [
            "👋 Goodbye! Thanks for visiting Jagrat's portfolio. Hope to see you again!",
            "See you later! Don't forget to check out the projects and download the resume. 👋",
            "Bye! Feel free to reach out via the contact form if you'd like to work with Jagrat. 👋",
            "Take care! 👋 Remember, Jagrat is open to opportunities — don't hesitate to connect!"
        ];
        return this.randomPick(responses);
    }

    handleHelp() {
        return `🤖 <strong>I can help you with:</strong><br><br>` +
            `💻 <strong>"Skills"</strong> — Tech stack & expertise<br>` +
            `🚀 <strong>"Projects"</strong> — Live demos & code<br>` +
            `🎓 <strong>"Education"</strong> — Academic background<br>` +
            `💼 <strong>"Experience"</strong> — Work & internships<br>` +
            `📜 <strong>"Certificates"</strong> — Achievements<br>` +
            `⚡ <strong>"Services"</strong> — What he offers<br>` +
            `📬 <strong>"Contact"</strong> — How to reach him<br>` +
            `📄 <strong>"Resume"</strong> — Download CV<br>` +
            `✍️ <strong>"Blog"</strong> — His articles<br>` +
            `🎯 <strong>"Goals"</strong> — Career plans<br>` +
            `💪 <strong>"Strengths"</strong> — Key qualities<br>` +
            `🌟 <strong>"Why hire"</strong> — Value proposition<br><br>` +
            `Just type naturally — I understand conversational questions!`;
    }

    handleChatbotInfo() {
        return `🤖 <strong>About This Chatbot:</strong><br><br>` +
            `I'm an AI-powered assistant built by Jagrat himself! Here's how I work:<br><br>` +
            `• Smart intent detection with fuzzy matching<br>` +
            `• Comprehensive knowledge base with all portfolio data<br>` +
            `• Context-aware follow-up suggestions<br>` +
            `• Voice input & text-to-speech support<br>` +
            `• Auto-scroll to relevant sections<br><br>` +
            `I understand 50+ types of questions and can help recruiters find any info quickly!`;
    }

    handleFun() {
        const funFacts = [
            "💡 Fun fact: " + this.randomPick(this.knowledgeBase.funFacts),
            "😄 Why do programmers prefer dark mode? Because light attracts bugs!",
            "😄 A SQL query walks into a bar, sees two tables and asks... 'Can I JOIN you?'",
            "💡 Did you know? The first computer programmer was Ada Lovelace — she wrote the first algorithm in the 1840s!",
            "😄 Why was the JavaScript developer sad? Because he didn't Node how to Express himself!",
            "💡 The first website ever created (1991) is still online at info.cern.ch",
            "😄 There are only 10 types of people in the world: those who understand binary and those who don't."
        ];
        return this.randomPick(funFacts);
    }

    handleCompliment() {
        const responses = [
            "Thank you! 😊 Jagrat put a lot of effort into building this portfolio and chatbot. Glad you like it!",
            "Thanks! 🙌 If you're impressed, imagine what Jagrat can build for your team!",
            "Appreciate the kind words! Feel free to explore more or reach out to Jagrat directly."
        ];
        return this.randomPick(responses);
    }

    handleNegative() {
        return `I'm sorry to hear that! 😅 I'm always improving. If you have specific feedback, Jagrat would love to hear it through the contact form. Is there something specific I can help you with?`;
    }

    // ==========================================
    // FUZZY MATCHING ENGINE
    // ==========================================
    findIntent(message) {
        const msgLower = message.toLowerCase().trim();
        let bestMatch = null;
        let bestScore = 0;

        for (const intent of this.intents) {
            let score = 0;
            for (const pattern of intent.patterns) {
                if (msgLower.includes(pattern)) {
                    score += pattern.length * 2;
                } else if (pattern.length >= 4 && this.fuzzyMatch(msgLower, pattern)) {
                    score += pattern.length;
                }
            }
            if (score > bestScore) {
                bestScore = score;
                bestMatch = intent;
            }
        }

        // Higher threshold — only strong matches use local response
        // Weaker matches go to Gemini AI for better answers
        if (bestScore >= 8) {
            return bestMatch;
        }
        return null;
    }

    fuzzyMatch(text, pattern) {
        if (pattern.length < 4) return false;
        let patternIdx = 0;
        let matchCount = 0;
        for (let i = 0; i < text.length && patternIdx < pattern.length; i++) {
            if (text[i] === pattern[patternIdx]) {
                patternIdx++;
                matchCount++;
            }
        }
        return matchCount >= pattern.length * 0.8;
    }

    // ==========================================
    // SKILL-SPECIFIC QUERY HANDLER
    // ==========================================
    handleSkillQuery(msg) {
        const msgLower = msg.toLowerCase();
        const allSkills = [
            ...this.knowledgeBase.skills.frontend,
            ...this.knowledgeBase.skills.backend,
            ...this.knowledgeBase.skills.languages,
            ...this.knowledgeBase.skills.databases,
            ...this.knowledgeBase.skills.tools,
            ...this.knowledgeBase.skills.concepts,
            ...this.knowledgeBase.skills.ai,
            ...this.knowledgeBase.skills.learning
        ];

        const matched = [];
        for (const skill of allSkills) {
            const skillLower = skill.toLowerCase().replace(/[()]/g, '');
            if (msgLower.includes(skillLower) || msgLower.includes(skillLower.split(' ')[0])) {
                matched.push(skill);
            }
        }

        if (matched.length > 0) {
            const isLearning = this.knowledgeBase.skills.learning.some(s =>
                matched.includes(s)
            );
            if (isLearning) {
                return `📚 Jagrat is currently learning <strong>${matched.join(", ")}</strong>. He's actively upskilling in this area!`;
            }
            return `✅ Yes! Jagrat is skilled in <strong>${matched.join(", ")}</strong>. It's part of his technical toolkit. Want to see projects where he used it, or know more about his skills?`;
        }
        return null;
    }

    // ==========================================
    // GEMINI AI API INTEGRATION
    // ==========================================
    buildSystemPrompt() {
        const kb = this.knowledgeBase;
        return `You are an AI assistant on Jagrat Sati's portfolio website. You help recruiters and visitors learn about Jagrat. 

IMPORTANT RULES:
- Always refer to Jagrat in THIRD PERSON (say "Jagrat" or "he", never "I" or "me")
- You are his assistant, NOT Jagrat himself
- Keep responses concise (3-5 sentences max)
- Be professional yet friendly
- Use bullet points for lists
- Never make up information not provided below
- If asked something unrelated to Jagrat, politely redirect

Here is Jagrat's complete profile:

PERSONAL INFO:
- Name: ${kb.personal.name}
- Title: ${kb.personal.title}
- Location: ${kb.personal.location}
- University: ${kb.personal.university}
- Degree: ${kb.personal.degree} (${kb.personal.degreeStatus})
- LinkedIn: ${kb.personal.linkedin}
- GitHub: ${kb.personal.github}
- Dev.to: ${kb.personal.devto}
- Availability: ${kb.personal.availability}
- Goal: ${kb.personal.goal}
- About: ${kb.personal.about}
- Strengths: ${kb.personal.strengths.join(", ")}
- Interests: ${kb.personal.interests.join(", ")}
- Work Style: ${kb.personal.workStyle}

SKILLS:
- Frontend: ${kb.skills.frontend.join(", ")}
- Backend: ${kb.skills.backend.join(", ")}
- Languages: ${kb.skills.languages.join(", ")}
- Databases: ${kb.skills.databases.join(", ")}
- Tools: ${kb.skills.tools.join(", ")}
- Concepts: ${kb.skills.concepts.join(", ")}
- AI: ${kb.skills.ai.join(", ")}
- Currently Learning: ${kb.skills.learning.join(", ")}

PROJECTS:
${kb.projects.map(p => `- ${p.name}: ${p.description} | Tech: ${p.tech.join(", ")} | Live: ${p.liveUrl} | GitHub: ${p.githubUrl}`).join("\n")}

EDUCATION:
${kb.education.map(e => `- ${e.degree} at ${e.institution} (${e.period})`).join("\n")}

CERTIFICATES:
${kb.certificates.map(c => `- ${c.name} by ${c.issuer} (${c.category})`).join("\n")}

EXPERIENCE:
${kb.experience.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join("\n")}

JOB SIMULATIONS:
${kb.simulations.map(s => `- ${s.name} at ${s.company}`).join("\n")}

BLOGS:
${kb.blogs.map(b => `- "${b.title}" on Dev.to`).join("\n")}

SERVICES OFFERED:
${kb.services.map(s => `- ${s.name}: ${s.description}`).join("\n")}

RULES:
- Always speak about Jagrat in THIRD PERSON ("Jagrat is...", "He has...", "His skills include...")
- NEVER use "I" or "me" — you are his assistant, not him
- Keep responses to 3-5 sentences unless asked for detail
- Use bullet points with • for lists
- If asked something unrelated to Jagrat, politely redirect to portfolio topics
- Never make up information not provided above
- For contact: suggest LinkedIn or the contact form on the portfolio
- Be enthusiastic about Jagrat's work and potential
- Format responses with HTML tags like <strong>, <br> for readability`;
    }

    async callGeminiAPI(userMessage) {
        const API_KEY = 'AIzaSyBibIV7OXu48BlY8P7O7o1jxhP7d8psxZY';
        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`;

        // Build conversation history for context (last 6 messages)
        const recentHistory = this.messageHistory.slice(-6).map(m => ({
            role: m.sender === 'user' ? 'user' : 'model',
            parts: [{ text: m.text.replace(/<[^>]*>/g, '') }]
        }));

        const requestBody = {
            contents: [
                {
                    role: 'user',
                    parts: [{ text: this.buildSystemPrompt() }]
                },
                {
                    role: 'model',
                    parts: [{ text: 'Understood! I am the AI assistant on Jagrat Sati\'s portfolio. I\'ll answer questions about his skills, projects, education, and experience in third person, keeping responses concise and professional. How can I help you learn about Jagrat?' }]
                },
                ...recentHistory,
                {
                    role: 'user',
                    parts: [{ text: userMessage }]
                }
            ],
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 300
            }
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (text) {
                // Convert markdown-style formatting to HTML
                return text
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n/g, '<br>')
                    .replace(/\* /g, '• ');
            }
            return null;
        } catch (error) {
            console.warn('Gemini API error:', error.message);
            return null;
        }
    }
    getResponse(message) {
        const msgLower = message.toLowerCase().trim();

        // Complex/analytical questions always go to Gemini AI
        const aiTriggers = ["compare", "why should", "what would", "how would", "strongest", "weakest", "best project", "worst", "fit for", "good fit", "recommend", "suggest", "opinion", "think about", "rate", "evaluate", "summarize", "summary", "convince", "pitch", "elevator", "in 2 lines", "in one line", "briefly", "versus", "vs ", "differ", "advantage", "better than", "stand out", "unique about", "what makes", "why hire", "bring to", "typical"];
        const isComplexQuery = aiTriggers.some(trigger => msgLower.includes(trigger));

        if (isComplexQuery) {
            return { text: null, scrollTarget: null, useAI: true };
        }

        // 1. Check for specific skill queries
        const skillResponse = this.handleSkillQuery(message);
        if (skillResponse) return { text: skillResponse, scrollTarget: "#skills", useAI: false };

        // 2. Find matching intent
        const intent = this.findIntent(message);
        if (intent) {
            const text = intent.handler(message);
            return { text, scrollTarget: intent.scrollTarget || null, useAI: false };
        }

        // 3. No local match — use Gemini AI
        return { text: null, scrollTarget: null, useAI: true };
    }

    handleFallback(message) {
        this.messageCount++;
        const fallbacks = [
            `🤔 I'm not sure about that, but I can tell you about Jagrat's <strong>skills</strong>, <strong>projects</strong>, <strong>education</strong>, <strong>experience</strong>, or <strong>services</strong>. What interests you?`,
            `Hmm, I don't have info on that specific topic. Try asking about Jagrat's projects, skills, certifications, or how to contact him!`,
            `I didn't quite catch that. Type <strong>"help"</strong> to see everything I can answer! Or try: "What are his skills?" or "Show me projects"`,
            `I'm not sure about that one. Here's what I know best: skills, projects, certificates, education, experience, and contact info. What would you like?`
        ];
        return this.randomPick(fallbacks);
    }

    // ==========================================
    // UI METHODS
    // ==========================================
    toggleChatbot() {
        const windowEl = document.getElementById('jagrat-chatbot-window');
        if (!windowEl) return;

        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            windowEl.classList.add('chatbot-open');
        } else {
            windowEl.classList.remove('chatbot-open');
            windowEl.style.maxHeight = '';
        }

        if (this.isOpen && this.messageHistory.length === 0) {
            this.appendMessage('bot', "👋 Hi! I'm Jagrat's AI assistant. Ask me anything about his skills, projects, experience, or use the quick options below!");
            this.showConversationStarters();
        }

        // Focus input on open (desktop only, avoids keyboard popup on mobile)
        if (this.isOpen && window.innerWidth > 768) {
            setTimeout(() => {
                const input = document.getElementById('jagrat-chatbot-input');
                if (input) input.focus();
            }, 300);
        }
    }

    showConversationStarters() {
        const container = document.getElementById('jagrat-chatbot-history');
        if (!container) return;
        container.innerHTML = '';
        this.conversationStarters.forEach(item => {
            const btn = document.createElement('button');
            btn.textContent = item;
            btn.onclick = () => {
                document.getElementById('jagrat-chatbot-input').value = item;
                this.sendMessage();
            };
            container.appendChild(btn);
        });
    }

    appendMessage(sender, text) {
        const container = document.getElementById('jagrat-chatbot-messages');
        if (!container) return;

        const div = document.createElement('div');
        div.className = `chat-msg ${sender}`;
        div.innerHTML = text;
        container.appendChild(div);

        // Smooth scroll to bottom
        requestAnimationFrame(() => {
            container.scrollTop = container.scrollHeight;
        });

        if (sender === 'bot' && this.speechEnabled) {
            this.speak(text.replace(/<[^>]*>/g, ''));
        }
        this.messageHistory.push({ sender, text });
    }

    sendMessage() {
        const input = document.getElementById('jagrat-chatbot-input');
        if (!input) return;

        const msg = input.value.trim();
        if (!msg) return;

        const historyContainer = document.getElementById('jagrat-chatbot-history');
        if (historyContainer) historyContainer.innerHTML = '';

        this.appendMessage('user', this.escapeHtml(msg));
        input.value = '';
        this.showTyping();

        // Get local response first
        const response = this.getResponse(msg);

        if (!response.useAI) {
            // Local response available — show with small delay
            const delay = 500 + Math.random() * 500;
            setTimeout(() => {
                this.hideTyping();
                this.appendMessage('bot', response.text);
                this.showFollowUpSuggestions();

                if (response.scrollTarget) {
                    setTimeout(() => {
                        const target = document.querySelector(response.scrollTarget);
                        if (target) {
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 500);
                }
            }, delay);
        } else {
            // No local match — call Gemini AI
            this.callGeminiAPI(msg).then(aiResponse => {
                this.hideTyping();
                if (aiResponse) {
                    this.appendMessage('bot', aiResponse);
                } else {
                    // API failed — use local fallback
                    this.appendMessage('bot', this.handleFallback(msg));
                }
                this.showFollowUpSuggestions();
            });
        }
    }

    // Prevent XSS from user input
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showFollowUpSuggestions() {
        const suggestions = {
            skills: ["Show projects", "Download resume", "Contact Jagrat", "Why hire him?"],
            projects: ["What skills does he have?", "Tell me about experience", "Any certifications?"],
            education: ["What are his skills?", "Show certificates", "Career goals?"],
            certificates: ["Show projects", "What's his experience?", "Contact him"],
            experience: ["Show projects", "What are his skills?", "Is he available?"],
            contact: ["Download resume", "Show projects", "Why hire Jagrat?"],
            about: ["Skills & tech stack", "Show projects", "Education details", "Strengths"],
            blog: ["Show projects", "What are his skills?", "Contact Jagrat"],
            resume: ["Show skills", "View projects", "Contact him"]
        };

        const followUps = suggestions[this.lastTopic] || ["Show skills", "View projects", "Contact info", "Help"];
        const container = document.getElementById('jagrat-chatbot-history');
        if (!container) return;

        container.innerHTML = '';
        followUps.forEach(item => {
            const btn = document.createElement('button');
            btn.textContent = item;
            btn.onclick = () => {
                document.getElementById('jagrat-chatbot-input').value = item;
                this.sendMessage();
            };
            container.appendChild(btn);
        });
    }

    showTyping() {
        const container = document.getElementById('jagrat-chatbot-messages');
        if (!container || document.getElementById('typing')) return;
        const div = document.createElement('div');
        div.id = 'typing';
        div.className = 'chat-msg bot typing';
        div.innerHTML = '<span></span><span></span><span></span>';
        container.appendChild(div);
        requestAnimationFrame(() => {
            container.scrollTop = container.scrollHeight;
        });
    }

    hideTyping() {
        const typing = document.getElementById('typing');
        if (typing) typing.remove();
    }

    // ==========================================
    // SPEECH METHODS
    // ==========================================
    loadVoices() {
        if (!window.speechSynthesis) return;
        const voices = window.speechSynthesis.getVoices();
        this.selectedVoice = voices.find(v => v.lang.startsWith('en-') && v.name.toLowerCase().includes('female'))
            || voices.find(v => v.lang.startsWith('en-'))
            || voices[0];
    }

    speak(text) {
        if (!window.speechSynthesis || !this.selectedVoice) return;
        window.speechSynthesis.cancel();
        // Remove emojis and special symbols before speaking
        const cleanText = text
            .replace(/[\u{1F600}-\u{1F64F}]/gu, '')   // Emoticons
            .replace(/[\u{1F300}-\u{1F5FF}]/gu, '')   // Misc Symbols & Pictographs
            .replace(/[\u{1F680}-\u{1F6FF}]/gu, '')   // Transport & Map
            .replace(/[\u{1F1E0}-\u{1F1FF}]/gu, '')   // Flags
            .replace(/[\u{2600}-\u{26FF}]/gu, '')     // Misc symbols
            .replace(/[\u{2700}-\u{27BF}]/gu, '')     // Dingbats
            .replace(/[\u{FE00}-\u{FE0F}]/gu, '')     // Variation Selectors
            .replace(/[\u{1F900}-\u{1F9FF}]/gu, '')   // Supplemental Symbols
            .replace(/[\u{1FA00}-\u{1FA6F}]/gu, '')   // Chess Symbols
            .replace(/[\u{1FA70}-\u{1FAFF}]/gu, '')   // Symbols Extended-A
            .replace(/[\u{200D}]/gu, '')              // Zero Width Joiner
            .replace(/\s{2,}/g, ' ')                  // Clean up extra spaces
            .trim();
        if (!cleanText) return;
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.voice = this.selectedVoice;
        utterance.pitch = 1;
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
    }

    // ==========================================
    // UTILITY METHODS
    // ==========================================
    randomPick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // ==========================================
    // EVENT LISTENERS INIT
    // ==========================================
    initEventListeners() {
        const toggle = document.getElementById('jagrat-chatbot-toggle');
        const closeBtn = document.getElementById('jagrat-chatbot-close-btn');
        const sendBtn = document.getElementById('jagrat-chatbot-send-btn');
        const input = document.getElementById('jagrat-chatbot-input');

        if (toggle) toggle.addEventListener('click', () => this.toggleChatbot());
        if (closeBtn) closeBtn.addEventListener('click', () => this.toggleChatbot());
        if (sendBtn) sendBtn.addEventListener('click', () => this.sendMessage());
        if (input) {
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }

        // Speech toggle
        const speechToggleBtn = document.getElementById('jagrat-chatbot-speech-toggle');
        if (speechToggleBtn) {
            speechToggleBtn.addEventListener('click', () => {
                this.speechEnabled = !this.speechEnabled;
                const icon = speechToggleBtn.querySelector('i');
                if (icon) {
                    icon.className = this.speechEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
                }
                if (!this.speechEnabled && window.speechSynthesis) {
                    window.speechSynthesis.cancel();
                }
            });
        }

        // Voice input (mic)
        const micBtn = document.getElementById('jagrat-chatbot-mic-btn');
        if (micBtn) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognition = new SpeechRecognition();
                recognition.continuous = false;
                recognition.lang = 'en-US';
                recognition.interimResults = false;

                micBtn.addEventListener('click', () => {
                    micBtn.classList.add('listening');
                    try {
                        recognition.start();
                    } catch (e) {
                        micBtn.classList.remove('listening');
                    }
                });

                recognition.onresult = (event) => {
                    const transcript = event.results[0][0].transcript;
                    if (input) input.value = transcript;
                    this.sendMessage();
                };
                recognition.onend = () => micBtn.classList.remove('listening');
                recognition.onerror = () => micBtn.classList.remove('listening');
            } else {
                micBtn.style.display = 'none';
            }
        }

        // Close chatbot when clicking outside (mobile UX)
        document.addEventListener('click', (e) => {
            if (!this.isOpen) return;
            const chatWindow = document.getElementById('jagrat-chatbot-window');
            const toggleBtn = document.getElementById('jagrat-chatbot-toggle');
            const wrapper = document.getElementById('jagrat-chatbot-wrapper');
            if (chatWindow && toggleBtn &&
                !chatWindow.contains(e.target) &&
                !toggleBtn.contains(e.target) &&
                !(wrapper && wrapper.contains(e.target))) {
                this.toggleChatbot();
            }
        });

        // Handle keyboard escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.toggleChatbot();
            }
        });

        // Handle mobile virtual keyboard resize
        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', () => {
                if (!this.isOpen) return;
                const chatWindow = document.getElementById('jagrat-chatbot-window');
                if (chatWindow && window.innerWidth <= 768) {
                    const viewportHeight = window.visualViewport.height;
                    chatWindow.style.maxHeight = (viewportHeight - 100) + 'px';
                }
            });
        }
    }
}

// ==========================================
// INITIALIZE CHATBOT ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new JagratChatbot();
    chatbot.initEventListeners();
});

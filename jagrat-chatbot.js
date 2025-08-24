class JagratChatbot {
    constructor() {
        this.isOpen = false;
        this.speechEnabled = true;
        this.selectedVoice = null;
        this.rules = [
            // --- Existing Rules ---
            {
                keywords: ["name", "your name", "what is your name", "who are you", "tell me your name", "name please"],
                answer: "I'm Jagrat Sati’s virtual assistant, here to help you!"
            },
            {
                keywords: ["skills", "what can you do", "your skills", "what are your skills", "know what you know"],
                answer: "Jagrat is skilled in HTML, CSS, JavaScript, React, Node.js, Laravel, Python, Git, MySQL & MongoDB."
            },
            {
                keywords: ["project", "your projects", "what are your projects", "show projects", "tell me your work"],
                answer: "Jagrat has worked on:<br>1️⃣ AI Chatbot for portfolio<br>2️⃣ This Portfolio Website!"
            },
            {
                keywords: ["contact", "how to contact", "your contact", "email", "LinkedIn", "GitHub", "get in touch"],
                answer: "You can send Jagrat a message using the form on this page. Let me take you there!",
                action: 'scrollToContact'
            },
            {
                keywords: ["resume", "download resume", "cv", "your resume", "get resume", "show resume", "open resume"],
                answer: "📄 <a href='JagratSati_Resume.pdf' download style='color:blue;'>Download Resume</a>"
            },
            {
                keywords: ["hi", "hello", "hey", "namaste", "greetings", "good morning", "good evening"],
                answer: "👋 Hello! I’m your assistant. Ask me anything about Jagrat's skills, projects, or contact info!"
            },
            
            // --- NEW DUMMY COMMANDS ---
            {
                keywords: ["hire", "hiring", "available", "internship", "job", "work for you"],
                answer: "Jagrat is actively seeking new opportunities! Please use the contact form to get in touch regarding potential projects or positions."
            },
            {
                keywords: ["goals", "career goals", "ambition", "future plans"],
                answer: "Jagrat's goal is to become a Full Stack Developer specializing in AI integrations, creating scalable and intelligent digital solutions."
            },
            {
                keywords: ["location", "where are you from", "live", "city"],
                answer: "Jagrat is based in Haldwani, Uttarakhand, India."
            },
            {
                keywords: ["hobbies", "for fun", "interests", "what do you like"],
                answer: "Besides coding, Jagrat enjoys exploring new technologies, contributing to open-source projects, and solving complex problems!"
            },
            {
                keywords: ["how do you work", "are you ai", "how were you built", "your code"],
                answer: "I'm a rule-based chatbot built with JavaScript! I match keywords from your questions to a pre-defined set of answers. I'm not a true AI, but I do my best to be helpful! 🙂"
            },
            {
                keywords: ["fun fact", "interesting fact", "tell me something"],
                answer: "Did you know that the first computer programmer was a woman named Ada Lovelace? She wrote the first algorithm intended to be processed by a machine in the 1840s!"
            },
            {
                keywords: ["joke", "tell me a joke", "jokes", "make me laugh"],
                answer: "Why don't scientists trust atoms? Because they make up everything! 😄"
            },

            // --- Existing Rules ---
            {
                keywords: ["thank you", "thanks", "thankyou", "thx", "tnx"],
                answer: "You're welcome! 😊"
            },
            {
                keywords: ["bye", "goodbye", "see you later", "exit", "close"],
                answer: "👋 Goodbye! Feel free to return anytime if you have more questions."
            },
            {
                keywords: ["help", "need help", "can you help me", "assist me"],
                answer: "Sure! Ask me about Jagrat's skills, projects, contact info, or resume."
            }
        ];
        this.messageHistory = [];
        this.loadVoices();
        window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
    }

    loadVoices() {
        const voices = window.speechSynthesis.getVoices();
        this.selectedVoice = voices.find(v => v.lang.startsWith('en-') && v.name.toLowerCase().includes('female')) || voices.find(v => v.lang.startsWith('en-'));
    }

    toggleChatbot() {
        const windowEl = document.getElementById('jagrat-chatbot-window');
        this.isOpen = !this.isOpen;
        windowEl.style.display = this.isOpen ? 'flex' : 'none';
        if (this.isOpen && this.messageHistory.length === 0) {
            const welcomeMsg = "👋 Hi there! I'm Jagrat's virtual assistant. Ask me about skills, projects, contact, or resume.";
            this.appendMessage('bot', welcomeMsg);
            this.messageHistory.push({sender: 'bot', text: welcomeMsg});
        }
        this.loadHistory();
    }

    appendMessage(sender, text) {
        const container = document.getElementById('jagrat-chatbot-messages');
        const div = document.createElement('div');
        div.className = `chat-msg ${sender}`;
        div.innerHTML = text;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
        if (sender === 'bot' && this.speechEnabled) {
            this.speak(text.replace(/<[^>]*>/g, ''));
        }
        if (sender === 'user') {
            this.saveHistory(text);
        }
        this.messageHistory.push({sender, text});
    }

    getBotReply(message) {
        message = message.toLowerCase().trim();
        for (let rule of this.rules) {
            if (rule.keywords.some(k => message.includes(k))) {
                return rule; // Return the whole rule object
            }
        }
        return { answer: "Sorry, I didn't understand that. Try asking about skills, projects, or contact!" };
    }

    sendMessage() {
        const input = document.getElementById('jagrat-chatbot-input');
        const msg = input.value.trim();
        if (!msg) return;
        this.appendMessage('user', msg);
        input.value = '';
        this.showTyping();
        
        setTimeout(() => {
            this.hideTyping();
            const reply = this.getBotReply(msg);
            this.appendMessage('bot', reply.answer);

            if (reply.action === 'scrollToContact') {
                document.getElementById('contact').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }, 1000);
    }

    showTyping() {
        const container = document.getElementById('jagrat-chatbot-messages');
        if(document.getElementById('typing')) return; // Prevent multiple typing indicators
        const div = document.createElement('div');
        div.id = 'typing';
        div.className = 'chat-msg bot typing';
        div.textContent = 'Typing...';
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }

    hideTyping() {
        const typing = document.getElementById('typing');
        if (typing) typing.remove();
    }

    speak(text) {
        if ('speechSynthesis' in window && this.selectedVoice) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = this.selectedVoice;
            utterance.pitch = 1;
            utterance.rate = 1;
            window.speechSynthesis.speak(utterance);
        }
    }

    saveHistory(question) {
        let history = JSON.parse(localStorage.getItem('chatHistory')) || [];
        if (!history.includes(question)) {
            history.unshift(question);
        }
        history = history.slice(0, 3);
        localStorage.setItem('chatHistory', JSON.stringify(history));
    }

    loadHistory() {
        const historyContainer = document.getElementById('jagrat-chatbot-history');
        const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
        historyContainer.innerHTML = '';
        history.forEach(item => {
            const btn = document.createElement('button');
            btn.textContent = item;
            btn.onclick = () => {
                document.getElementById('jagrat-chatbot-input').value = item;
                this.sendMessage();
            };
            historyContainer.appendChild(btn);
        });
    }

    initEventListeners() {
        document.getElementById('jagrat-chatbot-toggle').addEventListener('click', () => this.toggleChatbot());
        const speechToggleBtn = document.getElementById('jagrat-chatbot-speech-toggle');
        speechToggleBtn.addEventListener('click', () => {
            this.speechEnabled = !this.speechEnabled;
            speechToggleBtn.querySelector('i').className = this.speechEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
            if (!this.speechEnabled) window.speechSynthesis.cancel();
        });
        document.getElementById('jagrat-chatbot-send-btn').addEventListener('click', () => this.sendMessage());
        document.getElementById('jagrat-chatbot-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') this.sendMessage(); });
        const micBtn = document.getElementById('jagrat-chatbot-mic-btn');
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.lang = 'en-US';
            micBtn.addEventListener('click', () => {
                micBtn.classList.add('listening');
                recognition.start();
            });
            recognition.onresult = (event) => {
                document.getElementById('jagrat-chatbot-input').value = event.results[0][0].transcript;
                this.sendMessage();
            };
            recognition.onend = () => { 
                micBtn.classList.remove('listening');
            };
            recognition.onerror = () => {
                micBtn.classList.remove('listening');
            };
        } else {
            micBtn.style.display = 'none';
        }
        document.getElementById('jagrat-chatbot-close-btn').addEventListener('click', () => this.toggleChatbot());
    }
}
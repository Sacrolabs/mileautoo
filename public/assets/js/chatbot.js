const burger = document.querySelector('header .burger');
const menu = document.querySelector('header ul');

burger.addEventListener('click', () => {toggleActive(menu)}, {passive: true});

function toggleActive(elem) {
    elem.classList.toggle('active');
}

function chatbot() {
    const chat = document.querySelector('.chatbot .chat');
    const submit = chat.querySelector('.submit');

    submit.addEventListener('click', () => {
        chatbotAddContent('client', chat.querySelector('textarea').value);
        chat.querySelector('textarea').value = '';
    }, {passive: true});

}

function chatbotSetEmotion(type = 'cloud', status = 'question') {
    const image = document.querySelector('svg.bg');

    image.dataset.type = type;
    image.dataset.status = status;

}

function chatbotAddContent(type = 'bot', content = '', dataName = '', pattern = '', answers = '') {
    if (content == '') {
        chatbotSetEmotion('cloud', 'wrong');
        return;
    }

    const chat = document.querySelector('.chatbot .chat');
    const screen = chat.querySelector('.screen');
    const textarea = chat.querySelector('textarea');
    
    let wrapper = document.createElement('div');
    let left = document.createElement('div');
    let right = document.createElement('div');
    let text = document.createElement('p');
    let image = document.createElement('img');

    left.classList.add('left');
    right.classList.add('right');
    text.innerHTML = content;
    wrapper.appendChild(left);
    wrapper.appendChild(right);

    if(type == 'client') {
        chatbotSetEmotion('cloud', 'ok');
        image.src = './assets/images/person.svg';
        wrapper.classList.add('person');
        left.appendChild(text);
        right.appendChild(image);

        chat.dataset[textarea.dataset.name] = content;
        
        if(textarea.dataset.pattern != '') {
            const currentPattern = new RegExp(textarea.dataset.pattern, 'im');
            const fits = currentPattern.test(content);
            if (fits) {
                chat.dataset.q++;
            } else {
                chatbotSetEmotion('cloud', 'wrong');
            }
        }
        textarea.dataset.pattern = '';
        
    } else if(type == 'bot') {
        setTimeout(() => {chatbotSetEmotion('cloud', 'question')}, 1000);
        image.src = './assets/images/bot.svg';
        wrapper.classList.add('bot');
        left.appendChild(image);
        right.appendChild(text);
        
        textarea.dataset.name = dataName;
        if(pattern != '') {
            textarea.dataset.pattern = pattern;
        }
    }
    
    screen.appendChild(wrapper);
    if(answers != '') {
        let answersWrapper = document.createElement('div');
        answersWrapper.classList.add('answers-wrapper');

        answers.forEach(answer => {
            let singleAnswer = document.createElement('span');
            singleAnswer.innerHTML = answer;
            singleAnswer.onclick = chatbotAnswerHandler;
            answersWrapper.appendChild(singleAnswer);
        });
        screen.appendChild(answersWrapper);
        textarea.disabled = true;
    }
    screen.scrollTop = Math.pow(10, 10);
    
    if (type == 'client') {
        chatbotQuestions();
    }

}

function chatbotQuestions() {
    const chat = document.querySelector('.chatbot .chat');
    const questionIdToAsk = chat.dataset.q;
    const questions = [
        {
            question: 'Thank you for the answer. Can you please tell me your: Street address, Zip Code, City?',
            dataName: 'address'
        },
        {
            question: 'Nice! Can you please tell me your what is your birth date?',
            dataName: 'dob'
        },
        {
            question: 'Thank you! I need your mobile phone number now. We use your mobile number to send you important policy notifications, namely reminders to submit your odometer photo.',
            dataName: 'phone',
            pattern: '^[0-9]{3}-[0-9]{3}-[0-9]{4}$'
        },
        {
            question: 'I am sorry, I can’t accept that as an answer. Can you please try again? (Example answer: 000-000-0000)',
            dataName: 'phone',
            pattern: '^[0-9]{3}-[0-9]{3}-[0-9]{4}$',
            waitPattern: true
        },
        {
            question: 'Thank you! Can you tell me what is your preferred contact number?',
            dataName: 'preferred'
        },
        {
            question: 'Good. I would like to ask you - How’s your Credit? Answer by choosing one option from below:',
            dataName: 'credit',
            answers: ['Excellent', 'Just OK', 'Pretty Good', 'Not Very Good']
        },
        {
            question: 'Cool! Let us know how did you hear about MileAuto?',
            dataName: 'howdidyouhear'
        }

    ];

    if(typeof questions[questionIdToAsk] == 'undefined') {
        chatbotEnd();
        return;
    }
    chatbotAddContent('bot', questions[questionIdToAsk].question, questions[questionIdToAsk].dataName, questions[questionIdToAsk].pattern, questions[questionIdToAsk].answers);

    if(!questions[questionIdToAsk].waitPattern) {
        chat.dataset.q++;
    }
}

function chatbotAnswerHandler() {
    chatbotAddContent('client', this.innerHTML);
    const chat = document.querySelector('.chatbot .chat');
    const textarea = chat.querySelector('textarea');
    const answersWrapper = chat.querySelector('.answers-wrapper');
    
    textarea.disabled = false;
    answersWrapper.classList.add('hidden');
}

function chatbotEnd() {
    const chat = document.querySelector('.chatbot .chat');
    const text = document.querySelector('.chatbot .text.hidden');

    chat.classList.add('hidden');
    text.classList.remove('hidden');
    chatbotSetEmotion('text');
}

chatbot();



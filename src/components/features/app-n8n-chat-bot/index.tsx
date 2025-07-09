import { createChat } from '@n8n/chat';
import { useEffect } from 'react';

export const AppN8NChatBot = () => {
    useEffect(() => {
        createChat({
            webhookUrl: 'https://coraltriangle.app.n8n.cloud/webhook/0d471725-6805-476d-920d-644f1a8d1298/chat',
            initialMessages: [
                'Hi 👋, I&apos;d be happy to help you. May I ask who I&apos;m speaking with today?',
            ],
            target: '#n8n-chat',
            mode: 'window',
            chatInputKey: 'chatInput',
            chatSessionKey: 'sessionId',
            loadPreviousSession: true,
            showWelcomeScreen: false,
            defaultLanguage: 'en',
            i18n: {
                en: {
                    title: 'AI Assistant',
                    subtitle: "",
                    footer: '',
                    getStarted: 'New Conversation',
                    inputPlaceholder: 'Type your message..',
                    closeButtonTooltip: 'Close',
                },
            },
            theme: {
                // These will override the CSS variables
                primary: '#e74266',
                secondary: '#20b69e',
                // Add other theme overrides that match your CSS variables
            },
        });
    }, []);

    return (
        <div id="n8n-chat"></div>
    );
};
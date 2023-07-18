import { Component } from "react";
import Chatbot from 'react-simple-chatbot';
import { ThemeProvider } from "styled-components";

const theme = {
    background: '#f5f8fb',
    headerBgColor: '#000000',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#8ea3bc',
    botFontColor: '#fff',
    userBubbleColor: '#f1f0f0',
    userFontColor: '#fff',
}

export default class Chat extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Chatbot
                    steps = {[
                        {
                            id: 'Inicio',
                            message: '¡Hola! 🙋🏻 Soy SmartBot, tu asistente virtual de  SmartDrink. ¿Cual es tu nombre?',
                            end: true
                        },
                    ]} />
            </ThemeProvider>
        )
    }
}
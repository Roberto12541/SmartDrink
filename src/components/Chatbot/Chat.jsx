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
    userFontColor: '#000000',
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
                            trigger: 'Ingrese-nombre'
                        },
                        {
                            id: 'Ingrese-nombre',
                            user: true,
                            trigger: 'Respuesta-nombre'
                        },
                        {
                            id: 'Respuesta-nombre',
                            message: 'Hola {previousValue}',
                            trigger: 'ayuda'
                        },
                        {
                            id: 'ayuda',
                            message: '¿En que puedo ayudarte?',
                            trigger: 'opciones'
                        },
                        {
                            id: 'opciones',
                            options: [
                                {value: 'Productos', label: 'Productos'},
                                {value: 'Servicios', label: 'Servicios'},
                                {value: 'Contacto', label: 'Contacto'}
                            ]
                        }
                    ]} />
            </ThemeProvider>
        )
    }
}
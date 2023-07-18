// import React, { Component } from "react";
import Chatbot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
// import { useNavigate } from 'react-router-dom'

const theme = {
    background: '#f5f8fb',
    headerBgColor: '#000000',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#ccd3db',
    botFontColor: '#000000',
    userBubbleColor: '#f1f0f0',
    userFontColor: '#000000',
}

const Chat = () => {
    const { datos, login } = useContext(LoginContext);
    // const history = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <Chatbot
                steps={[
                    {
                        id: 'Saludo',
                        message: `¡Hola!👋 ${ login ? datos[0].name : ''}`,
                        trigger: login ? 'ayuda' : 'Presentacion'
                    },
                    {
                        id: 'Presentacion',
                        message: 'Soy SmartBot 🤖, tu asistente virtual de SmartDrink. ¿Cual es tu nombre?',
                        trigger: 'Ingrese-nombre'
                    },
                    {
                        id: 'despedida',
                        message: '¡Fue un gusto atenderte! Recuerda que estoy para ayudarte. 🙋',
                        trigger: 'Ingrese-nombre'
                    },
                    {
                        id: 'Mas',
                        message: '¿Puedo apoyarte en algo más?',
                        trigger: 'SiNo'
                    },
                    {
                        id: 'SiNo',
                        options: [
                            { value: 'Si', label: 'Si', trigger: 'ayuda' },
                            { value: 'No', label: 'No', trigger: 'despedida' },
                        ]
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
                            { value: 'Productos', label: 'Productos', trigger: 'Productos' },
                            { value: 'Servicios', label: 'Servicios', trigger: 'Opciones-Planes' },
                            { value: 'Contacto', label: 'Contacto', trigger: 'Contacto' }
                        ]
                    },
                    {
                        id: 'Opciones-Planes',
                        message: '¿Cual plan deseas conocer?',
                        trigger: 'Planes'
                    },
                    {
                        id: 'Planes',
                        options: [
                            { value: 'SmartBasic', label: 'SmartBasic', trigger: 'SmartBasic' },
                            { value: 'SmartInter', label: 'SmartInter', trigger: 'SmartInter' },
                            { value: 'SmartPro', label: 'SmartPro', trigger: 'SmartPro' }
                        ]
                    },
                    {
                        id: 'Comprar/Cancelar',
                        options: [
                            { value: 'Comprar', label: 'Comprar'},
                            { value: 'Volver', label: 'Volver', trigger: 'ayuda' }
                        ]
                    },
                    {
                        id: 'SmartBasic',
                        message: 'SmartBasic: Con el paquete SmartBasic tendrás acceso a tutoriales detallados para un mejor manejo de tu Drinker y soporte básico para dudas o preguntas.',
                        trigger: 'SmartBasic-Precio'
                    },
                    {
                        id: 'SmartBasic-Precio',
                        message: 'Precio: $29,999 MXN',
                        trigger: 'Comprar/Cancelar'
                    },
                    {
                        id: 'SmartInter',
                        message: 'Con el paquete SmartInter obtendrás la capacitación completa para el personal, de esta manera se tendrá un mejor funcionamiento y durabilidad del Drinker.',
                        trigger: 'SmartInter-Precio'
                    },
                    {
                        id: 'SmartInter-Precio',
                        message: 'Precio: $37,000 MXN',
                    },
                    {
                        id: 'SmartPro',
                        message: 'Con el paquete SmartPro podrás elegir el diseño de tu preferencia para tu Drinker. Asi como capacitaciones completas al personal, Soporte técnico 24/7 más.',
                        trigger: 'SmartPro-Precio'
                    },
                    {
                        id: 'SmartPro-Precio',
                        message: 'Precio: $50,000 MXN',
                    },
                    {
                        id: 'Productos',
                        message: 'Productos',
                        end: true
                    },
                    {
                        id: 'Contacto',
                        message: 'Para contactarte con nosotros puedes comunicarte a través de los siguientes medios:',
                        trigger: 'Telefono'
                    },
                    {
                        id: 'Telefono',
                        message: 'Teléfono: 56-31-40-37-19',
                        trigger: 'Correo'
                    },
                    {
                        id: 'Correo',
                        message: 'Correo electrónico: smartdrinkk@gmail.com',
                        trigger: 'Redes'
                    },
                    {
                        id: 'Redes',
                        message: 'Tambien puedes encontrarnos en todas las redes sociales como SmartDrink',
                        trigger: 'Mas'
                    },
                ]} />
        </ThemeProvider>
    )
}

export default Chat

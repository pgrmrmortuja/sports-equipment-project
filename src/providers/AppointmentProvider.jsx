import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const AppointmentContext = createContext();

const AppointmentProvider = ({ children }) => {
    const [appointments, setAppointments] = useState([]);

    const addAppointment = (service) => {
        const exists = appointments.find((item) => item.id === service.id);
        if (!exists) {
            setAppointments([...appointments, service]);
            toast.success(`${service.service_name} has been added to your appointments!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.info(`${service.service_name} is already in your appointments.`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const removeAppointment = (id) => {
        const removedService = appointments.find((item) => item.id === id);
        if (removedService) {
            setAppointments(appointments.filter((item) => item.id !== id));
            toast.warn(`${removedService.service_name} has been removed from your appointments.`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <AppointmentContext.Provider value={{ appointments, addAppointment, removeAppointment }}>
            {children}
        </AppointmentContext.Provider>
    );
};

export default AppointmentProvider;


import { FaJava } from 'react-icons/fa';
import { SiNestjs, SiTypescript } from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';
import { TbBrandReactNative } from 'react-icons/tb';
import React, { ReactNode } from 'react';

export interface Technologies {
    name: string;
    icon: ReactNode;
    backgroundColor: string;
    textColor: string;
}

const technologies: { [key: string]: Technologies } = {
    java: {
        name: 'Java',
        icon: <FaJava size={20} />,
        backgroundColor: 'blue',
        textColor: '',
    },
    nestjs: {
        name: 'NestJS',
        icon: <SiNestjs color="#e12a54" />,
        backgroundColor: 'black',
        textColor: '#e12a54',
    },
    typescript: {
        name: 'TypeScript',
        icon: <SiTypescript color="#2f74c0" />,
        backgroundColor: 'white',
        textColor: '#007acc',
    },
    postgresql: {
        name: 'PostGreSQL',
        icon: <DiPostgresql color="#376695" size={30} />,
        backgroundColor: 'white',
        textColor: '#376695',
    },
    reactNative: {
        name: 'React Native',
        icon: <TbBrandReactNative color="#2ddafd" size={20} />,
        backgroundColor: '#292929',
        textColor: '#2ddafd',
    },
};

export default technologies;

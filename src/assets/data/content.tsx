import { ReactElement } from 'react';
import { Paragraph } from '@components/Typography';


export const aboutMe: ReactElement = (
  <Paragraph sx={{ fontSize: '20px', lineHeight: '1.5' }}>
    Hi, there👋! I'm oF.<br />
    Welcome to my personal website.<br />
    I'm a senior majoring in ICE.<br />
    I have worked as a full-stack engineer.<br />
    For Andor Ltd. and Getvision Information Ltd.<br />
    With one year or more of work experience.<br />
    Specialty is web development.
  </Paragraph>
);

export const experience: ReactElement[] = (
  [
    <Paragraph sx={{ fontSize: '22px', fontWeight: 'bold', mt: 3 }}>
      -2019
    </Paragraph>,
    <Paragraph sx={{ fontSize: '20px', lineHeight: '2' }}>
      Participated in the mBot robot competition organized by Taoyuan Municipal Yang Mei Senior High School.
    </Paragraph>,
    <Paragraph sx={{ fontSize: '22px', fontWeight: 'bold', mt: 2 }}>
      -2021
    </Paragraph>,
    <Paragraph sx={{ fontSize: '20px', lineHeight: '2' }}>
      Joined Andor Ltd. as a full-stack engineer.
    </Paragraph>,
    <Paragraph sx={{ fontSize: '22px', fontWeight: 'bold', mt: 2 }}>
      -2023
    </Paragraph>,
    <Paragraph sx={{ fontSize: '20px', lineHeight: '2' }}>
      Joined Getvision Information Ltd. as a full-stack engineer.
    </Paragraph>,
    <Paragraph sx={{ fontSize: '20px', lineHeight: '2' }}>
      Presented electronic paper research findings at the seminar held at Providence University.
    </Paragraph>,
    <Paragraph sx={{ fontSize: '20px', lineHeight: '2' }}>
      Participated in the practical project production competition hosted by Chaoyang University of Technology.
    </Paragraph>,
    <Paragraph sx={{ fontSize: '20px', lineHeight: '2' }}>
      National Changhua University of Education shared the principles and related technologies of electronic paper.
    </Paragraph>
  ]
);
import Fall_Detection from '@assets/images/Project/Fall_Detection.webp';
import EPaper from '@assets/images/Project/EPaper.webp';
import Text2Voice from '@assets/images/Project/Text2Voice.webp';
import Image_to_PDF_Converter from '@assets/images/Project/Image_to_PDF_Converter.webp';
import TodoList from '@assets/images/Project/TodoList.webp';
import QRCode from '@assets/images/Project/QRCode.webp';
import Icon_Maker from '@assets/images/Project/Icon_Maker.webp';


export type ProjectType = {
  name: string;
  about?: string;
  cover?: string;
  link?: string;
}

export const project: ProjectType[] = ([
  {
    name: 'Smart Fall Detection and Community Notification System',
    about: 'An advanced solution that detects falls and alerts communities. It ensures safety without compromising privacy, allowing users to monitor results across platforms and switch camera angles. It also facilitates easy communication and management of community members.',
    cover: Fall_Detection,
    link: 'https://github.com/sky9154/Fall_Detection'
  }, {
    name: 'Customizable EPaper Displays System',
    about: 'A versatile platform for creating and managing content on ePaper displays. Users can customize display templates, schedule content, and control display remotely. This system offers flexibility for various applications, such as digital signage, informational displays, and personalized messages.',
    cover: EPaper,
    link: 'https://github.com/sky9154/ePaper'
  }, {
    name: 'Text2Voice',
    about: 'Use the SpeechSynthesisVoice interface of the Web Speech API, converting text to speech.',
    cover: Text2Voice,
    link: 'https://github.com/sky9154/Text2Voice'
  }, {
    name: 'Image to PDF Converter',
    about: 'Convert images to PDF files with ease !',
    cover: Image_to_PDF_Converter,
    link: 'https://github.com/sky9154/img2pdf'
  }, {
    name: 'Todo List',
    about: 'A todo list app built with React. It utilizes localStorage to allow users to store their tasks locally for easy access and tracking.',
    cover: TodoList,
    link: 'https://github.com/sky9154/TodoList'
  }, {
    name: 'QR Code Maker',
    about: 'Create a versatile QR code generator using Python\'s MyQR module, allowing users to customize QR code backgrounds.',
    cover: QRCode,
    link: 'https://github.com/sky9154/TodoList'
  }, {
    name: 'Icon Maker',
    about: 'This is a simple command-line tool for creating icons with customizable background color, border radius, and icon image.',
    cover: Icon_Maker,
    link: 'https://github.com/sky9154/IconMaker'
  }
]);
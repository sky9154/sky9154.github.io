import { FC } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { contact } from '@assets/data/contact';


const ContactButton: FC = () => {
  const handleClick = (link: string) => {
    window.open(link);
  }

  return (
    <>
      {contact.map((item) => {
        const { name, icon, link } = item;

        const ContactButton = name === 'Instagram' ? styled(Button)(() => ({
          color: item.color,
          borderRadius: '10px',
          padding: '8px 24px',
          width: '100%',
        })) : styled(Button)(() => ({
          backgroundColor: item.color,
          '&:hover': { backgroundColor: item.color },
          color: item.color,
          borderRadius: '10px',
          padding: '8px 24px',
          width: '100%',
        }));

        return (
          <Grid key={name} xs={12} sm={6} md={4}>
            <ContactButton startIcon={icon} id={name} onClick={() => handleClick(link)}>
              {name}
            </ContactButton>
          </Grid>
        );
      })}
    </>
  );
}

const Contact: FC = () => {
  return (
    <ContactButton />
  );
};

export default Contact;
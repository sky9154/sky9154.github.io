import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShareNodes } from 'react-icons/fa6';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { H2, Paragraph } from '@components/Typography';
import { useThemeModeContext } from '@context/ThemeModeContext';
import { DarkTheme, LightTheme } from '@assets/theme';
import { project, ProjectType } from '@assets/data/project';


interface Props {
  page: number;
  type: 'prev' | 'next';
}

const ProjectList: FC<Props> = ({ page, type }) => {
  const { themeMode } = useThemeModeContext();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [projectList, setProjectList] = useState<ProjectType[]>(project);

  useEffect(() => {
    const newPage = (matches) ? page : 0;
    const newProjectList = project.slice(newPage, newPage + 4);

    if (newProjectList.length !== 4 || !matches) {
      newProjectList.push({
        name: 'View More !',
        link: 'https://github.com/sky9154'
      });
    }

    setProjectList(newProjectList);
  }, [page, matches]);

  return (
    <>
      {projectList.map((item, index) => {
        return (
          <Grid item key={`project-${index}`} sm={10} md={5} sx={{
            minHeight: '40vh',
            width: '100%',
            justifyContent: 'center',
            bgcolor: (themeMode === 'dark') ? DarkTheme.InfoCardColor : LightTheme.InfoCardColor,
            backdropFilter: 'blur(8px)',
            borderRadius: 5,
            m: 2
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={item.name ? item.name : 'empty'}
                variants={{
                  hidden: { y: (type === 'next') ? -20 : 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                exit={{ y: (type === 'next') ? 20 : -20, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
              >
                <Stack
                  direction="column"
                  spacing={4}
                  width="100%"
                  height="100%"
                  py={4}
                  px={2}
                >
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: { ms: 'auto', md: '50px' }
                  }}>
                    <H2>{item.name}</H2>
                    <H2>
                      <IconButton target='_blank' href={item.link as string}>
                        <FaShareNodes style={{
                          color: (themeMode === 'dark') ? DarkTheme.FontColor : LightTheme.FontColor
                        }} />
                      </IconButton>
                    </H2>
                  </Box>
                  <Paragraph sx={{ fontSize: '16px' }}>{item.about}</Paragraph>
                </Stack>
              </motion.div>
            </AnimatePresence>
          </Grid>
        )
      })}
    </>
  );
}

export default ProjectList;
import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShareNodes } from 'react-icons/fa6';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { H1, H2 } from '@components/Typography';
import { useThemeModeContext } from '@context/ThemeModeContext';
import { DarkTheme, LightTheme } from '@assets/theme';
import { project, ProjectType } from '@assets/data/project';
import More from '@assets/images/Project/More.webp';


interface Props {
  page: number;
  type: 'prev' | 'next';
}

const ProjectList: FC<Props> = ({ page, type }) => {
  const { themeMode } = useThemeModeContext();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [projectList, setProjectList] = useState<ProjectType[]>(project);
  const [projectCardColor, setProjectCardColor] = useState<{
    color: string;
    solidColor: string;
  }>({
    color: '',
    solidColor: ''
  });

  useEffect(() => {
    const newPage = (matches) ? page : 0;
    const newProjectList = project.slice(newPage, newPage + 4);

    if (newProjectList.length !== 4 || !matches) {
      newProjectList.push({
        name: 'View More !',
        cover: More,
        link: 'https://github.com/sky9154'
      });
    }

    setProjectList(newProjectList);
  }, [page, matches]);

  useEffect(() => {
    const color = (themeMode === 'dark') ? DarkTheme.ProjectCardColor : LightTheme.ProjectCardColor;
    const solidColor = color.slice(0, -2);

    setProjectCardColor({
      color: color,
      solidColor: solidColor
    });
  }, [themeMode]);

  return (
    <>
      {projectList.map((item, index) => {
        return (
          <Grid item key={`project-${index}`} sm={10} md={5} sx={{
            minHeight: '40vh',
            width: '100%',
            justifyContent: 'center',
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
                style={{ height: '100%' }}
              >
                <Box sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  height: '100%',
                  width: '100%',
                  p: 2,
                  position: 'relative',
                  backgroundImage: `url(${item.cover})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  backdropFilter: 'blur(8px)',
                  borderImage: `fill 0 linear-gradient(${projectCardColor.color}, ${projectCardColor.solidColor})`,
                  borderRadius: 5,
                  clipPath: 'inset(0 round 20px)'
                }}>
                  <H2>{item.name}</H2>
                  <H1 sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                    height: '100%',
                    padding: '32px 24px',
                    position: 'absolute',
                    right: 0
                  }}>
                    <IconButton target='_blank' href={item.link as string}>
                      <FaShareNodes style={{
                        color: (themeMode === 'dark') ? DarkTheme.FontColor : LightTheme.FontColor
                      }} />
                    </IconButton>
                  </H1>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Grid>
        )
      })}
    </>
  );
}

export default ProjectList;